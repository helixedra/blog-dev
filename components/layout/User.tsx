"use client";
import React from "react";
import { UserProfileButton } from "./UserProfileButton";
import { RiLoader4Line } from "react-icons/ri";
import { User as UserType } from "@/generated/prisma";

export default function User({
  user,
  isLoading,
}: {
  user: UserType | null;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="flex items-center gap-2 relative">
        <RiLoader4Line size={18} className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      {user && (
        <div className="flex items-center gap-2 relative">
          <UserProfileButton user={user} />
        </div>
      )}
    </>
  );
}
