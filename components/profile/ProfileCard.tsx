"use client";
import React from "react";
import { users } from "@/app/generated/prisma";
import Image from "next/image";
import EditProfile from "./EditProfile";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export default function ProfileCard({
  user: initialUser,
  isOwner,
  userPosts,
}: {
  user: users;
  isOwner: boolean;
  userPosts: any[];
}) {
  const queryClient = useQueryClient();

  // update user data
  const { data: user } = useQuery({
    queryKey: ["user", initialUser?.user_id],
    queryFn: async () => {
      const userData = await api.get(`user/${initialUser?.user_id}`);
      if (!userData.ok) {
        throw new Error("Failed to fetch user data");
      }
      return userData.json();
    },
    // use initial data from server
    initialData: initialUser,
  });

  return (
    <div>
      <h1>{user?.username}</h1>
      <p>{user?.bio}</p>
      <Image
        width={100}
        height={100}
        src={user?.avatar_url || ""}
        alt={user?.username || ""}
      />
      <div className="flex flex-col gap-2">
        {isOwner && <EditProfile userId={user?.user_id} />}

        <div className="flex flex-col items-start gap-2">
          <div>Since {user?.created_at?.toDateString?.()}</div>
          <div>Biography: {user?.bio}</div>
          <span className="font-bold">Posts:</span>
          <span>{userPosts.length || 0}</span>
        </div>
      </div>
    </div>
  );
}
