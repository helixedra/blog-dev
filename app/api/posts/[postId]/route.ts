// app/api/posts/[postId]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;
  const post = await prisma.posts.findUnique({
    where: { post_id: parseInt(postId) },
    include: {
      likes: true,
    },
  });

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}