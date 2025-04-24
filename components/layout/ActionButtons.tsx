"use client";
import {
  RiQuillPenAiFill,
  RiSearchLine,
  RiNotification3Line,
  RiCloseLine,
} from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { useDebounce } from "react-use";
import { Button } from "../shared/Button";
import { api } from "@/lib/api";
import { Post } from "@/app/generated/prisma";

export default function ActionButtons() {
  const [searchForm, setSearchForm] = useState(false);
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const preSearch = async (query: string): Promise<Post[]> => {
    if (!query || query.length < 3) return [];
    return await api
      .post(`/search`, { query, limit: 10 })
      .then((res) => res.json());
  };

  useDebounce(
    async () => {
      if (search.length >= 3) {
        const results = await preSearch(search);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    },
    1000,
    [search]
  );

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  const handleSearchPage = (query: string) => {
    if (!query) return;
    handleSearchClose();
    router.push(`/search/${query}`);
  };

  const handleSearchClose = () => {
    setSearchForm(false);
    setSearch("");
    setSearchResults([]);
  };

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
        <button
          className="flex items-center justify-center h-8 w-8 cursor-pointer bg-zinc-100 text-sm font-semibold text-black rounded-full hover:opacity-80 hover:scale-110 transition"
          onClick={() => router.push("/posts/new")}
        >
          <RiNotification3Line size={18} />
        </button>
      </div>

      {searchForm && (
        <div className="fixed items-center gap-4 w-screen left-0 top-0 h-screen backdrop-blur-sm bg-black/40 z-50">
          <div className="flex w-full justify-center translate-y-3 items-center text-center text-base">
            <div className="flex gap-2 w-2/3">
              <div className="relative w-full">
                <div className="flex items-center gap-2 w-full relative">
                  <RiSearchLine
                    size={16}
                    className="text-zinc-700 absolute left-3 top-1/2 -translate-y-1/2"
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    className=" bg-white w-full py-2 px-4 rounded-md pl-10"
                    placeholder="Search"
                    name="search"
                    ref={searchInputRef}
                    onChange={(e) => handleSearch(e.target.value)}
                    value={search}
                  />
                </div>
                {searchResults.length > 0 && (
                  <div className="w-full absolute flex-col top-11 gap-2 bg-white px-2 py-2 rounded-md z-10">
                    <ul role="list" className="flex flex-col w-full">
                      {searchResults.map((post: Post, index: number) => (
                        <li
                          key={post.id + index}
                          className="flex items-center w-full"
                        >
                          <a
                            href={`/posts/${post.id}`}
                            className="w-full flex items-center text-sm text-left not-last:mt-2 pt-2 px-2 pb-2 not-first:mb-2 not-first:pt-2 not-last:pb-2 not-last:border-b not-last:border-zinc-200 hover:opacity-80 hover:bg-zinc-100 rounded-md"
                          >
                            <RiSearchLine
                              size={14}
                              className="text-zinc-400 mr-2"
                            />
                            {post.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Button onClick={() => handleSearchPage(search)}>Search</Button>
            </div>
            <button
              className="absolute right-4 top-2 cursor-pointer"
              onClick={handleSearchClose}
            >
              <RiCloseLine size={24} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
