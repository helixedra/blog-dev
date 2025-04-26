import React from "react";
import prisma from "@/lib/prisma";
import ProfileCard from "@/components/profile/ProfileCard";
import PostListItem from "@/components/posts/PostListItem";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import { Follow, Post, User } from "@/generated/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      username: true,
      name: true,
    },
  });
  return {
    title: user?.name || user?.username + " - Dev Blog",
    description: `Profile of ${user?.username}`,
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const { userId } = await getAuthenticatedUser();

  // Get viewer data
  let viewer: User | null | undefined;
  try {
    if (!userId) {
      viewer = null;
    } else {
      viewer = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
    }
  } catch (error) {
    console.error((error as Error).message);
  }

  // Get user profile data
  let profile;
  try {
    profile = await prisma.user.findUnique({
      where: { username: username },
      include: { follows: true },
    });
  } catch (error) {
    console.error((error as Error).message);
  }

  if (!profile) {
    return notFound();
  }

  let profilePosts: (Post & { author: User; _count: { comments: number } })[] =
    [];
  try {
    profilePosts = await prisma.post.findMany({
      where: {
        author: {
          id: profile.id,
        },
      },
      include: {
        author: true,
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
  } catch (error) {
    console.error((error as Error).message);
  }

  const isOwner = profile.id === userId;

  return (
    <div>
      <ProfileCard
        isOwner={isOwner}
        profileUser={profile as User & { follows: Follow[] }}
        viewer={viewer?.id || null}
      />
      <div className="flex flex-col items-start gap-2 border-t border-zinc-200 pt-4 mt-8">
        {profilePosts.length === 0 && (
          <div className="p-12 text-zinc-400 text-center w-full">
            No posts yet
          </div>
        )}
        {profilePosts?.reverse().map((post) => (
          <PostListItem
            key={post.id}
            post={post}
            user={profile as User}
            isOwner={Boolean(isOwner)}
            isAdmin={Boolean(viewer?.isAdmin)}
          />
        ))}
      </div>
    </div>
  );
}
