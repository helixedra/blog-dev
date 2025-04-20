import React from "react";
import { User } from "@/app/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { RiChat1Line, RiHeartLine } from "react-icons/ri";
import { Button } from "@/components/shared/Button";
import CommentForm from "./CommentForm";

type CommentTree = {
  id: number;
  comment: string;
  createdAt: Date;
  author: User;
  parentId?: number | null;
  children: CommentTree[];
};

export default function CommentItem({
  comment,
  userId,
  postId,
  commentId,
}: {
  comment: CommentTree;
  userId: number;
  postId: number;
  commentId?: number;
}) {
  const [replayVisibility, setReplyVisibility] = React.useState(false);

  const {
    author: { fullName, username, avatarUrl },
    comment: commentText,
    createdAt,
    id,
    parentId,
    children,
  } = comment;

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
      {/*DEV IDS*/}
      {/* <div className="text-xs">
        <span className="pr-2">ID : {id}</span>
        <span>Parent ID : {parentId}</span>
      </div> */}
      {/*DEV IDS*/}
      <div>
        <div className="flex pl-7 mt-1 items-center gap-2">
          <Button variant="ghost" size="xs" className="gap-1 text-zinc-500">
            <RiHeartLine className="-mt-0.5" />
            12
          </Button>
          <Button
            variant="ghost"
            size="xs"
            className="gap-1 text-zinc-500"
            onClick={() => setReplyVisibility((prev) => !prev)}
          >
            <RiChat1Line className="-mt-0.5" />
            Reply
          </Button>
        </div>
        {replayVisibility && (
          <div className="mt-2 ml-6">
            <CommentForm
              postId={postId}
              userId={userId}
              commentId={commentId}
              parentId={id ?? undefined}
              onClose={() => setReplyVisibility(false)}
            />
          </div>
        )}
      </div>

      {children && children.length > 0 && (
        <div className="ml-2 pl-1 border-l border-zinc-200">
          {children.map((child) => (
            <CommentItem
              key={child.id}
              comment={child}
              userId={userId}
              postId={postId}
              commentId={child.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
