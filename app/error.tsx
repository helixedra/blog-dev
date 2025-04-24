"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/shared/Button";
import Link from "next/link";
import { useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error - Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-red-100 text-red-600 px-2 py-1 rounded mb-4">
        Error
      </div>
      <h2 className="text-3xl! text-center font-bold text-red-700  mb-8">
        {error.message}
      </h2>

      <div className="flex flex-col items-center gap-4">
        <Button
          variant="outline"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Link className="hover:underline" href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
