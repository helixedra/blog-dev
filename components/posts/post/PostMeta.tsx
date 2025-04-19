import React from "react";
import Link from "next/link";
import {
  RiHeartLine,
  RiChat1Line,
  RiHeartFill,
  RiChat1Fill,
} from "react-icons/ri";
import { User, Post } from "@/app/generated/prisma";
import { formatDate } from "@/lib/formatDate";

type PropTypes = {
  post: Post & { _count: { comments: number } };
  user: User;
};
export default function PostMeta({ post, user }: PropTypes) {
  return (
    <div className="flex flex-col items-start text-xs text-zinc-500">
      <div className="text-xs">
        <span className="font-semibold">
          <Link
            href={`/profile/${user.username}`}
            className="hover:text-zinc-700 hover:underline"
          >
            {user && <>{user.fullName || user.username}</>}
          </Link>
        </span>
        <span className="mx-2">/</span>
        <span>{formatDate(post.createdAt ?? new Date()).dateTime}</span>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center">
          <RiHeartLine className="-mt-0.5" />
          <span className="ml-1 font-semibold">{post.likeCount}</span>
        </div>
        <div className="flex items-center">
          <RiChat1Line className="" />
          <span className="ml-1 font-semibold">{post._count.comments}</span>
        </div>
      </div>
    </div>
  );
}
