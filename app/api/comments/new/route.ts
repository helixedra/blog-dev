import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserIdentity } from "@/lib/getUserIdentity";
import { z } from "zod";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

const commentSchema = z.object({
  comment: z.string().min(1).max(2000),
  postId: z.number(),
  userId: z.string(),
  parentId: z.number().optional(),
});

// new comment
export async function POST(request: Request) {
  const { userId: authenticatedUserId } = await getAuthenticatedUser();

  const { comment, postId, userId, parentId, postAuthorId } =
    await request.json();

  if (!authenticatedUserId || authenticatedUserId !== userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const validatedData = commentSchema.safeParse({
    comment,
    postId,
    userId,
    parentId,
  });

  if (!validatedData.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    const newComment = await prisma.comment.create({
      data: {
        comment,
        postId,
        userId,
        parentId,
      },
    });

    // Add notification for post owner
    // if its replay comment
    if (parentId) {
      await prisma.notification.create({
        data: {
          userId: postAuthorId,
          relatedUserId: userId,
          relatedPostId: postId,
          relatedCommentId: newComment.id,
          title: "comment_replied",
          message: `Replied to your comment`,
        },
      });
    }
    //if its new comment
    if (!parentId) {
      await prisma.notification.create({
        data: {
          userId: postAuthorId,
          relatedUserId: userId,
          relatedPostId: postId,
          title: "comment",
          message: `A new comment has been added to your post`,
        },
      });
    }

    return NextResponse.json({ comment: newComment }, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
