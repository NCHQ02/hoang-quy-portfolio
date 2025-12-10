import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { useCursor } from './GlobalCursor';

// --- ICONS ---

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
);

const WorkflowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

const ServerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
);

const LayoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
);

// --- SHARED COMPONENTS ---

const SectionHeader = ({ title, icon }: { title: string, icon?: React.ReactNode }) => (
  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#2C2C2E] select-none">
    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
      {icon} {title}
    </span>
    <div className="flex gap-1">
      <div className="w-1 h-1 rounded-full bg-gray-500"/>
      <div className="w-1 h-1 rounded-full bg-gray-500"/>
      <div className="w-1 h-1 rounded-full bg-gray-500"/>
    </div>
  </div>
);

// --- DECORATIVE HEADER COMPONENTS ---

const FloatingSnippet = ({ type, x, y, rotate }: { type: 'code' | 'css', x: string, y: string, rotate: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`absolute z-20 pointer-events-none hidden md:block`}
            style={{ left: x, top: y, rotate }}
        >
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`p-3 rounded-lg border shadow-xl ${type === 'code' ? 'bg-[#0D1117] border-gray-700' : 'bg-[#1E1E1E] border-white/10'}`}
             >
                {type === 'code' ? (
                    <div className="font-mono text-[10px] leading-tight">
                        <div className="text-gray-500 mb-1">// Config</div>
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">skills</span> = [</div>
                        <div className="pl-2"><span className="text-green-400">'React'</span>, <span className="text-green-400">'NextJS'</span></div>
                        <div>];</div>
                    </div>
                ) : (
                    <div className="font-mono text-[10px] leading-tight text-gray-300">
                        <div className="flex items-center gap-2 mb-1 border-b border-white/10 pb-1">
                           <div className="w-2 h-2 rounded-full bg-design-pink" />
                           <span className="text-[8px] font-bold">COMPONENT</span>
                        </div>
                        <div>display: <span className="text-design-yellow">flex</span>;</div>
                        <div>gap: <span className="text-design-blue">16px</span>;</div>
                    </div>
                )}
             </motion.div>
        </motion.div>
    )
}

