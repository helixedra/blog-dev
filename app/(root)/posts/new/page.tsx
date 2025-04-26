import { getUserIdentity } from "@/lib/getUserIdentity";
import { redirect } from "next/navigation";
import EditPostForm from "@/components/posts/post/EditPostForm";
import { Metadata } from "next";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

export const metadata: Metadata = {
  title: "New Post - Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default async function NewPostPage() {
  // Get user id from session
  const { userId } = await getAuthenticatedUser();

  // Check if user is logged in
  // If not, redirect to sign in page
  if (!userId) {
    redirect("/sign-in");
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full items-center text-center text-base">New Post</div>
      <EditPostForm />
    </div>
  );
}
