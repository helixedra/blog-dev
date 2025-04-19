"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { RiLoader5Line } from "react-icons/ri";
import { User } from "@/app/generated/prisma";

export function UserProfileButton({
  user: userInitial,
}: {
  user: User | null;
}) {
  const { userId } = useAuth();

  // User query
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId],
    initialData: userInitial,
    enabled: !!userId, // Only run query if userId exists
    queryFn: async () => {
      if (!userId) return null;
      const userData = await api.get(`/user/${userId}`);
      if (!userData.ok) {
        throw new Error("Failed to fetch user data");
      }
      return await userData.json();
    },
  });

  return (
    <div>
      {isLoading && (
        <div className="animate-spin">
          <RiLoader5Line />
        </div>
      )}
      {user && (
        <Link
          href={`/profile/${user?.username}`}
          className="flex items-center gap-2"
        >
          <div className="w-6 h-6">
            <Image
              src={user?.avatarUrl || ""}
              alt={user?.username || ""}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col hover:underline">
            <div>{user?.fullName}</div>
          </div>
        </Link>
      )}
    </div>
  );
}
