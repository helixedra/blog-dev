import React from "react";
import { Comment, User } from "@/app/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { RiChat1Line, RiHeartLine } from "react-icons/ri";
import { Button } from "@/components/shared/Button";

export default function CommentItem({
  comment,
}: {
  comment: Comment & { author: User };
}) {
  const {
    author: { fullName, username, avatarUrl },
  } = comment;
  const { comment: commentText, createdAt, id, parentId } = comment;

  return (
    <div className="flex flex-col py-4 px-2">
      <div className="flex items-center p-0 gap-2">
        <Image
          width={32}
          height={32}
          src={avatarUrl ?? ""}
          alt={username}
          className="w-6 h-6 rounded-full"
        />
        <div className="flex text-sm items-center gap-2">
          <Link
            href={`/profile/${username}`}
            className="font-semibold text-zinc-700 hover:text-zinc-700 hover:underline"
          >
            {fullName}
          </Link>
          <span className="text-zinc-500 text-xs">
            {formatDate(new Date(createdAt)).timeAgo}
          </span>
        </div>
      </div>
      <div className="text-base pl-8 mt-1">{commentText}</div>
      <div className="flex pl-7 mt-1 items-center gap-2">
        <Button variant="ghost" size="xs" className="gap-1 text-zinc-500">
          <RiHeartLine className="-mt-0.5" />
          12
        </Button>
        <Button variant="ghost" size="xs" className="gap-1 text-zinc-500">
          <RiChat1Line className="-mt-0.5" />
          Reply
        </Button>
      </div>
    </div>
  );
}
