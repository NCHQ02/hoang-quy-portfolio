/**
 * Browser tabs configuration
 */

export interface TabData {
  id: string;
  title: string;
  icon?: string;
  isActive?: boolean;
  responsive?: "always" | "sm" | "md" | "lg";
}

export const BROWSER_TABS: TabData[] = [
  {
    id: "portfolio-2026",
    title: "Portfolio 2026",
    icon: "gradient",
    isActive: true,
    responsive: "always",
  },
  {
    id: "old-projects-2025",
    title: "Old Projects (2025)",
    icon: "gray",
    isActive: false,
    responsive: "sm",
  },
  {
    id: "publicis-2024",
    title: "Publicis Groupe (2024)",
    icon: "gray",
    isActive: false,
    responsive: "md",
  },
  {
    id: "career-2023",
    title: "Start Career Path (2023)",
    icon: "gray",
    isActive: false,
    responsive: "lg",
  },
];

export const DEFAULT_URL = "hoangquy.design/portfolio";
