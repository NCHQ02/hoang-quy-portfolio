import { createContext, useContext } from "react";

// Stub interface for cursor context - does nothing but prevents errors
interface CursorContextType {
  setLabel: (label: string | null) => void;
  setColor: (color: string) => void;
  setIsActive: (active: boolean) => void;
}

// Empty context with no-op functions
const CursorContext = createContext<CursorContextType>({
  setLabel: () => {},
  setColor: () => {},
  setIsActive: () => {},
});

// Export the hook for compatibility
export const useCursor = () => useContext(CursorContext);

// No provider needed - components can use the hook but it does nothing
// This file exists only for backward compatibility
