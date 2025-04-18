import { posts, users } from "@/app/generated/prisma";
import React from "react";
import Link from "next/link";
import { RiHeartFill } from "react-icons/ri";

export default function PostMeta({ post, user }: { post: posts; user: users }) {
  return (
    <div className="flex items-center text-sm text-zinc-500">
      <div className="flex items-center">
        <RiHeartFill className="-mt-0.5" />{" "}
        <span className="ml-1 font-semibold">{post.likeCount}</span>
      </div>
      <span className="mx-2">/</span>
      <span className="font-semibold">
        <Link
          href={`/users/${user.user_id}`}
          className="hover:text-zinc-700 hover:underline"
        >
          {user.full_name}
        </Link>
      </span>
      <span className="mx-2">/</span>
      <span>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }).format(post.created_at ?? new Date())}
      </span>
    </div>
  );
}
