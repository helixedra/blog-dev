import React from "react";
import { Post, User } from "@/app/generated/prisma";
import PostListItem from "./PostListItem";
import { auth } from "@clerk/nextjs/server";
import { getUserIdentity } from "@/lib/getUserIdentity";

export default async function PostList({
  posts,
}: {
  posts: (Post & { author: User; _count: { comments: number } })[];
}) {
  // Get user id from clerk
  const { userId } = await auth();
  const { isAdmin } = await getUserIdentity(String(userId));

  return (
    <div>
      {posts.map((post) =>
        isAdmin ? (
          <PostListItem
            key={post.id}
            post={post}
            user={post.author}
            isAdmin={isAdmin}
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
