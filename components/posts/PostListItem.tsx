import React from "react";
import Link from "next/link";
import { posts, users } from "@/app/generated/prisma";
import PostMeta from "./post/PostMeta";

export default function PostListItem({
  post,
  user,
}: {
  post: posts;
  user: users;
}) {
  return (
    <div className="w-fit my-4">
      <Link
        href={`/posts/${post.post_id}`}
        className="hover:text-zinc-700 hover:before:content-['#'] before:absolute before:-ml-4 "
      >
        <>
          <h2 className="mb-2">{post.title}</h2>
          {/* <div className="mb-2 text-xl">{post.content}</div> */}
        </>
      </Link>

      <PostMeta post={post} user={user} />
    </div>
  );
}
