"use client";
import React from "react";
import { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import Image from "next/image";

export default function Avatar({
  url,
  username,
}: {
  url: string;
  username: string;
}) {
  const [preview, setPreview] = React.useState<string | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [avatarUrl, setAvatarUrl] = React.useState(url);
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setPreview(data.url);
    console.log(data);
  };

  return (
    <div>
      <div
        className="w-32 h-32 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          width={500}
          height={500}
          src={preview || avatarUrl}
          alt={username}
          className="rounded absolute w-32 h-32 object-cover"
        />
        {isHovered && (
          <div className="absolute bottom-1 right-1">
            <label className="flex items-center justify-center cursor-pointer w-6 h-6 bg-black text-white rounded hover:bg-zinc-900">
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
              <RiEditLine size={16} />
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
