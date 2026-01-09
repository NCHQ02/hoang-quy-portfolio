import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import StickyNote from "./StickyNote";

interface StampData {
  id: number;
  x: number;
  y: number;
  type: "heart" | "thumb" | "star";
}

const FigJamCanvas = () => {
  const { setLabel } = useCursor();
  const [stamps, setStamps] = useState<StampData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const addStamp = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const types: ("heart" | "thumb" | "star")[] = ["heart", "thumb", "star"];
    const randomType = types[Math.floor(Math.random() * types.length)];

    const newStamp: StampData = { id: Date.now(), x, y, type: randomType };
    setStamps([...stamps, newStamp]);
  };

  return (
    <div
      ref={containerRef}
      onClick={addStamp}
      onMouseEnter={() => setLabel("Stamp!")}
      onMouseLeave={() => setLabel(null)}
      className="relative w-full h-full min-h-[500px] bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden select-none group"
    >
      {/* Background Dots */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#888 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Toolbar Decoration */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#2c2c2e] border border-white/10 p-2 rounded-xl flex gap-4 shadow-2xl z-20 pointer-events-none">
        <div className="w-8 h-8 rounded-lg bg-design-blue flex items-center justify-center text-white">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" />
          </svg>
        </div>
        <div className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white border border-design-pink">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Draggable Sticky Notes - Spread out more for wider canvas */}
      <StickyNote
        text="Let's build something epic!"
        color="bg-[#FFBD2E]"
        rotate={-5}
        x={40}
        y={40}
        author="You"
      />
      <StickyNote
        text="Clean code & great vibes."
        color="bg-[#FF5F56]"
        rotate={4}
        x={350}
        y={120}
        author="Dev"
      />
      <StickyNote
        text="Check out the case studies!"
        color="bg-[#27C93F]"
        rotate={-2}
        x={80}
        y={350}
        author="PM"
      />

      {/* Stamps Render */}
      <AnimatePresence>
        {stamps.map((s) => (
          <motion.div
            key={s.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute text-4xl drop-shadow-lg pointer-events-none"
            style={{ left: s.x - 20, top: s.y - 20 }}
          >
            {s.type === "heart" && "❤️"}
            {s.type === "thumb" && "👍"}
            {s.type === "star" && "🌟"}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Fake Cursor 1 */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        animate={{ x: [20, 400, 100, 20], y: [400, 100, 50, 400] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-design-purple drop-shadow-md"
        >
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            fill="currentColor"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute left-4 top-4 bg-design-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
          Sarah
        </div>
      </motion.div>

      {/* Fake Cursor 2 */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        animate={{ x: [400, 50, 350, 400], y: [50, 350, 200, 50] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-design-orange drop-shadow-md"
        >
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            fill="currentColor"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute left-4 top-4 bg-design-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
          Mike
        </div>
      </motion.div>
    </div>
  );
};

export default FigJamCanvas;
