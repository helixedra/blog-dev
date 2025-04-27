import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { TagsUpdater } from "./tagsUpdater";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import { Post } from "@/generated/prisma";

const postSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  userId: z.string(),
  tags: z.string().optional(),
  draft: z.boolean().optional(),
});

const postSchemaWithId = z.object({ id: z.number().int() });

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", (error as Error).message);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  // Check authentication
  const { userId } = await getAuthenticatedUser();
  const { title, content, tags, draft } = await request.json();

  // Validation
  const parsedData = postSchema.safeParse({
    id: 0,
    title,
    content,
    userId: userId,
    tags,
    draft,
  });

  if (!parsedData.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    // Transaction
    const post = await prisma.$transaction(async (tx) => {
      // 1. Create post
      const newPost = await tx.post.create({
        data: {
          title,
          content,
          userId: userId!,
          status: draft ? "draft" : "review",
          metaTitle: title,
          metaDescription: content.slice(0, 150),
          likeCount: 0,
        },
      });

      // 2. If post is not draft, create notifications
      if (!draft) {
        // Notification for author
        await tx.notification.create({
          data: {
            userId: userId!,
            title: "post_sent_for_review",
            relatedUserId: userId!,
            relatedPostId: newPost.id,
            message: "your post is sent for review",
          },
        });

        // Notifications for admins
        const admins = await tx.user.findMany({
          where: { isAdmin: true },
          select: { id: true },
        });

        if (admins.length > 0) {
          const notifications = admins.map((admin) => ({
            userId: admin.id,
            title: "new_post_on_review",
            relatedUserId: userId,
            relatedPostId: newPost.id,
            message: "sent a new post for review",
          }));

          await tx.notification.createMany({
            data: notifications,
          });
        }
      }

      // 3. Return the newly created post
      return newPost;
    });

    // Here post is already available after the transaction!

    // 4. Update tags (outside transaction)
    await TagsUpdater(tags, post.id);

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

export async function PUT(request: Request) {
  //Check if user is logged in
  const { userId } = await getAuthenticatedUser();

  const { id, title, content, tags, draft } = await request.json();

  const parsedData = postSchema.safeParse({
    id,
    title,
    content,
    userId: userId,
    tags,
    draft,
  });

  if (!parsedData.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    const post = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
        userId: String(userId),
        status: draft ? "draft" : "review",
        metaTitle: title,
        metaDescription: content.slice(0, 150),
        likeCount: 0,
      },
    });

    // Update tags
    await TagsUpdater(tags, Number(id));

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", (error as Error).message);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  //Check if user is logged in
  const { userId } = await getAuthenticatedUser();

  // Get post id from request
  const { id } = await request.json();

  const postId = Number(id);

  const parsedData = postSchemaWithId.safeParse({ id: postId });

  // Check if post id is valid
  if (!parsedData.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  // Get post from database
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  // Check if post exists
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  // Check if user is authorized to delete post
  if (post.userId !== String(userId)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Delete post
  try {
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting post:", (error as Error).message);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
