"use client";
import { Button } from "@/components/shared/Button";
import { Textarea } from "@/components/shared/Textarea";
import React from "react";
import BackButton from "@/components/shared/BackButton";
import { Post, PostTag, Tag } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

type PostTagWithTag = PostTag & { tag: Tag };
type PostWithTags = Post & { tags: PostTagWithTag[] };

export default function EditPostForm({
  userId,
  post,
}: {
  userId?: string;
  post?: PostWithTags | null | undefined;
}) {
  const initialTagsArr = post?.tags?.map((tag) => tag.tag.name) || [];
  const [tags, setTags] = React.useState<string[]>(initialTagsArr);
  const [tagInput, setTagInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  const handleTagInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if ((event.key === "Enter" || event.key === ",") && tagInput.trim()) {
      event.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    } else if (event.key === "Backspace" && !tagInput && tags.length > 0) {
      // Remove last tag on backspace
      setTags(tags.slice(0, -1));
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleFormSubmit = async (draft: boolean) => {
    if (!formRef.current) return;
    setIsLoading(true);
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

    setIsLoading(false);
    // Redirect to post page
    const { post } = await response.json();
    router.push(`/posts/${post.id}`);
  };

  return (
    <form ref={formRef} className="w-full space-y-8">
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
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Tags
        </label>
        <div className="flex flex-wrap gap-2 p-2 border border-zinc-200 rounded bg-white min-h-[44px]">
          {tags.map((tag, index) => (
            <span
              key={tag + index}
              className="bg-zinc-100 text-black rounded px-2 py-1 flex items-center gap-1 text-sm"
            >
              {tag}
              <button
                type="button"
                className="ml-1 text-zinc-600 hover:text-red-500 cursor-pointer focus:outline-none"
                aria-label={`Remove tag ${tag}`}
                onClick={() => handleRemoveTag(index)}
              >
                &times;
              </button>
            </span>
          ))}
          <input
            type="text"
            className="flex-1 min-w-[120px] outline-none border-none bg-transparent text-base placeholder:text-zinc-300 placeholder:text-base!"
            placeholder={tags.length ? "" : "Add tag and press Enter"}
            value={tagInput}
            onChange={handleTagInputChange}
            onKeyDown={handleTagInputKeyDown}
            maxLength={32}
          />
        </div>
        {/* Hidden field for sending tags through form */}
        <input type="hidden" name="tags" value={tags.join(",")} />
      </div>
      <input type="hidden" name="authorId" value={userId} />
      <input type="hidden" name="id" value={post?.id} />

      <div className="flex gap-4 justify-end">
        <BackButton name="cancel" className="mr-auto">
          Cancel
        </BackButton>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={() => handleFormSubmit(true)}
        >
          {isLoading ? "Saving..." : "Save Draft"}
        </Button>
        <Button
          type="button"
          onClick={() => handleFormSubmit(false)}
          disabled={isLoading}
        >
          {isLoading ? "Publishing..." : "Publish"}
        </Button>
      </div>
    </form>
  );
}
