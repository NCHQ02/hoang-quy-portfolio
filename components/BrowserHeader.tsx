import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const BrowserHeader: React.FC = () => {
  const [url, setUrl] = useState('hoangquy.design/portfolio');
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? 'bg-[#1e1e1e]/90 backdrop-blur-xl shadow-2xl' : 'bg-[#1e1e1e]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'circOut' }}
    >
      <div className="flex flex-col w-full">
        
        {/* === ROW 1: TABS & WINDOW CONTROLS === */}
        <div className="flex items-end px-4 pt-3 pb-0 gap-6 select-none">
          
          {/* Traffic Lights */}
          <div className="flex gap-2 mb-3 group">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-inner flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">×</span>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-inner flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">−</span>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-inner flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-[6px] text-black font-bold">sw</span>
            </div>
          </div>

          {/* Tabs Container */}
          <div className="flex flex-1 items-end gap-1 overflow-hidden">
            
            {/* Active Tab */}
            <div className="relative group min-w-[160px] max-w-[240px] flex-1">
               <div className="bg-[#3a3a3a] text-white px-4 py-2 rounded-t-lg text-xs font-medium flex items-center justify-between shadow-[-1px_-1px_2px_rgba(255,255,255,0.05)] relative z-10">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-3 h-3 bg-gradient-to-tr from-design-blue to-design-purple rounded-sm" />
                    <span className="truncate">Portfolio 2025</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 text-white/50 hover:text-white cursor-pointer transition-opacity">×</span>
               </div>
            </div>

            {/* Inactive Tab */}
            <div className="relative group min-w-[120px] max-w-[200px] hidden sm:block opacity-60 hover:opacity-100 transition-opacity">
               <div className="bg-[#2a2a2a] text-gray-400 px-4 py-2 rounded-t-lg text-xs font-medium flex items-center justify-between border-r border-white/5">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-3 h-3 bg-gray-600 rounded-sm" />
                    <span className="truncate">Old Projects (2024)</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 text-white/50 hover:text-white cursor-pointer transition-opacity">×</span>
               </div>
            </div>

            {/* New Tab Button */}
            <div className="pb-2 pl-2 text-gray-500 hover:text-white transition-colors cursor-pointer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
          </div>
        </div>

        {/* === ROW 2: TOOLBAR & ADDRESS BAR === */}
        <div className="flex items-center gap-3 px-4 py-2 bg-[#3a3a3a] border-b border-black/50 shadow-lg relative z-20">
          
          {/* Navigation Controls */}
          <div className="flex gap-4 text-gray-400">
             <div className="flex gap-2">
                <button className="hover:text-white transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>
                <button className="hover:text-white transition-colors opacity-50 cursor-not-allowed"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>
             </div>
             <button className="hidden sm:block hover:text-white transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg></button>
          </div>

          {/* Address Bar */}
          <div className="flex-1 flex justify-center">
            <div className="bg-[#242424] hover:bg-[#2a2a2a] transition-colors border border-white/5 w-full max-w-2xl rounded-md py-1.5 px-3 flex items-center justify-center gap-2 group cursor-text">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 group-hover:text-white transition-colors">
                 <path d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/>
               </svg>
               <span className="text-[13px] text-white selection:bg-design-blue selection:text-white font-sans tracking-wide">
                 {url}
               </span>
               <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 hover:text-white rotate-45">
                    <path d="M12 5v14M5 12h14"/>
                 </svg>
               </div>
            </div>
          </div>

          {/* Extensions / Right Controls */}
          <div className="flex gap-4 text-gray-400 items-center">
            <button className="hover:text-design-blue transition-colors">
               {/* Share Icon */}
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            </button>
            <button className="hover:text-white transition-colors hidden sm:block">
               {/* New Tab / Plus */}
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </button>
          </div>

        </div>
      </div>
    </motion.header>
  );
};

export default BrowserHeader;
