"use client";
import { Button } from "@/components/shared/Button";
import React, { useState } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { api } from "@/lib/api";

export default function Like({
  commentId,
  userId,
  likes = 0,
}: {
  commentId: number;
  userId: number | null;
  likes?: number;
}) {
  const [isToggled, setIsToggled] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = async () => {
    // Disable button while toggling
    setIsToggled(true);
    // Optimistic update
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    // Try to toggle like
    try {
      const res = await api.post(`/likes/comment/${commentId}`, {
        userId: userId,
      });
      // Revert optimistic update if toggle fails
      if (!res.ok) {
        setIsLiked(!isLiked);
        setLikeCount(likes);
        throw new Error("Failed to toggle like");
      }
      // Enable button
      setIsToggled(false);
    } catch (error) {
      console.error("Error toggling like:", error);
      throw error;
    }
  };

  return (
    <Button
      className="flex items-center gap-1 text-zinc-500 disabled:opacity-100!"
      onClick={toggleLike}
      disabled={isToggled}
      variant="ghost"
      size="xs"
      aria-label="Like"
    >
      {isLiked ? <RiHeartFill /> : <RiHeartLine />}
      <span className="text-xs">{likeCount || 0}</span>
    </Button>
  );
}
