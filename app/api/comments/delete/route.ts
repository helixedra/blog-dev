import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

export async function DELETE(request: NextRequest) {
  const { userId: authenticatedUserId } = await getAuthenticatedUser();
  const { commentId, userId } = await request.json();

  // Check if the user is the same as the one in the request
  if (!authenticatedUserId || authenticatedUserId !== userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
