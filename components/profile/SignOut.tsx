import React from "react";
import { Button } from "@/components/shared/Button";
import { SignOutButton } from "@clerk/nextjs";

export default function SignOut() {
  return (
    <div>
      <SignOutButton>
        <Button variant="ghost">Sign Out</Button>
      </SignOutButton>
    </div>
  );
}
