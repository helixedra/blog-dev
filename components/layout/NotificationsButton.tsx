"use client";
import React from "react";
import { RiNotification3Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export default function NotificationsButton({
  userId,
}: {
  userId: string | null;
}) {
  const router = useRouter();

  const { data: notificationsCount } = useQuery({
    queryKey: ["notifications_count"],
    queryFn: async () =>
      await api.get("notifications/unreaded/count").then((res) => res.json()),
    enabled: !!userId,
  });

  return (
    <div className="relative">
      {notificationsCount > 0 && (
        <div className="absolute w-3 h-3 -top-0.5 z-20 -right-0.5 border-2 border-white bg-red-500 rounded-full"></div>
      )}
      <button
        className="flex items-center justify-center h-8 w-8 cursor-pointer bg-zinc-100 text-sm font-semibold text-black rounded-full hover:opacity-80 hover:scale-110 transition"
        onClick={() => router.push("/notifications")}
      >
        <RiNotification3Line size={18} />
      </button>
    </div>
  );
}
