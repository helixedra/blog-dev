import React from "react";
import { Metadata } from "next";
import Search from "@/components/search/Search";

export const metadata: Metadata = {
  title: "Search - Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default function SearchPage() {
  return <Search />;
}
