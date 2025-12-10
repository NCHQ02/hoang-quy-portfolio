import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [label, setLabel] = useState<string | null>(null);
  const [color, setColor] = useState<string>('text-design-pink'); // Default pink
  const [isActive, setIsActive] = useState(false);

  // Mouse Physics
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // --- PHYSICS CONFIGURATION (High DPI / Fast Feel) ---
  // mass: Lower = lighter/faster start (0.1 is very light)
  // stiffness: Higher = snaps to position faster (1000 is very stiff)
  // damping: Higher = prevents wobbling when stopping (50 is stable)
  const springConfig = { damping: 28, stiffness: 1200, mass: 0.1 };
  
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <CursorContext.Provider value={{ setLabel, setColor, setIsActive }}>
      {children}
      
      {/* GLOBAL CURSOR ELEMENT */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
            scale: isActive ? 1 : 0, 
            opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.1 }} 
      >
        <motion.div className="relative">
            {/* The Cursor Shape (Arrow V) */}
            <svg 
                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                className={`drop-shadow-xl transition-colors duration-100 ${label ? 'text-design-blue' : color}`}
            >
                <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            
            {/* The Label Tag */}
            <motion.div 
                initial={{ opacity: 0, x: -5 }}
                animate={{ 
                    opacity: 1, 
                    x: 0,
                    // Dynamic background color based on state
                    backgroundColor: label ? '#3b82f6' : '#f472b6' 
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
