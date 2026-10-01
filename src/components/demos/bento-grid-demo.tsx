import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
  Layers,
} from "lucide-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10" />
);

const items = [
  {
    title: "High Performance Animations",
    description: "Driven by Framer Motion hardware-accelerated transforms.",
    header: <Skeleton />,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TypeScript Native",
    description: "Fully typed components out of the box.",
    header: <Skeleton />,
    icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tailwind CSS Powered",
    description: "Seamless class merging with zero bundle overhead.",
    header: <Skeleton />,
    icon: <Layers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Distribution",
    description: "Designed for modern Next.js App Router applications.",
    header: <Skeleton />,
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Enterprise Ready",
    description: "Built-in dark mode support and accessibility helpers.",
    header: <Skeleton />,
    icon: <ShieldCheck className="h-4 w-4 text-neutral-500" />,
  },
];