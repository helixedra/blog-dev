"use client";
import React, { useState } from "react";
import { Button } from "../shared/Button";
import { RiEdit2Line } from "react-icons/ri";
import { Dialog } from "../shared/Dialog";
import { Input } from "../shared/Input";
import { Textarea } from "../shared/Textarea";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { User } from "@/app/generated/prisma";

export default function EditProfile({
  userId,
  user,
}: {
  userId: number;
  user: User;
}) {
  // Dialog trigger state
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: {
      username: string;
      bio: string;
      avatarUrl: string;
      fullName: string;
    }) => {
      const response = await api.put(`user/${userId}`, data);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update profile");
      }
      return response.json();
    },
    onSuccess: (data) => {
      // close dialog
      setIsOpen(false);

      // redirect to profile
      router.push(`/profile/${data.username}`);
    },
    onError: (error) => {
      if (error instanceof Error) {
        // Handle specific error cases
        if (error.message === "Unauthorized") {
          // Handle unauthorized access
          console.error("User is not authenticated");
        } else if (error.message === "Forbidden") {
          // Handle forbidden access
          console.error("User is not allowed to edit this profile");
        } else {
          console.error("Profile update error:", error.message);
        }
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username = formData.get("username");
    const fullName = formData.get("fullName");
    const bio = formData.get("bio");
    const avatarUrl = formData.get("avatarUrl");

    mutate({
      username: username as string,
      fullName: fullName as string,
      bio: bio as string,
      avatarUrl: avatarUrl as string,
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
          {error && (
            <div className="text-red-500 mb-4">
              {error instanceof Error ? error.message : "An error occurred"}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              name="username"
              defaultValue={user?.username || ""}
              // onChange={(e) => setUsername(e.target.value)}
              label="Username"
            />
            <Input
              name="fullName"
              defaultValue={user?.fullName || ""}
              // onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
            />
            <Textarea
              name="bio"
              defaultValue={user?.bio || ""}
              // onChange={(e) => setBio(e.target.value)}
              label="Bio"
            />
            <Input
              name="avatarUrl"
              defaultValue={user?.avatarUrl || ""}
              // onChange={(e) => setAvatarUrl(e.target.value)}
              label="Avatar URL"
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
