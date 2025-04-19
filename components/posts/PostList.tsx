import React from "react";
import { Post, User } from "@/app/generated/prisma";
import PostListItem from "./PostListItem";

export default function PostList({
  posts,
}: {
  posts: (Post & { author: User; _count: { comments: number } })[];
}) {
  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} user={post.author} />
      ))}
    </div>
  );
}
