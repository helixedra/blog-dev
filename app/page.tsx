import prisma from "@/lib/prisma";
import { Input } from "@/components/shared/Input";
import { Textarea } from "@/components/shared/Textarea";
import { Button } from "@/components/shared/Button";
import PostListItem from "@/components/posts/PostListItem";
import { redirect } from "next/navigation";
import AddPostForm from "@/components/posts/AddPostForm";

export default async function Home() {
  const posts = await prisma.posts.findMany({
    include: {
      users: true,
    },
  });

  async function handleSubmit(formData: FormData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");

    if (!title || !content) {
      return;
    }
    const api = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${api}/api/posts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        author_id: 1,
      }),
    });

    redirect("/");
  }

  return (
    <div className="flex flex-col">
      <AddPostForm>
        <div className="bg-zinc-100/50 rounded">
          <form action={handleSubmit} className="flex flex-col space-y-4 p-8">
            <Input label="Title" name="title" type="text" required />
            <Textarea name="content" label="Content" required rows={4} />
            <Button type="submit">Post</Button>
          </form>
        </div>
      </AddPostForm>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostListItem key={post.post_id} post={post} user={post.users} />
        ))
      ) : (
        <div>No posts found</div>
      )}
    </div>
  );
}
