"use client";
import React from "react";
import { api } from "@/lib/api";
import { User } from "@/generated/prisma";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Dialog, Input, Textarea } from "@/components/shared";
import { RiEdit2Line } from "react-icons/ri";

export default function EditProfile({
  userId,
  user,
}: {
  userId: string;
  user: User;
}) {
  // State for modal
  const [isOpen, setIsOpen] = React.useState(false);

  // Refs for form inputs
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const bioRef = React.useRef<HTMLTextAreaElement>(null);

  // Query client for invalidating queries
  const queryClient = useQueryClient();

  // Mutation for updating user profile
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: {
      userId: string;
      username: string;
      bio: string;
      name: string;
    }) => {
      const response = await api.put(`user/${data.userId}`, {
        userId: data.userId,
        username: data.username,
        bio: data.bio,
        name: data.name,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update profile");
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user", userId] });
      setIsOpen(false);
      window.location.href = `/profile/${data.username}`;
    },
    // TODO: Add error handling
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Run mutation
    mutate({
      userId,
      username: usernameRef.current?.value || "",
      name: nameRef.current?.value || "",
      bio: bioRef.current?.value || "",
    });
  };

  return (
    <div>
      <Button
        variant="outline"
        className="flex items-center gap-2 w-fit"
        onClick={() => setIsOpen(true)}
      >
        <RiEdit2Line /> Edit Profile
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contentClassName="bg-white dark:bg-white"
        overlayClassName="bg-white dark:bg-black/10"
      >
        <Dialog.Header>Edit Profile</Dialog.Header>
        <Dialog.Content>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              name="username"
              defaultValue={user.username || ""}
              label="Username"
              ref={usernameRef}
            />
            <Input
              name="name"
              defaultValue={user.name || ""}
              label="Full Name"
              ref={nameRef}
            />
            <Textarea
              name="bio"
              defaultValue={user.bio || ""}
              label="Bio"
              ref={bioRef}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save"}
            </Button>
          </form>
        </Dialog.Content>
      </Dialog>
    </div>
  );
}
