import type { Feedback } from "../types";

/**
 * Testimonials/Feedbacks configuration
 * Centralized data for easy management
 */
export const FEEDBACKS: Feedback[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Product Manager",
    text: "Quy transforms vague requirements into pixel-perfect interfaces. The way he structured the component library saved us weeks of dev time.",
    color: "bg-[#F24E1E]", // Figma Red
    x: "10%",
    y: "20%",
    initials: "AM",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Engineering Lead",
    text: "Cleanest code I've seen from a designer-dev hybrid. His understanding of React hooks and animation performance is top-tier.",
    color: "bg-[#0ACF83]", // Figma Green
    x: "60%",
    y: "10%",
    initials: "SC",
  },
  {
    id: 3,
    name: "David Kim",
    role: "CEO @ StartUp",
    text: "The 'wow' factor he added to our landing page directly increased our conversion rate by 15%. Highly recommended!",
    color: "bg-[#1ABCFE]", // Figma Blue
    x: "30%",
    y: "60%",
    initials: "DK",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Senior Designer",
    text: "Collaborating with Quy is a breeze. He speaks 'design' fluently and respects the grid system meticulously.",
    color: "bg-[#A259FF]", // Figma Purple
    x: "70%",
    y: "50%",
    initials: "EW",
  },
];

/**
 * Active viewers data for the widget
 */
export const ACTIVE_VIEWERS = [
  { color: "bg-[#F24E1E]", initial: "AM", delay: 0.6 },
  { color: "bg-[#0ACF83]", initial: "SC", delay: 0.7 },
  { color: "bg-[#1ABCFE]", initial: "DK", delay: 0.8 },
  { color: "bg-[#A259FF]", initial: "EW", delay: 0.9 },
  { color: "bg-gray-500", initial: "+4", delay: 1.0 },
];

/**
 * Reaction emojis for the palette widget
 */
export const REACTION_EMOJIS = ["🔥", "👍", "❤️", "🎉", "👀"];
