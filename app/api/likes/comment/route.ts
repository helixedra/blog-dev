import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import { z } from "zod";

const commentSchema = z.object({
  commentId: z.number(),
  userId: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    // get userId from request
    const {
      userId: userIdFromRequest,
      commentId,
      postAuthorId,
      postId,
    } = await request.json();

    // get userId from Clerk by  passing userId from request
    // checking if the user is the same as the one in the request
    const { userId } = await getAuthenticatedUser();

    if (!userIdFromRequest) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (userId !== userIdFromRequest) {
      return NextResponse.json(
        { error: "Wrong user request" },
        { status: 401 }
      );
    }

    const validation = commentSchema.safeParse({ commentId, userId });

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    // Check if user has already liked this post
    const existingLike = await prisma.commentLike.findUnique({
      where: {
        commentId_userId: {
          commentId: commentId,
          userId: userId!,
        },
      },
    });

    if (existingLike) {
      // If already liked, remove the like
      await prisma.commentLike.delete({
        where: {
          commentId_userId: {
            commentId: commentId,
            userId: userId!,
          },
        },
      });
      await prisma.notification.deleteMany({
        where: {
          relatedCommentId: commentId!,
          userId: postAuthorId!,
        },
      });

      // Decrement the like count
      const comment = await prisma.comment.update({
        where: { id: Number(commentId) },
        data: { likeCount: { decrement: 1 } },
        select: { likeCount: true },
      });

      return NextResponse.json({
        isLiked: false,
        likeCount: comment.likeCount,
      });
    } else {
      // If not liked, add the like
      await prisma.commentLike.create({
        data: {
          commentId: commentId,
          userId: userId!,
        },
      });
      await prisma.notification.create({
        data: {
          relatedCommentId: Number(commentId!),
          relatedUserId: String(userId!),
          userId: String(postAuthorId!),
          relatedPostId: Number(postId!),
          title: "comment_liked",
          message: "You have received a new like on your comment.",
        },
      });

      // Increment the like count
      const comment = await prisma.comment.update({
        where: { id: Number(commentId) },
        data: { likeCount: { increment: 1 } },
        select: { likeCount: true },
      });

      return NextResponse.json({
        isLiked: true,
        likeCount: comment.likeCount,
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
