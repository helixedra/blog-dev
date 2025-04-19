"use client";
import React from "react";
import { Textarea } from "@/components/shared/Textarea";
import { Button } from "@/components/shared/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export default function CommentForm({
  postId,
  userId,
  parentId,
}: {
  postId: number;
  userId: number;
  parentId?: number;
}) {
  const [actionVisibility, setActionVisibility] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const handleCancel = () => {
    setActionVisibility(false);
    setComment("");
  };
  const handleComment = () => {
    setActionVisibility(true);
  };

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async ({
      comment,
      postId,
      userId,
      parentId,
    }: {
      comment: string;
      postId: number;
      userId: number;
      parentId?: number;
    }) => {
      const response = await api.post("/comments/new", {
        comment,
        postId,
        userId,
        parentId,
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutateAsync({ comment, postId, userId, parentId });
    setActionVisibility(false);
    setComment("");
  };
  return (
    <div className="flex flex-col gap-2 rounded-md text-sm mb-4 mt-8 w-full text-zinc-500">
      <form onSubmit={handleSubmit}>
        <Textarea
          name="comment"
          className="w-full bg-white"
          placeholder="Add a comment..."
          onClick={() => handleComment()}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {actionVisibility && (
          <div className="flex items-center w-full justify-between gap-2">
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <Button
                type="submit"
                variant="outline"
                className="ml-2"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button type="submit">Comment</Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
