import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AUTHOR_NAME } from '../constants';
import { useCursor } from './GlobalCursor';

// --- ICONS ---
// Figma Toolbar Icons
const MoveToolIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4l7 15 3-7 7-3-17-5z" /></svg>; // Standard cursor
const HandToolIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" /><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" /><path d="M10 10V2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" /><path d="M6 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7.5c0 3.3 3.5 6.5 7.5 6.5s7.5-3.5 7.5-6.5v-2.5" /></svg>;
const CommentIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;

const RestartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
);

const ShareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
);

// --- SUB-COMPONENTS ---

const FloatingCursor = ({ name, color, initialX, initialY, delay }: { name: string, color: string, initialX: string, initialY: string, delay: number }) => (
    <motion.div
        className="absolute z-20 pointer-events-none hidden md:block"
        style={{ left: initialX, top: initialY }}
        animate={{ 
            x: [0, 40, -30, 0],
            y: [0, -20, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay }}
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg transform -rotate-12">
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill={color} stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
        <div className={`absolute left-4 top-4 px-2 py-0.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap border border-white/20 shadow-sm`} style={{ backgroundColor: color }}>
            {name}
        </div>
    </motion.div>
);

const ConnectorLine = ({ fromId, toId, color = "#3b82f6" }: { fromId: string, toId: string, color?: string }) => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-visible hidden md:block">
            <svg className="w-full h-full overflow-visible">
                <motion.path 
                    d="M 50% 30% C 50% 50%, 50% 60%, 50% 80%" 
                    fill="none" 
                    stroke={color} 
                    strokeWidth="2" 
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.circle 
                    cx="50%" cy="80%" r="4" fill={color}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 2 }}
                />
            </svg>
        </div>
    )
}

// --- MAIN FOOTER COMPONENT ---

const Footer: React.FC = () => {
  const { setLabel } = useCursor();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={containerRef} className="relative pt-32 pb-40 overflow-visible z-40">
      
      {/* 
         NOTE: Removed the background grid div here to fix the overlapping issue.
         The global grid in App.tsx will show through.
      */}

      {/* --- FLOATING CURSORS (Decoration) --- */}
      <FloatingCursor name="Recruiter" color="#F24E1E" initialX="10%" initialY="10%" delay={0} />
      <FloatingCursor name="Manager" color="#0ACF83" initialX="85%" initialY="20%" delay={2} />
      
      {/* --- CENTER CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        
        {/* Connector Line Visualization */}
        <ConnectorLine fromId="text" toId="toolbar" />

        {/* Big Thank You Text - SINGLE LINE */}
        <div className="relative mb-24 text-center select-none w-full flex justify-center">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-[12vw] md:text-[13vw] font-display font-black leading-none tracking-tighter text-white drop-shadow-2xl whitespace-nowrap"
            >
                <span className="hover:text-design-blue transition-colors duration-300">THANK</span>
                <span className="inline-block w-[2vw]" /> {/* Spacer */}
                <span className="hover:text-design-purple transition-colors duration-300">YOU!</span>
            </motion.h1>
            
            {/* End of Flow Indicator */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-4 flex flex-col items-center gap-0">
                <div className="w-px h-16 bg-design-blue/50" />
                <div className="bg-design-blue text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                    End of Flow
                </div>
                 {/* Connection line to Action Bar */}
                <div className="w-px h-8 bg-design-blue/30" />
            </div>
        </div>

        {/* --- FIGMA STYLE ACTION BAR (Now Relative) --- */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-50 flex items-center gap-2 p-1.5 bg-[#2C2C2E] border border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-md mt-4"
        >
            {/* Left Tools Group */}
            <div className="flex items-center">
                <button 
                    onClick={scrollToTop}
                    onMouseEnter={() => setLabel("Restart")}
                    onMouseLeave={() => setLabel(null)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors relative group"
                >
                   <MoveToolIcon />
                   {/* Tooltip */}
                   <span className="absolute -top-10 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      Move (V)
                   </span>
                </button>
                <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-grab active:cursor-grabbing">
                   <HandToolIcon />
                </div>
                 <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                   <CommentIcon />
                </div>
            </div>

            <div className="w-px h-6 bg-white/10 mx-1" />

            {/* Center Context (Project Name) */}
            <div className="hidden md:flex items-center gap-3 px-2">
                <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    <span className="text-xs font-bold text-white">Portfolio 2025</span>
                    <span className="text-[10px] text-gray-500">/</span>
                    <span className="text-xs text-gray-400">Final Prototype</span>
                </div>
            </div>

            <div className="w-px h-6 bg-white/10 mx-1 hidden md:block" />

            {/* Right Actions (Share/Play) */}
            <div className="flex items-center gap-2">
                {/* Avatars */}
                <div className="hidden sm:flex -space-x-2 mr-2">
                    <div className="w-6 h-6 rounded-full border border-[#2C2C2E] bg-design-purple flex items-center justify-center text-[8px] font-bold text-white">HQ</div>
                    <div className="w-6 h-6 rounded-full border border-[#2C2C2E] bg-design-green flex items-center justify-center text-[8px] font-bold text-black">YOU</div>
                </div>

                <button 
                   onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                   }}
                   className="h-8 px-4 bg-design-blue hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
                >
                    Share
                </button>
                
                <button 
                   onClick={scrollToTop}
                   className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors"
                   title="Present"
                >
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                </button>
            </div>

        </motion.div>

        {/* Copyright (Bottom subtle) */}
        <div className="mt-20 text-center opacity-40 hover:opacity-100 transition-opacity">
            <p className="text-[10px] text-gray-500 font-mono">
                &copy; {new Date().getFullYear()} {AUTHOR_NAME}. All rights reserved 
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;