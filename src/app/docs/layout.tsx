import React from "react";
import { DocsHeader } from "@/components/website/docs-header";
import { DocsSidebar } from "@/components/website/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <DocsHeader />
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        <DocsSidebar />
        <main className="flex-1 p-8 md:p-12 overflow-y-auto max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}