import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- LEFT WIDGET: LIVE TERMINAL ---
const LiveTerminal = () => {
  const [logs, setLogs] = useState<string[]>([
    "> Initializing n8n workflow...",
    "> Connecting to OpenAI API...",
  ]);

  useEffect(() => {
    const possibleLogs = [
      "[SUCCESS] Webhook received payload (230ms)",
      "[INFO] Processing JSON data...",
      "[INFO] Filtering active users...",
      "[SUCCESS] Record updated in Airtable",
      "[INFO] Genetating image with DALL-E 3...",
      "[SUCCESS] Image verified (1024x1024)",
      "[INFO] Formatting Slack notification...",
      "[SUCCESS] Message sent to #marketing-ops",
      "[WAIT] Waiting for next trigger...",
      "> Executing node 'Code Switch'...",
    ];

    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLog =
          possibleLogs[Math.floor(Math.random() * possibleLogs.length)];
        const newLogs = [...prev, newLog];
        if (newLogs.length > 6) newLogs.shift(); // Keep last 6 lines
        return newLogs;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="hidden xl:block fixed left-8 top-1/3 w-72 z-20 pointer-events-none"
    >
      <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        {/* Window Controls */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <div className="ml-auto text-[10px] text-gray-500 font-mono">
            execution_log.bash
          </div>
        </div>

        {/* Content */}
        <div className="p-4 font-mono text-xs space-y-2 h-40 flex flex-col justify-end">
          <AnimatePresence mode="popLayout">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className={`${
                  log.includes("SUCCESS")
                    ? "text-green-400"
                    : log.includes("INFO")
                    ? "text-blue-400"
                    : "text-gray-400"
                }`}
              >
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Connection Status Badge */}
      <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a]/80 border border-white/10 rounded-full w-fit">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
          System Operational
        </span>
      </div>
    </motion.div>
  );
};

// --- RIGHT WIDGET: CONNECTIVITY CLOUD ---
const AppIcon = ({
  emoji,
  color,
  delay,
  x,
  y,
}: {
  emoji: string;
  color: string;
  delay: number;
  x: number;
  y: number;
}) => (
  <motion.div
    className="absolute flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm z-10"
    style={{ backgroundColor: `${color}10`, boxShadow: `0 0 15px ${color}20` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [y, y - 15, y],
    }}
    transition={{
      opacity: { delay, duration: 0.5 },
      scale: { delay, duration: 0.5 },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      },
    }}
    // Static placement for now, but animated vertically
    custom={{ x, y }}
  >
    <span className="text-2xl filter drop-shadow-md">{emoji}</span>
  </motion.div>
);

const ConnectivityCloud = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="hidden xl:block fixed right-8 top-1/4 w-64 h-[500px] z-20 pointer-events-none"
    >
      <div className="relative w-full h-full">
        {/* Central Hub - n8n style */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff4500] to-[#ff8800] flex items-center justify-center shadow-[0_0_30px_#ff450040] z-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 19H22L12 2ZM12 6L18 17H6L12 6Z" />{" "}
            {/* Simple triangle for abstraction */}
          </svg>
        </motion.div>

        {/* Orbiting Apps */}
        {/* Top Left - Gmail */}
        <div className="absolute top-20 left-4">
          <AppIcon emoji="📧" color="#EA4335" delay={0.2} x={0} y={0} />
          {/* Line to center */}
          <svg className="absolute top-6 left-6 w-32 h-32 -z-10 overflow-visible text-gray-700/30">
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Top Right - GPT */}
        <div className="absolute top-10 right-4">
          <AppIcon emoji="🤖" color="#10A37F" delay={0.4} x={0} y={0} />
          <svg className="absolute top-6 right-6 w-32 h-32 -z-10 overflow-visible text-gray-700/30">
            <line
              x1="0"
              y1="0"
              x2="-80"
              y2="120"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Bottom Left - Slack */}
        <div className="absolute bottom-32 left-0">
          <AppIcon emoji="💬" color="#4A154B" delay={0.6} x={0} y={0} />
          <svg className="absolute top-6 left-6 w-32 h-32 -z-10 overflow-visible text-gray-700/30">
            <line
              x1="0"
              y1="0"
              x2="110"
              y2="-60"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Bottom Right - Sheets */}
        <div className="absolute bottom-20 right-8">
          <AppIcon emoji="📊" color="#34A853" delay={0.8} x={0} y={0} />
          <svg className="absolute top-6 right-6 w-32 h-32 -z-10 overflow-visible text-gray-700/30">
            <line
              x1="0"
              y1="0"
              x2="-90"
              y2="-80"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Floating Particles */}
        <motion.div
          className="absolute top-40 right-0 text-[10px] text-gray-500 font-mono bg-[#111] px-2 py-1 rounded border border-gray-800"
          animate={{ y: [0, -40], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          {"{json}"}
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-10 text-[10px] text-gray-500 font-mono bg-[#111] px-2 py-1 rounded border border-gray-800"
          animate={{ y: [0, 40], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          200 OK
        </motion.div>
      </div>

      {/* Stat Card */}
      <div className="absolute -bottom-10 right-0 bg-[#1a1a1a]/90 backdrop-blur border border-white/5 p-4 rounded-xl shadow-xl w-48">
        <div className="text-gray-400 text-xs mb-1">Total Executions</div>
        <div className="text-2xl font-black text-white flex items-center gap-2">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            14,203
          </motion.span>
          <span className="text-xs text-green-500 font-bold">↑ 24%</span>
        </div>
      </div>
    </motion.div>
  );
};

const SideWidgets = () => {
  return (
    <>
      <LiveTerminal />
      <ConnectivityCloud />
    </>
  );
};

export default SideWidgets;
