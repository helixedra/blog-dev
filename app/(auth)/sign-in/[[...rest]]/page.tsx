import React from "react";
import { SignIn } from "@clerk/nextjs";
import { handleAuth } from "@/lib/handleAuth";

export default async function SignInPage() {
  const result = await handleAuth();

  if (result.status === "user_not_found") {
    return (
      <div className="flex items-center justify-center mt-16">
        User not found
      </div>
    );
  }

  if (result.status === "already_registered") {
    return (
      <div className="flex items-center justify-center mt-16">
        User already registered
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center mt-16">
      <SignIn />
    </div>
  );
}
