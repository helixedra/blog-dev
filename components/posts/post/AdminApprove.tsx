"use client";
import { Button } from "@/components/shared/Button";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export function AdminApprove({
  postId,
  authorId,
}: {
  postId: number;
  authorId: string;
}) {
  const router = useRouter();

  const changeStatus = async (review: string) => {
    try {
      const response = await api.put("posts/review", {
        id: postId,
        review,
        authorId,
      });
      if (!response.ok) {
        throw new Error("Failed to update post status");
      }
      router.refresh();
    } catch (error) {
      console.error("Error updating post status:", (error as Error).message);
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        className="bg-green-100! text-green-800!"
        name="review"
        onClick={() => {
          changeStatus("published");
        }}
      >
        Approve
      </Button>
      <Button
        size="sm"
        className="bg-red-100! text-red-800!"
        name="review"
        onClick={() => {
          changeStatus("rejected");
        }}
      >
        Reject
      </Button>
    </div>
  );
}
