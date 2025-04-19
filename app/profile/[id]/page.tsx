import React from "react";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import ProfileCard from "@/components/profile/ProfileCard";
import { User } from "@/app/generated/prisma";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { userId } = await auth();

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  const userPosts = await prisma.post.findMany({
    where: {
      author: {
        id: Number(id),
      },
    },
  });

  const isOwner = user?.userId === userId;

  return (
    <div>
      <ProfileCard
        isOwner={isOwner}
        user={user as User}
        userPosts={userPosts}
      />
    </div>
  );
}
