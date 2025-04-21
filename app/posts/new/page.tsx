import AddPostForm from "@/components/posts/AddPostForm";
import { Button } from "@/components/shared/Button";
import { Textarea } from "@/components/shared/Textarea";
import { getUserIdentity } from "@/lib/getUserIdentity";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

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
      <form action="" className="w-full space-y-8">
        <Textarea
          name="title"
          className="w-full border-0! rounded-none! border-b! border-zinc-200 px-0! placeholder:text-zinc-300 placeholder:text-base! focus:outline-none"
          placeholder="Enter a title"
          required
          rows={1}
          maxLength={150}
          label="Title"
        />
        <Textarea
          name="content"
          className="w-full border-0! rounded-none! border-b! border-zinc-200 px-0! placeholder:text-zinc-300 placeholder:text-base! focus:outline-none"
          placeholder="Use markdown for formatting"
          required
          label="Content"
          rows={12}
        />
        <Button type="submit">Post</Button>
      </form>

      <div className="w-full max-w-2xl">{/* <AddPostForm /> */}</div>
    </div>
  );
}
