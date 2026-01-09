import React from "react";
import { useCursor } from "../../GlobalCursor";

interface HeaderNavProps {
  onBack: () => void;
  fileName?: string;
}

/**
 * Header Navigation Component
 * Displays back button and file indicator
 */
const HeaderNav: React.FC<HeaderNavProps> = ({
  onBack,
  fileName = "n8n_case_study.fig",
}) => {
  const { setLabel } = useCursor();

  return (
    <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
        <button
          onClick={onBack}
          onMouseEnter={() => setLabel("Home")}
          onMouseLeave={() => setLabel(null)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-[#1e1e1e]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span className="text-xs font-bold uppercase">Back to Portfolio</span>
        </button>

        <div className="bg-[#1e1e1e]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-design-orange animate-pulse" />
          <span className="text-xs font-mono text-design-orange">
            {fileName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
