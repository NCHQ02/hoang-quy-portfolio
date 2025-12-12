import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useVelocity,
} from "framer-motion";
import { useCursor } from "./GlobalCursor";

// --- TYPES & UTILS ---

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

// --- SUB-COMPONENTS (ASSETS) ---

const SelectionHandle = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-1.5 h-1.5 bg-white border border-design-blue z-20 ${className}`}
  />
);

const ConnectorDot = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-3 h-3 bg-white border-2 border-design-blue rounded-full z-10 ${className}`}
  />
);

// --- WIDGET COLLECTION ---

// 1. Git Commit Card
const GitCommitCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Grab")}
      onMouseLeave={() => setLabel(null)}
      className="w-48 bg-[#0D1117] rounded-lg border border-white/10 shadow-xl p-3 relative group select-none pointer-events-none"
    >
      <div className="flex items-center gap-2 mb-2 opacity-50">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
        <span className="text-[10px] font-mono">main branch</span>
      </div>
      <div className="space-y-2 relative">
        <div className="absolute left-[5px] top-1 bottom-1 w-px bg-gray-700" />
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-design-green ring-2 ring-[#0D1117]" />
          <div className="text-[10px] text-gray-300">feat: physics engine</div>
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-500 ring-2 ring-[#0D1117]" />
          <div className="text-[10px] text-gray-500">fix: collisions</div>
        </div>
      </div>
      <ConnectorDot className="top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 bg-design-green border-design-green" />
    </div>
  );
};

// 2. Icon Grid Card
const IconGridCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Throw")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#1e1e1e] rounded-lg border border-white/10 shadow-xl p-3 select-none pointer-events-none"
    >
      <div className="text-[9px] text-gray-500 font-bold uppercase mb-2">
        Icon Set / 24px
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="aspect-square bg-white/5 rounded flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full border border-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Mobile Preview Card
const MobilePreviewCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Mobile")}
      onMouseLeave={() => setLabel(null)}
      className="w-24 h-40 bg-black rounded-[14px] border-4 border-[#333] shadow-2xl overflow-hidden select-none pointer-events-none"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#333] rounded-b-md z-20" />
      <div className="w-full h-full bg-[#0a0a0a] pt-4 px-2 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-design-purple mb-2 opacity-80" />
        <div className="w-12 h-1.5 bg-gray-800 rounded mb-1" />
        <div className="w-8 h-1.5 bg-gray-800 rounded mb-3" />
        <div className="w-full h-10 bg-white/5 rounded mb-1" />
        <div className="w-full h-10 bg-white/5 rounded" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  );
};

// 4. Palette Card
const PaletteCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Colors")}
      onMouseLeave={() => setLabel(null)}
      className="w-48 bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-white/10 shadow-xl p-3 flex flex-col gap-2 select-none pointer-events-none"
    >
      <div className="flex justify-between items-center mb-1 border-b border-white/5 pb-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Fill Styles
        </span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
        </div>
      </div>
      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm border border-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] text-white font-bold">Brand Blue</span>
          <span className="text-[8px] text-gray-500">100% • Linear</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-sm border border-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] text-white font-bold">
            Accent Gradient
          </span>
          <span className="text-[8px] text-gray-500">Mix • Radial</span>
        </div>
      </div>
      <ConnectorDot className="top-1/2 -right-1.5 translate-x-0" />
    </div>
  );
};

// 5. Code Card
const CodeCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Source")}
      onMouseLeave={() => setLabel(null)}
      className="w-56 bg-[#0D1117] rounded-lg border border-gray-700 shadow-2xl p-0 overflow-hidden select-none pointer-events-none"
    >
      <div className="bg-[#161B22] px-3 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-[10px] text-gray-500 font-mono">
          physics.ts
        </span>
      </div>
      <div className="p-3 font-mono text-[10px] leading-relaxed text-gray-300">
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">gravity</span> ={" "}
          <span className="text-orange-400">false</span>;
        </p>
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">chaos</span> ={" "}
          <span className="text-green-400">"Controlled"</span>;
        </p>
        <p className="opacity-50">// Try throwing this!</p>
      </div>
      <ConnectorDot className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5" />
    </div>
  );
};

