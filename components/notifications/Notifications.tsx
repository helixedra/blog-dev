"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Notification, User, Post, Comment } from "@/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import { RiUserFollowFill } from "react-icons/ri";
import { formatDate } from "@/lib/formatDate";
import { useRouter } from "next/navigation";

interface NotificationData extends Notification {
  relatedUser: User | null;
  relatedPost: Post | null;
  relatedComment: Comment | null;
}

export default function Notifications({ userId }: { userId: string | null }) {
  const router = useRouter();

  React.useEffect(() => {
    if (!userId) {
      router.push("/sign-in");
    }
  }, [userId, router]);

  if (!userId) {
    return null;
  }

  const { data: notifications, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => api.get("notifications").then((res) => res.json()),
    enabled: !!userId,
  });

  const messagesTemplate = {
    post_published: "has been published 🎉",
    post_rejected: "has been rejected 🚫",
  };

  const preparedNotification = (notification: NotificationData) => {
    const title = notification.title.toLowerCase();
    if (title.includes("post")) {
      const templateKey = title.includes("published")
        ? "post_published"
        : "post_rejected";
      const message = `Your <a href="/posts/${notification.relatedPostId}" class="font-semibold">post</a> ${messagesTemplate[templateKey]}`;
      return { message };
    }
  };

  return (
    <div className="w-full">
      <div className="text-2xl mb-4">Notifications</div>
      <div className="space-y-2">
        {isLoading && <div>Loading...</div>}
        {notifications?.length === 0 && <div>No notifications</div>}
        {notifications?.map((notification: NotificationData) => (
          <div
            key={notification.id}
            className="flex flex-col w-full border-b border-zinc-100 pb-4 pt-2"
          >
            {notification.relatedUser && (
              <div className="flex items-center text-sm w-full">
                {/* <RiUserFollowFill className="text-zinc-600 mr-2" /> */}
                <Link
                  href={`/user/${notification.relatedUser.username}`}
                  className="flex items-center"
                >
                  <Image
                    src={notification.relatedUser.image || ""}
                    alt={notification.relatedUser.username || ""}
                    width={40}
                    height={40}
                    className="rounded-full w-6 h-6 object-cover mr-2"
                  />
                  <div className="font-semibold">
                    {notification.relatedUser.name || ""}
                  </div>
                </Link>
                <div
                  className="text-zinc-800 ml-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      preparedNotification(notification)?.message ||
                      notification.message,
                  }}
                ></div>
                <div className="text-zinc-500 text-xs ml-auto">
                  {formatDate(new Date(notification.createdAt)).timeAgo}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
