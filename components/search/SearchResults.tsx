"use client";
import { Post } from "@/generated/prisma";
import Link from "next/link";
import { RiLoader4Line } from "react-icons/ri";

export default function SearchResults({
  results,
  loading,
}: {
  results: Post[];
  loading: boolean;
}) {
  return (
    <div className="w-full">
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
