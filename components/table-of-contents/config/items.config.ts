import type { TOCItem } from "../types";

/**
 * Table of Contents items configuration
 */
export const TOC_ITEMS: TOCItem[] = [
  { id: "01", title: "About", scriptText: "Me", href: "#about" },
  {
    id: "02",
    title: "Projects",
    scriptText: "Case Studies",
    href: "#projects",
  },
  { id: "03", title: "Skills", scriptText: "& Services", href: "#skills" },
  { id: "04", title: "Social", scriptText: "Proof", href: "#testimonials" },
  { id: "05", title: "Resume", scriptText: "CV", href: "#resume" },
  { id: "06", title: "Contact", scriptText: "Me", href: "#contact" },
];
