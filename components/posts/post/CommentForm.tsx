"use client";
import React from "react";
import { Textarea } from "@/components/shared/Textarea";
import { Button } from "@/components/shared/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { User } from "@/generated/prisma";

export default function CommentForm({
  postId,
  userId,
  parentId,
  commentId,
  postAuthor,
  onClose,
}: {
  postId: number;
  userId: string | null;
  parentId?: number;
  commentId?: number;
  onClose?: () => void;
  postAuthor: User;
}) {
  const [actionVisibility, setActionVisibility] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const handleCancel = () => {
    setActionVisibility(false);
    setComment("");
    if (onClose) {
      onClose();
    }
  };
  const handleComment = () => {
    setActionVisibility(true);
  };

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({
      comment,
      postId,
      userId,
      parentId,
      postAuthorId,
    }: {
      comment: string;
      postId: number;
      userId: string;
      parentId?: number;
      postAuthorId: string;
    }) => {
      const response = await api.post("comments/new", {
        comment,
        postId,
        userId,
        parentId,
        postAuthorId: postAuthor.id,
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutateAsync({
      comment,
      postId,
      userId: userId ?? "",
      parentId,
      postAuthorId: postAuthor.id,
    });
    setActionVisibility(false);
    setComment("");
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className="flex flex-col gap-2 rounded-md text-sm mb-4 w-full text-zinc-500">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Textarea
          name="comment"
          className="w-full bg-white"
          placeholder="Add a comment..."
          onClick={() => handleComment()}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {(actionVisibility || onClose) && (
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
              <Button
                type="submit"
                disabled={comment.length === 0 || isPending}
              >
                Comment
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
