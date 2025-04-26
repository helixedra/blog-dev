"use client";
import React from "react";
import { Button } from "../shared/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ActionButtons from "./ActionButtons";
import User from "./User";
import { createAuthClient } from "better-auth/react";
export const { signIn, signUp, useSession } = createAuthClient();
import { User as UserType } from "@/generated/prisma";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  // get session
  const { data, isPending } = useSession();
  const userId = data?.user?.id;

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => api.get(`user/${userId}`).then((res) => res.json()),
    enabled: !!userId,
    staleTime: 0,
  });

  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16 relative">
      <div className="font-bold text-2xl hover:opacity-70">
        <Link href="/">{`RW`}</Link>
      </div>
      <ActionButtons userId={data?.user?.id || null} />
      <div className="flex items-center gap-2">
        {user ? (
          <User user={user as UserType} isLoading={isPending} />
        ) : (
          <Button variant="ghost" onClick={() => router.push("/sign-in")}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
}
