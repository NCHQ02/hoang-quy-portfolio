import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "./GlobalCursor";

// --- SIDE WIDGETS (DESKTOP ONLY) ---

const ActiveViewersWidget = () => (
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    className="absolute left-6 top-1/3 flex flex-col gap-2 z-20 hidden 2xl:flex"
  >
    <div className="bg-[#2C2C2E] px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-gray-400 font-bold uppercase self-start mb-1 shadow-lg">
      Currently Viewing
    </div>
    <div className="flex flex-col gap-2">
      {[
        { color: "bg-[#F24E1E]", initial: "AM", delay: 0.6 },
        { color: "bg-[#0ACF83]", initial: "SC", delay: 0.7 },
        { color: "bg-[#1ABCFE]", initial: "DK", delay: 0.8 },
        { color: "bg-[#A259FF]", initial: "EW", delay: 0.9 },
        { color: "bg-gray-500", initial: "+4", delay: 1.0 },
      ].map((user, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: user.delay,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="flex items-center gap-2 group cursor-default"
        >
          <div
            className={`w-8 h-8 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-white shadow-lg ${user.color} ring-2 ring-white/10 ring-offset-1 ring-offset-[#0a0a0a]`}
          >
            {user.initial}
          </div>
          <div className="bg-[#1e1e1e] border border-white/10 px-2 py-1 rounded text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity -ml-1 whitespace-nowrap">
            Online
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ReactionPaletteWidget = () => (
  <motion.div
    initial={{ x: 50, opacity: 0, scale: 0.8 }}
    whileInView={{ x: 0, opacity: 1, scale: 1 }}
    transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
    className="absolute right-6 top-1/4 w-12 bg-[#2C2C2E] border border-white/10 rounded-full shadow-2xl hidden 2xl:flex flex-col items-center py-2 gap-2 z-20"
  >
    {["🔥", "👍", "❤️", "🎉", "👀"].map((emoji, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
        whileHover={{ scale: 1.4 }}
        className="w-8 h-8 flex items-center justify-center text-lg cursor-pointer hover:bg-white/10 rounded-full transition-colors relative group"
      >
        {emoji}
        {/* Tooltip on hover */}
        <span className="absolute right-10 bg-black text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          React
        </span>
      </motion.div>
    ))}
    <div className="w-8 h-px bg-white/10 my-1" />
    <motion.div
      whileHover={{ rotate: 90 }}
      className="w-8 h-8 flex items-center justify-center text-lg cursor-pointer hover:bg-white/10 rounded-full text-gray-400"
    >
      +
    </motion.div>
  </motion.div>
);

// --- DATA ---

const FEEDBACKS = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Product Manager",
    text: "Quy transforms vague requirements into pixel-perfect interfaces. The way he structured the component library saved us weeks of dev time.",
    color: "bg-[#F24E1E]", // Figma Red
    x: "10%",
    y: "20%",
    initials: "AM",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Engineering Lead",
    text: "Cleanest code I've seen from a designer-dev hybrid. His understanding of React hooks and animation performance is top-tier.",
    color: "bg-[#0ACF83]", // Figma Green
    x: "60%",
    y: "10%",
    initials: "SC",
  },
  {
    id: 3,
    name: "David Kim",
    role: "CEO @ StartUp",
    text: "The 'wow' factor he added to our landing page directly increased our conversion rate by 15%. Highly recommended!",
    color: "bg-[#1ABCFE]", // Figma Blue
    x: "30%",
    y: "60%",
    initials: "DK",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Senior Designer",
    text: "Collaborating with Quy is a breeze. He speaks 'design' fluently and respects the grid system meticulously.",
    color: "bg-[#A259FF]", // Figma Purple
    x: "70%",
    y: "50%",
    initials: "EW",
  },
];

// --- SUB-COMPONENTS ---

const CommentPin = ({
  color,
  initials,
}: {
  color: string;
  initials: string;
}) => (
  <div className="relative">
    {/* The Pin Shape */}
    <div
      className={`w-8 h-8 rounded-full rounded-bl-none ${color} border-2 border-white flex items-center justify-center shadow-lg relative z-10`}
    >
      <span className="text-[10px] font-bold text-white">{initials}</span>
    </div>
  </div>
);

const CommentCard = ({
  feedback,
  index,
}: {
  feedback: (typeof FEEDBACKS)[0];
  index: number;
}) => {
  const { setLabel } = useCursor();

  // Convert generic color class to actual hex for the cursor SVG (simplified mapping)
  const getHex = (cls: string) => {
    if (cls.includes("#")) return cls.replace("bg-[", "").replace("]", "");
    return "#000";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative group w-full md:max-w-md"
      onMouseEnter={() => setLabel("Reply")}
      onMouseLeave={() => setLabel(null)}
    >
      {/* Collaborative Cursor (Simulated) */}
      <motion.div
        className="absolute -top-8 -right-8 z-20 pointer-events-none hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: 10, y: 10 }}
        animate={{ x: [0, -5, 0], y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Custom SVG Cursor matching the user color */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-md"
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill={getHex(feedback.color)}
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div
            className={`absolute left-4 top-4 ${feedback.color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap border border-white/20`}
          >
            {feedback.name}
          </div>
        </div>
      </motion.div>

      {/* The Comment Box */}
      <div className="bg-[#2C2C2E] border border-white/10 rounded-xl p-4 shadow-2xl relative hover:border-white/20 transition-colors">
        {/* Header: Pin + Name + Time */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <CommentPin color={feedback.color} initials={feedback.initials} />
            <div>
              <h4 className="text-sm font-bold text-white leading-none mb-1">
                {feedback.name}
              </h4>
              <p className="text-[10px] text-gray-500 font-mono">
                {feedback.role}
              </p>
            </div>
          </div>
          <span className="text-[10px] text-gray-600">Now</span>
        </div>

        {/* Body */}
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          "{feedback.text}"
        </p>

        {/* Footer: Resolve Button (Fake Interactive) */}
        <div className="border-t border-white/5 pt-3 flex items-center justify-between">
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-gray-600 border border-[#2C2C2E]" />
            <div className="w-5 h-5 rounded-full bg-gray-500 border border-[#2C2C2E]" />
            <div className="w-5 h-5 rounded-full bg-gray-400 border border-[#2C2C2E] flex items-center justify-center text-[8px] text-black font-bold">
              +1
            </div>
          </div>
          <button className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
            <div className="w-3 h-3 border border-gray-500 rounded-full group-hover:border-white" />
            Mark as Resolved
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

const Testimonials: React.FC = () => {
  const { setLabel } = useCursor();

  return (
    <section id="testimonials" className="py-32 px-4 relative overflow-hidden">
      {/* SIDE WIDGETS INJECTION */}
      <ActiveViewersWidget />
      <ReactionPaletteWidget />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === NEW HEADER DESIGN: LIVE REVIEW SESSION === */}
        <div className="mb-40 relative flex flex-col items-center justify-center select-none">
          {/* 1. Wireframe Number Background */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0"
            style={{ WebkitTextStroke: "2px #fff" }}
          >
            04
          </div>

          {/* 2. Top "Live Viewers" Pill */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 flex items-center gap-4 bg-[#1e1e1e] border border-white/10 pl-2 pr-4 py-2 rounded-full shadow-2xl mb-8 group hover:border-design-green/50 transition-colors"
          >
            <div className="flex -space-x-3">
              {FEEDBACKS.map((fb, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[#1e1e1e] flex items-center justify-center text-[10px] font-bold text-black shadow-sm transform group-hover:translate-x-1 transition-transform`}
                  style={{
                    backgroundColor: fb.color.includes("#")
                      ? fb.color.replace("bg-[", "").replace("]", "")
                      : "#888",
                  }}
                >
                  {fb.initials}
                </div>
              ))}
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-design-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-design-green"></span>
              </span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">
                Live Review
              </span>
            </div>
          </motion.div>

          {/* 3. Main Title & Stamp */}
          <div
            className="relative z-10 text-center"
            onMouseEnter={() => setLabel("High Five")}
            onMouseLeave={() => setLabel(null)}
          >
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-0 md:mb-2 drop-shadow-2xl">
              SOCIAL
            </h2>
            <div className="relative inline-block">
              <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-700 tracking-tighter">
                PROOF
              </h2>

              {/* THE GIANT STAMP */}
              <motion.div
                initial={{ scale: 3, opacity: 0, rotate: 15 }}
                whileInView={{ scale: 1, opacity: 1, rotate: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  delay: 0.4,
                }}
                className="absolute -right-6 top-0 md:-right-24 md:top-6 z-20"
              >
                <div className="relative group/stamp cursor-pointer">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-design-green blur-xl opacity-0 group-hover/stamp:opacity-40 transition-opacity duration-300" />

                  {/* Stamp Body */}
                  <div className="relative border-[6px] border-design-green text-design-green px-4 py-1 md:px-8 md:py-2 rounded-xl font-display font-black text-2xl md:text-5xl uppercase tracking-widest bg-[#0a0a0a]/80 backdrop-blur-md shadow-2xl transform group-hover/stamp:scale-105 transition-transform">
                    Verified
                  </div>

                  {/* Star Decoration */}
                  <div className="absolute -top-3 -right-3 text-2xl md:text-4xl">
                    ✨
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 4. Floating Decoration Bubbles */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 bg-[#2C2C2E] px-3 py-2 rounded-xl rounded-bl-none shadow-xl border border-white/5 z-20"
          >
            <span className="text-xl">🔥</span>
            <span className="text-xs font-bold text-white">
              Insane quality!
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute right-4 md:right-20 bottom-10 hidden md:flex items-center gap-2 bg-[#2C2C2E] px-3 py-2 rounded-xl rounded-br-none shadow-xl border border-white/5 z-20"
          >
            <span className="text-xl">⭐️</span>
            <span className="text-xs font-bold text-white">5 Star Rating</span>
          </motion.div>
        </div>
        {/* === END HEADER === */}

        {/* Grid Layout simulating a FigJam board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:px-20 relative">
          {/* Background Grid Decoration for this specific area */}
          <div className="absolute inset-0 border border-dashed border-white/5 rounded-3xl -m-8 pointer-events-none" />

          {FEEDBACKS.map((fb, idx) => (
            <div
              key={fb.id}
              className={`flex ${
                idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
              } ${idx === 1 ? "md:mt-12" : ""} ${idx === 2 ? "md:-mt-12" : ""}`}
            >
              <CommentCard feedback={fb} index={idx} />
            </div>
          ))}
        </div>

        {/* Bottom Call To Action / "Join" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative group">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#1e1e1e] border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start a Project
            </button>
            {/* Decorate with a cursor pointing to the button */}
            <div className="absolute -right-8 top-1/2 translate-x-full -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-design-blue -rotate-12"
              >
                <path
                  d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                  fill="currentColor"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="bg-design-blue text-white text-[9px] px-1.5 py-0.5 rounded ml-2">
                You
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
