import React, { useRef } from "react";
import { AUTHOR_NAME } from "../../constants";
import {
  FloatingCursor,
  ConnectorLine,
  ThankYouText,
  ActionBar,
} from "./components";

/**
 * Footer Section Component
 * Figma-style footer with thank you message and action bar
 */
const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={containerRef}
      className="relative pt-32 pb-40 overflow-visible z-40"
    >
      {/* --- FLOATING CURSORS (Decoration) --- */}
      <FloatingCursor
        name="Recruiter"
        color="#F24E1E"
        initialX="10%"
        initialY="10%"
        delay={0}
      />
      <FloatingCursor
        name="Manager"
        color="#0ACF83"
        initialX="85%"
        initialY="20%"
        delay={2}
      />

      {/* --- CENTER CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Connector Line Visualization */}
        <ConnectorLine fromId="text" toId="toolbar" />

        {/* Big Thank You Text */}
        <ThankYouText />

        {/* Figma Style Action Bar */}
        <ActionBar onScrollToTop={scrollToTop} />

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
