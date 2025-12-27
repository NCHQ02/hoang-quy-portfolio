import React from "react";
import { motion } from "framer-motion";
import InteractiveWorkflow, {
  WorkflowNode,
  WorkflowConnection,
} from "./InteractiveWorkflow";

// --- WORKFLOW NODES (Revised to match actual JSON flow) ---
const socialMediaNodes: WorkflowNode[] = [
  // 1. INPUT PHASE
  {
    id: "start",
    label: "Form Trigger",
    icon: "📝",
    description: "Input Topic, Keywords & URLs.",
    x: 50,
    y: 150,
    color: "#ff6d5a", // n8n Trigger Color
  },

  // 2. AI PROCESSING PHASE
  {
    id: "serp",
    label: "SERP Research",
    icon: "🕵️",
    description: "Google Search for latest trends.",
    x: 220,
    y: 150,
    color: "#3B82F6",
  },
  {
    id: "writer",
    label: "Content Factory",
    icon: "🧠",
    description: "GPT-4o writes for 7 platforms.",
    x: 390,
    y: 100, // Branch Up
    color: "#8B5CF6",
  },
  {
    id: "image",
    label: "Image Gen",
    icon: "🎨",
    description: "DALL-E 3 / Pollinations.ai graphics.",
    x: 390,
    y: 200, // Branch Down
    color: "#10B981",
  },

  // 3. APPROVAL PHASE
  {
    id: "email_prep",
    label: "HTML Builder",
    icon: "🏗️",
    description: "Formats Email Template.",
    x: 560,
    y: 150,
    color: "#64748b",
  },
  {
    id: "approval",
    label: "Human Approval",
    icon: "✋",
    description: "Wait for Email Click (Approve/Reject).",
    x: 730,
    y: 150,
    color: "#FACC15", // Warning
  },

  // 4. PUBLISHING PHASE (Fan out)
  {
    id: "fb_insta",
    label: "Meta Ops",
    icon: "♾️",
    description: "Post to FB & Insta.",
    x: 900,
    y: 50,
    color: "#0668E1",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "💼",
    description: "Post Company Update.",
    x: 900,
    y: 150,
    color: "#0077b5",
  },
  {
    id: "twitter",
    label: "X / Twitter",
    icon: "🐦",
    description: "Post Tweet/Thread.",
    x: 900,
    y: 250,
    color: "#000000",
  },

  // 5. REPORTING
  {
    id: "report",
    label: "Final Report",
    icon: "📊",
    description: "Notify via Telegram/Email.",
    x: 1070,
    y: 150,
    color: "#22c55e",
  },
];

const socialMediaConnections: WorkflowConnection[] = [
  { from: "start", to: "serp" },
  { from: "serp", to: "writer" },
  { from: "serp", to: "image" }, // Data splits
  { from: "writer", to: "email_prep" },
  { from: "image", to: "email_prep" }, // Data merges
  { from: "email_prep", to: "approval" },
  { from: "approval", to: "fb_insta" },
  { from: "approval", to: "linkedin" },
  { from: "approval", to: "twitter" },
  { from: "fb_insta", to: "report" },
  { from: "linkedin", to: "report" },
  { from: "twitter", to: "report" },
];

// --- COMPONENTS ---
const DetailSection = ({
  title,
  bg = "transparent",
  children,
  className = "",
}: {
  title: string;
  bg?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`mb-16 rounded-2xl p-8 border border-white/5 ${bg} ${className}`}
  >
    <h3 className="text-2xl font-black text-white mb-6 border-l-4 border-[#E4405F] pl-4">
      {title}
    </h3>
    {children}
  </div>
);

