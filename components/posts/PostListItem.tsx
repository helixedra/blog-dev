import React from "react";
import Link from "next/link";
import { User, Post } from "@/app/generated/prisma";
import PostMeta from "./post/PostMeta";

type PropTypes = {
  post: Post;
  user: User;
};

export default function PostListItem({ post, user }: PropTypes) {
  return (
    <div className="w-fit my-4">
      <Link
        href={`/posts/${post.id}`}
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
