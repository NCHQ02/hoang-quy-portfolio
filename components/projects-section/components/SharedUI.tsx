import React from "react";

export const SelectionHandle = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-2 h-2 bg-white border border-design-blue z-20 ${className}`}
  />
);

export const WindowHeader = ({
  title,
  color = "bg-gray-600",
}: {
  title: string;
  color?: string;
}) => (
  <div className="h-8 bg-[#2A2A2A] border-b border-white/5 flex items-center px-3 justify-between rounded-t-xl select-none">
    <div className="flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
    </div>
    <span className="text-[10px] font-mono text-gray-400 opacity-70 flex-1 text-center mr-10">
      {title}
    </span>
  </div>
);

interface TagProps {
  text: string;
  color: string;
}

export const Tag: React.FC<TagProps> = ({ text, color }) => (
  <span
    className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-white/10 ${color}`}
  >
    {text}
  </span>
);
