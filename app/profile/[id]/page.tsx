import React from "react";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import ProfileCard from "@/components/profile/ProfileCard";
import { users } from "@/app/generated/prisma";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { userId } = await auth();

  const user = await prisma.users.findUnique({
    where: {
      id: Number(id),
    },
  });

  const userPosts = await prisma.posts.findMany({
    where: {
      users: {
        id: Number(id),
      },
    },
  });

  const isOwner = user?.user_id === userId;

  return (
    <div>
      <ProfileCard
        isOwner={isOwner}
        user={user as users}
        userPosts={userPosts}
      />
    </div>
  );
}