const PromptCard = ({
  platform,
  tone,
  style,
}: {
  platform: string;
  tone: string;
  style: string;
}) => (
  <div className="bg-black/20 border border-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-colors">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[#E4405F] font-bold">{platform}</span>
    </div>
    <div className="text-xs text-gray-400 mb-1">
      TONE: <span className="text-white">{tone}</span>
    </div>
    <div className="text-xs text-gray-400">
      STYLE: <span className="text-white">{style}</span>
    </div>
  </div>
);

const BenefitItem = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-[#E4405F]/20 flex flex-shrink-0 items-center justify-center text-2xl border border-[#E4405F]/30">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-white text-lg mb-1">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const TabSocialMedia: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12 px-6 max-w-7xl mx-auto"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <div className="inline-block bg-[#E4405F] text-black font-bold px-3 py-1 rounded text-xs mb-4 shadow-[0_0_20px_rgba(228,64,95,0.4)]">
          ✨ ENTERPRISE GRADE WORKFLOW
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          SOCIAL MEDIA CONTENT FACTORY
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Turn a single keyword into optimized posts for{" "}
          <span className="text-white font-bold">7 platforms</span>. Complete
          with AI research, image generation, and a secure human approval loop.
        </p>
      </div>

      {/* TARGET & PROBLEM DEFINITION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20 animate-fade-in-up">
        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-[#E4405F]/30 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E4405F]/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-[#E4405F] text-xl">🎯</span> WHO IS THIS FOR?
          </h3>
          <p className="text-gray-400 leading-relaxed">
            <strong>Social Media Managers</strong> &{" "}
            <strong>Digital Marketers</strong> who want to streamline content
            production across multiple platforms — including X, Instagram,
            LinkedIn, Facebook, TikTok, Threads, and YouTube Shorts — using
            AI-powered automation.
          </p>
        </div>

        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-blue-500 text-xl">🚀</span> WHAT PROBLEM DOES
            THIS SOLVE?
          </h3>
          <p className="text-gray-400 leading-relaxed">
            <strong>Scaling platform-specific content</strong> wwithout breaking
            brand consistency or burning time. AI-driven generation and
            automation reduce manual work by up to{" "}
            <span className="text-[#E4405F] font-bold">80%</span> allowing teams
            to focus on strategy instead of execution
          </p>
        </div>
      </div>

      {/* 1. VISUAL WORKFLOW */}
      <div className="mb-12 relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E4405F]/5 to-transparent rounded-3xl opacity-50" />
        <InteractiveWorkflow
          nodes={socialMediaNodes}
          connections={socialMediaConnections}
          themeColor="#E4405F"
          title="Social_Media_Content_Factory.n8n (Live View)"
        />
        {/* Caption for Diagram */}
        <div className="text-center mt-4 text-xs text-gray-500 font-mono">
          *Interactive Diagram: branching for Research, Content, Visuals, and
          Publishing.
        </div>
      </div>

      {/* 2. ROI & BENEFITS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 animate-fade-in-up">
        <DetailSection
          title="Why Your Business Needs This"
          bg="bg-[#1a1a1a]/50"
        >
          <div className="flex flex-col gap-8">
            <BenefitItem
              icon="💰"
              title="Cut Agency Costs by 90%"
              desc="Replaces the need for a junior copywriter, graphic designer, and social media manager. Estimated savings: $3,000/month."
            />
            <BenefitItem
              icon="⚡"
              title="Zero Hallucinations"
              desc="Unlike raw ChatGPT, this workflow uses SERP API to fact-check against real-time Google Search results before writing."
            />
            <BenefitItem
              icon="🛡️"
              title="Brand SAFE (Human-in-the-loop)"
              desc="The defining feature: Nothing goes live without your click. The automated email approval gatekeeper ensures 100% quality control."
            />
          </div>
        </DetailSection>

        <DetailSection title="Performance Metrics" bg="bg-[#1a1a1a]/50">
          <div className="grid grid-cols-2 gap-4 h-full content-start">
            <div className="bg-black/40 p-6 rounded-xl border border-white/5 text-center">
              <div className="text-4xl font-black text-[#E4405F] mb-2">20h</div>
              <div className="text-sm text-gray-400">Weekly Time Saved</div>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-white/5 text-center">
              <div className="text-4xl font-black text-[#E4405F]">7+</div>
              <div className="text-sm text-gray-400">Platforms Synced</div>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-white/5 text-center col-span-2">
              <div className="text-4xl font-black text-[#E4405F]">2 sec</div>
              <div className="text-sm text-gray-400">
                Latency to Deploy All Posts
              </div>
            </div>
          </div>
        </DetailSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 3. THE AGENTIC BRAIN */}
        <DetailSection title="01. The Agentic Brain (Prompt Engineering)">
          <p className="text-gray-400 mb-6">
            The core of this system is a{" "}
            <strong>Context-Aware LangChain Agent</strong>. Unlike simple
            wrappers, this agent dynamically adjusts its personality based on
            the platform. It treats every output as a unique piece of creative
            work.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <PromptCard
              platform="LinkedIn"
              tone="Professional, Insightful"
              style="Business-oriented, value-driven"
            />
            <PromptCard
              platform="TikTok"
              tone="Fun, Trending"
              style="Short-form, hook-driven, viral audio focus"
            />
            <PromptCard
              platform="X (Twitter)"
              tone="Concise, Impactful"
              style="Thread-friendly, <150 chars, curiosity gap"
            />
            <PromptCard
              platform="Instagram"
              tone="Visual, Inspirational"
              style="Storytelling captions, emoji-rich"
            />
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 font-mono text-xs text-gray-500 overflow-x-auto">
            <span className="text-purple-400">system_prompt</span> = "You are a
            content creation AI... craft engaging, platform-specific content...
            Your goal is to spark interaction..."
          </div>
        </DetailSection>

        {/* 4. THE SECURITY GATEKEEPER */}
        <DetailSection title="02. The Security Gatekeeper">
          <p className="text-gray-400 mb-6">
            AI is powerful, but dangerous if unchecked. This workflow implements
            a strict <strong>Double-Check Mechanism</strong>. Nothing gets
            published without a human signing off via a secure HTML Email
            interface.
          </p>

          <div className="bg-[#1e1e1e] p-6 rounded-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-[10px] text-gray-500">
              EMAIL PREVIEW
            </div>
            <div className="space-y-4">
              <div className="bg-white text-black p-4 rounded shadow-lg">
                <div className="font-bold border-b pb-2 mb-2 flex justify-between">
                  <span>🔥 FOR APPROVAL: Why n8n Rocks</span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                    Pending
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="text-sm border-l-2 border-blue-500 pl-3">
                    <div className="font-bold text-blue-600 text-xs mb-1">
                      LINKEDIN DRAFT
                    </div>
                    "Unlock efficiency with n8n..."{" "}
                    <span className="text-gray-400 text-xs">
                      #Automation #Growth
                    </span>
                  </div>
                  <div className="text-sm border-l-2 border-pink-500 pl-3">
                    <div className="font-bold text-pink-600 text-xs mb-1">
                      INSTAGRAM CAPTION
                    </div>
                    "Work smarter, not harder! 🚀..."
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="bg-green-600 text-white px-4 py-1.5 rounded text-xs font-bold">
                    Approve & Publish
                  </button>
                  <button className="bg-red-100 text-red-600 px-4 py-1.5 rounded text-xs font-bold">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DetailSection>
      </div>

      {/* 5. TECHNICAL EXECUTION */}
      <DetailSection title="03. Technical Execution Stack">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#111] p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-4">📡</div>
            <h4 className="font-bold text-white mb-2">Real-time Research</h4>
            <p className="text-sm text-gray-500">
              Uses <strong>SERP API</strong> to fetch live Google results about
              the topic. Ensures content is factual and relevant.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="font-bold text-white mb-2">Visual Generation</h4>
            <p className="text-sm text-gray-500">
              Routes creative briefs to <strong>DALL-E 3</strong> or{" "}
              <strong>Pollinations.ai</strong>. Includes logic to fallback to
              user-uploaded images if provided in the initial form.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-4">🔗</div>
            <h4 className="font-bold text-white mb-2">Direct API Push</h4>
            <p className="text-sm text-gray-500">
              Bypasses 3rd party schedulers. Uses native access tokens for
              <strong> Facebook Graph API</strong>,{" "}
              <strong>Twitter v2 API</strong>, and{" "}
              <strong>LinkedIn UGC API</strong> for maximum reliability.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-4">🏥</div>
            <h4 className="font-bold text-white mb-2">Auto-Healing</h4>
            <p className="text-sm text-gray-500">
              Built-in <strong>Error Handling</strong> for API timeouts.
              Auto-retries failed posts and alerts admins via Telegram if manual
              intervention is needed.
            </p>
          </div>
        </div>
      </DetailSection>

      {/* 6. RESULTS DATA STRUCTURE */}
      <DetailSection title="04. Structured Data Output">
        <p className="text-gray-400 mb-4">
          The factory standardizes output into a unified JSON format, making it
          easy to sync with databases (Notion/Airtable) for archiving.
        </p>
        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6 font-mono text-xs text-green-400 overflow-hidden relative">
          <div className="absolute top-2 right-4 text-gray-600">
            output.json
          </div>
          <pre className="opacity-80">
            {`{
  "project": "Social Factory",
  "status": "published",
  "platforms": {
    "linkedin": {
      "status": 201,
      "link": "https://linkedin.com/feed/update/...",
      "engagement_prediction": "high"
    },
    "twitter": {
      "status": 200,
      "link": "https://x.com/status/...",
      "tokens_used": 45
    },
    "instagram": {
      "status": 200,
      "media_id": "1784...",
      "filter": "normal"
    }
  },
  "metadata": {
    "approved_by": "admin@workflows.diy",
    "timestamp": "2024-03-15T10:00:00Z"
  }
}`}
          </pre>
        </div>
      </DetailSection>
    </motion.div>
  );
};

export default TabSocialMedia;
