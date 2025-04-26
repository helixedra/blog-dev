import React from "react";
import { z } from "zod";
import prisma from "@/lib/prisma";
import Markdown from "react-markdown";
import Link from "next/link";
import Like from "@/components/posts/post/Like";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import { formatDate } from "@/lib/formatDate";
import CommentForm from "@/components/posts/post/CommentForm";
import Comments from "@/components/posts/post/Comments";
import { PostStatus } from "@/components/posts/PostListItem";
import { PostStatusType } from "@/components/posts/PostListItem";
import { AdminApprove } from "@/components/posts/post/AdminApprove";
import EditPostButton from "@/components/posts/post/EditPostButton";
import Tag from "@/components/posts/post/Tag";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      metaTitle: true,
      metaDescription: true,
    },
  });
  return {
    title: post?.metaTitle + " - Dev Blog",
    description: post?.metaDescription,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: postId } = await params;
  const validation = z.string().safeParse(postId.trim());
  if (!validation.success) {
    return <div>Invalid id</div>;
  }

  const {
    userId,
    user: { isAdmin },
  } = await getAuthenticatedUser();

  let post;
  try {
    post = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
      include: {
        author: true,
        likes: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching post:", (error as Error).message);
    return <div>Failed to fetch post</div>;
  }

  const isLiked =
    post?.likes?.some((like) => String(like.userId) === String(userId)) ??
    false;

  if (!post) {
    return <div>Post not found</div>;
  }

  const changeStatus = async (formData: FormData): Promise<void> => {
    "use server";

    try {
      await prisma.post.update({
        where: {
          id: Number(formData.get("postId")),
        },
        data: {
          status: formData.get("status") as string,
        },
      });
    } catch (error) {
      console.error("Error updating post status:", (error as Error).message);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-1 items-start">
        {(isAdmin || post.author.id === userId) && (
          <PostStatus status={post.status as PostStatusType} />
        )}
        <h1 className="flex items-center leading-tight tracking-tight">
          {post.title}
        </h1>
      </div>

      <div className="flex items-center text-sm mb-4 mt-1  text-zinc-500">
        <Link
          href={`/profile/${post.author.username}`}
          className=" hover:underline"
        >
          {post.author.name || ""}
        </Link>
        <span className="mx-2">/</span>
        <span>{formatDate(post.createdAt ?? new Date()).dateTime}</span>
      </div>

      <div className="mb-8">
        <Markdown>{post.content}</Markdown>
      </div>

      <div className="mb-8 flex gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag.tag.id} tag={tag.tag.name} />
        ))}
      </div>

      <div className="flex items-center gap-2">
        {post.status === "published" && (
          <Like
            postId={post.id}
            likes={post.likeCount}
            liked={isLiked}
            userId={userId || null}
          />
        )}
        {userId && post.status === "draft" && (
          <EditPostButton postId={post.id} userId={userId} />
        )}
        {isAdmin && post.status === "review" && (
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-zinc-500 mr-4">
              This post is under review
            </span>
            <AdminApprove postId={post.id} action={changeStatus} />
          </div>
        )}
      </div>
      <div className="mt-4 mb-8">
        {userId && post.status === "published" && (
          <CommentForm postId={post.id} userId={userId} />
        )}
      </div>
      {post.status === "published" && (
        <Comments postId={post.id} userId={userId} />
      )}
    </div>
  );
}
