"use client";
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black/90">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-cyan-400 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 1,
        }}
      />
    </div>
  );
}
