import React from "react";
import { motion } from "framer-motion";

const AnalyticsVisual = () => {
  return (
    <div className="w-full h-full bg-[#050505] rounded-xl overflow-hidden relative border border-white/5 md:border-none flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),_transparent_60%)]" />

      {/* Floating Particles Background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 300 - 150,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Central "Nervous System" Core */}
      <div className="relative w-48 h-32">
        {/* Core Node */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500/10 rounded-full border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.4)] z-20 flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 30px rgba(59,130,246,0.4)",
              "0 0 60px rgba(59,130,246,0.6)",
              "0 0 30px rgba(59,130,246,0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
        </motion.div>

        {/* Orbiting Connections */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent origin-left"
            style={{ rotate: i * 45 + 15, x: "-50%", y: "-50%" }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400 absolute right-0 top-1/2 -translate-y-1/2 shadow-[0_0_10px_cyan]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.div>
        ))}

        {/* Scanning Beam */}
        <motion.div
          className="absolute -inset-10 border border-blue-500/10 rounded-full"
          animate={{ scale: [0.8, 1.2], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Abstract Data Cards Floating */}
        <motion.div
          className="absolute -right-8 -top-8 bg-[#0f172a] border border-blue-500/30 px-3 py-2 rounded-lg shadow-xl z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-1">
            <div className="h-1 w-12 bg-blue-500/50 rounded-full" />
            <div className="h-1 w-8 bg-blue-500/30 rounded-full" />
          </div>
          <div className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
        </motion.div>

        <motion.div
          className="absolute -left-12 bottom-0 bg-[#0f172a] border border-cyan-500/30 px-3 py-2 rounded-lg shadow-xl z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="text-[8px] font-mono text-cyan-300">GTM-MK92</div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsVisual;
