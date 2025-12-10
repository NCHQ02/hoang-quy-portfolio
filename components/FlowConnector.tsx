import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from './GlobalCursor';

// --- SUB-COMPONENTS ---

const SelectionHandle = ({ className }: { className?: string }) => (
  <div className={`absolute w-1.5 h-1.5 bg-white border border-design-blue z-20 ${className}`} />
);

const ConnectorDot = ({ className }: { className?: string }) => (
    <div className={`absolute w-3 h-3 bg-white border-2 border-design-blue rounded-full z-10 ${className}`} />
);

// 1. Color Palette Card
const PaletteCard = () => {
    const { setLabel } = useCursor();
    return (
        <motion.div 
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            onMouseEnter={() => setLabel("Drag")}
            onMouseLeave={() => setLabel(null)}
            className="w-48 bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] p-3 flex flex-col gap-2 cursor-grab active:cursor-grabbing relative group"
        >
            <div className="flex justify-between items-center mb-1 border-b border-white/5 pb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fill Styles</span>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"/>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"/>
                </div>
            </div>
            {/* Swatches */}
            <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded hover:bg-white/10 transition-colors border border-transparent hover:border-white/5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm border border-white/10" />
                <div className="flex flex-col">
                    <span className="text-[10px] text-white font-bold">Brand Blue</span>
                    <span className="text-[8px] text-gray-500">100% • Linear</span>
                </div>
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded hover:bg-white/10 transition-colors border border-transparent hover:border-white/5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-sm border border-white/10" />
                <div className="flex flex-col">
                    <span className="text-[10px] text-white font-bold">Accent Gradient</span>
                    <span className="text-[8px] text-gray-500">Mix • Radial</span>
                </div>
            </div>

             {/* Connector Anchor */}
             <ConnectorDot className="top-1/2 -right-1.5 translate-x-0" />

             {/* Selection Box Decoration */}
             <div className="absolute -inset-1 border border-design-blue opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg">
                <SelectionHandle className="-top-0.5 -left-0.5" />
                <SelectionHandle className="-top-0.5 -right-0.5" />
                <SelectionHandle className="-bottom-0.5 -left-0.5" />
                <SelectionHandle className="-bottom-0.5 -right-0.5" />
            </div>
        </motion.div>
    )
}

// 2. Typography Card
const TypographyCard = () => {
    const { setLabel } = useCursor();
    return (
        <motion.div 
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            onMouseEnter={() => setLabel("Drag")}
            onMouseLeave={() => setLabel(null)}
            className="w-40 bg-[#F5F5F7] text-black rounded-lg shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] p-4 cursor-grab active:cursor-grabbing transform rotate-3 relative group"
        >
             <div className="absolute -top-3 -right-3 w-8 h-8 bg-black text-white text-[12px] font-bold flex items-center justify-center rounded-full shadow-lg z-10 border-2 border-[#F5F5F7]">Aa</div>
             <div className="flex flex-col gap-1">
                 <span className="text-4xl font-display font-black tracking-tighter">H1</span>
                 <div className="h-px w-full bg-gray-300 my-2" />
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-600">Inter Display</span>
                    <span className="text-[10px] font-mono text-gray-400">8rem</span>
                 </div>
                 <span className="text-[8px] text-gray-400">Bold / -4%</span>
             </div>
             {/* Connector Anchor */}
             <ConnectorDot className="top-1/2 -left-1.5 translate-x-0 border-black bg-black" />
        </motion.div>
    )
}

// 3. Code Snippet Card
const CodeCard = () => {
    const { setLabel } = useCursor();
    return (
        <motion.div 
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            onMouseEnter={() => setLabel("Code")}
            onMouseLeave={() => setLabel(null)}
            className="w-56 bg-[#0D1117] rounded-lg border border-gray-700 shadow-2xl p-0 overflow-hidden cursor-grab active:cursor-grabbing relative group"
        >
            <div className="bg-[#161B22] px-3 py-2 flex items-center gap-2 border-b border-gray-700">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="ml-2 text-[10px] text-gray-500 font-mono">config.ts</span>
            </div>
            <div className="p-3 font-mono text-[10px] leading-relaxed text-gray-300">
                <p><span className="text-purple-400">export</span> <span className="text-red-400">const</span> <span className="text-blue-400">theme</span> = {'{'}</p>
                <p className="pl-4">mode: <span className="text-green-400">'dark'</span>,</p>
                <p className="pl-4">blur: <span className="text-orange-400">true</span>,</p>
                <p>{'};'}</p>
            </div>
             {/* Connector Anchor */}
             <ConnectorDot className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5" />
        </motion.div>
    )
}

