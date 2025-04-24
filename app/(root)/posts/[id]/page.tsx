import React from "react";
import { z } from "zod";
import prisma from "@/lib/prisma";
import Markdown from "react-markdown";
import Link from "next/link";
import Like from "@/components/posts/post/Like";
import { auth } from "@clerk/nextjs/server";
// import { RiArrowLeftLine } from "react-icons/ri";
import { formatDate } from "@/lib/formatDate";
import CommentForm from "@/components/posts/post/CommentForm";
import Comments from "@/components/posts/post/Comments";
import { getUserIdentity } from "@/lib/getUserIdentity";
import { PostStatus } from "@/components/posts/PostListItem";
import { PostStatusType } from "@/components/posts/PostListItem";
import { AdminApprove } from "@/components/posts/post/AdminApprove";
import EditPostButton from "@/components/posts/post/EditPostButton";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pageId = z.number().int().safeParse(Number(id.trim()));
  const { userId } = await auth();

  const { id: userIdentityId, isAdmin } = await getUserIdentity(
    String(userId ?? "")
  );

  if (!pageId.success) {
    return <div>Invalid id</div>;
  }

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
    post?.likes?.some(
      (like) => String(like.userId) === String(userIdentityId)
    ) ?? false;

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
      <div className="flex gap-2 items-center">
        <h1 className="flex items-center">{post.title}</h1>
        {(isAdmin || post.authorId === userIdentityId) && (
          <PostStatus status={post.status as PostStatusType} />
        )}
      </div>

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
      <div className="flex items-center gap-2">
        {post.status === "published" && (
          <Like
            postId={post.id}
            likes={post.likeCount}
            liked={isLiked}
            userId={{ userId: userId ?? "", id: userIdentityId ?? 0 }}
          />
        )}
        {userIdentityId && post.status === "draft" && (
          <EditPostButton postId={post.id} userId={userIdentityId ?? 0} />
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
        {userIdentityId && post.status === "published" && (
          <CommentForm postId={post.id} userId={userIdentityId ?? 0} />
        )}
      </div>
      {post.status === "published" && (
        <Comments postId={post.id} userId={userIdentityId ?? 0} />
      )}
    </div>
  );
}
