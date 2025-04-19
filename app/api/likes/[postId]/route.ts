import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await params;
    const { userId } = await auth();

    const { userId: userIdFromRequest, id: idFromRequest } = await request.json();

    if (!userIdFromRequest) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    if (userId !== userIdFromRequest) {
      return NextResponse.json(
        { error: 'Wrong user request' },
        { status: 401 }
      );
    }

    const postIdInt = parseInt(postId);
    const userIdInt = parseInt(idFromRequest);

    // Check if user has already liked this post
    const existingLike = await prisma.like.findUnique({
      where: {
        postId_userId: { 
          postId: postIdInt,
          userId: userIdInt,
        },
      },
    });

    if (existingLike) {
      // If already liked, remove the like
      await prisma.like.delete({
        where: {
          postId_userId: {
            postId: postIdInt,
            userId: userIdInt,
          },
        },
      });

      // Decrement the like count
      const post = await prisma.post.update({
        where: { id: postIdInt },
        data: { likeCount: { decrement: 1 } },
        select: { likeCount: true },
      });

      return NextResponse.json({
        isLiked: false,
        likeCount: post.likeCount,
      });
    } else {
      // If not liked, add the like
      await prisma.like.create({
        data: {
          postId: postIdInt,
          userId: userIdInt,
        },
      });

      // Increment the like count
      const post = await prisma.post.update({
        where: { id: postIdInt },
        data: { likeCount: { increment: 1 } },
        select: { likeCount: true },
      });

      return NextResponse.json({
        isLiked: true,
        likeCount: post.likeCount,
      });
    }
  } catch (error) {
    console.error('Error toggling like:', error);
    return NextResponse.json(
      { error: 'Failed to toggle like' },
      { status: 500 }
    );
  }
}