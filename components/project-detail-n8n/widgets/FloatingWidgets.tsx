import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ADVANCED HELPERS ---

// Random utility
const rnd = (min: number, max: number) => Math.random() * (max - min) + min;

// Floating Container with richer animation presets
const Float = ({
  children,
  top,
  left,
  right,
  depth = 1, // 0: back, 1: mid, 2: front
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  top: string;
  left?: string;
  right?: string;
  depth?: 0 | 1 | 2;
  delay?: number;
  className?: string;
}) => {
  const depthScales = [0.6, 1, 1.2];
  const depthBlurs = ["blur-[2px]", "blur-0", "blur-0"];
  const depthZ = [0, 10, 20];
  const duration = rnd(4, 8);

  return (
    <motion.div
      className={`absolute pointer-events-none ${depthBlurs[depth]} ${className}`}
      style={{ top, left, right, zIndex: 10 + depthZ[depth] }} // Increased base z-index
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 1],
        scale: depthScales[depth],
        y: [0, -30 * (depth + 1), 0],
        rotate: [0, rnd(-5, 5), 0],
      }}
      exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: rnd(0, 2),
        },
        rotate: {
          duration: duration * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Glass Card with Glow
const Widget = ({
  children,
  color = "white",
  size = "md",
}: {
  children: React.ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const sizes = { sm: "p-2 text-xs", md: "p-4", lg: "p-6" };
  return (
    <div
      className={`
      backdrop-blur-xl bg-[#0a0a0a]/40 border border-white/10 rounded-2xl
      shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${sizes[size]}
    `}
      style={{ borderColor: `${color}30`, boxShadow: `0 0 40px ${color}10` }}
    >
      {children}
    </div>
  );
};

// Animated Line
const Line = ({
  x1,
  y1,
  x2,
  y2,
  color,
}: {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  color: string;
}) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none z-0"
    style={{ overflow: "visible" }}
  >
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="1"
      strokeDasharray="4 4"
      strokeOpacity="0.2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    />
    <motion.circle r="3" fill={color}>
      <animateMotion
        dur="4s"
        repeatCount="indefinite"
        path={`M${x1},${y1} L${x2},${y2}`}
      />
    </motion.circle>
  </svg>
);

// --- GENERATIVE PARTICLE SYSTEM ---
const GenerativeBackground = ({
  theme,
  count = 25,
}: {
  theme: "overview" | "social" | "ai" | "office";
  count?: number;
}) => {
  const configs = {
    overview: {
      symbols: ["+", "⤫", "□", "::", "⊢", "⊥"],
      colors: ["text-gray-600", "text-orange-500/40", "text-blue-500/40"],
    },
    social: {
      symbols: ["♥", "★", "●", "▲", "☺", "👍"],
      colors: ["text-pink-500/30", "text-red-500/30", "text-purple-500/30"],
    },
    ai: {
      symbols: ["0", "1", "{", "}", "/>", "*"],
      colors: ["text-purple-500/40", "text-blue-500/40", "text-cyan-500/40"],
    },
    office: {
      symbols: ["✓", "•", "▪", "—", "$", "%"],
      colors: ["text-green-500/30", "text-emerald-500/30", "text-white/20"],
    },
  };

  const { symbols, colors } = configs[theme];

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const scale = 0.5 + Math.random();
        const duration = 5 + Math.random() * 10;
        const delay = Math.random() * 5;

        return (
          <Float
            key={i}
            top={`${top}%`}
            left={`${left}%`}
            depth={Math.random() > 0.7 ? 1 : 0} // Mostly back/mid layer
            delay={delay}
            className={`font-mono text-xs ${color} opacity-40`}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                rotate: {
                  duration: duration * 2,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: {
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {symbol}
            </motion.div>
          </Float>
        );
      })}
    </>
  );
};

