import React, { useState } from 'react';
import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import About from './components/About';
import Dock from './components/Dock';
import Footer from './components/Footer';
import BrowserHeader from './components/BrowserHeader';
import Projects from './components/Projects';
import SkillsServices from './components/SkillsServices';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import Contact from './components/Contact';
import FlowConnector from './components/FlowConnector';
import { CursorProvider, useCursor } from './components/GlobalCursor';

// Internal component to handle the hovering logic for the main area
// We need this because useCursor must be used *inside* CursorProvider
const MainContent: React.FC = () => {
  const { setIsActive } = useCursor();
  const [isHoveringMain, setIsHoveringMain] = useState(false);

  return (
    <main 
      // Changed 'cursor-none' to 'no-cursor' to utilize the new !important CSS rule
      className={`flex flex-col transition-colors duration-200 ${isHoveringMain ? 'no-cursor' : ''}`}
      onMouseEnter={() => {
        setIsActive(true);
        setIsHoveringMain(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
        setIsHoveringMain(false);
      }}
    >
      <Hero />
      
      {/* Visual Connector between Hero and TOC */}
      <FlowConnector />
      
      <TableOfContents />
      
      {/* 1. ABOUT ME */}
      <About />
      
      {/* 2. PROJECTS / CASE STUDIES */}
      <Projects />

      {/* 3. SKILLS & SERVICES */}
      <SkillsServices />

      {/* 4. TESTIMONIALS / SOCIAL PROOF */}
      <Testimonials />

      {/* 5. RESUME / CV */}
      <Resume />
      
      {/* 6. CONTACT */}
      <Contact />

    </main>
  );
}

const App: React.FC = () => {
  return (
    <CursorProvider>
      <div className="relative min-h-screen bg-background text-text selection:bg-primary/30 overflow-x-hidden pb-32">
        {/* Global Figma-like Grid Background */}
        <div 
          className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Safari-style Browser Header (Default Cursor Here) */}
        <BrowserHeader />

        <div className="relative z-10 pt-20">
          
          {/* Main Content Area (Custom Cursor Here) */}
          <MainContent />

          <Footer />

          {/* Floating Dock Navigation */}
          <Dock />
        </div>
      </div>
    </CursorProvider>
  );
};

export default App;