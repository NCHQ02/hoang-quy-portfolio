import React from "react";
import { UIPanel } from "./UIPanel";
import { ToolIcon } from "./ToolIcon";
import { SelectionHandle } from "./Shared";
import { DESIGN_TOOLS } from "../config/tools.config";

/**
 * Tools Panel Component
 * Showcase of design and development tools
 */
const ToolsPanel: React.FC = () => (
  <UIPanel
    className="lg:col-span-4 flex flex-col items-center justify-center bg-[#181818] h-full"
    delay={0.4}
  >
    <h3 className="text-2xl font-display font-bold text-design-pink mb-8 w-full text-center">
      TOOLS
    </h3>

    {/* Featured Tool (Top 1) */}
    <div className="relative mb-8">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-design-pink text-white text-xs px-3 py-1 rounded-full animate-bounce">
        My best buddy!
        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-design-pink rotate-45" />
      </div>
      {/* Featured Icon with selection box */}
      <div className="relative p-2 border border-design-pink/50 rounded-xl">
        <SelectionHandle className="-top-1 -left-1 bg-design-pink border-none w-2 h-2" />
        <SelectionHandle className="-top-1 -right-1 bg-design-pink border-none w-2 h-2" />
        <SelectionHandle className="-bottom-1 -left-1 bg-design-pink border-none w-2 h-2" />
        <SelectionHandle className="-bottom-1 -right-1 bg-design-pink border-none w-2 h-2" />
        <ToolIcon {...DESIGN_TOOLS[0]} />
      </div>
    </div>

    {/* Other Tools Grid (4 per row) */}
    <div className="grid grid-cols-4 gap-3 w-full">
      {DESIGN_TOOLS.slice(1).map((tool) => (
        <ToolIcon key={tool.name} {...tool} />
      ))}
      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gray-800 text-gray-500 text-2xl font-bold hover:bg-gray-700 transition-colors cursor-pointer">
        +
      </div>
    </div>

    <div className="mt-8 text-center mt-auto">
      <span className="text-xs text-gray-500 uppercase tracking-widest">
        Digital Development Tools
      </span>
    </div>
  </UIPanel>
);

export default ToolsPanel;
