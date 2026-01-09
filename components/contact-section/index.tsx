import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../GlobalCursor";

// Imported Components
import NotificationWidget from "./widgets/NotificationWidget";
import QuickActionsWidget from "./widgets/QuickActionsWidget";
import Toast from "./components/Toast";
import ContactRow from "./components/ContactRow";
import FigJamCanvas from "./components/FigJamCanvas";
import { CopyIcon, GlobeIcon, SendIcon } from "./icons";
import { CONTACTS, ContactItem } from "./data";

const Contact: React.FC = () => {
  const { setLabel } = useCursor();
  const [toast, setToast] = useState<{ show: boolean; msg: string }>({
    show: false,
    msg: "",
  });
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Toast Logic
  const showToast = (msg: string) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  };

  // Action Handler
  const handleAction = (item: ContactItem) => {
    if (item.action === "copy") {
      navigator.clipboard.writeText(item.handle);
      showToast(`Copied ${item.name} to clipboard`);
    } else if (item.action === "link" && item.url) {
      window.open(item.url, "_blank");
    }
  };

  // Auto-typing effect
  useEffect(() => {
    const text = "recruiter@company.com";
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      if (i < text.length) {
        setInputValue((prev) => prev + text.charAt(i));
        i++;
        timeout = setTimeout(type, 100 + Math.random() * 50);
      }
    };
    const startTimeout = setTimeout(type, 1500);
    return () => {
      clearTimeout(timeout);
      clearTimeout(startTimeout);
    };
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 px-4 relative max-w-[1600px] mx-auto overflow-hidden"
    >
      {/* WIDGETS INJECTION */}
      <NotificationWidget />
      <QuickActionsWidget />

      <Toast message={toast.msg} visible={toast.show} />

      {/* === NEW HEADER DESIGN: INCOMING TRANSMISSION === */}
      <div className="mb-24 relative flex flex-col items-center justify-center select-none">
        {/* 1. Wireframe Number Background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14rem] md:text-[22rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0"
          style={{ WebkitTextStroke: "2px #fff" }}
        >
          06
        </div>

        {/* 2. Status Indicator */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-10 flex items-center gap-2 bg-[#1e1e1e] border border-white/10 px-4 py-2 rounded-full shadow-lg mb-8"
        >
          <div className="relative">
            <div className="w-3 h-3 bg-design-green rounded-full relative z-10" />
            <div className="absolute inset-0 bg-design-green rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-xs font-bold text-gray-300 tracking-wide">
            STATUS: <span className="text-design-green">ONLINE</span>
          </span>
          <div className="w-px h-4 bg-white/10 mx-2" />
          <span className="text-[10px] text-gray-500 font-mono">
            12ms latency
          </span>
        </motion.div>

        {/* 3. Main Title */}
        <div className="relative z-10 text-center">
          {/* Floating "Typing..." Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-12 -right-8 md:-right-16 bg-white text-black px-4 py-2 rounded-2xl rounded-bl-none shadow-xl flex items-center gap-1"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="w-1.5 h-1.5 bg-black rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-1.5 h-1.5 bg-black rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-1.5 h-1.5 bg-black rounded-full"
            />
          </motion.div>

          <div className="flex flex-col items-center leading-none">
            <h2
              className="text-6xl md:text-9xl font-black text-transparent stroke-text tracking-tighter hover:text-white transition-colors duration-500 cursor-default"
              style={{ WebkitTextStroke: "2px #fff" }}
            >
              LET'S
            </h2>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="relative"
            >
              <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-design-blue via-design-purple to-design-pink tracking-tighter pb-2">
                COLLABORATE
              </h2>
              {/* Decorative Send Icon */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-8 md:-right-16 text-white opacity-50 rotate-[-15deg]"
              >
                <SendIcon />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-gray-400 max-w-lg text-center text-sm md:text-base"
        >
          Initiate a handshake protocol. Whether it's a project inquiry or a
          tech discussion, my inbox is always listening.
        </motion.p>
      </div>
      {/* === END HEADER === */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start h-full">
        {/* --- LEFT: SHARE MODAL (Takes 4 cols) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:col-span-4 bg-[#1e1e1e] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative z-10"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#252525]">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Share "Portfolio 2025"
              <span className="px-1.5 py-0.5 bg-black/30 text-[9px] text-gray-400 rounded border border-white/5">
                READ-ONLY
              </span>
            </h3>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative group">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  readOnly
                  className="w-full bg-[#111] border border-transparent group-hover:border-design-blue/50 text-gray-300 text-sm px-3 py-2.5 rounded focus:outline-none focus:border-design-blue transition-colors cursor-text"
                  placeholder="Add emails, teams, or people"
                />
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="absolute top-2.5 right-3 w-0.5 h-5 bg-design-blue pointer-events-none"
                />
              </div>
              <button
                className="bg-design-blue hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors shadow-lg shadow-blue-500/20 cursor-none"
                onMouseEnter={() => setLabel("Send")}
                onMouseLeave={() => setLabel(null)}
                onClick={() =>
                  (window.location.href = "mailto:hoangquy.design@gmail.com")
                }
              >
                Invite
              </button>
            </div>

            <div className="mb-2">
              <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                People with access
              </h4>
            </div>

            <div className="space-y-1">
              {CONTACTS.map((contact) => (
                <ContactRow
                  key={contact.id}
                  item={contact}
                  onAction={handleAction}
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-[#252525] flex items-center justify-between">
            <div
              className="flex items-center gap-2 text-design-blue hover:text-blue-400 cursor-pointer text-xs font-medium group transition-colors"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                showToast("Portfolio link copied");
              }}
              onMouseEnter={() => setLabel("Copy")}
              onMouseLeave={() => setLabel(null)}
            >
              <div className="p-1.5 rounded-md group-hover:bg-design-blue/10 transition-colors">
                <CopyIcon />
              </div>
              <span>Copy link</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <GlobeIcon />
              <span>Anyone with the link</span>
              <span className="text-gray-400 font-bold">can view</span>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: FIGJAM PLAYGROUND (Takes 8 cols) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:col-span-8 h-[600px] relative"
        >
          <FigJamCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