// 4. Layer List Card
const LayersCard = () => {
    const { setLabel } = useCursor();
    return (
        <motion.div 
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            onMouseEnter={() => setLabel("Layers")}
            onMouseLeave={() => setLabel(null)}
            className="w-36 bg-[#1e1e1e] rounded-lg border border-white/10 shadow-xl p-2 cursor-grab active:cursor-grabbing transform -rotate-2 relative group"
        >
             <div className="text-[9px] text-gray-500 font-bold uppercase mb-2 px-1">Layers</div>
             <div className="space-y-1">
                 <div className="flex items-center gap-2 p-1 bg-design-blue/20 rounded border border-design-blue/50">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                    <span className="text-[10px] text-white">Hero Section</span>
                 </div>
                 <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
                    <span className="text-[10px] text-gray-400">Avatar</span>
                 </div>
                 <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/></svg>
                    <span className="text-[10px] text-gray-400">Footer</span>
                 </div>
             </div>
             {/* Connector Anchor */}
             <ConnectorDot className="top-0 left-1/2 -translate-x-1/2 -translate-y-1.5" />
        </motion.div>
    )
}

// 5. [NEW] Button Component Set Card
const ButtonVariantsCard = () => {
    const { setLabel } = useCursor();
    return (
        <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: 1.05, zIndex: 25 }}
            onMouseEnter={() => setLabel("Component")}
            onMouseLeave={() => setLabel(null)}
            className="w-40 bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-dashed border-design-purple/50 p-3 flex flex-col gap-3 cursor-grab active:cursor-grabbing relative group shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform rotate-3"
        >
             <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-1">
                <div className="w-2 h-2 border border-design-purple rotate-45" />
                <div className="text-[9px] text-design-purple font-bold uppercase tracking-wider">Button Set</div>
             </div>
             
             <div className="space-y-2">
                 <div className="bg-design-blue text-white text-[10px] font-bold py-1.5 px-3 rounded text-center shadow-sm hover:scale-105 transition-transform">
                    Default
                 </div>
                 <div className="bg-blue-400 text-white text-[10px] font-bold py-1.5 px-3 rounded text-center shadow-md border-2 border-white/20 transform scale-[1.02]">
                    Hover
                 </div>
             </div>
             
             {/* Connector Anchor */}
             <ConnectorDot className="top-1/2 -left-1.5 translate-x-0" />
        </motion.div>
    )
}

// 6. [NEW] Properties Panel
const PropertiesPanel = () => {
    const { setLabel } = useCursor();
    return (
        <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: 1.05, zIndex: 25 }}
            onMouseEnter={() => setLabel("Props")}
            onMouseLeave={() => setLabel(null)}
            className="w-32 bg-[#2C2C2E] rounded-lg border border-white/10 shadow-2xl p-2 flex flex-col gap-2 cursor-grab active:cursor-grabbing relative transform -rotate-1"
        >
             <div className="flex justify-between items-center opacity-50 px-1 pt-1">
                 <span className="text-[9px] font-bold">Align</span>
                 <span className="text-[9px] font-bold">Distribute</span>
             </div>
             <div className="flex justify-between px-1 py-1 bg-black/20 rounded">
                 {/* Simple Align Icons */}
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="white" className="opacity-70"><rect x="2" y="4" width="2" height="16"/><rect x="8" y="8" width="12" height="8"/></svg>
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="white" className="opacity-70"><rect x="11" y="4" width="2" height="16"/><rect x="5" y="8" width="14" height="8"/></svg>
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="white" className="opacity-70"><rect x="20" y="4" width="2" height="16"/><rect x="4" y="8" width="12" height="8"/></svg>
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
                 <div className="bg-black/30 rounded p-1 flex items-center gap-1 border border-white/5 col-span-2">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M5 5h14v14H5z"/></svg>
                    <span className="text-[9px] text-gray-300 font-mono ml-auto">#3B82F6</span>
                 </div>
             </div>

             {/* Connector Anchor */}
             <ConnectorDot className="top-0 right-1/2 translate-x-1/2 -translate-y-1.5" />
        </motion.div>
    )
}

