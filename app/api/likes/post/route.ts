import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import { z } from "zod";

const postSchema = z.object({
  postId: z.number(),
  userId: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const { userId } = await getAuthenticatedUser();

    const { postId, userId: userIdFromRequest } = await request.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (userId !== userIdFromRequest) {
      return NextResponse.json(
        { error: "Wrong user request" },
        { status: 401 }
      );
    }

    const validation = postSchema.safeParse({ postId, userId });

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    // Check if user has already liked this post
    const existingLike = await prisma.like.findUnique({
      where: {
        postId_userId: {
          postId: postId,
          userId: userId,
        },
      },
    });

    if (existingLike) {
      // If already liked, remove the like
      await prisma.like.delete({
        where: {
          postId_userId: {
            postId: postId,
            userId: userId,
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
          postId: postId,
          userId: userId,
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
    console.error("Error toggling like:", error);
    return NextResponse.json(
      { error: "Failed to toggle like" },
      { status: 500 }
    );
  }
}
