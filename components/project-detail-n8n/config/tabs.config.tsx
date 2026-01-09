import React from "react";
import type { Tab } from "../types";

/**
 * Tab configuration for N8N Project Detail
 * Centralized configuration makes it easy to add/remove/modify tabs
 */
export const tabs: Tab[] = [
  {
    id: 0,
    label: "Overview",
    icon: <span>📋</span>,
    color: "#ff4500",
  },
  {
    id: 1,
    label: "Social Media",
    icon: <span>📱</span>,
    color: "#E4405F",
  },
  {
    id: 2,
    label: "AI Agents",
    icon: <span>🤖</span>,
    color: "#8B5CF6",
  },
  {
    id: 3,
    label: "Office Ops",
    icon: <span>📋</span>,
    color: "#10B981",
  },
];

/**
 * Project metadata
 */
export const PROJECT_META = {
  title: "AUTOMATE EVERYTHING",
  subtitle: "WITH n8n + AI AGENTS",
  description:
    "Stop spending 5-10 hours/week copying data. I build intelligent workflows that research trends, generate content, and sync business data automatically.",
  fileName: "n8n_case_study.fig",
  efficiencyBoost: "85%",
} as const;

/**
 * CTA (Call to Action) configuration
 */
export const CTA_CONFIG = {
  title: "READY TO SCALE?",
  description:
    "Start like a solopreneur, scale like a team of 10. Get these workflow templates or hire me to build custom agents.",
  primaryButton: {
    text: "Download Workflow Templates",
    className: "bg-design-green text-black",
  },
  secondaryButton: {
    text: "Book a Free Audit",
    className: "bg-[#1e1e1e] border border-white/10 text-white",
    scrollTo: "contact",
  },
} as const;
