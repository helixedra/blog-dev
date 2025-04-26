import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-between text-sm p-4 border-t border-zinc-100">
      <div>
        Copyright © {new Date().getFullYear()} Dev Blog.
        <div className="text-zinc-500">All rights reserved.</div>
      </div>
      <div className="flex flex-col md:flex-row items-end">
        <div>Sup nerds!</div>
        <div className="ml-2">
          <a
            href="https://github.com/helixedra/blog-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
