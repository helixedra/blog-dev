"use client";

import { Button } from "@/components/shared/Button";
import { useRouter } from "next/navigation";

export function AdminApprove({
  postId,
  action,
}: {
  postId: number;
  action: (formData: FormData) => Promise<void>;
}) {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await action(formData);
    router.refresh();
  }

  return (
    <form action={handleSubmit} className="flex gap-2">
      <Button
        size="sm"
        className="bg-green-100! text-green-800!"
        type="submit"
        name="status"
        value="published"
      >
        Approve
      </Button>
      <Button
        size="sm"
        className="bg-red-100! text-red-800!"
        type="submit"
        name="status"
        value="rejected"
      >
        Reject
      </Button>
      <input type="hidden" name="postId" value={postId} />
    </form>
  );
}