// 7. Comment Bubble (Updated)
const CommentBubble = ({ text, author, color, x, y, delay }: { text: string, author: string, color: string, x: string, y: string, delay: number }) => {
    return (
        <motion.div 
            className="absolute z-30 flex flex-col items-start gap-1"
            style={{ left: x, top: y }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        >
            <div className={`relative px-3 py-2 rounded-xl rounded-tl-none ${color} text-black shadow-lg max-w-[150px]`}>
                <p className="text-[11px] font-bold leading-tight">{text}</p>
            </div>
            <div className="flex items-center gap-1 ml-1">
                <div className={`w-4 h-4 rounded-full ${color} border border-black/20 flex items-center justify-center text-[8px] font-bold`}>
                    {author.charAt(0)}
                </div>
                <span className="text-[9px] text-gray-500 font-bold">{author}</span>
            </div>
        </motion.div>
    )
}

// --- MAIN COMPONENT ---

const FlowConnector: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Effects
    const yLeft = useTransform(scrollYProgress, [0, 1], [50, -100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yCenter = useTransform(scrollYProgress, [0, 1], [100, -50]);
    const yMid = useTransform(scrollYProgress, [0, 1], [50, -80]);
    
    // Line Animation
    const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        // Adjusted height to accommodate more items comfortably
        <div ref={containerRef} className="relative w-full h-[90vh] md:h-[100vh] overflow-visible pointer-events-none mt-[-5vh]">
            
            {/* 1. Background Grid (Localized & Faded) */}
            <div className="absolute inset-0 z-0 opacity-10" 
                style={{ 
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', 
                    backgroundSize: '32px 32px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                }} 
            />

            {/* 2. Complex Prototype Connections (SVG Lines) */}
            <svg className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                    </marker>
                    <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6" />
                    </marker>
                </defs>

                {/* Main Flow: Hero -> Code */}
                <motion.path
                    d="M 25% 20% C 25% 50%, 50% 50%, 50% 80%"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    markerEnd="url(#arrowhead)"
                    style={{ pathLength, opacity }}
                />

                {/* Secondary Flow: Typography -> Layers */}
                <motion.path
                    d="M 75% 30% C 75% 60%, 60% 40%, 60% 20%"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead-purple)"
                    style={{ pathLength, opacity: opacity }}
                />

                 {/* Tertiary Flow: Button -> Properties (New Connection) */}
                 <motion.path
                    d="M 15% 60% C 25% 60%, 50% 70%, 75% 85%"
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    style={{ pathLength, opacity }}
                />
            </svg>

            {/* 3. Floating Interactive Assets */}
            <div className="absolute inset-0 w-full mx-auto pointer-events-auto">
                
                {/* --- TOP LEFT: Palette --- */}
                <motion.div 
                    style={{ y: yLeft }}
                    className="absolute top-[15%] left-[5%] md:left-[10%]"
                >
                    <PaletteCard />
                    {/* Fake Cursor Hovering */}
                    <motion.div 
                        className="absolute -bottom-8 -right-8 pointer-events-none z-30"
                        animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-design-pink drop-shadow-md">
                            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                         </svg>
                         <div className="absolute left-4 top-4 bg-design-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Designer</div>
                    </motion.div>
                </motion.div>

                {/* --- MID LEFT: [NEW] Button Variants --- */}
                <motion.div 
                    style={{ y: yMid }}
                    className="absolute top-[45%] left-[2%] md:left-[15%]"
                >
                    <ButtonVariantsCard />
                </motion.div>

                {/* --- TOP RIGHT: Typography --- */}
                <motion.div 
                    style={{ y: yRight }}
                    className="absolute top-[10%] right-[5%] md:right-[15%]"
                >
                    <TypographyCard />
                </motion.div>

                {/* --- CENTER BOTTOM: Code --- */}
                <motion.div 
                    style={{ y: yCenter }}
                    className="absolute top-[60%] left-[50%] -translate-x-1/2"
                >
                    <CodeCard />
                     {/* Fake Cursor Hovering */}
                     <motion.div 
                        className="absolute -top-6 -left-6 pointer-events-none z-30"
                        animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-design-green drop-shadow-md">
                            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                         </svg>
                         <div className="absolute left-4 top-4 bg-design-green text-black text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Dev</div>
                    </motion.div>
                </motion.div>

                 {/* --- MID RIGHT: Layers --- */}
                 <motion.div 
                    style={{ y: yRight }}
                    className="absolute top-[40%] right-[15%] md:right-[25%]"
                >
                    <LayersCard />
                </motion.div>

                 {/* --- BOTTOM RIGHT: [NEW] Properties Panel --- */}
                 <motion.div 
                    style={{ y: yLeft }}
                    className="absolute top-[75%] right-[5%] md:right-[15%]"
                >
                    <PropertiesPanel />
                </motion.div>

                {/* --- COMMENTS --- */}
                <CommentBubble text="Clean layout! ⚡️" author="PM" color="bg-design-yellow" x="20%" y="35%" delay={0} />
                <CommentBubble text="System ready." author="Lead" color="bg-design-orange" x="70%" y="65%" delay={2} />

                 {/* Decorative Plus Signs (Canvas markers) */}
                 <div className="absolute top-[50%] left-[5%] text-white/10 text-4xl font-thin">+</div>
                 <div className="absolute top-[20%] right-[3%] text-white/10 text-4xl font-thin">+</div>
                 <div className="absolute bottom-[10%] left-[50%] text-white/10 text-4xl font-thin">+</div>

            </div>

        </div>
    );
};

export default FlowConnector;