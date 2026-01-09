import React from "react";
import { TerminalIcon } from "./ResumeIcons";
import { motion } from "framer-motion";

export const TerminalBlock = () => {
  return (
    <div className="w-full max-w-md bg-[#0D1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-xs h-[320px]">
      {/* Terminal Header */}
      <div className="bg-[#161B22] px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2 text-gray-400">
          <TerminalIcon />
          <span>user@portfolio:~</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 flex-1 text-gray-300 space-y-2 overflow-hidden">
        <div className="flex">
          <span className="text-design-green mr-2">➜</span>
          <span className="text-blue-400">~</span>
          <span className="ml-2">npm install</span>
          <span className="text-white ml-2">hoang-quy-cv</span>
        </div>

        <div className="opacity-70">
          <p className="text-gray-500 text-[10px] mb-1">
            ... resolving dependencies
          </p>
          <p className="text-gray-500 text-[10px] mb-1">
            ... fetching career_data.json
          </p>
          <p className="text-gray-500 text-[10px] mb-3">
            ... verifying skills integrity
          </p>
        </div>

        <div className="border-l-2 border-design-blue pl-3 py-1 text-gray-400">
          <p>
            Name: <span className="text-white">Hoang Quy</span>
          </p>
          <p>
            Role:{" "}
            <span className="text-design-yellow">
              Automation Marketing Specialist
            </span>
          </p>
          <p>
            Stack:{" "}
            <span className="text-design-purple">
              [Martech, Data, AI, Automation]
            </span>
          </p>
          <p>
            Location: <span className="text-white">Vietnam</span>
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <span className="text-design-green">✔</span>
          <span className="text-white font-bold">
            Package installed successfully.
          </span>
        </div>

        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="flex mt-2"
        >
          <span className="text-design-green mr-2">➜</span>
          <span className="text-blue-400">~</span>
          <div className="w-2 h-4 bg-gray-500 ml-2" />
        </motion.div>
      </div>
    </div>
  );
};
