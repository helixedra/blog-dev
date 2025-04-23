import { getUserIdentity } from "@/lib/getUserIdentity";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EditPostForm from "@/components/posts/post/EditPostForm";

export default async function NewPostPage() {
  // Get user id from clerk
  const { userId: AuthUserId } = await auth();
  // Get user id from prisma
  const { id: userId } = await getUserIdentity(String(AuthUserId));

  // Check if user is logged in
  // If not, redirect to sign in page
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full items-center text-center text-base">New Post</div>
      <EditPostForm />

      <div className="w-full max-w-2xl">{/* <AddPostForm /> */}</div>
    </div>
  );
}
