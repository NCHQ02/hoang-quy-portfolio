import React from "react";
import { motion } from "framer-motion";
import InteractiveWorkflow, {
  WorkflowNode,
  WorkflowConnection,
} from "./InteractiveWorkflow";

// --- WORKFLOW DATA ---
const socialMediaNodes: WorkflowNode[] = [
  {
    id: "trigger",
    label: "Schedule",
    icon: "⏰",
    description:
      "Cron trigger runs daily at 9AM to initiate the content creation workflow. Configurable for multiple time zones.",
    x: 40,
    y: 60,
    color: "#E4405F",
  },
  {
    id: "research",
    label: "AI Research",
    icon: "🔍",
    description:
      "Tavily AI searches for trending topics, news, and industry updates relevant to your niche.",
    x: 180,
    y: 60,
    color: "#10B981",
  },
  {
    id: "writer",
    label: "GPT-4 Writer",
    icon: "✍️",
    description:
      "OpenAI GPT-4 generates engaging captions, hashtags, and content tailored to each platform's best practices.",
    x: 320,
    y: 60,
    color: "#8B5CF6",
  },
  {
    id: "review",
    label: "Human Review",
    icon: "👀",
    description:
      "Optional Slack notification for quick approval before posting. Skip for fully automated flow.",
    x: 460,
    y: 60,
    color: "#FACC15",
  },
  {
    id: "publish",
    label: "Multi-Publish",
    icon: "📤",
    description:
      "Simultaneously posts to Facebook, Instagram, LinkedIn, X (Twitter), and Threads with platform-specific formatting.",
    x: 600,
    y: 60,
    color: "#3B82F6",
  },
];

const socialMediaConnections: WorkflowConnection[] = [
  { from: "trigger", to: "research" },
  { from: "research", to: "writer" },
  { from: "writer", to: "review" },
  { from: "review", to: "publish" },
];

// --- FEATURE CARDS ---
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <motion.div
    className="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 hover:border-[#E4405F]/50 transition-colors group"
    whileHover={{ y: -4 }}
  >
    <div className="text-3xl mb-3">{icon}</div>
    <h4 className="text-white font-bold mb-2">{title}</h4>
    <p className="text-gray-500 text-sm">{description}</p>
  </motion.div>
);

// --- PLATFORM ICONS ---
const PlatformBadge = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2">
    <span className="text-xl">{icon}</span>
    <span className="text-sm text-gray-300 font-medium">{name}</span>
  </div>
);

// --- MAIN COMPONENT ---
const TabSocialMedia: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="py-12"
    >
      {/* Section Header */}
      <div className="text-center mb-12 px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-2 bg-[#E4405F]/10 border border-[#E4405F]/30 text-[#E4405F] px-4 py-2 rounded-full mb-6 text-sm font-bold"
        >
          <span>📱</span>
          <span>SOCIAL MEDIA AUTOMATION</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          Post Once,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E4405F] to-[#F472B6]">
            Reach Everywhere
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          AI-powered content creation and multi-platform publishing. Save 10+
          hours per week while maintaining consistent presence across all social
          channels.
        </p>
      </div>

      {/* Interactive Workflow */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <InteractiveWorkflow
          nodes={socialMediaNodes}
          connections={socialMediaConnections}
          themeColor="#E4405F"
          title="social_posting_workflow.n8n"
        />
      </div>

      {/* Platform Support */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h3 className="text-xl font-bold text-white text-center mb-6">
          Supported Platforms
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <PlatformBadge name="Facebook" icon="📘" />
          <PlatformBadge name="Instagram" icon="📸" />
          <PlatformBadge name="LinkedIn" icon="💼" />
          <PlatformBadge name="X (Twitter)" icon="🐦" />
          <PlatformBadge name="Threads" icon="🧵" />
          <PlatformBadge name="TikTok" icon="🎵" />
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-bold text-white text-center mb-8">
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="🎯"
            title="Smart Scheduling"
            description="AI analyzes your audience's active hours and automatically schedules posts for maximum engagement."
          />
          <FeatureCard
            icon="💡"
            title="Content Ideas"
            description="Never run out of ideas. AI researches trending topics and generates content calendars weekly."
          />
          <FeatureCard
            icon="#️⃣"
            title="Hashtag Optimization"
            description="Auto-generates platform-specific hashtags based on trending data and your niche."
          />
          <FeatureCard
            icon="📊"
            title="Performance Tracking"
            description="Aggregates analytics from all platforms into a single dashboard with weekly reports."
          />
          <FeatureCard
            icon="🔔"
            title="Engagement Alerts"
            description="Get notified via Slack when posts go viral or receive important comments."
          />
          <FeatureCard
            icon="🔄"
            title="Content Recycling"
            description="Automatically repurpose top-performing content with fresh angles after 30 days."
          />
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-[#E4405F]">10+</div>
            <div className="text-gray-500 text-sm mt-1">Hours Saved / Week</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#E4405F]">300%</div>
            <div className="text-gray-500 text-sm mt-1">More Consistent</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#E4405F]">$0</div>
            <div className="text-gray-500 text-sm mt-1">Extra Hires Needed</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TabSocialMedia;
