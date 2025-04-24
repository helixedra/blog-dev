import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import PostList from "@/components/posts/PostList";
import { User, Post } from "@/app/generated/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "A place for developers to share their knowledge",
};

export interface UserData {
  id: number;
  userId: string;
  userImage: string | null;
  username: string | null;
  email: string | null;
  createdAt: Date;
  updatedAt: Date;
  is_active: boolean;
  is_admin: boolean;
  avatar_url: string | null;
  bio: string | null;
  password_hash: string | null;
  full_name: string | null;
}
export default async function Home() {
  const { userId } = await auth();

  const user = userId
    ? await prisma.user.findFirst({
        where: {
          userId,
          isActive: true,
        },
      })
    : null;

  const userData = {
    userId,
    fullName: user?.fullName,
    username: user?.username,
    email: user?.email,
  };

  const posts = await prisma.post.findMany({
    include: {
      author: true,
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });

  return (
    <div className="flex flex-col">
      {posts.length > 0 ? (
        <PostList
          posts={
            posts as (Post & { author: User; _count: { comments: number } })[]
          }
        />
      ) : (
        <div className="text-zinc-400 text-center py-8">No posts found</div>
      )}
    </div>
  );
}
