"use client";
import React from "react";
import { UserProfileButton } from "./UserProfileButton";
import { useUserData } from "@/hooks/useUserData";
import { RiLoader4Line } from "react-icons/ri";

export default function User() {
  const { data: user, isLoading } = useUserData();
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
