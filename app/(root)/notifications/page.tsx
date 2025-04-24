"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Notification, User, Post, Comment } from "@/app/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import { RiUserFollowFill } from "react-icons/ri";
import { formatDate } from "@/lib/formatDate";

interface NotificationData extends Notification {
  relatedUser: User | null;
  relatedPost: Post | null;
  relatedComment: Comment | null;
}

export default function NotificationsPage() {
  const {
    data: notifications,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => api.get("/notifications").then((res) => res.json()),
  });

  return (
    <div>
      <div className="text-2xl mb-4">Notifications</div>
      <div>
        {isLoading && <div>Loading...</div>}
        {notifications?.length === 0 && <div>No notifications</div>}
        {notifications?.map((notification: NotificationData) => (
          <div key={notification.id} className="flex flex-col">
            {notification.relatedUser && (
              <div className="flex items-center text-base ">
                <RiUserFollowFill className="text-zinc-600 mr-2" />
                <Link
                  href={`/user/${notification.relatedUser.username}`}
                  className="flex items-center"
                >
                  <Image
                    src={notification.relatedUser.avatarUrl || ""}
                    alt={notification.relatedUser.username}
                    width={40}
                    height={40}
                    className="rounded-full w-6 h-6 object-cover mr-2"
                  />
                  <span className="font-semibold">
                    {notification.relatedUser.fullName}
                  </span>
                </Link>
                <span className="text-zinc-800 ml-2">
                  {notification.message}
                </span>
                <span className="text-zinc-500 ml-2 text-sm">
                  {formatDate(new Date(notification.createdAt)).timeAgo}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
