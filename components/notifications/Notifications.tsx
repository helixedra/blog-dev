"use client";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Notification } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import NotificationItem from "./NotificationItem";

export default function Notifications({ userId }: { userId: string | null }) {
  const router = useRouter();
  const [visibleNotifications, setVisibleNotifications] = React.useState<
    string[]
  >([]);
  const queryClient = useQueryClient();

  // If user is not logged in, redirect to sign-in
  React.useEffect(() => {
    if (!userId) {
      router.push("/sign-in");
    }
  }, [userId, router]);

  if (!userId) {
    return null;
  }

  // Get notifications
  const { data: notifications, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => api.get("notifications").then((res) => res.json()),
    enabled: !!userId,
  });

  // Get notifications status (ids of unread notifications)
  const notificationsStatus =
    notifications
      ?.map((notification: Notification) =>
        !notification.read ? { id: notification.id, read: false } : null
      )
      .filter(Boolean) || [];

  // Handle visible notifications
  const handleVisible = React.useCallback((id: string) => {
    setVisibleNotifications((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }, []);

  // Mutation for marking notifications as read
  const mutation = useMutation({
    mutationKey: ["notifications"],
    mutationFn: ({ ids }: { ids: string[] }) =>
      api.patch("notifications/read", { ids }),
    onSuccess: () => {
      setVisibleNotifications([]);
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["notifications_count"] });
    },
  });

  // Update notifications status when visible notifications change
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (visibleNotifications.length > 0) {
      timeoutId = setTimeout(() => {
        updateNotificationsStatus();
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleNotifications]);

  // Update notifications status
  const updateNotificationsStatus = async () => {
    // Select only the ids that are in notificationsStatus and visibleNotifications
    const unreadVisibleIds = notificationsStatus
      .map((n: { id: string | number }) => n.id.toString())
      .filter((id: string) => visibleNotifications.includes(id));

    if (unreadVisibleIds.length === 0) return;

    // Update notifications status
    mutation.mutate({ ids: unreadVisibleIds });
  };

  return (
    <div className="w-full">
      <div className="text-2xl mb-4">Notifications</div>
      <ul className="w-full">
        {isLoading && <div>Loading...</div>}
        {notifications?.length === 0 && <div>No notifications</div>}
        {notifications?.map((notification: Notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onVisible={handleVisible}
          />
        ))}
      </ul>
    </div>
  );
}
