import React from "react";
import Link from "next/link";
import { RiHeartFill } from "react-icons/ri";
import { users, posts } from "@/app/generated/prisma";
import { formatDate } from "@/lib/formatDate";

type PropTypes = {
  post: posts;
  user: users;
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
          {user && <>{user.username || user.full_name}</>}
        </Link>
      </span>
      <span className="mx-2">/</span>
      <span>{formatDate(post.created_at ?? new Date()).date}</span>
    </div>
  );
}