// 6. Typography Card (New)
const TypographyCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Font")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#F5F5F7] text-black rounded-lg shadow-xl p-4 select-none pointer-events-none"
    >
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-black text-white text-[12px] font-bold flex items-center justify-center rounded-full shadow-lg z-10 border-2 border-[#F5F5F7]">
        Aa
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-4xl font-display font-black tracking-tighter">
          H1
        </span>
        <div className="h-px w-full bg-gray-300 my-2" />
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-600">Inter</span>
          <span className="text-[10px] font-mono text-gray-400">8rem</span>
        </div>
      </div>
    </div>
  );
};

// 7. Layers Card (New)
const LayersCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Layers")}
      onMouseLeave={() => setLabel(null)}
      className="w-36 bg-[#1e1e1e] rounded-lg border border-white/10 shadow-xl p-2 select-none pointer-events-none"
    >
      <div className="text-[9px] text-gray-500 font-bold uppercase mb-2 px-1">
        Layers
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-1 bg-design-blue/20 rounded border border-design-blue/50">
          <span className="text-[10px] text-white">Hero Section</span>
        </div>
        <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
          <span className="text-[10px] text-gray-400">Avatar</span>
        </div>
        <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
          <span className="text-[10px] text-gray-400">Footer</span>
        </div>
      </div>
    </div>
  );
};

// 8. Properties Panel (New)
const PropertiesPanel = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Props")}
      onMouseLeave={() => setLabel(null)}
      className="w-32 bg-[#2C2C2E] rounded-lg border border-white/10 shadow-2xl p-2 flex flex-col gap-2 select-none pointer-events-none"
    >
      <div className="flex justify-between items-center opacity-50 px-1 pt-1">
        <span className="text-[9px] font-bold">Align</span>
        <span className="text-[9px] font-bold">Distribute</span>
      </div>
      <div className="flex justify-between px-1 py-1 bg-black/20 rounded">
        <div className="w-2 h-4 bg-white/50 rounded-[1px]" />
        <div className="w-2 h-4 bg-white/50 rounded-[1px]" />
        <div className="w-2 h-4 bg-white/50 rounded-[1px]" />
      </div>
      <div className="h-px bg-white/5 w-full my-0.5" />
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-black/30 rounded p-1 flex items-center gap-1 border border-white/5">
          <span className="text-[8px] text-gray-500 font-bold">W</span>
          <span className="text-[9px] text-gray-300 font-mono">240</span>
        </div>
        <div className="bg-black/30 rounded p-1 flex items-center gap-1 border border-white/5">
          <span className="text-[8px] text-gray-500 font-bold">H</span>
          <span className="text-[9px] text-gray-300 font-mono">120</span>
        </div>
      </div>
    </div>
  );
};

// 9. Button Variants (New)
const ButtonVariantsCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("UI Kit")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-dashed border-design-purple/50 p-3 flex flex-col gap-3 select-none pointer-events-none"
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-1">
        <div className="w-2 h-2 border border-design-purple rotate-45" />
        <div className="text-[9px] text-design-purple font-bold uppercase tracking-wider">
          Button Set
        </div>
      </div>
      <div className="space-y-2">
        <div className="bg-design-blue text-white text-[10px] font-bold py-1.5 px-3 rounded text-center shadow-sm">
          Default
        </div>
        <div className="bg-blue-400 text-white text-[10px] font-bold py-1.5 px-3 rounded text-center shadow-md border-2 border-white/20">
          Hover
        </div>
      </div>
    </div>
  );
};

// --- PHYSICS ENGINE COMPONENT ---

interface PhysicsBoxProps {
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  mass?: number;
  rotation?: number;
  isMobile?: boolean; // New Prop to disable physics on mobile
}

