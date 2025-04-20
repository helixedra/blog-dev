import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserIdentity } from "@/lib/userIdentity";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ commentId: string }> }
) {
  try {
    // get commentId from params
    const { commentId } = await params;

    // get userId from request
    const { userId: userIdFromRequest } = await request.json();

    // get userId from Clerk by  passing userId from request
    // checking if the user is the same as the one in the request
    const { id: userId } = await getUserIdentity(userIdFromRequest);

    if (!userIdFromRequest) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (userId !== userIdFromRequest) {
      return NextResponse.json(
        { error: "Wrong user request" },
        { status: 401 }
      );
    }

    // Check if user has already liked this post
    const existingLike = await prisma.commentLike.findUnique({
      where: {
        commentId_userId: {
          commentId: Number(commentId),
          userId: Number(userId),
        },
      },
    });

    if (existingLike) {
      // If already liked, remove the like
      await prisma.commentLike.delete({
        where: {
          commentId_userId: {
            commentId: Number(commentId),
            userId: Number(userId),
          },
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
          commentId: Number(commentId),
          userId: Number(userId),
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
