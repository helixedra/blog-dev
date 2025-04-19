import React from "react";
import { Post, User } from "@/app/generated/prisma";
import PostListItem from "./PostListItem";

export default function PostList({
  posts,
}: {
  posts: (Post & { author: User })[];
}) {
  return (
    <div>
      {posts.map((post: Post & { author: User }) => (
        <PostListItem key={post.id} post={post} user={post.author} />
      ))}
    </div>
  );
}
