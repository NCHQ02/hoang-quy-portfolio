/**
 * Dock Component - macOS-style Floating Navigation
 *
 * A beautiful, animated dock component for portfolio navigation.
 * Features:
 * - Smooth scroll detection
 * - Active section highlighting
 * - Responsive design (mobile & desktop)
 * - Hover tooltips
 * - Spring animations
 *
 * Usage:
 * ```tsx
 * import Dock from './components/dock';
 *
 * function App() {
 *   return <Dock />;
 * }
 * ```
 */

export { default } from "./components/DockContainer";
export { DockContainer, DockItem } from "./components";
export { DOCK_ITEMS } from "./config/dock-items.config";
export { useDockScroll, scrollToSection } from "./hooks/useDockScroll";
export type { DockItemData } from "./types";
