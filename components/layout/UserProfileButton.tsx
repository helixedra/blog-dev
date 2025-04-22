"use client";
import Link from "next/link";
import Image from "next/image";
import { RiUserLine, RiLogoutCircleRLine } from "react-icons/ri";
import { User } from "@/app/generated/prisma";
import React from "react";
import { useClerk } from "@clerk/nextjs";
import { createPortal } from "react-dom";

export function UserProfileButton({ user }: { user: User | null }) {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const { signOut } = useClerk();

  return (
    <div>
      {user && (
        <>
          <div
            className="w-6 h-6 hover:scale-110 transition cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Image
              src={user?.avatarUrl || ""}
              alt={user?.username || ""}
              width={40}
              height={40}
              className="rounded-full bg-zinc-200"
            />
          </div>
          <div className="flex flex-col hover:underline">
            {/* <div>{user?.fullName}</div> */}
          </div>
        </>
      )}
      {showDropdown && (
        <Dropdown
          user={user}
          setShowDropdown={setShowDropdown}
          signOut={signOut}
        />
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
    <div className="fixed inset-0" onClick={() => setShowDropdown(false)}>
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
