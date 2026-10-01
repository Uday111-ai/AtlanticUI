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

// export const spotlightCode = `"use client";

// import React, { useRef, useState } from "react";
// import { cn } from "@/lib/utils";

// export const Spotlight = ({
//   children,
//   className = "",
//   fill = "rgba(255, 255, 255, 0.15)",
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   fill?: string;
// }) => {
//   const divRef = useRef<HTMLDivElement>(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [opacity, setOpacity] = useState(0);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!divRef.current) return;
//     const rect = divRef.current.getBoundingClientRect();
//     setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   return (
//     <div
//       ref={divRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setOpacity(1)}
//       onMouseLeave={() => setOpacity(0)}
//       className={cn(
//         "relative flex items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-8 transition-colors duration-300",
//         className
//       )}
//     >
//       <div
//         className="pointer-events-none absolute -inset-px transition-opacity duration-300"
//         style={{
//           opacity,
//           background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, \${fill}, transparent 40%)\`,
//         }}
//       />
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };`;