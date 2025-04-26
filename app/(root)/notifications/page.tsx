import Notifications from "@/components/notifications/Notifications";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications - Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default async function NotificationsPage() {
  const { userId } = await getAuthenticatedUser();
  return <Notifications userId={userId} />;
}
