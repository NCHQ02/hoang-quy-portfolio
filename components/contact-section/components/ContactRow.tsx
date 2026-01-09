import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import { ChevronDown } from "../icons";
import { ContactItem } from "../data";

interface ContactRowProps {
  item: ContactItem;
  onAction: (item: ContactItem) => void;
}

const ContactRow: React.FC<ContactRowProps> = ({ item, onAction }) => {
  const { setLabel } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      className="flex items-center justify-between p-2 rounded-lg cursor-pointer group transition-colors"
      onClick={() => onAction(item)}
      onMouseEnter={() => setLabel(item.action === "copy" ? "Copy" : "Open")}
      onMouseLeave={() => setLabel(null)}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full ${item.avatarColor} flex items-center justify-center text-[10px] font-bold text-white shadow-inner`}
        >
          {item.initial}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-200 leading-none mb-1">
            {item.name}
          </span>
          <span className="text-[11px] text-gray-500 font-mono">
            {item.handle}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
          {item.role}
        </span>
        <div className="text-gray-600 group-hover:text-gray-400 transition-colors">
          <ChevronDown />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactRow;
