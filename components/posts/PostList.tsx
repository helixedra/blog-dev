import React from "react";
import { posts, users } from "@/app/generated/prisma";
import PostListItem from "./PostListItem";

export default function PostList({
  posts,
}: {
  posts: (posts & { users: users })[];
}) {
  return (
    <div>
      {posts.map((post: posts & { users: users }) => (
        <PostListItem key={post.post_id} post={post} user={post.users} />
      ))}
    </div>
  );
}
