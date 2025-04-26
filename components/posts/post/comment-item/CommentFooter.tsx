import React from "react";
import { Button } from "@/components/shared/Button";
import { RiChat1Line, RiDeleteBin7Line } from "react-icons/ri";
import LikeComment from "../LikeComment";

export default function CommentFooter({
  comment,
  userId,
  setReplyVisibility,
  handleDeleteApprove,
}: {
  comment: Comment | any;
  userId: string | null;
  setReplyVisibility: any; // TYPE
  handleDeleteApprove: () => void;
}) {
  const { id, likes, likeCount, author } = comment as any;
  return (
    <div>
      <div className="flex px-1 py-1 bg-zinc-100 rounded-b-md items-center gap-2 w-full">
        <LikeComment
          commentId={id}
          userId={userId}
          likes={likes}
          likesCount={likeCount}
        />
        {userId && (
          <Button
            variant="ghost"
            size="xs"
            className="gap-1 text-zinc-500"
            onClick={() => setReplyVisibility((prev: boolean) => !prev)}
          >
            <RiChat1Line className="-mt-0.5" />
            Reply
          </Button>
        )}
        <div className="flex items-center gap-1">
          {author.id === userId && (
            <Button
              variant="ghost"
              size="xs"
              className="gap-1 text-zinc-500"
              onClick={handleDeleteApprove}
            >
              <RiDeleteBin7Line />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
