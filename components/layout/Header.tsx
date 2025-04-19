import React from "react";
import { Button } from "../shared/Button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { User } from "@/app/generated/prisma";
import Link from "next/link";
import SignOut from "@/components/profile/SignOut";

export default async function Header() {
  const { userId } = await auth();
  const user = userId
    ? await prisma.user.findFirst({
        where: {
          userId,
          isActive: true,
        },
      })
    : false;

  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16">
      <div>
        <Link href="/">Home</Link>
      </div>

      <SignedOut>
        <SignInButton>
          <Button variant="ghost">Sign In</Button>
        </SignInButton>
      </SignedOut>
      {user && (
        <div className="flex items-center gap-2">
          <SignedIn>
            <UserProfileButton user={user as User} />
            <SignOut />
          </SignedIn>
        </div>
      )}
    </header>
  );
}
export function UserProfileButton({ user }: { user: User }) {
  return (
    <div>
      <Link href={`/profile/${user?.id}`} className="flex items-center gap-2">
        <div className="w-6 h-6">
          <Image
            src={`${user?.avatarUrl}` || ""}
            alt={user?.username || ""}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col hover:underline">
          <div>{user?.username}</div>
        </div>
      </Link>
    </div>
  );
}
