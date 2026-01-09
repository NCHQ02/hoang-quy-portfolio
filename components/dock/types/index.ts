/**
 * Type definitions for Dock component
 */

export interface DockItemData {
  id: string;
  label: string;
  shortLabel?: string; // For mobile display
  icon: React.ReactNode;
}