const DevModeSwitch = () => {
    return (
        <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex items-center justify-center mb-8"
        >
            <div className="relative bg-[#2C2C2E] border border-white/10 rounded-full p-1.5 flex items-center shadow-2xl">
                {/* Background Slider Animation */}
                <motion.div 
                    className="absolute left-1.5 top-1.5 bottom-1.5 w-[50%] bg-design-green rounded-full z-0"
                    animate={{ x: ['0%', '95%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Design Tab */}
                <div className="relative z-10 px-6 py-2 flex items-center gap-2 text-white mix-blend-difference">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span className="text-xs font-bold uppercase tracking-wider">Design</span>
                </div>

                {/* Dev Tab */}
                <div className="relative z-10 px-6 py-2 flex items-center gap-2 text-white mix-blend-difference">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    <span className="text-xs font-bold uppercase tracking-wider">Dev Mode</span>
                </div>
            </div>
            
            {/* Connecting Label */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-24 top-1/2 -translate-y-1/2 flex items-center gap-2"
            >
                 <div className="w-8 h-px bg-white/20" />
                 <span className="text-[10px] text-design-green font-mono bg-design-green/10 px-2 py-0.5 rounded border border-design-green/20">
                    Auto-Sync
                 </span>
            </motion.div>
        </motion.div>
    )
}

// --- INTERACTIVE COMPONENTS ---

interface MagneticTagProps {
  text: string;
  color?: string;
  onHover: (state: boolean) => void;
}

// 1. Magnetic Tag
const MagneticTag: React.FC<MagneticTagProps> = ({ text, color, onHover }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.2); 
        y.set((clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        onHover(false);
    };

    return (
        <motion.span 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`px-3 py-1.5 bg-[#1C1C1E] border border-white/5 rounded text-[11px] text-gray-400 hover:text-white hover:border-white/40 transition-colors inline-block ${color} cursor-none`}
        >
            {text}
        </motion.span>
    );
};

// 2. Spotlight Card
const SpotlightCard = ({ title, desc, icon, color, delay, onHover }: { title: string, desc: string, icon: React.ReactNode, color: string, delay: number, onHover: (t: string | null) => void }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    onHover("Open");
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    onHover(null);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="relative bg-[#2C2C2E] border border-white/5 rounded-xl p-5 overflow-hidden group h-full cursor-none"
    >
       {/* Spotlight Effect */}
       <div 
         className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
         style={{ 
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)` 
         }}
       />
       {/* Border Glow */}
       <div 
         className="pointer-events-none absolute inset-0 rounded-xl transition duration-300"
         style={{ 
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
            maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
            maskClip: 'content-box, border-box',
            maskComposite: 'exclude',
            padding: '1px'
         }}
       />
       
       <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

       <div className="relative z-10">
          <div className={`w-10 h-10 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:border-white/30 transition-all duration-300`}>
             {icon}
          </div>
          <h4 className="text-sm font-bold text-white mb-2 group-hover:text-design-blue transition-colors">{title}</h4>
          <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
       </div>
    </motion.div>
  );
};

// --- SKILLS COMPONENT ---

const SkillGroup = ({ title, items, color, setCursorLabel }: { title: string, items: string[], color: string, setCursorLabel: (l: string | null) => void }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-3 px-2">
      <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <h4 className="text-xs font-bold text-gray-300 uppercase">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2 px-2">
      {items.map((item, idx) => (
        <MagneticTag 
          key={idx} 
          text={item} 
          onHover={(active) => setCursorLabel(active ? "Inspect" : null)}
        />
      ))}
    </div>
  </div>
);

const SoftSkillTag = ({ text, setCursorLabel }: { text: string, setCursorLabel: (l: string | null) => void }) => (
  <div 
    onMouseEnter={() => setCursorLabel("Check")}
    onMouseLeave={() => setCursorLabel(null)}
    className="flex items-center gap-2 py-1 border-b border-white/5 last:border-0 group cursor-none"
  >
    <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-design-green transition-colors">
       <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-design-green transition-colors" />
    </div>
    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{text}</span>
  </div>
);

// --- MAIN COMPONENT ---

const SkillsServices: React.FC = () => {
  const { setLabel } = useCursor();

  return (
    <section 
      id="skills" 
      className="py-32 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10"> 
        
        {/* === NEW HEADER DESIGN: DEV MODE / TOOLBOX === */}
        <div className="mb-32 relative flex flex-col items-center justify-center select-none">
           
           {/* 1. Wireframe Number Background */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] md:text-[22rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0" 
                    style={{ WebkitTextStroke: '2px #fff' }}>
                03
           </div>

           {/* 2. Toggle Switch "Dev Mode" */}
           <DevModeSwitch />

           {/* 3. Main Title with Code Syntax Styling */}
           <div className="relative z-10 text-center">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6"
              >
                  {/* "CAPABILITIES" */}
                  <div className="flex items-baseline">
                      <span className="text-4xl md:text-7xl font-thin text-gray-600 mr-2">{`{`}</span>
                      <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
                          CAPABILITIES
                      </h2>
                      <span className="text-4xl md:text-7xl font-thin text-gray-600 ml-2">{`}`}</span>
                  </div>

                  {/* Connector (Mobile hidden) */}
                  <div className="hidden md:block w-12 h-1 bg-white/10 rounded-full" />

                  {/* "OFFERINGS" */}
                  <div className="flex items-baseline">
                       <span className="text-4xl md:text-7xl font-thin text-design-blue mr-2">{`<`}</span>
                       <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-design-blue to-cyan-400 tracking-tighter">
                          OFFERINGS
                       </h2>
                       <span className="text-4xl md:text-7xl font-thin text-design-blue ml-2">{`/>`}</span>
                  </div>
              </motion.div>

              <p className="mt-6 text-gray-500 max-w-lg mx-auto font-mono text-sm">
                 <span className="text-design-pink">const</span> toolkit = [<span className="text-design-green">"Design"</span>, <span className="text-design-green">"Code"</span>, <span className="text-design-green">"Strategy"</span>];
              </p>

              {/* Floating Decoration Artifacts */}
              <FloatingSnippet type="css" x="10%" y="-20%" rotate={-6} />
              <FloatingSnippet type="code" x="80%" y="100%" rotate={6} />

           </div>
        </div>
        {/* === END HEADER === */}

        {/* --- MAIN WINDOW CONTAINER --- */}
        <div 
            className="border border-white/10 bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-auto lg:min-h-[700px] cursor-none relative z-20"
            onMouseEnter={() => setLabel("View")}
            onMouseLeave={() => setLabel(null)}
        >
           {/* === LEFT PANEL: SKILLS (Inspector) === */}
           <div 
             className="w-full lg:w-[350px] bg-[#1A1A1A] border-r border-white/10 flex flex-col z-20"
             onMouseEnter={() => setLabel("Properties")}
           >
              <SectionHeader title="Technical Properties" icon={<CodeIcon />} />
              <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                 <SkillGroup 
                   title="CMS & Platforms" 
                   items={['AEM (Adobe)', 'Drupal', 'Zalo OA', 'ZNS', 'Zalo Dev']}
                   color="bg-blue-500"
                   setCursorLabel={setLabel}
                 />
                 <SkillGroup 
                   title="Marketing Automation" 
                   items={['Salesforce MC', 'Stripo', 'Adobe Campaign', 'n8n', 'Zapier', 'AI Agents']}
                   color="bg-orange-500"
                   setCursorLabel={setLabel}
                 />
                 <SkillGroup 
                   title="Data & Analytics" 
                   items={['Python (Pandas)', 'BeautifulSoup', 'SEO Technical', 'Google Analytics 4', 'GTM']}
                   color="bg-purple-500"
                   setCursorLabel={setLabel}
                 />
                 <div className="my-6 border-t border-white/5" />
                 <div className="mb-2">
                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">Soft Skills Attributes</h4>
                    <div className="px-2 space-y-2">
                       <SoftSkillTag text="Teamwork & Collaboration" setCursorLabel={setLabel} />
                       <SoftSkillTag text="Problem Solving" setCursorLabel={setLabel} />
                       <SoftSkillTag text="Self-Learning" setCursorLabel={setLabel} />
                       <SoftSkillTag text="Professional English" setCursorLabel={setLabel} />
                    </div>
                 </div>
              </div>
           </div>

           {/* === RIGHT PANEL: SERVICES (Canvas/Assets) === */}
           <div 
             className="flex-1 bg-[#121212] relative overflow-hidden flex flex-col"
             onMouseEnter={() => setLabel("Assets")}
           >
              <SectionHeader title="Available Services" icon={<WorkflowIcon />} />
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }} 
              />
              <div className="p-6 lg:p-10 relative z-10 overflow-y-auto custom-scrollbar">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SpotlightCard 
                      title="Marketing Automation"
                      desc="End-to-end setup of SFMC, Adobe Campaign, and automated email flows."
                      icon={<MailIcon />}
                      color="from-orange-500 to-red-500"
                      delay={0.1}
                      onHover={setLabel}
                    />
                    <SpotlightCard 
                      title="n8n Workflows"
                      desc="Custom automation pipelines connecting your apps, AI agents, and databases."
                      icon={<WorkflowIcon />}
                      color="from-design-pink to-purple-500"
                      delay={0.2}
                      onHover={setLabel}
                    />
                     <SpotlightCard 
                      title="Vibe Coding Products"
                      desc="Developing internal tools, mini-apps, and scripts to solve niche problems."
                      icon={<CodeIcon />}
                      color="from-design-green to-emerald-500"
                      delay={0.3}
                      onHover={setLabel}
                    />
                    <SpotlightCard 
                      title="Websites & Landing Pages"
                      desc="High-performance, responsive React/Next.js sites with modern UI/UX."
                      icon={<LayoutIcon />}
                      color="from-design-blue to-cyan-500"
                      delay={0.4}
                      onHover={setLabel}
                    />
                    <SpotlightCard 
                      title="Data Analytics"
                      desc="Building dashboards, tracking setups (GA4/GTM), and RFM segmentation."
                      icon={<ChartIcon />}
                      color="from-yellow-500 to-orange-500"
                      delay={0.5}
                      onHover={setLabel}
                    />
                    <SpotlightCard 
                      title="Web Ops"
                      desc="Full management of Hosting, Domains, Servers (VPS), and Databases."
                      icon={<ServerIcon />}
                      color="from-gray-500 to-gray-300"
                      delay={0.6}
                      onHover={setLabel}
                    />
                 </div>
                 <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 flex justify-center"
                 >
                    <button 
                        onMouseEnter={() => setLabel("Click")}
                        onMouseLeave={() => setLabel("Assets")}
                        className="px-4 py-2 bg-[#2C2C2E] border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:border-design-blue hover:bg-design-blue/10 transition-all flex items-center gap-2 cursor-none"
                    >
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                       Custom Request?
                    </button>
                 </motion.div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsServices;