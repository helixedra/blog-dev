import React from "react";
import { formatDate } from "@/lib/formatDate";
import { Notification, User, Post, Comment } from "@/generated/prisma";
import { useInView } from "react-intersection-observer";

interface NotificationData extends Notification {
  relatedUser: User | null;
  relatedPost: Post | null;
  relatedComment: Comment | null;
}

export default function NotificationItem({
  notification,
  onVisible,
}: {
  notification: Notification;
  onVisible?: (id: string) => void;
}) {
  const { ref: notificationRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView && onVisible) {
      onVisible(notification.id.toString());
    }
  }, [inView, onVisible, notification.id]);

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
      `<a href="/user/${userName}" class="font-semibold">${name}</a> liked your comment on <a href="/posts/${postId}" class="font-semibold">${postTitle}</a>`,
    comment_replied: (
      userName: string,
      postTitle: string,
      postId: number,
      name: string
    ) =>
      `<a href="/user/${userName}" class="font-semibold">${name}</a> replied to your comment on post <a href="/posts/${postId}" class="font-semibold">${postTitle}</a>`,
    comment: (
      userName: string,
      postTitle: string,
      postId: number,
      name: string
    ) =>
      `<a href="/user/${userName}" class="font-semibold">${name}</a> left a comment on post <a href="/posts/${postId}" class="font-semibold">${postTitle}</a>`,
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

    if (t === "comment") {
      return templates.comment(
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
    <li
      ref={notificationRef}
      key={notification.id}
      className="flex flex-col w-full not-last:border-b border-black/10"
    >
      {notification.relatedUserId && (
        <div
          className={`flex items-center text-sm p-4 w-full  ${
            notification.read ? "opacity-50" : " bg-blue-50"
          }`}
        >
          <div
            className="text-zinc-800"
            dangerouslySetInnerHTML={{
              __html:
                messageBuilder(notification as NotificationData) ||
                notification.message,
            }}
          ></div>
          <div className="text-zinc-500 text-xs ml-auto">
            {formatDate(new Date(notification.createdAt)).timeAgo}
          </div>
        </div>
      )}
    </li>
  );
}
