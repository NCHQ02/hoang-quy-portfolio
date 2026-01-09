import React from "react";
import { MagneticTag } from "./MagneticTag";

export const SkillGroup = ({
  title,
  items,
  color,
  setCursorLabel,
}: {
  title: string;
  items: string[];
  color: string;
  setCursorLabel: (l: string | null) => void;
}) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-3 px-2">
      <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <h4 className="text-xs font-bold text-gray-300 uppercase">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2 px-2">
      {items.map((item, idx) => (
        <MagneticTag
          key={idx}
          text={item}
          onHover={(active) => setCursorLabel(active ? "Inspect" : null)}
        />
      ))}
    </div>
  </div>
);

export const SoftSkillTag = ({
  text,
  setCursorLabel,
}: {
  text: string;
  setCursorLabel: (l: string | null) => void;
}) => (
  <div
    onMouseEnter={() => setCursorLabel("Check")}
    onMouseLeave={() => setCursorLabel(null)}
    className="flex items-center gap-2 py-1 border-b border-white/5 last:border-0 group"
  >
    <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-design-green transition-colors">
      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-design-green transition-colors" />
    </div>
    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
      {text}
    </span>
  </div>
);
