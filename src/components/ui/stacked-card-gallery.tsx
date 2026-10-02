"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: number | string;
  title: string;
  image: string;
}

interface StackedCardGalleryProps {
  items: GalleryItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const StackedCardGallery = ({
  items,
  title = "In the Spotlight",
  subtitle = "MEDIA",
  description = "Glimpses from our events, workshops, mentorship sessions, and startup milestones. Hover or click to explore.",
  buttonText = "GET IN TOUCH",
  onButtonClick,
  className,
}: StackedCardGalleryProps) => {
  const [cards, setCards] = useState(items);
  const [activeId, setActiveId] = useState<number | string>(items[0]?.id);

  // Rotate the stack when clicking top card or thumbnails
  const handleCardClick = (id: number | string) => {
    setActiveId(id);
    setCards((prevCards) => {
      const index = prevCards.findIndex((c) => c.id === id);
      if (index === -1) return prevCards;
      const newArray = [...prevCards];
      const [selected] = newArray.splice(index, 1);
      newArray.push(selected); // moves selected card to front top
      return newArray;
    });
  };

  return (
    <div className={cn("w-full bg-black text-white p-8 md:p-12 rounded-2xl", className)}>
      {/* Top Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          {subtitle && (
            <div className="flex items-center space-x-2 text-xs tracking-widest text-orange-500 uppercase font-mono">
              <span className="w-4 h-[1px] bg-orange-500 inline-block" />
              <span>{subtitle}</span>
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight font-bold">
            {title.split(" ")[0]}{" "}
            <span className="italic font-normal text-orange-500">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg">
            {description}
          </p>

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="inline-flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-md transition duration-200 shadow-lg shadow-orange-950/40"
            >
              <span>✉</span>
              <span>{buttonText}</span>
            </button>
          )}
        </div>

        {/* Right Column: Stacked Cards Animation */}
        <div className="relative h-80 md:h-96 w-full flex items-center justify-center">
          <div className="relative w-64 h-80 md:w-72 md:h-96">
            <AnimatePresence>
              {cards.map((card, index) => {
                const isTop = index === cards.length - 1;
                // Calculate rotational tilt and offset for stacked card effect
                const rotation = (index - (cards.length - 1)) * -6;
                const translateX = (index - (cards.length - 1)) * -12;

                return (
                  <motion.div
                    key={card.id}
                    onClick={() => handleCardClick(card.id)}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      rotate: rotation,
                      x: translateX,
                      zIndex: index,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: rotation + 3,
                      transition: { duration: 0.2 },
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute inset-0 cursor-pointer rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-neutral-900"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-neutral-900">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <motion.div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative h-36 md:h-44 rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 bg-neutral-900",
                isActive
                  ? "border-orange-500 ring-2 ring-orange-500/30"
                  : "border-white/10 opacity-70 hover:opacity-100"
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 flex items-end">
                <span className="text-xs font-medium text-neutral-200 line-clamp-1">
                  {item.title}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};