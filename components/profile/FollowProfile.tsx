import React from "react";
import { Button } from "../shared/Button";
import { api } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function FollowProfile({
  userId,
  viewer,
  isFollowing,
  setIsFollowing,
  followersCount,
  setFollowersCount,
}: {
  userId: number;
  viewer: number;
  isFollowing: boolean;
  setIsFollowing: (isFollowing: boolean) => void;
  followersCount: number;
  setFollowersCount: (followersCount: number) => void;
}) {
  const queryClient = useQueryClient();

  const followMutation = useMutation({
    mutationFn: () =>
      api.post(`follow/${userId}`, {
        followId: userId,
        byUserId: viewer,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user", userId] });
    },
  });

  const handleFollow = () => {
    followMutation.mutate();
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };

  return (
    <div>
      <Button
        variant={isFollowing ? "outline" : "default"}
        onClick={handleFollow}
        disabled={followMutation.isPending}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </div>
  );
}
