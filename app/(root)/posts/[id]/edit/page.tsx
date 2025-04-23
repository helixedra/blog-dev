import EditPostForm from "@/components/posts/post/EditPostForm";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { getUserIdentity } from "@/lib/getUserIdentity";
import prisma from "@/lib/prisma";
import NotFound from "@/app/not-found";
import { api } from "@/lib/api";

export default async function PostEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Get user id from clerk
  const { userId: AuthUserId } = await auth();
  // Get user id from prisma
  const { id: userId } = await getUserIdentity(String(AuthUserId));
  // Get post id from params
  const { id } = await params;

  // Check if user is logged in
  // If not, redirect to sign in page
  if (!userId) {
    redirect("/sign-in");
  }

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      author: true,
      tags: { include: { tag: true } },
    },
  });

  if (!post) {
    NotFound();
  }

  if (post?.authorId !== userId) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full items-center text-center text-base">Edit Post</div>
      <EditPostForm userId={userId} post={post} />
    </div>
  );
}
