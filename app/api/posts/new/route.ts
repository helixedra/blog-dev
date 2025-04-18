import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  author_id: z.number().int(),
});

export async function POST(request: Request) {
  const { title, content, author_id } = await request.json();

  const parsedData = postSchema.safeParse({ title, content, author_id });
  if (!parsedData.success) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  try {
    const post = await prisma.posts.create({
      data: {
        title,
        content,
        author_id,
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