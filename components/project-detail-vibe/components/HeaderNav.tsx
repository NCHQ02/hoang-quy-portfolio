import React from "react";
import { useCursor } from "../../GlobalCursor";

interface Props {
  onBack: () => void;
}

export const HeaderNav: React.FC<Props> = ({ onBack }) => {
  const { setLabel } = useCursor();

  return (
    <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
        <button
          onClick={onBack}
          onMouseEnter={() => setLabel("Home")}
          onMouseLeave={() => setLabel(null)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-[#1e1e1e]/90 backdrop-blur-md px-4 py-2 rounded-t-lg border border-white/10 border-b-0 -mb-[1px] z-10"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span className="text-xs font-bold">explorer.tsx</span>
        </button>

        <div className="bg-[#2C2C2E] px-4 py-2 rounded-t-lg border border-white/10 border-b-0 text-white flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-design-green" />
          <span className="text-xs font-mono">vibe_suite.config.ts</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-px bg-white/10" />
    </div>
  );
};
