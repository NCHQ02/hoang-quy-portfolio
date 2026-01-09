import React from "react";

interface CommentPinProps {
  color: string;
  initials: string;
}

/**
 * Comment Pin Component
 * Displays a colored pin with initials
 */
const CommentPin: React.FC<CommentPinProps> = ({ color, initials }) => (
  <div className="relative">
    {/* The Pin Shape */}
    <div
      className={`w-8 h-8 rounded-full rounded-bl-none ${color} border-2 border-white flex items-center justify-center shadow-lg relative z-10`}
    >
      <span className="text-[10px] font-bold text-white">{initials}</span>
    </div>
  </div>
);

export default CommentPin;
