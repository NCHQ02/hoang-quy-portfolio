import React from "react";

export const CursorIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={`drop-shadow-md ${className}`}
  >
    <path
      d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
      fill="currentColor"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const SelectionHandle = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-2.5 h-2.5 bg-white border border-design-blue z-20 ${className}`}
  />
);
