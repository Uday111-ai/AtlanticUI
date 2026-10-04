import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-orange-500" />
            <span className="font-extrabold text-lg tracking-tight text-white">
              AtlanticUI
            </span>
          </Link>
          <span className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
            v0.1.0
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/chefcookscode/AtlanticUI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 px-3 py-1.5 rounded-lg transition"
          >
            <FaGithub className="h-4 w-4"/>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}