import AddPostForm from "@/components/posts/AddPostForm";
import { Button } from "@/components/shared/Button";
import { Textarea } from "@/components/shared/Textarea";
import { getUserIdentity } from "@/lib/getUserIdentity";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { api } from "@/lib/api";
import { Post } from "@/app/generated/prisma";
import { NextResponse } from "next/server";
import BackButton from "@/components/shared/BackButton";

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

  async function handleSubmit(formData: FormData) {
    "use server";

    if (formData.get("cancel")) {
      redirect("/");
    }

    const title = formData.get("title");
    const content = formData.get("content");
    const tags = formData.get("tags");
    const draft = formData.get("draft");

    if (!title || !content) {
      return;
    }

    await api.post("/posts/new", {
      title,
      content,
      tags,
      authorId: userId,
      draft: Boolean(draft),
    });

    redirect("/");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full items-center text-center text-base">New Post</div>
      <form
        action={handleSubmit}
        className="w-full space-y-8 p-6 border border-zinc-200 rounded"
      >
        <Textarea
          name="title"
          className="w-full border-zinc-200  placeholder:text-zinc-300 placeholder:text-base! focus:outline-none"
          placeholder="Enter a title"
          required
          rows={1}
          maxLength={150}
          label="Title"
        />
        <Textarea
          name="content"
          className="w-full placeholder:text-zinc-300 placeholder:text-base! focus:outline-none"
          placeholder="Use markdown for formatting"
          required
          label="Content"
          rows={12}
        />
        <Textarea
          name="tags"
          className="w-full placeholder:text-zinc-300 placeholder:text-base! focus:outline-none"
          placeholder="Tags (comma separated)"
          label="Tags"
          rows={1}
          maxLength={150}
        />
        <div className="flex gap-4 justify-end">
          <BackButton name="cancel" className="mr-auto">
            Cancel
          </BackButton>
          <Button type="submit" name="draft" value="true" variant="outline">
            Save Draft
          </Button>
          <Button type="submit" name="draft" value="false">
            Publish
          </Button>
        </div>
      </form>

      <div className="w-full max-w-2xl">{/* <AddPostForm /> */}</div>
    </div>
  );
}
