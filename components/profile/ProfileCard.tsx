"use client";
import React from "react";
import { Post, User } from "@/app/generated/prisma";
import Image from "next/image";
import EditProfile from "./EditProfile";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { formatDate } from "@/lib/formatDate";
import Markdown from "react-markdown";
import PostListItem from "@/components/posts/PostListItem";

export default function ProfileCard({
  user: initialUser,
  isOwner,
  userPosts,
}: {
  user: User;
  isOwner: boolean;
  userPosts: any[];
}) {
  const queryClient = useQueryClient();

  // update user data
  const { data: user } = useQuery({
    queryKey: ["user", initialUser?.userId],
    queryFn: async () => {
      const userData = await api.get(`user/${initialUser?.userId}`);
      if (!userData.ok) {
        throw new Error("Failed to fetch user data");
      }
      return userData.json();
    },
    // use initial data from server
    initialData: initialUser,
  });

  const date = new Date(user?.created_at);
  return (
    <div>
      <div className="relative h-38 rounded">
        {/* <div className="bg-zinc-100 h-24 w-full rounded"></div> */}
        <div className="flex items-end">
          <Image
            width={120}
            height={120}
            src={user?.avatar_url || ""}
            alt={user?.username || ""}
            className="rounded "
          />
          <div className="px-6 w-full">
            <div className="flex justify-between mb-2 border-b border-zinc-200 pb-4">
              <div className="text-2xl font-semibold truncate">
                {user?.username}
              </div>
              {isOwner && <EditProfile userId={user?.user_id} />}
            </div>
            <div className="flex gap-12 w-full">
              <div>
                <div className="text-2xl">{user?.followers || 0}</div>
                <div className="text-sm text-zinc-400">Followers</div>
              </div>
              <div>
                <div className="text-2xl">{user?.following || 0}</div>
                <div className="text-sm text-zinc-400">Following</div>
              </div>
              <div className="ml-auto flex flex-col justify-end text-end text-zinc-400">
                <div className="text-sm">Joined</div>
                <div className="text-sm">{formatDate(date).date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start gap-2">
          {user?.bio && <Markdown>{user?.bio}</Markdown>}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 border-t border-zinc-200 pt-4 mt-8">
        {userPosts.map((post) => (
          <PostListItem key={post.id} post={post} user={user as User} />
        ))}
      </div>
    </div>
  );
}
