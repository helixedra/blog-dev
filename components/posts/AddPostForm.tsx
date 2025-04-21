"use client";
import React from "react";
import { Button } from "../shared/Button";
import { RiAddFill, RiQuillPenAiFill, RiCloseFill } from "react-icons/ri";

export default function AddPostForm({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="relative w-full  py-4 mb-4">
      {!visible ? (
        <Button onClick={() => setVisible((prev) => !prev)} variant="default">
          <RiQuillPenAiFill className="-mt-0.5 mr-1" size={16} /> Add Post
        </Button>
      ) : (
        <Button
          onClick={() => setVisible((prev) => !prev)}
          className="absolute top-8 right-2"
          variant="ghost"
          size="sm"
        >
          <RiCloseFill className="-mt-0.5" size={16} />
        </Button>
      )}
      {visible && children}
    </div>
  );
}
