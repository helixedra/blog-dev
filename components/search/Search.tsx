"use client";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { useParams } from "next/navigation";
import { Button } from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import SearchResults from "@/components/search/SearchResults";

export default function Search() {
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
