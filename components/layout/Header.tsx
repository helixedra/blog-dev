import React from "react";
import { Button } from "../shared/Button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import Link from "next/link";
import SignOut from "@/components/profile/SignOut";
import { UserProfileButton } from "./UserProfileButton";

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
      <div className="font-bold text-2xl hover:opacity-70">
        <Link href="/">{`R＆W`}</Link>
      </div>
      <SignedOut>
        <SignInButton>
          <Button variant="ghost">Sign In</Button>
        </SignInButton>
      </SignedOut>
      {user && (
        <div className="flex items-center gap-2">
          <SignedIn>
            <UserProfileButton user={user} />
            <SignOut />
          </SignedIn>
        </div>
      )}
    </header>
  );
}
