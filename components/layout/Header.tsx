import React from "react";
import { Button } from "../shared/Button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import ActionButtons from "./ActionButtons";
import User from "./User";

export default async function Header() {
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16 relative">
      <div className="font-bold text-2xl hover:opacity-70">
        <Link href="/">{`RW`}</Link>
      </div>
      <ActionButtons />
      <div className="flex items-center gap-2">
        <SignedOut>
          <SignInButton>
            <Button variant="ghost">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <User />
      </div>
    </header>
  );
}
