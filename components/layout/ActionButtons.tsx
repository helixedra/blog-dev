"use client";
import React from "react";
import NotificationsButton from "./NotificationsButton";
import { RiQuillPenAiFill, RiSearchLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

import SearchBar from "./SearchBar";

export default function ActionButtons() {
  const [searchForm, setSearchForm] = React.useState(false);

  const router = useRouter();

  return (
    <>
      <div className="flex items-center gap-4 mx-auto w-fit absolute left-1/2 -translate-x-1/2">
        <button
          className="flex items-center justify-center h-8 w-8 cursor-pointer bg-zinc-100 text-sm font-semibold text-black rounded-full hover:opacity-80 hover:scale-110 transition"
          onClick={() => setSearchForm(!searchForm)}
        >
          <RiSearchLine size={18} />
        </button>
        <button
          className="flex items-center justify-center h-10 w-10 pl-1 cursor-pointer bg-black text-sm font-semibold text-white rounded-full hover:opacity-80 hover:scale-110 transition"
          onClick={() => router.push("/posts/new")}
        >
          <RiQuillPenAiFill size={18} />
        </button>
        <NotificationsButton />
      </div>

      {searchForm && (
        <SearchBar searchForm={searchForm} setSearchForm={setSearchForm} />
      )}
    </>
  );
}
