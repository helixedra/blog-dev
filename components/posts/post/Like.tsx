"use client";
import { Button } from "@/components/shared/Button";
import React, { useState } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { api } from "@/lib/api";

export default function Like({
  postId,
  likes,
  liked,
  userId,
  postAuthorId,
}: {
  postId: number;
  likes: number;
  liked: boolean;
  userId: string | null;
  postAuthorId: string | null;
}) {
  const initialUserState = userId ? false : true;
  const [isToggled, setIsToggled] = useState(initialUserState);
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = async () => {
    // Disable button while toggling
    setIsToggled(true);
    // Optimistic update
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    // Try to toggle like
    try {
      const res = await api.post(`likes/post`, {
        userId: userId,
        postId: postId,
        postAuthorId: postAuthorId,
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
      className="flex items-center hover:text-zinc-800 cursor-pointer py-0! bg-transparent! px-0! text-black! text-xl! disabled:opacity-100!"
      onClick={toggleLike}
      disabled={isToggled}
    >
      {isLiked ? <RiHeartFill /> : <RiHeartLine />}
      <span className="text-sm ml-2">{likeCount || 0}</span>
    </Button>
  );
}
