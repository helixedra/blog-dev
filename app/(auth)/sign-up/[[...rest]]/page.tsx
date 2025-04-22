import React from "react";
import { SignUp } from "@clerk/nextjs";
import { handleAuth } from "@/lib/handleAuth";

export default async function SignUpPage() {
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
      <SignUp />
    </div>
  );
}
