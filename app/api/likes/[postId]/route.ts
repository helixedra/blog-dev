import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {

  try {
    const { userId } = await request.json();
    const postId = parseInt((await params).postId);

    // Check if user has already liked this post
    const existingLike = await prisma.like.findUnique({
      where: {
        postId_userId: {
          postId,
          userId,
        },
      },
    });

    if (existingLike) {
      // If already liked, remove the like
      await prisma.like.delete({
        where: {
          postId_userId: {
            postId,
            userId,
          },
        },
      });

      // Decrement the like count
      const post = await prisma.post.update({
        where: { id: postId },
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
          postId,
          userId,
        },
      });

      // Increment the like count
      const post = await prisma.post.update({
        where: { id: postId },
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