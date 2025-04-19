import React from "react";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import ProfileCard from "@/components/profile/ProfileCard";
import { Follow, User } from "@/app/generated/prisma";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const { userId } = await auth();

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
  });

  const isOwner = profileUser?.userId === userId;

  return (
    <div>
      <ProfileCard
        isOwner={isOwner}
        profileUser={profileUser as User & { follows: Follow[] }}
        userPosts={userPosts}
        viewer={viewerData?.id}
      />
    </div>
  );
}
