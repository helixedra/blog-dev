"use client";
import { RiQuillPenAiFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function ActionButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-2">
      <button
        className="flex items-center justify-center h-10 w-10 pl-1 cursor-pointer bg-black text-sm font-semibold text-white rounded-full hover:opacity-80 hover:scale-110 transition"
        onClick={() => router.push("/posts/new")}
      >
        <RiQuillPenAiFill size={18} />
      </button>
    </div>
  );
}
