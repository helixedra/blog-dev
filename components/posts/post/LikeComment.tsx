"use client";
import { Button } from "@/components/shared/Button";
import React, { useState } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { api } from "@/lib/api";
import { CommentLike } from "@/generated/prisma";

export default function Like({
  commentId,
  userId,
  likes,
  likesCount,
}: {
  commentId: number;
  userId: string | null;
  likes?: CommentLike[];
  likesCount?: number;
}) {
  const [isToggled, setIsToggled] = useState(false);
  const [isLiked, setIsLiked] = useState(
    likes?.some((like) => like.userId === userId) || false
  );
  const [likeCountState, setLikeCountState] = useState(likesCount || 0);

  const toggleLike = async () => {
    // Disable button while toggling
    setIsToggled(true);
    // Optimistic update
    setIsLiked(!isLiked);
    setLikeCountState((prev) => (isLiked ? prev - 1 : prev + 1));
    // Try to toggle like
    try {
      const res = await api.post(`likes/comment/${commentId}`, {
        userId: userId,
      });
      // Revert optimistic update if toggle fails
      if (!res.ok) {
        setIsLiked(!isLiked);
        setLikeCountState(likesCount || 0);
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
      variant="ghost"
      size="xs"
      aria-label="Like"
      disabled={!userId || userId === null || isToggled}
    >
      {isLiked ? <RiHeartFill /> : <RiHeartLine />}
      <span className="text-xs">{likeCountState || 0}</span>
    </Button>
  );
}