// --- 1. OVERVIEW: THE ARCHITECT (Blue/Orange) ---
const OverviewSet = () => (
  <>
    <GenerativeBackground theme="overview" count={60} />

    {/* Background Measurements */}
    <Float top="10%" left="5%" depth={0}>
      <div className="font-mono text-xs text-gray-600 opacity-50">
        <div>DIM: 1024x768</div>
        <div>GRID: 12px</div>
        <div>SNAP: ON</div>
      </div>
    </Float>

    <Float top="50%" right="40%" depth={0}>
      <div className="font-mono text-[10px] text-gray-700 opacity-40 rotate-90">
        -- SECTION BREAK --
      </div>
    </Float>

    <Float top="85%" right="10%" depth={0}>
      <div className="border border-dashed border-gray-600 w-32 h-32 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" />
    </Float>

    {/* Main Widgets */}
    <Float top="15%" right="15%" depth={2} delay={0.2}>
      <Widget color="#f97316">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-xl">
            📐
          </div>
          <div>
            <div className="text-xs text-gray-400">Blueprint ID</div>
            <div className="font-mono font-bold text-orange-400">#ARCH-01</div>
          </div>
        </div>
      </Widget>
    </Float>

    <Float top="35%" left="8%" depth={1} delay={0.4}>
      <div className="bg-[#1a1a1a] p-2 rounded rotate-3 border border-gray-700 shadow-xl">
        <div className="w-24 h-16 bg-grid-gray-700/50 rounded-sm" />
      </div>
    </Float>

    <Float top="60%" right="5%" depth={2} delay={0.6}>
      <Widget color="#3b82f6" size="sm">
        <div className="flex gap-2">
          <span className="animate-pulse">●</span>
          <span>System Scanning...</span>
        </div>
      </Widget>
    </Float>

    {/* Clone Widgets for Density */}
    <Float top="25%" left="40%" depth={1} delay={1}>
      <div className="bg-blue-500/10 px-2 py-1 rounded text-[10px] text-blue-400 border border-blue-500/20">
        Node Connected
      </div>
    </Float>
    <Float top="75%" left="20%" depth={1} delay={1.5}>
      <div className="bg-orange-500/10 px-2 py-1 rounded text-[10px] text-orange-400 border border-orange-500/20">
        Route Optimizing...
      </div>
    </Float>

    {/* Connector Lines */}
    <Line x1="10%" y1="20%" x2="30%" y2="40%" color="#f97316" />
    <Line x1="80%" y1="60%" x2="60%" y2="80%" color="#3b82f6" />
    <Line x1="40%" y1="30%" x2="50%" y2="50%" color="#3b82f6" />
  </>
);

// --- 2. SOCIAL: THE HYPE (Pink/Red) ---
const SocialSet = () => (
  <>
    <GenerativeBackground theme="social" count={60} />

    {/* Floating Emojis */}
    {[
      { i: "🔥", t: "12%", l: "10%" },
      { i: "❤️", t: "25%", r: "15%" },
      { i: "👍", t: "60%", l: "5%" },
      { i: "🚀", t: "80%", r: "8%" },
      { i: "💬", t: "40%", r: "25%" },
      { i: "😮", t: "18%", l: "40%" }, // Added
      { i: "💯", t: "55%", r: "45%" }, // Added
    ].map((item, idx) => (
      <Float
        key={idx}
        top={item.t}
        left={item.l}
        right={item.r}
        depth={rnd(0, 2) as 0 | 1 | 2}
        delay={idx * 0.1}
      >
        <div className="text-4xl filter drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          {item.i}
        </div>
      </Float>
    ))}

    {/* Live Stream Widget */}
    <Float top="20%" right="8%" depth={2}>
      <Widget color="#ec4899">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute" />
            <div className="w-3 h-3 bg-red-500 rounded-full relative" />
          </div>
          <span className="font-bold text-red-400 text-xs">LIVE</span>
          <span className="ml-2 font-mono text-white">12,402 Watching</span>
        </div>
      </Widget>
    </Float>

    {/* Clone Live Widget */}
    <Float top="65%" right="35%" depth={1} delay={2}>
      <div className="bg-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-200 border border-purple-500/30 flex items-center gap-2">
        <span>●</span>
        New Subscriber
      </div>
    </Float>

    {/* Media Player */}
    <Float top="70%" left="15%" depth={1} delay={0.5}>
      <div className="backdrop-blur-md bg-white/5 p-4 rounded-2xl border border-white/10 w-48">
        <div className="h-2 bg-gray-700 rounded-full mb-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>0:42</span>
          <span>-3:15</span>
        </div>
      </div>
    </Float>

    <Line x1="20%" y1="10%" x2="80%" y2="30%" color="#ec4899" />
    <Line x1="10%" y1="80%" x2="30%" y2="60%" color="#ec4899" />
  </>
);

