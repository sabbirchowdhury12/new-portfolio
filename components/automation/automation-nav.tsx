"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/project" },
  { label: "Learn", href: "/learn" },
];

export default function AutomationNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-8 py-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-white text-xl sm:text-2xl font-['Playfair_Display']"
        >
          Sabbir Chowdhury
        </Link>

        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:opacity-80 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/automation"
            className="bg-white text-[#BE5F47] px-4 py-2 rounded-full hover:opacity-90 transition text-sm"
          >
            Automation
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white hover:opacity-80 transition lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 sm:px-8 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/90 hover:text-white transition text-lg font-['Playfair_Display']"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/automation"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-white transition text-lg font-['Playfair_Display']"
              >
                Automation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}