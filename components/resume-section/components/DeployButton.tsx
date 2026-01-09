import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import { DownloadIcon, CheckIcon } from "./ResumeIcons";

export const DeployButton = () => {
  const { setLabel } = useCursor();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleDownload = () => {
    if (status !== "idle") return;
    setStatus("loading");
    // Simulate download delay
    setTimeout(() => {
      setStatus("success");

      // Open the Google Drive link in a new tab
      window.open(
        "https://drive.google.com/file/d/1dH4px7ij7yHx67cqWLxwbRtG8qe4ri-5/view?usp=sharing",
        "_blank"
      );

      // Reset after a while
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      onMouseEnter={() => setLabel(status === "idle" ? "Download" : null)}
      onMouseLeave={() => setLabel(null)}
      className={`
                relative h-14 w-64 rounded-lg font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 group
                ${
                  status === "idle"
                    ? "bg-white text-black hover:bg-gray-200"
                    : ""
                }
                ${
                  status === "loading" ? "bg-[#333] text-white cursor-wait" : ""
                }
                ${status === "success" ? "bg-design-green text-black" : ""}
            `}
    >
      <div className="relative z-10 flex items-center justify-center gap-3">
        {status === "idle" && (
          <>
            <span className="uppercase">Deploy to PDF</span>
            <DownloadIcon />
          </>
        )}

        {status === "loading" && (
          <>
            <span className="font-mono">BUILDING...</span>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </>
        )}

        {status === "success" && (
          <>
            <span>SUCCESS</span>
            <CheckIcon />
          </>
        )}
      </div>

      {/* Loading Progress Bar */}
      {status === "loading" && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-design-blue z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      )}

      {/* Hover Glow (Idle only) */}
      {status === "idle" && (
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
      )}
    </motion.button>
  );
};