const PhysicsBox: React.FC<PhysicsBoxProps> = ({
  children,
  initialX,
  initialY,
  mass = 1,
  rotation = 0,
  isMobile = false,
}) => {
  const [windowWidth, windowHeight] = useWindowSize();
  const boxRef = useRef<HTMLDivElement>(null);

  // Motion Values
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const rotate = useMotionValue(rotation);

  // Velocities
  const xVelocity = useVelocity(x);
  const yVelocity = useVelocity(y);

  // State
  const isDragging = useRef(false);
  const [zIndex, setZIndex] = useState(10);

  // Physics Constants
  const friction = 0.92; // INCREASED FRICTION (Lower number = faster slowdown)
  const bounceFactor = -0.6; // Less bouncy for realism
  const minVelocity = 0.2;

  // Floating Animation State (for when idle)
  const time = useRef(Math.random() * 100);

  // Internal velocity tracker
  const vx = useRef(0);
  const vy = useRef(0);
  const vr = useRef(0);

  // --- INTERACTION HANDLERS ---
  const handleTap = () => {
    if (isMobile) return; // Disable tap physics on mobile
    // Spin impulse: Random direction, strong force
    const spinForce =
      (Math.random() > 0.5 ? 1 : -1) * (30 + Math.random() * 20);
    vr.current += spinForce;

    // Jump impulse: Slight pop upwards
    vy.current -= 5;
  };

  // --- THE PHYSICS LOOP ---
  useAnimationFrame((t, delta) => {
    // If mobile, skip physics calculations entirely
    if (isMobile || !boxRef.current || !windowWidth || !windowHeight) return;

    if (isDragging.current) {
      vx.current = xVelocity.get();
      vy.current = yVelocity.get();
      vr.current = vx.current * 0.1;
      return;
    }

    // Apply Friction
    vx.current *= friction;
    vy.current *= friction;
    vr.current *= friction;

    const speed = Math.sqrt(vx.current ** 2 + vy.current ** 2);

    // Continue applying rotational physics even if linear speed is slow,
    // unless rotation is also very slow
    if (speed < minVelocity && Math.abs(vr.current) < 0.5) {
      // --- FLOATING MODE ---
      time.current += delta * 0.001;
      const floatX = Math.sin(time.current) * 0.3;
      const floatY = Math.cos(time.current * 0.8) * 0.3;

      x.set(x.get() + floatX);
      y.set(y.get() + floatY);

      // Slowly return to mostly upright only if NOT spinning fast
      rotate.set(rotate.get() * 0.98);
    } else {
      // --- DYNAMIC MODE ---
      let nextX = x.get() + vx.current * (delta / 16);
      let nextY = y.get() + vy.current * (delta / 16);

      const width = boxRef.current.offsetWidth;
      const height = boxRef.current.offsetHeight;

      // Wall Collisions
      if (nextX + width / 2 > windowWidth) {
        nextX = windowWidth - width / 2;
        vx.current *= bounceFactor;
        vr.current += (Math.random() - 0.5) * 5;
      } else if (nextX - width / 2 < 0) {
        nextX = width / 2;
        vx.current *= bounceFactor;
        vr.current += (Math.random() - 0.5) * 5;
      }

      // Soft Floor / Ceiling (Allow some overflow)
      if (nextY > windowHeight + 200) {
        nextY = -200; // Loop back top
        vy.current = Math.abs(vy.current) * 0.5;
      } else if (nextY < -400) {
        nextY = -400;
        vy.current *= bounceFactor;
      }

      x.set(nextX);
      y.set(nextY);
      rotate.set(rotate.get() + vr.current * (delta / 16));
    }
  });

  // Mobile specific styles vs Desktop physics styles
  if (isMobile) {
    return (
      <div
        className="absolute"
        style={{
          left: initialX,
          top: initialY,
          transform: `rotate(${rotation}deg)`,
          zIndex: 10,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={boxRef}
      style={{ x, y, rotate, zIndex }}
      className="absolute cursor-grab active:cursor-grabbing touch-none"
      drag
      dragMomentum={false}
      onDragStart={() => {
        isDragging.current = true;
        setZIndex(50);
      }}
      onDragEnd={() => {
        isDragging.current = false;
        setZIndex(10);
      }}
      onTap={handleTap} // Added Click-to-Spin Interaction
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

const FlowConnector: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState([1000, 800]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", updateSize);
    updateSize(); // Initial check
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!mounted) return null;

  const w = windowSize[0];
  const h = window.innerHeight; // Use simpler height calc

  // CLEANED UP INITIAL POSITIONS (Balanced Layout)
  const positions = [
    { x: w * 0.15, y: h * 0.15, r: -5 }, // Git (Top Left)
    { x: w * 0.35, y: h * 0.25, r: 5 }, // Icons (Top Mid-Left)
    { x: w * 0.15, y: h * 0.5, r: -2 }, // Palette (Mid Left)
    { x: w * 0.5, y: h * 0.45, r: 0 }, // Code (Center)
    { x: w * 0.85, y: h * 0.5, r: 8 }, // Mobile (Mid Right)
    { x: w * 0.25, y: h * 0.75, r: 3 }, // Typography (Bottom Left)
    { x: w * 0.8, y: h * 0.15, r: -4 }, // Layers (Top Right)
    { x: w * 0.75, y: h * 0.75, r: 2 }, // Props (Bottom Right)
    { x: w * 0.5, y: h * 0.8, r: -6 }, // Buttons (Bottom Center)
    { x: w * 0.65, y: h * 0.3, r: 0 }, // Comment (Floating Right)
  ];

  // Mobile simplified positions with extra Palette widget
  const mobilePositions = [
    { x: w * 0.1, y: h * 0.1, r: -5 }, // Git (Top Left)
    { x: w * 0.5, y: h * 0.3, r: 5 }, // Mobile (Center Right)
    { x: w * 0.2, y: h * 0.5, r: -2 }, // Code (Mid Left)
    { x: w * 0.1, y: h * 0.75, r: 4 }, // Palette (Bottom Left) - New
  ];

  return (
    // Reduced height from 120vh to 100vh for tighter packing
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-visible pointer-events-none -mt-[15vh] z-30"
    >
      {/* 1. Background Connection Lines */}
      <svg className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none opacity-30">
        <defs>
          <linearGradient id="mainLineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="20%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="80%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 50% 0% L 50% 100%"
          fill="none"
          stroke="url(#mainLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          style={{ pathLength, opacity }}
        />
        {/* Simplified Side Branches - Hide on mobile for cleaner look */}
        {!isMobile && (
          <>
            <motion.path
              d="M 50% 20% C 20% 20%, 20% 40%, 20% 60%"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.1"
              strokeWidth="1"
              style={{ pathLength, opacity }}
            />
            <motion.path
              d="M 50% 30% C 80% 30%, 80% 50%, 80% 70%"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.1"
              strokeWidth="1"
              style={{ pathLength, opacity }}
            />
          </>
        )}
      </svg>

      {/* 2. Interactive Physics Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        {isMobile ? (
          // Mobile View: Reduced widgets, static layout
          <>
            <PhysicsBox
              initialX={mobilePositions[0].x}
              initialY={mobilePositions[0].y}
              rotation={mobilePositions[0].r}
              isMobile={true}
            >
              <GitCommitCard />
            </PhysicsBox>
            <PhysicsBox
              initialX={mobilePositions[1].x}
              initialY={mobilePositions[1].y}
              rotation={mobilePositions[1].r}
              isMobile={true}
            >
              <MobilePreviewCard />
            </PhysicsBox>
            <PhysicsBox
              initialX={mobilePositions[2].x}
              initialY={mobilePositions[2].y}
              rotation={mobilePositions[2].r}
              isMobile={true}
            >
              <CodeCard />
            </PhysicsBox>
            <PhysicsBox
              initialX={mobilePositions[3].x}
              initialY={mobilePositions[3].y}
              rotation={mobilePositions[3].r}
              isMobile={true}
            >
              <PaletteCard />
            </PhysicsBox>
          </>
        ) : (
          // Desktop View: Full physics experience
          <>
            <PhysicsBox
              initialX={positions[0].x}
              initialY={positions[0].y}
              rotation={positions[0].r}
            >
              <GitCommitCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[1].x}
              initialY={positions[1].y}
              rotation={positions[1].r}
            >
              <IconGridCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[2].x}
              initialY={positions[2].y}
              rotation={positions[2].r}
            >
              <PaletteCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[3].x}
              initialY={positions[3].y}
              rotation={positions[3].r}
            >
              <CodeCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[4].x}
              initialY={positions[4].y}
              rotation={positions[4].r}
            >
              <MobilePreviewCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[5].x}
              initialY={positions[5].y}
              rotation={positions[5].r}
            >
              <TypographyCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[6].x}
              initialY={positions[6].y}
              rotation={positions[6].r}
            >
              <LayersCard />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[7].x}
              initialY={positions[7].y}
              rotation={positions[7].r}
            >
              <PropertiesPanel />
            </PhysicsBox>

            <PhysicsBox
              initialX={positions[8].x}
              initialY={positions[8].y}
              rotation={positions[8].r}
            >
              <ButtonVariantsCard />
            </PhysicsBox>

            {/* Decorative Floating Comment */}
            <PhysicsBox
              initialX={positions[9].x}
              initialY={positions[9].y}
              rotation={positions[9].r}
            >
              <div className="bg-design-blue text-white px-3 py-2 rounded-xl rounded-tl-none shadow-lg max-w-[150px] pointer-events-none">
                <p className="text-[11px] font-bold leading-tight">
                  Throw me! 🏐
                </p>
              </div>
            </PhysicsBox>

            {/* Instructions Hint */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-gray-600 text-xs font-mono opacity-50 pointer-events-none">
              ( Try grabbing & throwing items )
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlowConnector;
