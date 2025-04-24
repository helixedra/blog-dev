"use client";
import React, { useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: {
      userId: number;
      username: string;
      bio: string;
      fullName: string;
    }) => {
      const response = await api.put(`/user`, data);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update profile");
      }
      return response.json();
    },
    onSuccess: (data) => {
      setIsOpen(false);
      // router.push(`/profile/${data.username}`);
      window.location.href = `/profile/${data.username}`;
    },
    onError: (error) => {
      if (error instanceof Error) {
        if (error.message === "Unauthorized") {
          console.error("User is not authenticated");
        } else if (error.message === "Forbidden") {
          console.error("User is not allowed to edit this profile");
        } else {
          console.error("Profile update error:", error.message);
        }
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      userId,
      username: usernameRef.current?.value || "",
      fullName: fullNameRef.current?.value || "",
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
          {error && (
            <div className="text-red-500 mb-4">
              {error instanceof Error ? error.message : "An error occurred"}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              name="username"
              defaultValue={user.username || ""}
              label="Username"
              ref={usernameRef}
            />
            <Input
              name="fullName"
              defaultValue={user.fullName || ""}
              label="Full Name"
              ref={fullNameRef}
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
