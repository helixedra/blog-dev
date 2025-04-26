import React from "react";
import Link from "next/link";
import { User, Post } from "@/generated/prisma";
import PostMeta from "./post/PostMeta";

type PropTypes = {
  post: Post & { _count: { comments: number } };
  user: User;
  isAdmin?: boolean | undefined | null;
  userIdentityId?: number;
  isOwner?: boolean | undefined | null;
};

export type PostStatusType = "draft" | "review" | "published" | "rejected";

export default async function PostListItem({
  post,
  user,
  isAdmin,
  isOwner,
}: PropTypes) {
  return (
    <div className="w-fit my-4">
      <Link
        href={`/posts/${post.id}`}
        className="hover:text-zinc-700 hover:before:content-['#'] before:absolute before:-ml-4 "
      >
        <>
          <div className="flex flex-col items-start">
            <h2 className="mb-2 flex items-center gap-3">{post.title}</h2>
          </div>
          {/* <div className="mb-2 text-xl">{post.content}</div> */}
        </>
      </Link>
      <div className="flex items-start gap-2">
        <PostMeta post={post} user={user}>
          {(isAdmin || isOwner) && post.status && (
            <PostStatus status={post.status as PostStatusType} />
          )}
        </PostMeta>
      </div>
    </div>
  );
}

export function PostStatus({ status }: { status: PostStatusType }) {
  return (
    <span
      className={`text-[0.65rem] inline-block mx-2font-semibold px-1 py- rounded capitalize ${
        status === "published"
          ? "text-green-700 bg-green-100"
          : status === "review"
          ? "text-yellow-600 bg-amber-100"
          : status === "draft"
          ? "text-blue-600 bg-blue-100"
          : "text-red-700 bg-red-100"
      }`}
    >
      {status}
    </span>
  );
}
