import React from "react";
import Link from "next/link";
import { User, Post } from "@/app/generated/prisma";
import PostMeta from "./post/PostMeta";

type PropTypes = {
  post: Post & { _count: { comments: number } };
  user: User;
  isAdmin?: boolean | undefined | null;
};

export type PostStatusType = "review" | "published" | "rejected";

export default async function PostListItem({ post, user, isAdmin }: PropTypes) {
  return (
    <div className="w-fit my-4">
      <Link
        href={`/posts/${post.id}`}
        className="hover:text-zinc-700 hover:before:content-['#'] before:absolute before:-ml-4 "
      >
        <>
          <h2 className="mb-2 flex items-center gap-3">
            {post.title}{" "}
            {isAdmin && post.status && (
              <PostStatus status={post.status as PostStatusType} />
            )}
          </h2>
          {/* <div className="mb-2 text-xl">{post.content}</div> */}
        </>
      </Link>

      <PostMeta post={post} user={user} />
    </div>
  );
}

export function PostStatus({ status }: { status: PostStatusType }) {
  return (
    <div
      className={`text-xs font-semibold px-2 py-1 rounded capitalize ${
        status === "published"
          ? "text-green-700 bg-green-100"
          : status === "review"
          ? "text-yellow-600 bg-amber-100"
          : "text-red-700 bg-red-100"
      }`}
    >
      {status}
    </div>
  );
}
