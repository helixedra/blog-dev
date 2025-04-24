import React from "react";

export default function Tag({ tag }: { tag: string }) {
  return <div className="bg-zinc-100 text-sm px-2 py-1 rounded">#{tag}</div>;
}
