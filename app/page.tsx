import prisma from "@/lib/prisma";
import { Input } from "@/components/shared/Input";
import { Textarea } from "@/components/shared/Textarea";
import { Button } from "@/components/shared/Button";
import { redirect } from "next/navigation";
import AddPostForm from "@/components/posts/AddPostForm";
import { auth } from "@clerk/nextjs/server";
import PostList from "@/components/posts/PostList";
import { users, posts } from "@/app/generated/prisma";
import { api } from "@/lib/api";

export interface UserData {
  id: number;
  userId: string;
  userImage: string | null;
  username: string | null;
  email: string | null;
  createdAt: Date;
  updatedAt: Date;
  is_active: boolean;
  is_admin: boolean;
  avatar_url: string | null;
  bio: string | null;
  password_hash: string | null;
  full_name: string | null;
}
export default async function Home() {
  const { userId } = await auth();

  const user = userId
    ? await prisma.users.findFirst({
        where: {
          user_id: userId,
          is_active: true,
        },
      })
    : null;

  const userData = {
    userId,
    fullName: user?.full_name,
    username: user?.username,
    email: user?.email,
  };

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

    await api.post("/api/posts/new", {
      title,
      content,
      author_id: user?.id,
    });

    redirect("/");
  }

  return (
    <div className="flex flex-col">
      <div>{user && `Welcome, ${user?.username}!`}</div>
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
        <PostList posts={posts as (posts & { users: users })[]} />
      ) : (
        <div>No posts found</div>
      )}
    </div>
  );
}
