"use client";
import React, { useState, useRef } from "react";
import { Button } from "../shared/Button";
import { RiEdit2Line } from "react-icons/ri";
import { Dialog } from "../shared/Dialog";
import { Input } from "../shared/Input";
import { Textarea } from "../shared/Textarea";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export default function EditProfile({ userId }: { userId: string }) {
  // Dialog trigger state
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{
    username: string;
    bio: string;
    avatar_url: string;
  } | null>(null);

  // Form refs
  const usernameRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  // Query client
  const queryClient = useQueryClient();

  // User query
  const { data: userData } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const userData = await api.get(`user/${userId}`);
      if (!userData.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userDataJson = await userData.json();
      setUser(userDataJson);
      return userDataJson;
    },
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: {
      username: string;
      bio: string;
      avatar_url: string;
    }) => {
      const response = await api.put(`user/${userId}`, data);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update profile");
      }
      return response.json();
    },
    onSuccess: (data) => {
      // invalidate query to update data
      queryClient.invalidateQueries({ queryKey: ["user", userId] });

      // update local state
      setUser(data);

      // close dialog
      setIsOpen(false);
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
    if (!user) return;

    const username = usernameRef.current?.value || user.username;
    const bio = bioRef.current?.value || user.bio;
    const avatar_url = avatarRef.current?.value || user.avatar_url;

    mutate({
      username,
      bio,
      avatar_url,
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="username"
              placeholder="Username"
              defaultValue={user?.username ?? ""}
              ref={usernameRef}
            />
            <Textarea name="bio" defaultValue={user?.bio ?? ""} ref={bioRef} />
            <Input
              type="text"
              name="avatar_url"
              placeholder="Avatar URL"
              defaultValue={user?.avatar_url ?? ""}
              ref={avatarRef}
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
