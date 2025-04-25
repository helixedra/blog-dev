import Notifications from "@/components/notifications/Notifications";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Notifications - Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default async function NotificationsPage() {
  const { userId } = await auth();
  return <Notifications userId={userId} />;
}
