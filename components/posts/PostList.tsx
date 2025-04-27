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
        user?.isAdmin || user?.id === post.author.id ? (
          <PostListItem
            key={post.id}
            post={post}
            user={post.author}
            isAdmin={user?.isAdmin}
            isOwner={user?.id === post.author.id}
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
