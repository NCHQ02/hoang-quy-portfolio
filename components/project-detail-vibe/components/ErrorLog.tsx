import React from "react";

// Error Log Component
export const ErrorLog = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2 text-red-400 bg-red-500/10 p-2 rounded mb-1 border border-red-500/20">
    <span className="text-[10px] font-bold mt-0.5">ERR!</span>
    <span>{text}</span>
  </div>
);
