import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

const postReviewSchema = z.object({
  id: z.number().int(),
  review: z.string().min(1).max(255),
  authorId: z.string().min(1).max(255),
});

export async function PUT(request: Request) {
  // Check authentication
  const { isAdmin } = await getAuthenticatedUser();

  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get post id and review from request
  const { id, authorId, review } = await request.json();

  // Validation
  const parsedData = postReviewSchema.safeParse({
    id,
    authorId,
    review,
  });

  if (!parsedData.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    // Transaction
    const post = await prisma.$transaction(async (tx) => {
      // 1. Update post
      const updatedPost = await tx.post.update({
        where: {
          id: Number(id),
        },
        data: {
          status: review,
          updatedAt: new Date(),
        },
      });

      // 2. Create notifications
      if (updatedPost) {
        // Notification for author
        await tx.notification.create({
          data: {
            userId: authorId,
            title: `post ${review}`,
            relatedUserId: authorId,
            relatedPostId: Number(id),
            message: `your post is ${review}`,
          },
        });
      }

      // 3. Return the newly created post
      return updatedPost;
    });

    // Here post is already available after the transaction!

    // 5. Return result
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", (error as Error).message);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
