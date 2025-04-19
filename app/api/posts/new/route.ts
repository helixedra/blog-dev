import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  authorId: z.number().int(),
});

export async function POST(request: Request) {
  const { title, content, authorId } = await request.json();

  const parsedData = postSchema.safeParse({ title, content, authorId });
  if (!parsedData.success) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
        status: 'published',
        likeCount: 0,
      },
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}