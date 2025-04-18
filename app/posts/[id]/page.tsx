import React from "react";
import { z } from "zod";
import prisma from "@/lib/prisma";
import Markdown from "react-markdown";
import Link from "next/link";
import Like from "@/components/posts/post/Like";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pageId = z.number().int().safeParse(Number(id.trim()));

  const userId = 1;

  if (!pageId.success) {
    return <div>Invalid id</div>;
  }

  const post = await prisma.posts.findUnique({
    where: {
      post_id: pageId.data,
    },
    include: {
      users: true,
      likes: true,
    },
  });

  const isLiked = post?.likes?.some((like) => like.user_id === userId) ?? false;

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <div className="flex items-center text-sm py-4">
        <Link href="/" className="hover:text-zinc-700 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/posts" className="hover:text-zinc-700 hover:underline">
          Posts
        </Link>
        <span className="mx-2">/</span>
        <span>{post.title}</span>
      </div>
      <h1 className="mb-2">{post.title}</h1>

      <div className="flex items-center text-sm py-4">
        <Link
          href={`/users/${post.users.user_id}`}
          className="hover:text-zinc-700 hover:underline"
        >
          {post.users.full_name}
        </Link>
        <span className="mx-2">/</span>
        <span>{post.created_at?.toDateString()}</span>
      </div>

      <div className="mb-8">
        <Markdown>{post.content}</Markdown>
      </div>
      <div>
        <Like
          postId={post.post_id}
          likes={post.likeCount}
          liked={isLiked}
          userId={userId}
        />
      </div>
    </div>
  );
}
