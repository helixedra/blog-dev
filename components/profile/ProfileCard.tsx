"use client";
import React from "react";
import { Follow, User } from "@/app/generated/prisma";
import Image from "next/image";
import EditProfile from "./EditProfile";
import { formatDate } from "@/lib/formatDate";
import Markdown from "react-markdown";
import PostListItem from "@/components/posts/PostListItem";
import FollowProfile from "./FollowProfile";

export default function ProfileCard({
  profileUser,
  isOwner,
  userPosts,
  viewer,
}: {
  profileUser: User & { follows: Follow[] };
  isOwner: boolean;
  userPosts: any[];
  viewer: number | undefined;
}) {
  const isFollowing =
    !!viewer && profileUser?.follows?.[0]?.userFollowers.includes(viewer);

  const [isFollowingState, setIsFollowingState] = React.useState(isFollowing);
  const [followersCountState, setFollowersCountState] = React.useState(
    profileUser?.follows?.[0]?.userFollowers.length || 0
  );

  const date = new Date(profileUser.createdAt!);

  return (
    <div>
      <div className="relative h-38 rounded">
        <div className="flex items-end">
          <Image
            width={120}
            height={120}
            src={profileUser?.avatarUrl || ""}
            alt={profileUser?.fullName || ""}
            className="rounded "
          />
          <div className="px-6 w-full">
            <div className="flex justify-between mb-2 border-b border-zinc-200 pb-4">
              <div className="">
                <div className="text-2xl font-semibold">
                  {profileUser?.fullName}
                </div>
                <div className="text-sm text-zinc-400">
                  @{profileUser?.username}
                </div>
              </div>

              {isOwner ? (
                <EditProfile userId={profileUser?.userId} />
              ) : (
                <FollowProfile
                  userId={profileUser?.id}
                  viewer={viewer || 0}
                  isFollowing={isFollowingState}
                  setIsFollowing={setIsFollowingState}
                  followersCount={followersCountState}
                  setFollowersCount={setFollowersCountState}
                />
              )}
            </div>
            <div className="flex gap-12 w-full">
              <div>
                <div className="text-2xl">{followersCountState}</div>
                <div className="text-sm text-zinc-400">Followers</div>
              </div>
              <div>
                <div className="text-2xl">
                  {profileUser?.followingCount || 0}
                </div>
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
        {profileUser?.bio && (
          <div className="flex flex-col items-start gap-2">
            <Markdown>{profileUser?.bio}</Markdown>
          </div>
        )}
      </div>
      <div className="flex flex-col items-start gap-2 border-t border-zinc-200 pt-4 mt-8">
        {userPosts.length === 0 && (
          <div className="p-12 text-zinc-400 text-center w-full">
            No posts yet
          </div>
        )}
        {userPosts.map((post) => (
          <PostListItem key={post.id} post={post} user={profileUser as User} />
        ))}
      </div>
    </div>
  );
}
