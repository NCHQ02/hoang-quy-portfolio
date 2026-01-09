import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "../GlobalCursor";
import { TechSpec } from "../project-detail-data/components/TechSpec";
// Reusing visuals from existing projects temporarily
import { ActivationFlow } from "../project-detail-data/visuals/ActivationFlow";

interface Props {
  onBack: () => void;
}

const ProjectDetailCrm: React.FC<Props> = ({ onBack }) => {
  const { setLabel } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-50 min-h-screen pb-40 overflow-hidden font-sans text-slate-200"
    >
      {/* Header */}
      <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
          <button
            onClick={onBack}
            onMouseEnter={() => setLabel("Home")}
            onMouseLeave={() => setLabel(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/30"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-bold uppercase">Back</span>
          </button>

          <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 shadow-xl">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono text-orange-400">
              Workflow_ZNS_Automation.yaml
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-48 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-orange-900/20 border border-orange-500/30 text-orange-300 px-3 py-1 rounded-full mb-6 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
              Multi-channel CRM Execution
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              ORCHESTRATING{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                ENGAGEMENT
              </span>
              <br />
              AT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
                SCALE
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Delivering the right message, on the right channel, at the exact
              right moment. Integrating{" "}
              <span className="text-white font-medium">
                Zalo, Email, and Push Notifications
              </span>{" "}
              into a unified customer journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <TechSpec
              title="THE CHALLENGE"
              content="Fragmented communication. Marketing sent emails, Sales called, and Support chatted on Zalo—none of it was synchronized. Users were spammed, not engaged."
            />
            <div className="mt-8 prose prose-invert text-slate-400">
              <p>
                I built a centralized "Air Traffic Control" for customer
                communications. Using a CDP as the brain, we orchestrated flows
                that switched channels intelligently based on user behavior and
                cost-efficiency.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ActivationFlow />
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            The Omnichannel Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Zalo Card */}
            <div className="bg-[#0088FF]/10 border border-[#0088FF]/30 p-8 rounded-2xl hover:bg-[#0088FF]/20 transition-colors cursor-default group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💬
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Zalo Ecosystem
              </h3>
              <p className="text-sm text-slate-400">
                Deep integration with Zalo ZNS (Notification Service) for
                transactional updates and Zalo Broadcast for mass engagement.
                Automated follow-ups based on "Seen" status.
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 p-8 rounded-2xl hover:bg-yellow-500/20 transition-colors cursor-default group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📧
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Dynamic Email
              </h3>
              <p className="text-sm text-slate-400">
                Hyper-personalized HTML templates. Logic-based content blocks
                that change based on user tier (Gold, Silver, Bronze).
              </p>
            </div>

            {/* Push Card */}
            <div className="bg-purple-500/10 border border-purple-500/30 p-8 rounded-2xl hover:bg-purple-500/20 transition-colors cursor-default group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📲
              </div>
              <h3 className="text-xl font-bold text-white mb-2">App Push</h3>
              <p className="text-sm text-slate-400">
                Real-time triggers based on app events. Deep linking directly to
                product detail pages or abandoned carts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Automation Impact
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            By moving from manual blasts to triggered flows, we reduced
            operational time by{" "}
            <span className="text-white font-bold">80%</span> while increasing
            engagement rates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-black/40 rounded-lg text-sm font-mono text-orange-400 border border-orange-500/30">
              Open Rate: 45%
            </span>
            <span className="px-4 py-2 bg-black/40 rounded-lg text-sm font-mono text-orange-400 border border-orange-500/30">
              Click Rate: 12%
            </span>
            <span className="px-4 py-2 bg-black/40 rounded-lg text-sm font-mono text-orange-400 border border-orange-500/30">
              Cost Savings: $2k/mo
            </span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailCrm;
