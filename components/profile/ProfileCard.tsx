"use client";
import React from "react";
import { Follow, User } from "@/generated/prisma";
import EditProfile from "./EditProfile";
import { formatDate } from "@/lib/formatDate";
import Markdown from "react-markdown";
import FollowProfile from "./FollowProfile";
import Avatar from "./Avatar";

export default function ProfileCard({
  profileUser,
  isOwner,
  viewer,
}: {
  profileUser: User & { follows: Follow[] };
  isOwner: boolean;
  viewer: any;
}) {
  const isFollowing =
    !!viewer &&
    profileUser?.follows?.[0]?.userFollowers.includes(Number(viewer?.id!));

  const [isFollowingState, setIsFollowingState] = React.useState(isFollowing);
  const [followersCountState, setFollowersCountState] = React.useState(
    profileUser?.follows?.[0]?.userFollowers.length || 0
  );

  const date = new Date(profileUser.createdAt!);

  return (
    <div>
      <div className="relative h-38 rounded">
        <div className="flex items-end">
          <Avatar
            url={profileUser?.image || ""}
            username={profileUser?.username || ""}
          />
          <div className="ml-6 w-full">
            <div className="flex justify-between mb-2 border-b border-zinc-200 pb-4">
              <div className="">
                <div className="text-2xl font-semibold">
                  {profileUser?.name}
                </div>
                <div className="text-sm text-zinc-400">
                  @{profileUser?.username}
                </div>
              </div>

              {isOwner ? (
                <EditProfile userId={profileUser?.id} user={profileUser} />
              ) : (
                viewer !== undefined && (
                  <FollowProfile
                    userId={profileUser?.id}
                    viewer={viewer}
                    isFollowing={isFollowingState}
                    setIsFollowing={setIsFollowingState}
                    followersCount={followersCountState}
                    setFollowersCount={setFollowersCountState}
                  />
                )
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
    </div>
  );
}
