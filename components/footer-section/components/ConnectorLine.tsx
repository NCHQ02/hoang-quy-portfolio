import React from "react";
import { motion } from "framer-motion";

interface ConnectorLineProps {
  fromId: string;
  toId: string;
  color?: string;
}

/**
 * Connector Line Component
 * Visual connection line between elements
 */
const ConnectorLine: React.FC<ConnectorLineProps> = ({
  fromId,
  toId,
  color = "#3b82f6",
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-visible hidden md:block">
      <svg className="w-full h-full overflow-visible">
        <motion.path
          d="M 50% 30% C 50% 50%, 50% 60%, 50% 80%"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle
          cx="50%"
          cy="80%"
          r="4"
          fill={color}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 2 }}
        />
      </svg>
    </div>
  );
};

export default ConnectorLine;
