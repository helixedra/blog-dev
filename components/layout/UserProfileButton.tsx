"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiUserLine, RiLogoutCircleRLine } from "react-icons/ri";
import { User } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { authClient } from "@/lib/auth-client";
import { useQueryClient } from "@tanstack/react-query";

export function UserProfileButton({ user }: { user: User | null }) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const router = useRouter();
  const queryClient = useQueryClient();
  // Sign out
  const signOut = async () => {
    await authClient.signOut();
    setShowDropdown(false);
    queryClient.invalidateQueries({ queryKey: ["user"] });
    window.location.href = "/";
  };

  return (
    <div className="relative">
      {user && (
        <div className="relative">
          <div
            className="w-6 h-6 hover:scale-110 transition cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Image
              src={user?.image || ""}
              alt={user?.username || ""}
              width={80}
              height={80}
              className="rounded-full bg-zinc-200 object-cover w-6 h-6"
            />
          </div>
          <div className="flex flex-col hover:underline"></div>
          {showDropdown && (
            <Dropdown
              user={user}
              setShowDropdown={setShowDropdown}
              signOut={signOut}
            />
          )}
        </div>
      )}
    </div>
  );
}

export function Dropdown({
  user,
  setShowDropdown,
  signOut,
}: {
  user: User | null;
  setShowDropdown: (show: boolean) => void;
  signOut: () => void;
}) {
  return createPortal(
    <div
      className="fixed inset-0 max-w-4xl mx-auto"
      onClick={() => setShowDropdown(false)}
    >
      <div className="absolute top-12 right-4 w-32 border border-zinc-100 bg-white p-1 rounded shadow-lg z-50">
        <Link
          href={`/profile/${user?.username}`}
          className="flex items-center w-full px-2 py-1 text-sm rounded hover:bg-zinc-100"
        >
          <RiUserLine className="mr-2" />
          Profile
        </Link>
        <div className="my-1 h-px bg-zinc-100" />
        <div
          className="flex items-center w-full px-2 py-1 text-sm rounded cursor-pointer hover:bg-zinc-100"
          onClick={() => signOut()}
        >
          <RiLogoutCircleRLine className="mr-2" />
          Log out
        </div>
      </div>
    </div>,
    document.body
  );
}
