import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../GlobalCursor";

interface StickyNoteProps {
  text: string;
  color: string;
  rotate: number;
  x: number;
  y: number;
  author: string;
}

const StickyNote: React.FC<StickyNoteProps> = ({
  text,
  color,
  rotate,
  x,
  y,
  author,
}) => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{
        scale: 1.1,
        rotate: 0,
        zIndex: 50,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
      }}
      whileHover={{ scale: 1.05 }}
      initial={{ x, y, rotate }}
      onMouseEnter={() => setLabel("Drag Me")}
      onMouseLeave={() => setLabel(null)}
      className={`absolute w-40 h-40 ${color} rounded-md shadow-md p-4 flex flex-col justify-between cursor-grab active:cursor-grabbing text-black`}
    >
      <p className="font-script text-xl leading-tight font-bold">{text}</p>
      <div className="flex items-center gap-2 opacity-50">
        <div className="w-4 h-4 rounded-full bg-black/20" />
        <span className="text-[10px] font-bold uppercase">{author}</span>
      </div>
    </motion.div>
  );
};

export default StickyNote;
