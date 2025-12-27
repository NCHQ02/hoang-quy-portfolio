import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "./GlobalCursor";
import { ViewState } from "../App";

// --- SIDE WIDGETS (DESKTOP ONLY) ---

const LayersWidget = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0, y: 50 }} // Hologram Scale Start
    whileInView={{ scale: 1, opacity: 1, y: 0 }} // Hologram Scale End
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
    className="absolute left-4 top-1/3 w-60 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden 2xl:flex flex-col overflow-hidden z-20 origin-bottom-left"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        Pages & Layers
      </span>
      <span className="text-[10px] text-gray-500">Shift+L</span>
    </div>
    <div className="p-2 space-y-0.5">
      <div className="px-2 py-1 text-[11px] text-gray-300 font-bold bg-white/5 rounded">
        Page 1: Overview
      </div>
      <div className="pl-4">
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded group cursor-default">
          <div className="text-gray-500 text-[9px] group-hover:text-white">
            #
          </div>
          <span className="text-[10px] text-gray-400 group-hover:text-white">
            Case Study: n8n
          </span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded group cursor-default">
          <div className="text-gray-500 text-[9px] group-hover:text-white">
            #
          </div>
          <span className="text-[10px] text-gray-400 group-hover:text-white">
            Case Study: Vibe
          </span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded group cursor-default">
          <div className="text-gray-500 text-[9px] group-hover:text-white">
            #
          </div>
          <span className="text-[10px] text-gray-400 group-hover:text-white">
            Case Study: Data
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const PrototypeActionsWidget = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0, x: 20 }} // Hologram Scale Start (Right) - Reduced from 50 to prevent clipping
    whileInView={{ scale: 1, opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.7 }}
    className="absolute right-6 top-1/4 flex flex-col gap-3 z-20 hidden 2xl:flex origin-top-right"
  >
    <div className="bg-[#1e1e1e] border border-white/10 p-2 rounded-lg shadow-xl flex flex-col items-center gap-4">
      <button
        className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-white"
        title="Play"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      </button>
      <button
        className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-white"
        title="Share"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      </button>
      <div className="h-px w-4 bg-white/10" />
      <button
        className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-design-blue"
        title="Flow 1"
      >
        <span className="text-[10px] font-bold">100%</span>
      </button>
    </div>

    <div className="bg-[#1e1e1e] border border-white/10 px-3 py-2 rounded-lg shadow-xl text-center">
      <div className="text-[9px] text-gray-500 uppercase font-bold mb-1">
        Flow starting point
      </div>
      <div className="flex items-center gap-1.5 text-white">
        <div className="w-3 h-3 bg-design-blue flex items-center justify-center text-[8px] font-bold">
          1
        </div>
        <span className="text-[10px]">Main Flow</span>
      </div>
    </div>
  </motion.div>
);

// --- SHARED UI COMPONENTS ---

const SelectionHandle = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-2 h-2 bg-white border border-design-blue z-20 ${className}`}
  />
);

const WindowHeader = ({
  title,
  color = "bg-gray-600",
}: {
  title: string;
  color?: string;
}) => (
  <div className="h-8 bg-[#2A2A2A] border-b border-white/5 flex items-center px-3 justify-between rounded-t-xl select-none">
    <div className="flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
    </div>
    <span className="text-[10px] font-mono text-gray-400 opacity-70 flex-1 text-center mr-10">
      {title}
    </span>
  </div>
);

interface TagProps {
  text: string;
  color: string;
}

const Tag: React.FC<TagProps> = ({ text, color }) => (
  <span
    className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-white/10 ${color}`}
  >
    {text}
  </span>
);

// --- VISUALIZATIONS ---

