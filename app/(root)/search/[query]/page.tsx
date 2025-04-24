"use client";
import { RiLoader4Line, RiSearchLine } from "react-icons/ri";
import React from "react";
import { Post } from "@/app/generated/prisma";
import { useParams } from "next/navigation";
import { Button } from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function SearchPage() {
  const params = useParams();
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // Separate state for input and for triggering the search
  const [inputValue, setInputValue] = React.useState<string>(
    (params.query as string) || ""
  );
  const [search, setSearch] = React.useState<string>(
    (params.query as string) || ""
  );

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSearchPage = () => {
    setSearch(inputValue.trim());
  };

  const { data, isLoading } = useQuery({
    queryKey: ["search", search],
    queryFn: () =>
      api
        .post(`/search`, { query: search, limit: null })
        .then((res) => res.json()),
    enabled: !!search,
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 w-full">
        <div className="flex items-center gap-2 w-full relative">
          <Input
            type="text"
            autoComplete="off"
            size="lg"
            placeholder="Search"
            name="search"
            ref={searchInputRef}
            onChange={(e) => handleInputChange(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchPage();
              }
            }}
            iconBefore={<RiSearchLine size={16} className="text-zinc-700" />}
          />
        </div>
        <Button size="lg" onClick={handleSearchPage}>
          Search
        </Button>
      </div>
      <SearchResults results={data || []} loading={isLoading} />
    </div>
  );
}

export function SearchResults({
  results,
  loading,
}: {
  results: Post[];
  loading: boolean;
}) {
  return (
    <div>
      <div>Search Results</div>
      {loading ? (
        <div className="flex items-center justify-center mt-12">
          <div className="animate-spin">
            <RiLoader4Line size={32} />
          </div>
        </div>
      ) : (
        <div className="mt-12">
          <div className="space-y-4">
            {results.length === 0 ? (
              <div className="text-lg text-center text-zinc-500">
                No results found
              </div>
            ) : (
              <></>
            )}
            {results.map((result) => (
              <div key={result.id}>
                <div className="text-lg font-semibold">
                  <Link
                    href={`/post/${result.id}`}
                    className="hover:text-zinc-700 hover:underline"
                  >
                    {result.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
