import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import { AUTHOR_NAME } from "../../../constants";

export const HolographicCard = () => {
  const { setLabel } = useCursor();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const sheenX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setLabel(null);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setLabel("Scan ID")}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-[320px] h-[480px] bg-[#1a1a1a] rounded-[24px] border border-white/10 shadow-2xl flex flex-col overflow-hidden group perspective-1000"
    >
      {/* Holographic Sheen Layer */}
      <motion.div
        style={{
          background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)`,
          backgroundSize: "200% 200%",
          backgroundPosition: `${sheenX.get()}% ${sheenY.get()}%`, // This needs to be reactive, simplified for now
        }}
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-50"
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      {/* Card Header */}
      <div className="relative z-10 p-6 flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
            <div className="w-4 h-4 bg-design-yellow rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
              Access Level
            </span>
            <span className="text-xs text-white font-mono font-bold">
              Premium
            </span>
          </div>
        </div>
        {/* Sim Card Chip */}
        <div className="w-12 h-9 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md border border-yellow-600 relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 border border-black/20 rounded-md" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-black/20" />
          <div className="absolute left-1/3 top-0 h-full w-px bg-black/20" />
          <div className="absolute left-2/3 top-0 h-full w-px bg-black/20" />
        </div>
      </div>

      {/* Card Body - Avatar */}
      <div className="relative z-10 px-6 flex-1 flex flex-col justify-center items-center text-center">
        <div className="relative w-32 h-32 rounded-full border-2 border-white/10 p-1 mb-4 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 rounded-full border-2 border-design-blue border-t-transparent animate-spin-slow" />
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLuApkrl-nsuW0F6FzlwAHMhXhvW-SVuD-VJqq_bsQr-BCeTepNNA=s288-c-no"
            alt="Avatar"
            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-design-green text-black text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#1a1a1a]">
            ✓
          </div>
        </div>

        <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tight">
          {AUTHOR_NAME}
        </h3>
        <p className="text-design-blue font-mono text-xs mb-4">
          Automation Marketing Specialist
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 w-full mt-2">
          <div className="bg-white/5 rounded p-2 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase">EXP</div>
            <div className="text-sm font-bold text-white">3+ Yrs</div>
          </div>
          <div className="bg-white/5 rounded p-2 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase">Projects</div>
            <div className="text-sm font-bold text-white">15+</div>
          </div>
          <div className="bg-white/5 rounded p-2 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase">Status</div>
            <div className="text-sm font-bold text-design-green">Open</div>
          </div>
        </div>
      </div>

      {/* Card Footer - Barcode */}
      <div className="relative z-10 p-6 pt-0 mt-auto">
        <div className="h-12 bg-white p-1 rounded-sm flex items-center justify-center overflow-hidden">
          {/* Fake Barcode */}
          <div className="flex gap-0.5 w-full h-full justify-center opacity-80">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="bg-black h-full"
                style={{ width: Math.random() * 4 + 1 }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-2 text-[8px] text-gray-500 font-mono">
          <span>ID: 884-219-X99</span>
          <span>VALID THRU: 2030</span>
        </div>
      </div>
    </motion.div>
  );
};
