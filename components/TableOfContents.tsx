import React from 'react';
import { motion } from 'framer-motion';

interface tocItem {
  id: string;
  title: string;
  scriptText: string;
  href: string;
}

const items: tocItem[] = [
  { id: '01', title: 'About', scriptText: 'Me', href: '#about' },
  { id: '02', title: 'Projects', scriptText: 'Case Studies', href: '#projects' },
  { id: '03', title: 'Skills', scriptText: '& Services', href: '#skills' },
  { id: '04', title: 'Social', scriptText: 'Proof', href: '#testimonials' },
  { id: '05', title: 'Resume', scriptText: 'CV', href: '#resume' },
  { id: '06', title: 'Contact', scriptText: 'Me', href: '#contact' },
];

const TableOfContents: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white relative z-10">
            <span className="font-script text-accent font-normal absolute -top-8 left-0 text-4xl md:text-5xl -rotate-6">Table Of</span>
            Contents
          </h2>
        </motion.div>

        {/* Grid Layout Container */}
        <div className="relative border border-dashed border-white/20 p-8 md:p-12 rounded-sm backdrop-blur-[2px]">
          
          {/* Decorative Corner Squares (Anchors) */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black border border-white/40" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black border border-white/40" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black border border-white/40" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black border border-white/40" />
          
          {/* Center Divider Anchor (Optional decoration) */}
          <div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border border-white/40" />
          <div className="hidden md:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border border-white/40" />

          {/* Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {items.map((item, index) => (
              <motion.a
                href={item.href}
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative flex items-center justify-center md:justify-start h-32 md:h-40 cursor-pointer"
              >
                {/* Large Background Number */}
                <span className="absolute left-0 top-0 md:-left-4 md:-top-6 text-[8rem] md:text-[10rem] font-bold leading-none text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-300 select-none z-0">
                  {item.id}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center md:items-start ml-4 md:ml-12 group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-script text-accent text-2xl md:text-3xl -mt-2 ml-8 md:ml-12 rotate-[-5deg] block">
                    {item.scriptText}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Resize Icon Decoration (Bottom Right) */}
        <div className="absolute bottom-24 right-4 md:right-1/4 opacity-50">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
             <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
           </svg>
        </div>

      </div>
    </section>
  );
};

export default TableOfContents;