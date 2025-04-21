import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserIdentity } from "@/lib/getUserIdentity";

export async function DELETE(request: NextRequest) {
  const { commentId, userId } = await request.json();

  const { id: userIdFromRequest } = await getUserIdentity(String(userId));

  // If userIdFromRequest is null, it means the user is not authenticated
  // Check if the user is the same as the one in the request
  if (!userIdFromRequest && userIdFromRequest !== userId) {
    return NextResponse.json({ error: "Authorization error" }, { status: 401 });
  }

  // Check if the comment exists
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: Number(commentId) },
    });
    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    // Delete all likes for this comment first
    await prisma.commentLike.deleteMany({
      where: { commentId: Number(commentId) },
    });

    await prisma.comment.delete({
      where: { id: Number(commentId) },
    });
  } catch (error) {
    console.error("Error deleting comment:", (error as any).message || error);
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Comment deleted successfully" });
}
