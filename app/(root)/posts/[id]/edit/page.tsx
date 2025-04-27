import EditPostForm from "@/components/posts/post/EditPostForm";
import { redirect } from "next/navigation";
import React from "react";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import prisma from "@/lib/prisma";
import NotFound from "@/app/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Post - Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default async function PostEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Get user id from clerk
  const { userId } = await getAuthenticatedUser();
  // Get post id from params
  const { id } = await params;

  // Check if user is logged in
  // If not, redirect to sign in page
  if (!userId) {
    redirect("/sign-in");
  }

  let post;
  try {
    post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: true,
        tags: { include: { tag: true } },
      },
    });
  } catch (error) {
    console.error("Error fetching post:", (error as Error).message);
    return <div>Failed to fetch post</div>;
  }

  if (!post) {
    NotFound();
  }

  if (post?.author.id !== userId) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full items-center text-center text-base">Edit Post</div>
      <EditPostForm userId={userId} post={post} />
    </div>
  );
}
