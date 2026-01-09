import React from "react";
import type { DockItemData } from "../types";
import {
  HomeIcon,
  AboutIcon,
  ProjectsIcon,
  SkillsIcon,
  TestimonialsIcon,
  ResumeIcon,
  ContactIcon,
} from "../icons";

/**
 * Dock items configuration
 * Centralized configuration makes it easy to add/remove/modify dock items
 */
export const DOCK_ITEMS: DockItemData[] = [
  { id: "hero", label: "Home", shortLabel: "Home", icon: <HomeIcon /> },
  { id: "about", label: "About Me", shortLabel: "About", icon: <AboutIcon /> },
  {
    id: "projects",
    label: "Projects",
    shortLabel: "Work",
    icon: <ProjectsIcon />,
  },
  { id: "skills", label: "Skills", shortLabel: "Skills", icon: <SkillsIcon /> },
  {
    id: "testimonials",
    label: "Testimonials",
    shortLabel: "Social",
    icon: <TestimonialsIcon />,
  },
  { id: "resume", label: "Resume", shortLabel: "Resume", icon: <ResumeIcon /> },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "Contact",
    icon: <ContactIcon />,
  },
];