// 1. n8n Node Graph Visualization
const N8nVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#181818] rounded-b-xl overflow-hidden p-4 grid-bg">
      {/* Background Dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Nodes */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-24 bg-[#2A2A2A] border border-design-orange rounded-lg p-2 shadow-lg z-10"
      >
        <div className="text-[9px] text-design-orange font-bold mb-1">
          WEBHOOK
        </div>
        <div className="h-1 w-full bg-gray-700 rounded mb-1"></div>
        <div className="h-1 w-2/3 bg-gray-700 rounded"></div>
        <div className="absolute -right-1 top-1/2 w-2 h-2 bg-design-orange rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 bg-[#2A2A2A] border border-design-purple rounded-lg p-2 shadow-lg z-10"
      >
        <div className="flex justify-between items-center mb-1">
          <div className="text-[9px] text-design-purple font-bold">
            AI AGENT
          </div>
          <div className="text-[8px] bg-design-purple text-white px-1 rounded">
            GPT-4
          </div>
        </div>
        <div className="h-1 w-full bg-gray-700 rounded mb-1"></div>
        <div className="h-1 w-full bg-gray-700 rounded mb-1"></div>
        <div className="h-1 w-1/2 bg-gray-700 rounded"></div>
        <div className="absolute -left-1 top-1/2 w-2 h-2 bg-design-purple rounded-full"></div>
        <div className="absolute -right-1 top-1/2 w-2 h-2 bg-design-purple rounded-full"></div>
      </motion.div>

      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <motion.path
          d="M100 100 C 150 100, 150 100, 200 100" // Simplified path for demo
          stroke="#555"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>

      {/* Output Nodes */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-10 right-4 w-24 bg-[#2A2A2A] border border-blue-400 rounded-lg p-2 shadow-lg z-10"
      >
        <div className="text-[9px] text-blue-400 font-bold mb-1">LINKEDIN</div>
        <div className="h-1 w-full bg-gray-700 rounded"></div>
        <div className="absolute -left-1 top-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-10 right-4 w-24 bg-[#2A2A2A] border border-green-400 rounded-lg p-2 shadow-lg z-10"
      >
        <div className="text-[9px] text-green-400 font-bold mb-1">
          GO SHEETS
        </div>
        <div className="h-1 w-full bg-gray-700 rounded"></div>
        <div className="absolute -left-1 top-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
      </motion.div>
    </div>
  );
};

// 2. Vibe Coding IDE & App Visual
const VibeCodingVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#0D1117] rounded-b-xl overflow-hidden p-6 flex items-center justify-center">
      {/* Code Editor Layer (Background) */}
      <motion.div
        className="absolute inset-4 bg-[#161B22] border border-white/10 rounded-lg p-3 font-mono text-[10px] text-gray-400 opacity-60 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.6 }}
      >
        <div className="flex gap-2 mb-2 border-b border-white/5 pb-2">
          <span className="text-blue-400">const</span>{" "}
          <span className="text-yellow-200">eventApp</span> ={" "}
          <span className="text-blue-400">new</span>{" "}
          <span className="text-green-400">VibeApp</span>();
        </div>
        <div className="pl-4 space-y-1">
          <div>
            <span className="text-purple-400">eventApp</span>.
            <span className="text-blue-300">onScan</span>((
            <span className="text-orange-300">code</span>) ={">"} {"{"}
          </div>
          <div className="pl-4">
            <span className="text-gray-500">// Auto-tagging GTM</span>
          </div>
          <div className="pl-4">
            <span className="text-yellow-200">GTM</span>.
            <span className="text-blue-300">push</span>({"{"} event:{" "}
            <span className="text-green-300">'offline_checkin'</span> {"}"});
          </div>
          <div className="pl-4">
            <span className="text-yellow-200">CMS</span>.
            <span className="text-blue-300">validate</span>(
            <span className="text-orange-300">code</span>);
          </div>
          <div>{"}"});</div>
        </div>
      </motion.div>

      {/* Mobile App Mockup (Foreground) */}
      <motion.div
        className="relative z-10 w-32 h-56 bg-black border-4 border-gray-800 rounded-[20px] shadow-2xl overflow-hidden"
        initial={{ y: 40, rotate: 5, opacity: 0 }}
        whileInView={{ y: 0, rotate: -5, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl z-20"></div>

        {/* App Screen */}
        <div className="w-full h-full bg-gradient-to-br from-green-900 to-black p-3 pt-8 flex flex-col items-center">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M3 3h6v6H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h6v6H3z" />
            </svg>
          </div>
          <div className="text-white text-[10px] font-bold mb-1">
            QR SUCCESS
          </div>
          <div className="text-green-400 text-[8px] mb-4">
            You are checked in!
          </div>
          <div className="w-full h-8 bg-white/10 rounded-lg mb-2"></div>
          <div className="w-full h-8 bg-white/10 rounded-lg"></div>
        </div>
      </motion.div>

      {/* Selection Box Decoration */}
      <div className="absolute top-10 right-10">
        <div className="px-2 py-1 bg-green-500 text-black text-[9px] font-bold rounded-sm shadow-lg transform rotate-6">
          Affiliate CMS
        </div>
      </div>
    </div>
  );
};

// 3. Data Intelligence & BI Visual
const DataVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#1E1E2E] rounded-b-xl overflow-hidden p-4 grid grid-cols-2 gap-4">
      {/* Background with slight grid for BI feel */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Left: Data Source / Table */}
      <div className="flex flex-col gap-2 relative z-10">
        <div className="bg-[#252535] rounded border border-white/5 p-2 h-full shadow-lg overflow-hidden relative group">
          <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-1">
            <div className="text-[8px] text-gray-400 font-mono">
              CLEAN_DATA_V2.CSV
            </div>
            <div className="text-[8px] text-design-green font-bold">
              100% CLEAN
            </div>
          </div>
          {/* Fake Table Rows */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-1 mb-1 opacity-60">
              <div className="w-1/4 h-1.5 bg-gray-600 rounded-sm"></div>
              <div className="w-1/4 h-1.5 bg-gray-600 rounded-sm"></div>
              <div className="w-1/2 h-1.5 bg-blue-500/50 rounded-sm"></div>
            </div>
          ))}
          {/* Scan line effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-design-blue/10 to-transparent pointer-events-none"
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Right: Visualization Widgets */}
      <div className="flex flex-col gap-2 relative z-10">
        {/* Widget 1: Pie Chart (Segmentation) */}
        <div className="flex-1 bg-[#252535] rounded border border-white/5 p-2 flex flex-col justify-center items-center shadow-lg relative">
          <div className="absolute top-1 left-2 text-[8px] text-gray-400">
            SEGMENTS
          </div>
          <div className="w-12 h-12 rounded-full border-[3px] border-yellow-500 border-t-purple-500 border-r-blue-500 box-border rotate-45 transform"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-bold text-white">
            RFM
          </div>
        </div>

        {/* Widget 2: Bar Chart (Trends) */}
        <div className="flex-1 bg-[#252535] rounded border border-white/5 p-2 flex items-end justify-between gap-1 shadow-lg relative">
          <div className="absolute top-1 left-2 text-[8px] text-gray-400">
            GROWTH
          </div>
          <motion.div
            className="w-full bg-blue-900 rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: "40%" }}
          />
          <motion.div
            className="w-full bg-blue-700 rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: "60%" }}
          />
          <motion.div
            className="w-full bg-blue-500 rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: "30%" }}
          />
          <motion.div
            className="w-full bg-design-green rounded-t-sm shadow-[0_0_10px_rgba(74,222,128,0.5)]"
            initial={{ height: 0 }}
            whileInView={{ height: "80%" }}
          />
        </div>
      </div>

      {/* Floating Tooltips */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-[15%] right-[10%] bg-[#FFC107] text-black text-[8px] font-bold px-1.5 py-0.5 rounded shadow-xl z-20 transform rotate-12"
      >
        Power BI
      </motion.div>
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[20%] left-[15%] bg-[#4285F4] text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-xl z-20 transform -rotate-6"
      >
        Looker
      </motion.div>
    </div>
  );
};

// --- MAIN PROJECT CARD COMPONENT ---

interface ProjectCardProps {
  id: string;
  sectionId?: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  VisualComponent: React.FC;
  align?: "left" | "right";
  className?: string;
  onViewCaseStudy?: () => void;
  isComingSoon?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  sectionId,
  title,
  subtitle,
  description,
  tags,
  color,
  VisualComponent,
  align = "left",
  className,
  onViewCaseStudy,
  isComingSoon = true,
}) => {
  const { setLabel } = useCursor();

  return (
    <motion.div
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-32 ${className}`}
    >
      {/* Visual Side (Span 7) */}
      <div
        className={`lg:col-span-7 h-[300px] md:h-[400px] relative group cursor-none ${
          align === "right" ? "lg:order-2" : "lg:order-1"
        }`}
        onMouseEnter={() => setLabel("Open")}
        onMouseLeave={() => setLabel(null)}
        onClick={onViewCaseStudy}
      >
        {/* The Frame/Window Container */}
        <div className="w-full h-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 border border-white/10 flex flex-col">
          <WindowHeader title={`${id}_mockup.fig`} />
          <VisualComponent />
        </div>

        {/* Decorative Selection Box (Figma Style) */}
        <div className="absolute -inset-4 border border-design-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
          <div className="absolute -top-3 left-0 bg-design-blue text-white text-[10px] font-bold px-1.5 py-0.5">
            Frame 1
          </div>
          <SelectionHandle className="-top-1.5 -left-1.5" />
          <SelectionHandle className="-top-1.5 -right-1.5" />
          <SelectionHandle className="-bottom-1.5 -left-1.5" />
          <SelectionHandle className="-bottom-1.5 -right-1.5" />
        </div>
      </div>

      {/* Content Side (Span 5) */}
      <div
        className={`lg:col-span-5 flex flex-col justify-center ${
          align === "right"
            ? "lg:order-1 lg:text-right items-end"
            : "lg:order-2 lg:text-left items-start"
        }`}
      >
        <div
          className={`flex items-center gap-3 mb-4 ${
            align === "right" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <span
            className={`text-4xl md:text-5xl font-display font-black opacity-10 select-none text-white`}
          >
            {id}
          </span>
          <div className={`h-px w-12 ${color}`} />
        </div>

        <h3
          className={`text-3xl md:text-4xl font-bold text-white mb-2 leading-tight`}
        >
          {title}
        </h3>
        <p
          className={`${color.replace(
            "bg-",
            "text-"
          )} text-sm font-bold uppercase tracking-widest mb-6`}
        >
          {subtitle}
        </p>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
          {description}
        </p>

        <div
          className={`flex flex-wrap gap-2 mb-8 ${
            align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          {tags.map((tag) => (
            <Tag
              key={tag}
              text={tag}
              color="text-gray-300 bg-white/5 hover:bg-white/10 transition-colors"
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setLabel(isComingSoon ? "Soon" : "Click")}
          onMouseLeave={() => setLabel(null)}
          onClick={onViewCaseStudy}
          className={`px-6 py-3 rounded-lg font-bold text-sm bg-white text-black hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-none ${
            !isComingSoon ? "shadow-[0_0_20px_rgba(255,255,255,0.3)]" : ""
          }`}
        >
          {isComingSoon ? "Coming Soon" : "View Case Study"}
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

interface ProjectsProps {
  onViewChange?: (view: ViewState) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewChange }) => {
  const { setLabel } = useCursor();

  return (
    <section id="projects" className="py-32 px-4 relative">
      {/* SIDE WIDGETS INJECTION */}
      <LayersWidget />
      <PrototypeActionsWidget />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === NEW HEADER DESIGN: FIGMA / MESSENGER STYLE MIX === */}
        <div className="mb-40 relative flex justify-center">
          {/* The Main Container "Frame" */}
          <div className="relative">
            {/* Floating "Audio" Capsule (MacOS Style) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-12 -right-8 md:-right-20 bg-design-blue text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-3 z-30"
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="black">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="flex gap-0.5 items-end h-3">
                {[1, 3, 2, 5, 3, 4, 2].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 16, 4] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="w-1 bg-white rounded-full"
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono font-bold">0:24</span>
            </motion.div>

            {/* Mixed Typography Header */}
            <div className="relative text-center select-none">
              {/* 1. Wireframe Number Background - UPDATED */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0"
                style={{ WebkitTextStroke: "2px #fff" }}
              >
                02
              </div>

              {/* 2. "Selected" in Script Font */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-6 md:-top-10 left-4 md:left-0 z-20"
              >
                <span className="font-script text-4xl md:text-6xl text-design-pink drop-shadow-lg transform -rotate-6 block">
                  Selected
                </span>
                {/* Connecting Arrow */}
                <svg
                  className="absolute top-full left-1/2 w-8 h-8 text-design-pink"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C12 10 12 10 18 16" strokeLinecap="round" />
                  <path d="M18 16L14 16" strokeLinecap="round" />
                  <path d="M18 16L18 12" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* 3. "PROJECTS" - Massive, Interacting Letters */}
              <div
                className="relative text-[15vw] md:text-[10rem] lg:text-[12rem] font-black leading-[0.8] tracking-tighter text-white flex justify-center cursor-none group"
                onMouseEnter={() => setLabel("Highlight")}
                onMouseLeave={() => setLabel(null)}
              >
                {/* Split letters for individual animation */}
                {["P", "R", "O", "J", "E", "C", "T", "S"].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, type: "spring" }}
                    whileHover={{
                      y: -20,
                      color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6",
                    }} // Blue/Purple alternate
                    className="transition-colors duration-300 relative"
                  >
                    {char}
                    {char === "J" && (
                      // Add a "sticker" on the J
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="absolute -top-4 right-0 text-2xl md:text-4xl"
                      >
                        ✨
                      </motion.div>
                    )}
                  </motion.span>
                ))}

                {/* "UI/UX" Tag attached to text */}
                <div className="absolute bottom-0 right-10 md:right-20 rotate-6">
                  <span className="bg-[#1e1e1e] border border-white/20 text-gray-400 text-xs md:text-sm font-mono px-3 py-1 rounded shadow-xl">
                    UI/UX
                  </span>
                  <div className="w-px h-8 bg-gray-500 mx-auto" />
                </div>
              </div>

              {/* 4. Selection Box Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute inset-x-0 -inset-y-4 md:-inset-y-8 border-2 border-design-blue/30 rounded-3xl pointer-events-none"
              >
                {/* Corner Handles */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-design-blue" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-design-blue" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-design-blue" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-design-blue" />

                {/* Label Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-design-blue text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Frame 214
                </div>
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 text-center text-gray-500 text-lg max-w-xl mx-auto font-light"
            >
              A collection of solutions focusing on{" "}
              <span className="text-white font-medium">Automation</span>,{" "}
              <span className="text-white font-medium">
                Product Engineering
              </span>
              , and{" "}
              <span className="text-white font-medium">Data Intelligence</span>.
            </motion.p>
          </div>
        </div>
        {/* === END HEADER === */}

        {/* --- PROJECTS LIST --- */}

        {/* 1. n8n Automation */}
        <ProjectCard
          id="01"
          sectionId="project-n8n-card"
          title="n8n Automation Workflow"
          subtitle="Business Process Automation"
          description="Automating repetitive business tasks using n8n and AI Agents. Features include social media auto-posting, intelligent content research, and seamless data handling across platforms."
          tags={["n8n", "AI Agents", "Automation", "Webhooks", "Social API"]}
          color="bg-design-orange"
          VisualComponent={N8nVisual}
          align="left"
          isComingSoon={false}
          onViewCaseStudy={() => onViewChange && onViewChange("project-n8n")}
        />

        {/* 2. Vibe Coding */}
        <ProjectCard
          id="02"
          sectionId="project-vibe-card"
          title="Vibe Coding Product Suite"
          subtitle="Product Engineering Tools"
          description="A suite of utility products including an auto-tagging tool for GTM/GA, an Offline Event Reward Management App, and a Mini-CMS for Affiliate notification management."
          tags={[
            "React Native",
            "GTM/GA4",
            "Node.js",
            "Internal Tools",
            "App Dev",
          ]}
          color="bg-design-green"
          VisualComponent={VibeCodingVisual}
          align="right"
          isComingSoon={false}
          onViewCaseStudy={() => onViewChange && onViewChange("project-vibe")}
        />

        {/* 3. Data Engineering (UPDATED) */}
        <ProjectCard
          id="03"
          sectionId="project-data-card"
          title="Data Intelligence & Analytics"
          subtitle="BI & Customer Insights"
          description="Transforming raw data into clear business insights. Specializing in Data Cleaning, Customer Segmentation, and interactive dashboards using Power BI and Looker Studio."
          tags={[
            "Power BI",
            "Looker",
            "Segmentation",
            "Data Cleaning",
            "Python (Pandas)",
          ]}
          color="bg-design-blue"
          VisualComponent={DataVisual}
          align="left"
          isComingSoon={false}
          onViewCaseStudy={() => onViewChange && onViewChange("project-data")}
        />
      </div>
    </section>
  );
};

export default Projects;
