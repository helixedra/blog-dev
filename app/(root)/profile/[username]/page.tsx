import React from "react";
import prisma from "@/lib/prisma";
import ProfileCard from "@/components/profile/ProfileCard";
import PostListItem from "@/components/posts/PostListItem";
import { auth } from "@clerk/nextjs/server";
import { Follow, User } from "@/app/generated/prisma";
import { getUserIdentity } from "@/lib/getUserIdentity";
import { notFound } from "next/navigation";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const { userId } = await auth();
  const { id: userIdentityId, isAdmin } = await getUserIdentity(userId ?? "");

  const viewerData = userId
    ? await prisma.user.findUnique({
        where: {
          userId: userId,
        },
      })
    : null;

  const userProfileId = (
    await prisma.user.findUnique({
      where: { username: username },
      select: { id: true },
    })
  )?.id;

  if (!userProfileId) {
    return notFound();
  }

  const profileUser = await prisma.user.findUnique({
    where: { id: userProfileId },
    include: { follows: true },
  });

  const follows = profileUser?.follows[0];
  const followers = follows?.userFollowers || [];
  const following = follows?.userFollows || [];

  const userPosts = await prisma.post.findMany({
    where: {
      author: {
        userId: profileUser?.userId,
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

  const isOwner = profileUser?.userId === userId;

  return (
    <div>
      <ProfileCard
        isOwner={isOwner}
        profileUser={profileUser as User & { follows: Follow[] }}
        viewer={viewerData?.id}
      />
      <div className="flex flex-col items-start gap-2 border-t border-zinc-200 pt-4 mt-8">
        {userPosts.length === 0 && (
          <div className="p-12 text-zinc-400 text-center w-full">
            No posts yet
          </div>
        )}
        {userPosts.reverse().map((post) => (
          <PostListItem
            key={post.id}
            post={post}
            user={profileUser as User}
            isOwner={isOwner}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </div>
  );
}
