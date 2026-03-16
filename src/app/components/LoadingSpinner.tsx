import { motion } from "motion/react";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full"
      />
    </div>
  );
}
