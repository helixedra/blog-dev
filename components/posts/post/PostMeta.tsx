import React from "react";
import Link from "next/link";
import { RiHeartFill } from "react-icons/ri";
import { User, Post } from "@/app/generated/prisma";
import { formatDate } from "@/lib/formatDate";

type PropTypes = {
  post: Post;
  user: User;
};
export default function PostMeta({ post, user }: PropTypes) {
  return (
    <div className="flex items-center text-sm text-zinc-500">
      <div className="flex items-center">
        <RiHeartFill className="-mt-0.5" />{" "}
        <span className="ml-1 font-semibold">{post.likeCount}</span>
      </div>
      <span className="mx-2">/</span>
      <span className="font-semibold">
        <Link
          href={`/profile/${user.id}`}
          className="hover:text-zinc-700 hover:underline"
        >
          {user && <>{user.username || user.fullName}</>}
        </Link>
      </span>
      <span className="mx-2">/</span>
      <span>{formatDate(post.createdAt ?? new Date()).date}</span>
    </div>
  );
}
