"use client";

import { CtaButton } from "./ui/button";
import { motion } from "framer-motion";
import Logo from "./ui/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-[#0f0f0f] text-white px-6 sm:px-10 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Top Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[1px] bg-white/20 mb-10 origin-left"
        />

        {/* Main Footer Content */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-white
         text-center sm:text-left items-center sm:items-start"
        >
          {/* Column 1 - Logo and CTA */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <Logo height={200} width={200} href="/" />
            <CtaButton
              title="Book a strategy Call"
              url="/book-a-call"
              size="h-12 w-56"
              textSize="text-lg"
              className="font-bold"
            />
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about-us" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">SERVICES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition"
                >
                  Growth Hacking
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition"
                >
                  Performance Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3">RESOURCES</h3>
            <ul className="space-y-2 text-gray-400">
             
              <li>
                <Link
                  href="/books"
                  className="hover:text-white transition"
                >
                  Recommended Books
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition"
                >
                  Recommended Courses
                </Link>
              </li>
               <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Videos & Podcast
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[1px] bg-white/20 mt-10 mb-4 origin-left"
        />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2 sm:gap-0 text-center sm:text-left">
          <p>&copy; 2025 Marketing Wisdom. All Rights Reserved.</p>
          <div className="flex gap-3">
            <Link
              href="/privacy-policy"
              className="underline hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms-of-use"
              className="underline hover:text-white transition"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
