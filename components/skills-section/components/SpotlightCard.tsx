import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SpotlightCard = ({
  title,
  desc,
  icon,
  color,
  delay,
  onHover,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
  onHover: (t: string | null) => void;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    onHover("Open");
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    onHover(null);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="relative bg-[#2C2C2E] border border-white/5 rounded-xl p-5 overflow-hidden group h-full cursor-none"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      {/* Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
          maskImage:
            "linear-gradient(black, black), linear-gradient(black, black)",
          maskClip: "content-box, border-box",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <div
          className={`w-10 h-10 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:border-white/30 transition-all duration-300`}
        >
          {icon}
        </div>
        <h4 className="text-sm font-bold text-white mb-2 group-hover:text-design-blue transition-colors">
          {title}
        </h4>
        <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};
