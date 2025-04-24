'use client";';
import React from "react";
import { User } from "@/app/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { RiChat1Line, RiHeartLine, RiDeleteBin7Line } from "react-icons/ri";
import { Button } from "@/components/shared/Button";
import CommentForm from "./CommentForm";
import LikeComment from "./LikeComment";
import { api } from "@/lib/api";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Dialog } from "@/components/shared/Dialog";

import { Comment } from "./Comments";

export default function CommentItem({
  comment,
  userId,
  postId,
  commentId,
}: {
  comment: Comment;
  children?: Comment[];
  userId: number;
  postId: number;
  commentId?: number;
}) {
  const [replayVisibility, setReplyVisibility] = React.useState(false);
  const [deleteDialog, setDeleteDialog] = React.useState(false);

  const {
    author: { fullName, username, avatarUrl },
    comment: commentText,
    createdAt,
    id,
    parentId,
    children,
  } = comment;

  // This will be used to invalidate the comments query after deletion
  const queryClient = useQueryClient();
  // Mutation to delete a comment
  const deleteCommentMutation = useMutation({
    mutationFn: async () => {
      const res = await api.delete(`/comments/delete`, {
        commentId: id,
        userId,
      });
      if (!res.ok) {
        throw new Error("Error deleting comment: " + res.statusText);
      }
    },
    onSuccess: () => {
      // Invalidate and refetch comments query to update the UI
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleDeleteApprove = async () => {
    // Open delete confirmation dialog
    setDeleteDialog(true);
  };

  // Function to handle comment deletion
  const handleDelete = () => {
    deleteCommentMutation.mutate();
    setDeleteDialog(false);
  };

  return (
    <div className="flex flex-col py-4 px-2">
      <div className="flex items-center p-0 gap-2">
        <Image
          width={32}
          height={32}
          src={avatarUrl ?? ""}
          alt={username}
          className="w-6 h-6 rounded-full object-cover"
        />
        <div className="flex text-sm items-center gap-2">
          <Link
            href={`/profile/${username}`}
            className="font-semibold text-zinc-700 hover:text-zinc-700 hover:underline"
          >
            {fullName}
          </Link>
          <span className="text-zinc-500 text-xs">
            {formatDate(new Date(createdAt)).timeAgo}
          </span>
        </div>
      </div>
      <div className="text-base pl-8 mt-1">{commentText}</div>
      {/*DEV IDS*/}
      {/* <div className="text-xs">
        <span className="pr-2">ID : {id}</span>
        <span>Parent ID : {parentId}</span>
      </div> */}
      {/*DEV IDS*/}
      <div>
        <div className="flex pl-7 mt-1 items-center gap-2 w-full">
          <LikeComment
            commentId={id}
            userId={userId}
            likes={comment.likes}
            likesCount={comment.likeCount}
          />
          {userId !== 0 && (
            <Button
              variant="ghost"
              size="xs"
              className="gap-1 text-zinc-500"
              onClick={() => setReplyVisibility((prev) => !prev)}
            >
              <RiChat1Line className="-mt-0.5" />
              Reply
            </Button>
          )}
          <div className="flex items-center gap-1">
            {comment.author.id === userId && (
              <Button
                variant="ghost"
                size="xs"
                className="gap-1 text-zinc-500"
                onClick={handleDeleteApprove}
              >
                <RiDeleteBin7Line />
              </Button>
            )}
          </div>
        </div>
        {replayVisibility && (
          <div className="mt-2 ml-6">
            <CommentForm
              postId={postId}
              userId={userId}
              commentId={commentId}
              parentId={id ?? undefined}
              onClose={() => setReplyVisibility(false)}
            />
          </div>
        )}
      </div>

      {children && children.length > 0 && (
        <div className="ml-2 pl-1 border-l border-zinc-200">
          {children.map((child) => (
            <CommentItem
              key={child.id}
              comment={child}
              userId={userId}
              postId={postId}
              commentId={child.id}
            />
          ))}
        </div>
      )}
      <Dialog
        isOpen={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        contentClassName="bg-white dark:bg-white max-w-98"
        overlayClassName="bg-white dark:bg-black/10"
      >
        <Dialog.Content>
          <div className="text-black text-md mb-8">
            Are you sure you want to delete this comment?
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setDeleteDialog(false)}>
              Cancel
            </Button>
            <Button className="bg-red-700!" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Dialog.Content>
      </Dialog>
    </div>
  );
}
