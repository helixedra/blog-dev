import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  authorId: z.number().int(),
  tags: z.string().optional(),
});

export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  status: "draft" | "review" | "published" | "rejected";
  likeCount: number;
  metaTitle: string;
  metaDescription: string;
  draft: boolean;
};

export async function POST(request: Request) {
  const { title, content, authorId, tags, draft } = await request.json();

  const parsedData = postSchema.safeParse({ title, content, authorId, tags, draft });
  if (!parsedData.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const prepareTags = tags ? tags.split(",").map((tag: string) => tag.trim()) : [];

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
        status: draft ? "draft" : "review",
        metaTitle: title,
        metaDescription: content.slice(0, 150),
        likeCount: 0,
      } as Post,
    });

    if (prepareTags.length > 0) {

      prepareTags.forEach(async (tag: string) => {
        const existingTag = await prisma.tag.findFirst({
          where: {
            name: {
              equals: tag,
              mode: 'insensitive',
            },
          },
        });
        if (!existingTag) {
          const newTag = await prisma.tag.create({
            data: {
              name: tag,
              slug: tag.toLowerCase().replace(/\s+/g, '-'),
            },
          });
          await prisma.postTag.create({
            data: {
              postId: post.id,
              tagId: newTag.id,
            },
          });
        }
        
      })

    }



    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", (error as Error).message);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
