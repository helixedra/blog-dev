import PostList from "@/components/posts/PostList";
import { Metadata } from "next";
import { api } from "@/lib/api";
import { Post, User } from "@/generated/prisma";
import { getUser } from "@/lib/getUser";

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default async function Home() {
  const { user } = await getUser();

  const { posts } = await api.get("posts").then((res) => res.json());

  return (
    <div className="flex flex-col">
      {posts.length > 0 ? (
        <PostList
          posts={
            posts as (Post & { author: User; _count: { comments: number } })[]
          }
          user={user}
        />
      ) : (
        <div className="text-zinc-400 text-center py-8">No posts found</div>
      )}
    </div>
  );
}
