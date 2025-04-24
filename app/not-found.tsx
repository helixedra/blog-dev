import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found - Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center justify-center text-zinc-500">404</div>
      <h2 className="text-4xl font-bold">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="mt-4">
        Return Home
      </Link>
    </div>
  );
}
