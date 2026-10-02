import React from "react";
import { StackedCardGallery } from "@/components/ui/stacked-card-gallery";

const mediaItems = [
  {
    id: 1,
    title: "Student Startup Award 2025",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "National Electronics Workshop",
    id: 2,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "AI & Innovation Lab Session",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Hardware Prototype Testing",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60",
  },
];

export function StackedGalleryDemo() {
  return (
    <StackedCardGallery
      items={mediaItems}
      title="In the Spotlight"
      subtitle="MEDIA"
      description="Glimpses from our events, workshops, mentorship sessions, and startup milestones. Hover over to know more."
      buttonText="GET IN TOUCH"
    />
  );
}