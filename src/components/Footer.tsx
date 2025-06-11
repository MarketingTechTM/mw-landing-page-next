'use client';

import { CtaButton } from "./ui/button";
import { motion } from "framer-motion";
import Logo from "./ui/Logo";
// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-black dark:to-[#0f0f0f] text-black dark:text-white py-10">
    <div className="flex flex-col items-center justify-center">

    <div className=" mx-auto px-6 container">
        {/* Upper Divider */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ duration: 1 }}
          className="w-full h-[1px] bg-gray-400 dark:bg-gray-600 mb-8 origin-left"
        />
        
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row  items-center justify-between text-center sm:text-left space-y-4 sm:space-y-0">
          <Logo height={200} width={200} />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <CtaButton 
              title="Book a Strategy Call" 
              url="/book-a-call" 
              size="h-16 w-60" 
              textSize="text-lg" 
              className="font-bold"
            />
          </motion.div>
        </div>

        {/* Lower Divider */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ duration: 1 }}
          className="w-full h-[1px] bg-gray-400 dark:bg-gray-600 mt-8 origin-left"
        />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between
         items-center text-gray-600 dark:text-gray-400 text-sm mt-6">
          <p>&copy; 2025 Marketing Wisdom. All Rights Reserved.</p>
          {/* <Link href="/privacy-policy" className="underline hover:text-black dark:hover:text-white transition">
            Privacy Policy
          </Link> */}
        </div>
      </div>

    </div>
    </footer>
  );
}
