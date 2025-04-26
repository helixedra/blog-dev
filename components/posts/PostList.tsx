import React from "react";
import { Post, User } from "@/generated/prisma";
import PostListItem from "./PostListItem";

export default async function PostList({
  posts,
  user,
}: {
  posts: (Post & { author: User; _count: { comments: number } })[];
  user: User | null;
}) {
  return (
    <div>
      {posts.map((post) =>
        user?.isAdmin ? (
          <PostListItem
            key={post.id}
            post={post}
            user={post.author}
            isAdmin={user?.isAdmin}
          />
        ) : (
          post.status === "published" && (
            <PostListItem key={post.id} post={post} user={post.author} />
          )
        )
      )}
    </div>
  );
}
