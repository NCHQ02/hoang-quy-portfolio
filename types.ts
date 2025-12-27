// Shared types for the application

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Placeholder for icon name or path
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export enum ViewState {
  CHAT = "chat",
  PROJECTS = "projects",
  SETTINGS = "settings",
}

export enum Role {
  USER = "user",
  MODEL = "model",
}

export interface Message {
  id: string;
  role: Role;
  text: string;
  timestamp: Date;
  isError?: boolean;
}
