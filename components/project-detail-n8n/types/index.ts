/**
 * Type definitions for N8N Project Detail
 */

export interface Tab {
  id: number;
  label: string;
  icon: React.ReactNode;
  color: string;
}

export interface ProjectDetailProps {
  onBack: () => void;
}

export interface TabContentProps {
  // Common props that might be passed to tab components
}
