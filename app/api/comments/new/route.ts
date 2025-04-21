import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserIdentity } from "@/lib/userIdentity";
import { z } from "zod";

const commentSchema = z.object({
  comment: z.string().min(1).max(2000),
  postId: z.number(),
  userId: z.number(),
  parentId: z.number().optional(),
});

// new comment
export async function POST(request: Request) {
  const { comment, postId, userId, parentId } = await request.json();

  if (!userId || !(await getUserIdentity(userId)).authStatus) {
    return NextResponse.json(
      { error: "Error creating comment" },
      { status: 401 }
    );
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
        comment: validatedData.data.comment,
        postId: validatedData.data.postId,
        userId: validatedData.data.userId,
        parentId: validatedData.data.parentId,
      },
    });

    return NextResponse.json({ comment: newComment }, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
