"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Comment, User } from "@/app/generated/prisma";
import CommentItem from "./CommentItem";

export default function Comments({ postId }: { postId: number }) {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => (await api.get(`/comments/${postId}`)).json(),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;

  return (
    <div>
      <h2>Comments</h2>
      {comments?.comments?.map((comment: Comment & { author: User }) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
