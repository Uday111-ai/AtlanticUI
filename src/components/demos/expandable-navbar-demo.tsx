import React from "react";
import { ExpandableNavbar } from "@/components/ui/expandable-navbar";

const menuItems = [
  {
    title: "Product",
    subtitle: "Explore features",
    href: "#",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=60",
  },
  {
    title: "Blocks",
    subtitle: "UI components",
    href: "#",
    icon: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=150&auto=format&fit=crop&q=60",
  },
  {
    title: "Templates",
    subtitle: "Pre-built layouts",
    href: "#",
    icon: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=150&auto=format&fit=crop&q=60",
  },
  {
    title: "Pricing",
    subtitle: "Plans & tiers",
    href: "#",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=60",
  },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
  { label: "Blog", href: "#" },
];

export function ExpandableNavbarDemo() {
  return (
    <div className="w-full py-12 flex justify-center items-start min-h-[420px]">
      <ExpandableNavbar
        brandLogo={<span className="text-xl font-black italic tracking-tight">AtlanticUI</span>}
        menuItems={menuItems}
        socialLinks={socialLinks}
      />
    </div>
  );
}