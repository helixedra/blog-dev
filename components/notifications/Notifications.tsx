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

  // Notification templates
  const templates = {
    post_published: (postTitle: string, postId: number) =>
      `Your post <a href="/posts/${postId}" class="font-semibold">${postTitle}</a> has been published 🎉`,
    post_rejected: (postTitle: string, postId: number) =>
      `Your post <a href="/posts/${postId}" class="font-semibold">${postTitle}</a> has been rejected 🚫`,
    post_sent_for_review: (postTitle: string, postId: number) =>
      `Your post <a href="/posts/${postId}" class="font-semibold">${postTitle}</a> has been sent for review`,
    new_post_on_review: (postTitle: string, postId: number) =>
      `A new post <a href="/posts/${postId}" class="font-semibold">${postTitle}</a> has been sent for review`,
    comment_liked: (
      userName: string,
      postTitle: string,
      postId: number,
      name: string
    ) =>
      `<a href="/user/${userName}" class="font-semibold">${name}</a> liked your comment on <a href="/posts/${postId}" class="font-semibold">post</a> ${postTitle}`,
    comment_replied: (
      userName: string,
      postTitle: string,
      postId: number,
      name: string
    ) =>
      `<a href="/user/${userName}" class="font-semibold">${name}</a> replied to your comment on <a href="/posts/${postId}" class="font-semibold">post</a> ${postTitle}`,
    follow: (userName: string, name: string) =>
      `<a href="/user/${userName}" class="font-semibold">${name}</a> now followed you`,
    like: (userName: string, postId: number, name: string) =>
      `<a href="/user/${userName}" class="font-semibold">${name}</a> liked your <a href="/posts/${postId}" class="font-semibold">post</a>`,
  };

  const messageBuilder = (notification: NotificationData) => {
    const t = notification.title.toLowerCase();
    const n = notification;

    if (t === "post_published") {
      return templates.post_published(
        n.relatedPost?.title || "",
        n.relatedPost?.id || 0
      );
    }
    if (t === "post_rejected") {
      return templates.post_rejected(
        n.relatedPost?.title || "",
        n.relatedPost?.id || 0
      );
    }

    if (t === "post_sent_for_review") {
      return templates.post_sent_for_review(
        n.relatedPost?.title || "",
        n.relatedPost?.id || 0
      );
    }

    if (t === "new_post_on_review") {
      return templates.new_post_on_review(
        n.relatedPost?.title || "",
        n.relatedPost?.id || 0
      );
    }

    if (t === "comment_liked") {
      return templates.comment_liked(
        n.relatedUser?.username || "",
        n.relatedPost?.title || "",
        n.relatedPost?.id || 0,
        n.relatedUser?.name || ""
      );
    }

    if (t === "comment_replied") {
      return templates.comment_replied(
        n.relatedUser?.username || "",
        n.relatedPost?.title || "",
        n.relatedPost?.id || 0,
        n.relatedUser?.name || ""
      );
    }

    if (t === "new_follower") {
      return templates.follow(
        n.relatedUser?.username || "",
        n.relatedUser?.name || ""
      );
    }

    if (t === "post_liked") {
      return templates.like(
        n.relatedUser?.username || "",
        n.relatedPost?.id || 0,
        n.relatedUser?.name || ""
      );
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
                {/* <Link
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
                </Link> */}
                <div
                  className="text-zinc-800 ml-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      messageBuilder(notification) || notification.message,
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
