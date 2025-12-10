import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS, AUTHOR_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4"
    >
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {AUTHOR_NAME}
        </div>
        
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="text-sm font-medium text-muted hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Placeholder - Can be expanded later */}
        <button className="md:hidden text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
