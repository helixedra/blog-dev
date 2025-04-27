'use client";';
import React from "react";
import { Button } from "@/components/shared/Button";
import CommentForm from "./CommentForm";
import { api } from "@/lib/api";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Dialog } from "@/components/shared/Dialog";
import { Comment } from "./Comments";
import { CommentHeader } from "./comment-item/CommentHeader";
import CommentFooter from "./comment-item/CommentFooter";
import { User } from "@/generated/prisma";

export default function CommentItem({
  comment,
  userId,
  postId,
  commentId,
  replay,
  postAuthor,
}: {
  comment: Comment;
  children?: Comment[];
  userId: string | null;
  postId: number;
  commentId?: number;
  replay?: boolean;
  postAuthor: any;
}) {
  const [replayVisibility, setReplyVisibility] = React.useState(false);
  const [deleteDialog, setDeleteDialog] = React.useState(false);

  const {
    author: { name, username, image },
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
      const res = await api.delete(`comments/delete`, {
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
    <li
      className={`flex flex-col relative pb-2 ml-1 ${
        replay ? "mt-4 ml-4 rounded-md" : ""
      }`}
    >
      <CommentHeader
        image={image ?? ""}
        username={username ?? ""}
        name={name ?? ""}
        createdAt={createdAt}
      />
      <div className="relative">
        <div className="comment-content">
          <div className={`text-xs mt-1 pt-2 bg-zinc-100 rounded-t-md px-3 `}>
            {commentText}
          </div>
          <CommentFooter
            comment={comment}
            userId={userId}
            setReplyVisibility={setReplyVisibility}
            handleDeleteApprove={handleDeleteApprove}
            postAuthorId={postAuthor.id}
            postId={postId}
          />

          {replayVisibility && (
            <div className="mt-2 ml-6">
              <CommentForm
                postId={postId}
                userId={userId}
                commentId={commentId}
                parentId={id ?? undefined}
                onClose={() => setReplyVisibility(false)}
                postAuthor={postAuthor}
              />
            </div>
          )}
        </div>
      </div>

      {children && children.length > 0 && (
        <ul className="relative">
          {children.map((child, index) => (
            <CommentItem
              key={child.id}
              comment={child}
              userId={userId}
              postId={postId}
              commentId={child.id}
              replay={true}
              postAuthor={postAuthor}
            />
          ))}
        </ul>
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
    </li>
  );
}
