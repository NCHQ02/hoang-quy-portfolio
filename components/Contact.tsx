import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "./GlobalCursor";

// --- SIDE WIDGETS (DESKTOP ONLY) ---

const NotificationWidget = () => (
  <motion.div
    initial={{ y: -100, rotate: -10, opacity: 0 }} // Drop & Swing Entrance
    whileInView={{ y: 0, rotate: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.5 }}
    className="absolute left-0 top-1/3 w-72 bg-[#1e1e1e]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl hidden 2xl:flex items-center p-3 gap-3 z-20 origin-top-left"
  >
    <div className="w-10 h-10 rounded-full bg-design-blue flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-0.5">
        <span className="text-xs font-bold text-white">New Message</span>
        <span className="text-[9px] text-gray-400">now</span>
      </div>
      <p className="text-[10px] text-gray-400 leading-tight">
        HR: "Hey Quy Xink Dep, i saw your portfolio. Are you available for..."
      </p>
    </div>
  </motion.div>
);

const QuickActionsWidget = () => (
  <motion.div
    initial={{ y: -100, rotate: 10, opacity: 0 }} // Drop & Swing Entrance (Right)
    whileInView={{ y: 0, rotate: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.7 }}
    className="absolute right-6 top-1/4 flex flex-col gap-2 z-20 hidden 2xl:flex origin-top-right"
  >
    <div className="bg-[#1e1e1e] border border-white/10 p-2 rounded-lg shadow-xl flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded bg-[#2C2C2E] hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors group">
        <span className="text-xl group-hover:scale-110 transition-transform">
          📧
        </span>
      </div>
      <div className="w-10 h-10 rounded bg-[#2C2C2E] hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors group">
        <span className="text-xl group-hover:scale-110 transition-transform">
          📅
        </span>
      </div>
      <div className="w-10 h-10 rounded bg-[#2C2C2E] hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors group">
        <span className="text-xl group-hover:scale-110 transition-transform">
          💬
        </span>
      </div>
    </div>
    <div className="bg-design-green/20 border border-design-green/50 text-design-green text-[9px] font-bold px-2 py-1 rounded text-center">
      Quick Access
    </div>
  </motion.div>
);

// --- ICONS ---

const CopyIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ChevronDown = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const SendIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

// --- DATA ---

interface ContactItem {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatarColor: string;
  initial: string;
  action: string;
  canEditLabel: string;
  url?: string;
}

const CONTACTS: ContactItem[] = [
  {
    id: "email",
    name: "Hoang Quy",
    handle: "hoangquy2620@gmail.com",
    role: "Owner",
    avatarColor: "bg-design-blue",
    initial: "HQ",
    action: "copy",
    canEditLabel: "Can edit",
  },
  {
    id: "linkedin",
    name: "LinkedIn Profile",
    handle: "/in/hoang-quy",
    role: "Can hire",
    avatarColor: "bg-[#0077b5]", // LinkedIn Blue
    initial: "in",
    action: "link",
    url: "https://linkedin.com/in/hoang-quy",
    canEditLabel: "Viewer",
  },
  {
    id: "github",
    name: "GitHub Repo",
    handle: "NCHQ02",
    role: "Can audit",
    avatarColor: "bg-[#333]", // GitHub Black
    initial: "Gh",
    action: "link",
    url: "https://github.com/NCHQ02",
    canEditLabel: "Editor",
  },
  {
    id: "phone",
    name: "Mobile",
    handle: "(+84) 971 012 091",
    role: "Can call",
    avatarColor: "bg-design-green",
    initial: "Ph",
    action: "copy",
    canEditLabel: "Viewer",
  },
];

// --- SUB-COMPONENTS (LEFT SIDE) ---

