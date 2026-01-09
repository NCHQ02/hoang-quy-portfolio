import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TYPES ---
export interface WorkflowNode {
  id: string;
  label: string;
  icon: string;
  description: string;
  x: number;
  y: number;
  color: string;
}

export interface WorkflowConnection {
  from: string;
  to: string;
}

interface InteractiveWorkflowProps {
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  themeColor: string;
  title?: string;
}

// --- NODE COMPONENT ---
const WorkflowNodeComponent: React.FC<{
  node: WorkflowNode;
  isActive: boolean;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onClick: (node: WorkflowNode) => void;
}> = ({ node, isActive, isHovered, onHover, onClick }) => {
  return (
    <motion.g
      className="cursor-pointer"
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(node)}
    >
      {/* Glow effect */}
      <motion.circle
        cx={node.x + 50}
        cy={node.y + 35}
        r={45}
        fill={node.color}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isActive ? 0.4 : isHovered ? 0.2 : 0,
          scale: isActive ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{ filter: "blur(15px)" }}
      />

      {/* Node box */}
      <motion.rect
        x={node.x}
        y={node.y}
        width={100}
        height={70}
        rx={12}
        fill="#1e1e1e"
        stroke={isActive || isHovered ? node.color : "#333"}
        strokeWidth={isActive ? 3 : 2}
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -3 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      />

      {/* Icon */}
      <text
        x={node.x + 50}
        y={node.y + 30}
        textAnchor="middle"
        fontSize="24"
        className="pointer-events-none select-none"
      >
        {node.icon}
      </text>

      {/* Label */}
      <text
        x={node.x + 50}
        y={node.y + 55}
        textAnchor="middle"
        fill="#999"
        fontSize="10"
        fontFamily="monospace"
        className="pointer-events-none select-none"
      >
        {node.label}
      </text>

      {/* Active pulse ring */}
      {isActive && (
        <motion.circle
          cx={node.x + 50}
          cy={node.y + 35}
          r={40}
          fill="none"
          stroke={node.color}
          strokeWidth={2}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </motion.g>
  );
};

// --- CONNECTION COMPONENT ---
const ConnectionLine: React.FC<{
  from: WorkflowNode;
  to: WorkflowNode;
  isFlowing: boolean;
  themeColor: string;
}> = ({ from, to, isFlowing, themeColor }) => {
  const startX = from.x + 100;
  const startY = from.y + 35;
  const endX = to.x;
  const endY = to.y + 35;

  // Create curved path
  const midX = (startX + endX) / 2;
  const path = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

  return (
    <g>
      {/* Background line */}
      <path
        d={path}
        fill="none"
        stroke="#333"
        strokeWidth={2}
        strokeDasharray="5,5"
      />

      {/* Animated flowing line */}
      {isFlowing && (
        <motion.path
          d={path}
          fill="none"
          stroke={themeColor}
          strokeWidth={2}
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Data particle */}
      {isFlowing && (
        <motion.circle
          r={4}
          fill={themeColor}
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          style={{
            offsetPath: `path("${path}")`,
            filter: `drop-shadow(0 0 6px ${themeColor})`,
          }}
        />
      )}
    </g>
  );
};

// --- MODAL COMPONENT ---
const NodeDetailModal: React.FC<{
  node: WorkflowNode | null;
  onClose: () => void;
}> = ({ node, onClose }) => {
  if (!node) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4"
          style={{
            backgroundColor: `${node.color}20`,
            border: `1px solid ${node.color}40`,
          }}
        >
          {node.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2">{node.label}</h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">{node.description}</p>

        {/* Color accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{ backgroundColor: node.color }}
        />
      </motion.div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const InteractiveWorkflow: React.FC<InteractiveWorkflowProps> = ({
  nodes,
  connections,
  themeColor,
  title,
}) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  // Auto-run workflow animation on mount and loop continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodeIndex((prev) => {
        // Loop back to start when reaching the end
        if (prev >= nodes.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1200); // 1.2 seconds per node

    return () => clearInterval(timer);
  }, [nodes.length]);

  // Calculate SVG viewBox based on nodes
  const padding = 40;
  const maxX = Math.max(...nodes.map((n) => n.x + 100)) + padding;
  const maxY = Math.max(...nodes.map((n) => n.y + 70)) + padding;

  return (
    <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden">
      {/* Header - simplified without Run button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#111]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          {title && (
            <span className="text-xs font-mono text-gray-500">{title}</span>
          )}
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <motion.div
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span>Running</span>
        </div>
      </div>

      {/* SVG Canvas */}
      <svg
        viewBox={`0 0 ${maxX} ${maxY}`}
        className="w-full h-auto min-h-[300px]"
        style={{
          background:
            "radial-gradient(circle at center, #111 0%, #0a0a0a 100%)",
        }}
      >
        {/* Grid pattern */}
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#222"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connections */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const fromIndex = nodes.findIndex((n) => n.id === conn.from);
          const isFlowing = activeNodeIndex > fromIndex;

          return (
            <ConnectionLine
              key={idx}
              from={fromNode}
              to={toNode}
              isFlowing={isFlowing}
              themeColor={themeColor}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <WorkflowNodeComponent
            key={node.id}
            node={node}
            isActive={activeNodeIndex === idx}
            isHovered={hoveredNode === node.id}
            onHover={setHoveredNode}
            onClick={setSelectedNode}
          />
        ))}
      </svg>

      {/* Tooltip on hover */}
      <AnimatePresence>
        {hoveredNode && !selectedNode && (
          <motion.div
            className="absolute bottom-4 left-4 bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <span className="text-white font-bold">
              {nodes.find((n) => n.id === hoveredNode)?.label}
            </span>
            <span className="text-gray-500 ml-2">Click for details</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Node Detail Modal */}
      <AnimatePresence>
        {selectedNode && (
          <NodeDetailModal
            node={selectedNode}
            onClose={() => setSelectedNode(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveWorkflow;