// --- 3. AI: THE MATRIX (Purple/Neon) ---
const AISet = () => (
  <>
    <GenerativeBackground theme="ai" count={80} />

    {/* Data Streams */}
    {Array.from({ length: 10 }).map(
      (
        _,
        i // Increased
      ) => (
        <Float
          key={i}
          top={`${rnd(10, 90)}%`}
          left={`${rnd(5, 95)}%`}
          depth={0}
          delay={rnd(0, 2)}
        >
          <div className="text-[8px] font-mono text-purple-500/40 writing-vertical-lr tracking-widest">
            {Math.random().toString(2).substring(2, 10)}
          </div>
        </Float>
      )
    )}

    {/* Neural Core */}
    <Float top="40%" right="10%" depth={2}>
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 border-2 border-purple-500/50 rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border-2 border-blue-500/50 rounded-full border-b-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl">
          🧠
        </div>
      </div>
    </Float>

    {/* Code Block */}
    <Float top="20%" left="5%" depth={1}>
      <Widget color="#8b5cf6" size="sm">
        <div className="font-mono text-[10px] text-purple-300">
          <div>while(thinking) {"{"}</div>
          <div className="pl-2">optimize(synapse);</div>
          <div className="pl-2">await output();</div>
          <div>{"}"}</div>
        </div>
      </Widget>
    </Float>

    {/* Clone Code Block */}
    <Float top="60%" left="40%" depth={0} delay={1.2}>
      <div className="font-mono text-[8px] text-blue-500/50 bg-black/50 p-2 rounded">
        {`>> INIT_MODEL_V4`}
      </div>
    </Float>

    {/* Model Badge */}
    <Float top="75%" left="20%" depth={2} delay={0.8}>
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg shadow-lg shadow-purple-500/20 flex items-center gap-2">
        <span>✨</span>
        <span className="font-bold text-xs">GPT-4 Turbo</span>
      </div>
    </Float>

    <Line x1="10%" y1="30%" x2="90%" y2="50%" color="#8b5cf6" />
    <Line x1="50%" y1="10%" x2="50%" y2="90%" color="#3b82f6" />
    <Line x1="80%" y1="20%" x2="70%" y2="80%" color="#3b82f6" />
  </>
);

// --- 4. OFFICE: THE FLOW (Green/Emerald) ---
const OfficeSet = () => (
  <>
    <GenerativeBackground theme="office" count={60} />

    {/* Flying Envelopes */}
    {[1, 2, 3, 4, 5].map(
      (
        i // Increased
      ) => (
        <Float
          key={i}
          top={`${20 + i * 12}%`}
          left={`${10 + i * 8}%`}
          depth={1}
          delay={i * 0.5}
        >
          <div className="text-3xl filter drop-shadow-lg">📨</div>
        </Float>
      )
    )}

    {/* Floating Spreadsheets */}
    <Float top="15%" right="30%" depth={0} delay={1}>
      <div className="bg-white/10 w-20 h-12 grid grid-cols-3 gap-0.5 p-0.5 rounded opacity-30">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bg-white/20" />
        ))}
      </div>
    </Float>

    {/* Growth Chart */}
    <Float top="30%" right="15%" depth={2}>
      <Widget color="#22c55e">
        <div className="w-32 h-20 flex items-end justify-between gap-2">
          {[40, 65, 45, 80, 55, 95].map((h, i) => (
            <motion.div
              key={i}
              className="w-full bg-green-500 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="mt-2 text-xs text-green-400 font-bold border-t border-green-500/20 pt-1 flex justify-between">
          <span>Growth</span>
          <span>+124%</span>
        </div>
      </Widget>
    </Float>

    {/* Time Save Badge */}
    <Float top="80%" left="10%" depth={2} delay={1}>
      <div className="bg-white text-black px-4 py-3 rounded-xl font-bold flex flex-col items-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        <span className="text-xs text-gray-500 uppercase">Saved</span>
        <span className="text-2xl">40hrs</span>
        <span className="text-[10px] text-gray-500">this week</span>
      </div>
    </Float>

    <Line x1="20%" y1="40%" x2="80%" y2="40%" color="#22c55e" />
    <Line x1="60%" y1="10%" x2="40%" y2="90%" color="#22c55e" />
  </>
);

const FloatingWidgets = ({ activeTab }: { activeTab: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none h-full z-0">
      <AnimatePresence mode="wait">
        {activeTab === 0 && (
          <motion.div
            key="overview"
            className="w-full h-full"
            exit={{ opacity: 0 }}
          >
            <OverviewSet />
          </motion.div>
        )}
        {activeTab === 1 && (
          <motion.div
            key="social"
            className="w-full h-full"
            exit={{ opacity: 0 }}
          >
            <SocialSet />
          </motion.div>
        )}
        {activeTab === 2 && (
          <motion.div key="ai" className="w-full h-full" exit={{ opacity: 0 }}>
            <AISet />
          </motion.div>
        )}
        {activeTab === 3 && (
          <motion.div
            key="office"
            className="w-full h-full"
            exit={{ opacity: 0 }}
          >
            <OfficeSet />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingWidgets;
