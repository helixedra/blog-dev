import Notifications from "@/components/notifications/Notifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications - Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default function NotificationsPage() {
  return <Notifications />;
}