const Toast = ({ message, visible }: { message: string; visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        exit={{ opacity: 0, y: 20, x: "-50%" }}
        className="fixed bottom-10 left-1/2 z-[100] bg-[#1e1e1e] border border-white/10 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3"
      >
        <div className="w-5 h-5 bg-design-green rounded-full flex items-center justify-center text-black">
          <CheckIcon />
        </div>
        <span className="text-sm font-medium">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

const ContactRow: React.FC<{
  item: ContactItem;
  onAction: (item: ContactItem) => void;
}> = ({ item, onAction }) => {
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

// --- SUB-COMPONENTS (RIGHT SIDE - FIGJAM) ---

const StickyNote = ({
  text,
  color,
  rotate,
  x,
  y,
  author,
}: {
  text: string;
  color: string;
  rotate: number;
  x: number;
  y: number;
  author: string;
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
      className="relative w-full h-full min-h-[500px] bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden cursor-none select-none group"
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

// --- MAIN COMPONENT ---

const Contact: React.FC = () => {
  const { setLabel } = useCursor();
  const [toast, setToast] = useState<{ show: boolean; msg: string }>({
    show: false,
    msg: "",
  });
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Toast Logic
  const showToast = (msg: string) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  };

  // Action Handler
  const handleAction = (item: ContactItem) => {
    if (item.action === "copy") {
      navigator.clipboard.writeText(item.handle);
      showToast(`Copied ${item.name} to clipboard`);
    } else if (item.action === "link" && item.url) {
      window.open(item.url, "_blank");
    }
  };

  // Auto-typing effect
  useEffect(() => {
    const text = "recruiter@company.com";
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      if (i < text.length) {
        setInputValue((prev) => prev + text.charAt(i));
        i++;
        timeout = setTimeout(type, 100 + Math.random() * 50);
      }
    };
    const startTimeout = setTimeout(type, 1500);
    return () => {
      clearTimeout(timeout);
      clearTimeout(startTimeout);
    };
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 px-4 relative max-w-[1600px] mx-auto overflow-hidden"
    >
      {/* WIDGETS INJECTION */}
      <NotificationWidget />
      <QuickActionsWidget />

      <Toast message={toast.msg} visible={toast.show} />

      {/* === NEW HEADER DESIGN: INCOMING TRANSMISSION === */}
      <div className="mb-24 relative flex flex-col items-center justify-center select-none">
        {/* 1. Wireframe Number Background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] md:text-[22rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0"
          style={{ WebkitTextStroke: "2px #fff" }}
        >
          06
        </div>

        {/* 2. Status Indicator */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-10 flex items-center gap-2 bg-[#1e1e1e] border border-white/10 px-4 py-2 rounded-full shadow-lg mb-8"
        >
          <div className="relative">
            <div className="w-3 h-3 bg-design-green rounded-full relative z-10" />
            <div className="absolute inset-0 bg-design-green rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-xs font-bold text-gray-300 tracking-wide">
            STATUS: <span className="text-design-green">ONLINE</span>
          </span>
          <div className="w-px h-4 bg-white/10 mx-2" />
          <span className="text-[10px] text-gray-500 font-mono">
            12ms latency
          </span>
        </motion.div>

        {/* 3. Main Title */}
        <div className="relative z-10 text-center">
          {/* Floating "Typing..." Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-12 -right-8 md:-right-16 bg-white text-black px-4 py-2 rounded-2xl rounded-bl-none shadow-xl flex items-center gap-1"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="w-1.5 h-1.5 bg-black rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-1.5 h-1.5 bg-black rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-1.5 h-1.5 bg-black rounded-full"
            />
          </motion.div>

          <div className="flex flex-col items-center leading-none">
            <h2
              className="text-6xl md:text-9xl font-black text-transparent stroke-text tracking-tighter hover:text-white transition-colors duration-500 cursor-default"
              style={{ WebkitTextStroke: "2px #fff" }}
            >
              LET'S
            </h2>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="relative"
            >
              <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-design-blue via-design-purple to-design-pink tracking-tighter pb-2">
                COLLABORATE
              </h2>
              {/* Decorative Send Icon */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-8 md:-right-16 text-white opacity-50 rotate-[-15deg]"
              >
                <SendIcon />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-gray-400 max-w-lg text-center text-sm md:text-base"
        >
          Initiate a handshake protocol. Whether it's a project inquiry or a
          tech discussion, my inbox is always listening.
        </motion.p>
      </div>
      {/* === END HEADER === */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start h-full">
        {/* --- LEFT: SHARE MODAL (Takes 4 cols) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:col-span-4 bg-[#1e1e1e] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative z-10"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#252525]">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Share "Portfolio 2025"
              <span className="px-1.5 py-0.5 bg-black/30 text-[9px] text-gray-400 rounded border border-white/5">
                READ-ONLY
              </span>
            </h3>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative group">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  readOnly
                  className="w-full bg-[#111] border border-transparent group-hover:border-design-blue/50 text-gray-300 text-sm px-3 py-2.5 rounded focus:outline-none focus:border-design-blue transition-colors cursor-text"
                  placeholder="Add emails, teams, or people"
                />
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="absolute top-2.5 right-3 w-0.5 h-5 bg-design-blue pointer-events-none"
                />
              </div>
              <button
                className="bg-design-blue hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors shadow-lg shadow-blue-500/20 cursor-none"
                onMouseEnter={() => setLabel("Send")}
                onMouseLeave={() => setLabel(null)}
                onClick={() =>
                  (window.location.href = "mailto:hoangquy.design@gmail.com")
                }
              >
                Invite
              </button>
            </div>

            <div className="mb-2">
              <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                People with access
              </h4>
            </div>

            <div className="space-y-1">
              {CONTACTS.map((contact) => (
                <ContactRow
                  key={contact.id}
                  item={contact}
                  onAction={handleAction}
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-[#252525] flex items-center justify-between">
            <div
              className="flex items-center gap-2 text-design-blue hover:text-blue-400 cursor-pointer text-xs font-medium group transition-colors"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                showToast("Portfolio link copied");
              }}
              onMouseEnter={() => setLabel("Copy")}
              onMouseLeave={() => setLabel(null)}
            >
              <div className="p-1.5 rounded-md group-hover:bg-design-blue/10 transition-colors">
                <CopyIcon />
              </div>
              <span>Copy link</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <GlobeIcon />
              <span>Anyone with the link</span>
              <span className="text-gray-400 font-bold">can view</span>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: FIGJAM PLAYGROUND (Takes 8 cols) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:col-span-8 h-[600px] relative"
        >
          <FigJamCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
