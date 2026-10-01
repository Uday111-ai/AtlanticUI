"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
}

export const ComponentPreview = ({ children, code }: ComponentPreviewProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden">
      {/* Tab Controls Bar */}
      <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/50 px-4 py-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("preview")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
              activeTab === "preview"
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
              activeTab === "code"
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Code
          </button>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white transition"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Tab Body */}
      <div className="p-6">
        {activeTab === "preview" ? (
          <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-neutral-800/60 bg-black/40 p-4">
            {children}
          </div>
        ) : (
          <div className="max-h-[450px] overflow-y-auto rounded-lg text-sm">
            <SyntaxHighlighter
              language="typescript"
              style={atomDark}
              customStyle={{ margin: 0, padding: "1rem", background: "#0a0a0a" }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};