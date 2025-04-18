import React from "react";
import { Button } from "../shared/Button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { users } from "@/app/generated/prisma";
import Link from "next/link";

export default async function Header() {
  const { userId } = await auth();
  const user = userId
    ? await prisma.users.findFirst({
        where: {
          user_id: userId,
          is_active: true,
        },
      })
    : null;

  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16">
      <div>
        <Link href="/">Home</Link>
      </div>
      <SignedOut>
        <SignInButton>
          <Button variant="ghost">Sign In</Button>
        </SignInButton>
        {/* <SignUpButton /> */}
      </SignedOut>
      {/* <SignedIn>{user && <UserButton />}</SignedIn> */}
      <SignedIn>{user && <UserProfileButton user={user as users} />}</SignedIn>
    </header>
  );
}
export function UserProfileButton({ user }: { user: users }) {
  return (
    <div>
      <Link href={`/profile/${user?.id}`} className="flex items-center gap-2">
        <div className="w-6 h-6">
          {/* <Image
            src={`${user?.avatar_url}` || ""}
            alt={user?.username || ""}
            width={40}
            height={40}
            className="rounded-full"
          /> */}
        </div>
        <div className="flex flex-col hover:underline">
          <div>{user?.username}</div>
        </div>
      </Link>
    </div>
  );
}
