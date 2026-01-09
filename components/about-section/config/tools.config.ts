/**
 * Tools Configuration
 * Easy-to-manage list of design and development tools
 *
 * You can use either:
 * 1. Text-based icons: { name, label, bg, txt }
 * 2. Image-based icons: { name, icon }
 */

export interface Tool {
  name: string;
  label?: string; // Text label (e.g., "Ai", "Ps")
  bg?: string; // Background color
  txt?: string; // Text color
  icon?: string; // External icon URL
}

// Design Tools
export const DESIGN_TOOLS: Tool[] = [
  {
    name: "Claude AI",
    icon: "https://img.icons8.com/fluency/48/claude-ai.png",
    label: "Claude AI",
  },
  {
    name: "Adobe Experience Platform",
    icon: "https://img.icons8.com/doodle/96/adobe-logo.png",
    label: "Adobe Experience Platform",
  },
  {
    name: "Zalo Platform",
    icon: "https://img.icons8.com/color/96/zalo.png",
    label: "Zalo Platform",
  },
  {
    name: "Salesforce",
    icon: "https://img.icons8.com/color/96/salesforce.png",
    label: "Salesforce",
  },
  {
    name: "WordPress",
    icon: "https://img.icons8.com/3d-fluency/94/wordpress.png",
    label: "WordPress",
  },
  {
    name: "Google Analytics",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-google-analytics-lets-you-measure-your-advertising-roi-logo-color-tal-revivo.png",
    label: "Google Platform",
  },
  {
    name: "Google Tag Manager",
    icon: "https://img.icons8.com/plasticine/100/google-tag-manager.png",
    label: "Google Platform",
  },

  {
    name: "Google Looker Studio",
    icon: "https://img.icons8.com/color/96/google-looker.png",
    label: "Google Looker Studio",
  },
  {
    name: "Power BI",
    icon: "https://img.icons8.com/color/96/power-bi.png",
    label: "Power BI",
  },
  {
    name: "Python Programming",
    icon: "https://img.icons8.com/color/96/python--v1.png",
    label: "Python Programming",
  },
  {
    name: "SQL Query",
    icon: "https://img.icons8.com/external-soft-fill-juicy-fish/60/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
    label: "SQL Query",
  },
  {
    name: "Google Firebase",
    icon: "https://img.icons8.com/color/96/google-firebase-console.png",
    label: "Google Firebase",
  },

  {
    name: "n8n Automaion",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8b13FupbJiqRDcYQbK4BfEcAJ6S7eA8I5oQ&s",
    label: "n8n Automaion",
  },
  {
    name: "HTML",
    icon: "https://img.icons8.com/color/96/html-5--v1.png",
    label: "HTML",
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/color/96/css3.png",
    label: "CSS",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/96/tailwindcss.png",
    label: "Tailwind CSS",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/96/react-native.png",
    label: "React",
  },
];

// Development Tools
export const DEV_TOOLS: Tool[] = [
  {
    name: "VS Code",
    icon: "https://img.icons8.com/color/96/visual-studio-code-2019.png",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/96/react-native.png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/96/typescript.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/96/tailwindcss.png",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/color/96/nodejs.png",
  },
  {
    name: "Git",
    icon: "https://img.icons8.com/color/96/git.png",
  },
];

// All Tools Combined
export const ALL_TOOLS = [...DESIGN_TOOLS, ...DEV_TOOLS];
