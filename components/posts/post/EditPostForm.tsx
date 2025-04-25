"use client";
import { Button } from "@/components/shared/Button";
import { Textarea } from "@/components/shared/Textarea";
import React from "react";
import BackButton from "@/components/shared/BackButton";
import { Post, PostTag, Tag } from "@/app/generated/prisma";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

type PostTagWithTag = PostTag & { tag: Tag };
type PostWithTags = Post & { tags: PostTagWithTag[] };

export default function EditPostForm({
  userId,
  post,
}: {
  userId?: number;
  post?: PostWithTags | null | undefined;
}) {
  const formRef = React.useRef<HTMLFormElement>(null);

  const router = useRouter();

  const handleFormSubmit = async (draft: boolean) => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    // Convert FormData to object
    const data = Object.fromEntries(formData.entries());

    const preparedData = {
      id: Number(data.id),
      title: String(data.title),
      content: String(data.content),
      authorId: Number(data.authorId),
      tags: String(data.tags),
      draft: Boolean(draft),
    };
    // Send to API
    // If id is present, update post, else create new post
    const response = preparedData.id
      ? await api.put("posts", preparedData)
      : await api.post("posts", preparedData);

    // Check response
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to update post");
    }

    // Redirect to post page
    const { post } = await response.json();
    router.push(`/posts/${post.id}`);
  };

  return (
    <form
      ref={formRef}
      className="w-full space-y-8 p-6 border border-zinc-200 rounded"
    >
      <Textarea
        name="title"
        className="w-full border-zinc-200 placeholder:text-zinc-300 placeholder:text-base! focus:outline-none"
        placeholder="Enter a title"
        required
        rows={1}
        defaultValue={post?.title}
        maxLength={150}
        label="Title"
      />
      <Textarea
        name="content"
        className="w-full placeholder:text-zinc-300 placeholder:text-base! focus:outline-none"
        placeholder="Use markdown for formatting"
        required
        defaultValue={post?.content}
        label="Content"
        rows={12}
      />
      <Textarea
        name="tags"
        className="w-full placeholder:text-zinc-300 placeholder:text-base! focus:outline-none"
        placeholder="Tags (comma separated)"
        label="Tags"
        rows={1}
        defaultValue={post?.tags?.map((tag) => tag.tag.name).join(", ")}
        maxLength={150}
      />
      <input type="hidden" name="authorId" value={userId} />
      <input type="hidden" name="id" value={post?.id} />

      <div className="flex gap-4 justify-end">
        <BackButton name="cancel" className="mr-auto">
          Cancel
        </BackButton>
        <Button
          variant="outline"
          type="button"
          onClick={() => handleFormSubmit(true)}
        >
          Save Draft
        </Button>
        <Button type="button" onClick={() => handleFormSubmit(false)}>
          Publish
        </Button>
      </div>
    </form>
  );
}
