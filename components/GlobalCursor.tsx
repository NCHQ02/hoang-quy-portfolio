import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { motion, useMotionValue } from "framer-motion";

// --- TYPES ---

interface CursorContextType {
  setLabel: (label: string | null) => void;
  setColor: (color: string) => void; // For future: change cursor color
  setIsActive: (active: boolean) => void;
}

// --- CONTEXT ---

const CursorContext = createContext<CursorContextType>({
  setLabel: () => {},
  setColor: () => {},
  setIsActive: () => {},
});

export const useCursor = () => useContext(CursorContext);

// --- COMPONENT ---

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [label, setLabel] = useState<string | null>(null);
  const [color, setColor] = useState<string>("text-design-pink"); // Default pink
  const [isActive, setIsActive] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Mouse position - using direct DOM manipulation for zero-lag cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth 60fps updates
      // Direct DOM manipulation bypasses React rendering for maximum performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      // Also update motion values for any components that might need them
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Use 'pointermove' for better cross-device performance
    window.addEventListener("pointermove", moveCursor, { passive: true });
    return () => window.removeEventListener("pointermove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <CursorContext.Provider value={{ setLabel, setColor, setIsActive }}>
      {children}

      {/* GLOBAL CURSOR ELEMENT - Using direct transform for zero-lag movement */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block will-change-transform"
        style={{
          // Initial position off-screen, will be updated by pointermove
          transform: "translate3d(-100px, -100px, 0)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        // Remove layout transition for cursor wrapper to prevent interpolation lag
        transition={{ duration: 0 }}
      >
        <motion.div className="relative">
          {/* The Cursor Shape (Arrow V) */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`drop-shadow-xl transition-colors duration-100 ${
              label ? "text-design-blue" : color
            }`}
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          {/* The Label Tag */}
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{
              opacity: 1,
              x: 0,
              // Dynamic background color based on state
              backgroundColor: label ? "#3b82f6" : "#f472b6",
            }}
            transition={{ duration: 0.1 }}
            className="absolute left-5 top-5 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap border border-white/20 shadow-sm"
          >
            {label || "Hoang Quy"}
          </motion.div>
        </motion.div>
      </motion.div>
    </CursorContext.Provider>
  );
};
