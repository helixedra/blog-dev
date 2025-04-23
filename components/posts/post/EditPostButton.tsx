"use client";
import React from "react";
import { Button } from "@/components/shared/Button";
import { RiEdit2Line, RiDeleteBin7Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { Dialog } from "@/components/shared/Dialog";
import { api } from "@/lib/api";

export default function EditPostButton({
  postId,
  userId,
}: {
  postId: number;
  userId: number;
}) {
  const router = useRouter();
  const [deleteDialog, setDeleteDialog] = React.useState(false);

  const handleDelete = async () => {
    const response = await api.delete("/posts", {
      id: postId,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to delete post");
    }

    router.back();
  };
  return (
    <>
      <div className="flex items-center w-full gap-2">
        <Button
          variant="outline"
          onClick={() => router.push(`/posts/${postId}/edit`)}
          className="flex items-center gap-2"
        >
          <RiEdit2Line size={16} />
          Edit
        </Button>
        <Button
          className="bg-red-700! ml-auto flex items-center gap-2"
          onClick={() => setDeleteDialog(true)}
        >
          <RiDeleteBin7Line size={16} />
          Delete
        </Button>
      </div>

      <Dialog
        isOpen={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        contentClassName="bg-white dark:bg-white max-w-98"
        overlayClassName="bg-white dark:bg-black/10"
      >
        <Dialog.Content>
          <div className="text-black text-md mb-8">
            Are you sure you want to delete this post?
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
    </>
  );
}
