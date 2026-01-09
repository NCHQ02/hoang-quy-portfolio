import React from "react";
import { motion } from "framer-motion";

/**
 * Profile Image Component
 * Avatar with crop grid overlay
 */
const ProfileImage: React.FC = () => (
  <div className="lg:col-span-5 relative h-full min-h-[300px]">
    {/* Abstract Shapes behind */}
    <div className="absolute inset-0 bg-gradient-to-tr from-design-purple/20 to-design-blue/20 rounded-2xl blur-xl" />

    <motion.div
      whileHover={{ rotate: 2, scale: 1.02 }}
      className="relative h-full w-full bg-[#1A1A1A] border border-design-purple/30 rounded-2xl p-2 flex items-center justify-center overflow-hidden"
    >
      {/* Simulated Crop Tool UI */}
      <div className="absolute inset-4 border border-white/20 z-10 grid grid-cols-3 grid-rows-3 pointer-events-none">
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
        <div className="border-t border-white/10 col-span-3 row-start-2" />
        <div className="border-t border-white/10 col-span-3 row-start-3" />
      </div>

      {/* Image Placeholder */}
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocLuApkrl-nsuW0F6FzlwAHMhXhvW-SVuD-VJqq_bsQr-BCeTepNNA=s288-c-no"
        alt="Avatar"
        className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-500"
      />

      <div className="absolute bottom-6 right-6 z-20 bg-design-purple text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
        Target: User Joy
      </div>
    </motion.div>
  </div>
);

export default ProfileImage;
