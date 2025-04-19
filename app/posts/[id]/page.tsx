import React from "react";
import { z } from "zod";
import prisma from "@/lib/prisma";
import Markdown from "react-markdown";
import Link from "next/link";
import Like from "@/components/posts/post/Like";
import { auth } from "@clerk/nextjs/server";
import { RiArrowLeftLine } from "react-icons/ri";
import { formatDate } from "@/lib/formatDate";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pageId = z.number().int().safeParse(Number(id.trim()));
  const { userId } = await auth();

  if (!pageId.success) {
    return <div>Invalid id</div>;
  }
  // Find user id (userId in Clerk is different from id in Prisma)
  const registredUserId = await prisma.user.findUnique({
    where: {
      userId: userId ?? "",
    },
    select: {
      id: true,
    },
  });

  const userIdInt = registredUserId?.id ?? null;

  const post = await prisma.post.findUnique({
    where: {
      id: pageId.data,
    },
    include: {
      author: true,
      likes: true,
    },
  });

  const isLiked =
    post?.likes?.some((like) => String(like.userId) === String(userIdInt)) ??
    false;

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <div className="flex items-center text-sm py-4">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-zinc-700 hover:underline"
        >
          <RiArrowLeftLine size={16} /> Posts
        </Link>
      </div>
      <h1>{post.title}</h1>

      <div className="flex items-center text-sm mb-4 mt-1  text-zinc-500">
        <Link
          href={`/profile/${post.author.username}`}
          className=" hover:underline"
        >
          {post.author.fullName}
        </Link>
        <span className="mx-2">/</span>
        <span>{formatDate(post.createdAt ?? new Date()).dateTime}</span>
      </div>

      <div className="mb-8">
        <Markdown>{post.content}</Markdown>
      </div>
      <div>
        <Like
          postId={post.id}
          likes={post.likeCount}
          liked={isLiked}
          userId={{ userId: userId ?? "", id: userIdInt ?? 0 }}
        />
      </div>
    </div>
  );
}
