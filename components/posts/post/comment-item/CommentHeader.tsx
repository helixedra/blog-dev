import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

export function CommentHeader({
  image,
  username,
  name,
  createdAt,
}: {
  image: string;
  username: string;
  name: string;
  createdAt: Date;
}) {
  return (
    <div className={`flex relative pl-0 h-full items-center p-0 gap-2`}>
      <Image
        width={32}
        height={32}
        src={image ?? ""}
        alt={username ?? ""}
        className="w-5 h-5 rounded-full object-cover"
      />
      <div className="flex text-sm items-center gap-2">
        <Link
          href={`/profile/${username}`}
          className="font-semibold text-zinc-700 hover:text-zinc-700 hover:underline"
        >
          {name}
        </Link>
        <span className="text-zinc-500 text-xs">
          {formatDate(createdAt).timeAgo}
        </span>
      </div>
    </div>
  );
}
