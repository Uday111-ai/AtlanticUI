export const spotlightCode = `"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  children,
  className = "",
  fill = "rgba(255, 255, 255, 0.15)",
}: {
  children?: React.ReactNode;
  className?: string;
  fill?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-8 transition-colors duration-300",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, \${fill}, transparent 40%)\`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};`;

export const bentoGridCode = `"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-400">
          {description}
        </div>
      </div>
    </motion.div>
  );
};`;

export const stackedGalleryCode = `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: number | string;
  title: string;
  image: string;
}

export const StackedCardGallery = ({
  items,
  title = "In the Spotlight",
  subtitle = "MEDIA",
  description = "Glimpses from our events, workshops, mentorship sessions, and startup milestones.",
  buttonText = "GET IN TOUCH",
}: {
  items: GalleryItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
}) => {
  const [cards, setCards] = useState(items);
  const [activeId, setActiveId] = useState<number | string>(items[0]?.id);

  const handleCardClick = (id: number | string) => {
    setActiveId(id);
    setCards((prev) => {
      const index = prev.findIndex((c) => c.id === id);
      if (index === -1) return prev;
      const copy = [...prev];
      const [selected] = copy.splice(index, 1);
      copy.push(selected);
      return copy;
    });
  };

  return (
    <div className="w-full bg-black text-white p-8 md:p-12 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          {subtitle && (
            <div className="flex items-center space-x-2 text-xs tracking-widest text-orange-500 uppercase font-mono">
              <span className="w-4 h-[1px] bg-orange-500 inline-block" />
              <span>{subtitle}</span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            {title.split(" ")[0]} <span className="italic font-normal text-orange-500">{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-lg">{description}</p>
          {buttonText && (
            <button className="bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs px-6 py-3 rounded-md uppercase">
              {buttonText}
            </button>
          )}
        </div>
        <div className="relative h-80 w-full flex items-center justify-center">
          <div className="relative w-64 h-80">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                animate={{
                  rotate: (index - (cards.length - 1)) * -6,
                  x: (index - (cards.length - 1)) * -12,
                  zIndex: index,
                }}
                className="absolute inset-0 cursor-pointer rounded-2xl overflow-hidden border-2 border-white/10"
              >
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};`;