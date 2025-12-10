import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { AUTHOR_NAME } from '../constants';
import { useCursor } from './GlobalCursor';

// Reusable "Handle" component for the corners of the selection boxes
const SelectionHandle = ({ className }: { className?: string }) => (
  <div className={`absolute w-3 h-3 bg-white border border-blue-500 rounded-[1px] z-20 ${className}`} />
);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { setLabel } = useCursor();

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white selection:bg-design-blue/30"
    >
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
        
        {/* TOP ROW ELEMENTS */}
        <div className="relative w-full h-32 md:h-40 flex justify-center items-end mb-4">
          
          {/* 2024 Sticker (Floating Left) */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ rotate: -10, x: -200, y: 50, opacity: 0 }}
            animate={{ rotate: -12, x: -180, y: 20, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: -15 }}
            whileDrag={{ scale: 1.2 }}
            onMouseEnter={() => setLabel("Drag Me")}
            onMouseLeave={() => setLabel(null)}
            className="absolute left-[10%] md:left-[20%] top-10 md:top-auto px-4 py-1.5 bg-design-green text-black font-display font-bold rounded-full shadow-lg flex items-center gap-2 cursor-none"
          >
            <span>2025</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transform rotate-45">
              <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
            </svg>
          </motion.div>

          {/* UI/UX Selection Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="relative -ml-20 md:-ml-40 mb-2"
            onMouseEnter={() => setLabel("Tag")}
            onMouseLeave={() => setLabel(null)}
          >
            {/* The Label Box */}
            <div className="relative border-2 border-design-purple bg-design-purple/10 px-6 py-2 rounded-lg backdrop-blur-sm cursor-none">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-design-purple tracking-wide">
                Martech/Data
              </h2>
              {/* Handles */}
              <SelectionHandle className="-top-1.5 -left-1.5 border-design-purple" />
              <SelectionHandle className="-top-1.5 -right-1.5 border-design-purple" />
              <SelectionHandle className="-bottom-1.5 -left-1.5 border-design-purple" />
              <SelectionHandle className="-bottom-1.5 -right-1.5 border-design-purple" />
            </div>
          </motion.div>

          {/* Pink Bunny Sticker (Floating Right) */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ rotate: 10, x: 200, y: 50, opacity: 0 }}
            animate={{ rotate: 8, x: 180, y: 0, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileDrag={{ scale: 1.2 }}
            onMouseEnter={() => setLabel("Drag Me")}
            onMouseLeave={() => setLabel(null)}
            className="absolute right-[10%] md:right-[20%] top-0 md:top-auto w-20 h-20 border-2 border-design-pink rounded-lg flex items-center justify-center bg-[#1e1e1e] shadow-lg cursor-none"
          >
             {/* Handles for sticker look */}
             <div className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-white rounded-full" />
             <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-white rounded-full" />
             <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-white rounded-full" />
             <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-white rounded-full" />
             
             {/* Bunny Icon */}
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-design-pink">
                <path d="M12 2C9 2 7 4 7 7V9C4 9 2 11 2 14C2 17.5 5 21 12 21C19 21 22 17.5 22 14C22 11 20 9 17 9V7C17 4 15 2 12 2Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M8 9V7C8 5.5 9 3.5 12 3.5C15 3.5 16 5.5 16 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 15L15.01 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M9 15L9.01 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M11 17C11 17 11.5 17.5 12 17.5C12.5 17.5 13 17 13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="2" y="9" width="20" height="12" rx="4" stroke="currentColor" strokeWidth="2"/>
             </svg>
             
             {/* Sparkles */}
             <div className="absolute -top-2 -right-3 text-design-pink text-xl">✨</div>
          </motion.div>

           {/* "HI!" Bubble */}
           <motion.div
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ type: 'spring', delay: 0.8 }}
             className="absolute right-[5%] md:right-[15%] top-16 md:top-10 px-4 py-1 bg-design-yellow text-black font-black text-sm rounded-full rounded-bl-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
           >
             HI!
           </motion.div>

        </div>

        {/* MAIN PORTFOLIO TEXT */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group cursor-none"
          onMouseEnter={() => setLabel("Title")}
          onMouseLeave={() => setLabel(null)}
        >
          <div className="relative border-[3px] border-design-blue p-2 md:p-6 rounded-sm backdrop-blur-sm bg-black/20">
             {/* The Big Text */}
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-display font-bold text-white tracking-tighter text-center select-none">
              PORTFOLIO
            </h1>

            {/* Selection Handles */}
            <SelectionHandle className="-top-2 -left-2 w-4 h-4 border-2" />
            <SelectionHandle className="-top-2 -right-2 w-4 h-4 border-2" />
            <SelectionHandle className="-bottom-2 -left-2 w-4 h-4 border-2" />
            <SelectionHandle className="-bottom-2 -right-2 w-4 h-4 border-2" />
            
            {/* Center handles */}
            <SelectionHandle className="top-1/2 -left-2 -translate-y-1/2 w-4 h-4 border-2 hidden md:block" />
            <SelectionHandle className="top-1/2 -right-2 -translate-y-1/2 w-4 h-4 border-2 hidden md:block" />
            <SelectionHandle className="-top-2 left-1/2 -translate-x-1/2 w-4 h-4 border-2 hidden md:block" />
            <SelectionHandle className="-bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border-2 hidden md:block" />
          </div>

          {/* Mouse Cursor decoration (Removed the static one since we have the global one now, OR keep it as a 'fake' user) */}
          {/* I will keep it as a 'fake' collaborator cursor to fit the Figma theme */}
          <motion.div 
            animate={{ 
               y: [0, -10, 0], 
               x: [0, 5, 0] 
            }}
            transition={{ 
               duration: 3, 
               repeat: Infinity, 
               ease: "easeInOut" 
            }}
            className="absolute -bottom-8 left-1/2 md:left-2/3 z-30"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-design-blue drop-shadow-lg">
              <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <div className="absolute left-4 top-4 bg-design-blue text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap border border-white">
              {AUTHOR_NAME}
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM NAME BADGE */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="mt-12 md:mt-16"
        >
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onMouseEnter={() => setLabel("Click")}
             onMouseLeave={() => setLabel(null)}
             className="bg-design-blue text-white px-8 py-4 rounded-full font-display font-black text-2xl md:text-3xl flex items-center gap-3 shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.5)] transition-shadow cursor-none"
          >
             <span>LET'S GO </span>
             <span className="bg-white/20 p-1 rounded-md">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                 <path d="M12 2C9 2 7 4 7 7V9C4 9 2 11 2 14C2 17.5 5 21 12 21C19 21 22 17.5 22 14C22 11 20 9 17 9V7C17 4 15 2 12 2Z"/>
                 <circle cx="9" cy="14" r="1.5" fill="#3b82f6"/>
                 <circle cx="15" cy="14" r="1.5" fill="#3b82f6"/>
               </svg>
             </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;