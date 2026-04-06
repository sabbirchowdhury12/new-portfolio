"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = links.filter((link) => !link.hash.startsWith("/"));
  const blogLink = links.find((link) => link.hash.startsWith("/"));

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="z-[999] relative">
      {/* Desktop Background glass pill */}
      <motion.div
        className="fixed top-3 left-1/2 -translate-x-1/2 h-14 w-[95%] max-w-[42rem] 
                   rounded-full border border-gray-200/50 dark:border-gray-700/50
                   bg-white/80 dark:bg-gray-900/80 
                   shadow-lg shadow-black/[0.05] backdrop-blur-xl
                   hidden sm:flex items-center
                   sm:top-6"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Mobile Header */}
      <motion.div
        className="fixed top-3 left-1/2 -translate-x-1/2 h-12 w-[92%] max-w-[42rem] 
                   rounded-full border border-gray-200/50 dark:border-gray-700/50
                   bg-white/90 dark:bg-gray-900/90 
                   shadow-lg shadow-black/[0.05] backdrop-blur-xl
                   flex sm:hidden items-center justify-between px-5
                   z-[999]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">
          Portfolio
        </span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[0.15rem] sm:top-[1.65rem] left-1/2 -translate-x-1/2 h-14 sm:h-[3.25rem] w-[94%] max-w-[41rem]">
        <ul className="flex items-center justify-center gap-3 w-full h-full text-[0.85rem] font-medium text-gray-500 dark:text-gray-400">
          {navLinks.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center h-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex items-center justify-center px-4 py-1.5 w-full",
                  "hover:text-gray-900 dark:hover:text-white transition-colors duration-200",
                  {
                    "text-emerald-600 dark:text-emerald-400 font-semibold":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-emerald-100 dark:bg-emerald-900/30 
                                border border-emerald-300/50 dark:border-emerald-700/50
                                -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
          {blogLink && (
            <motion.li
              key={blogLink.hash}
              className="relative flex items-center h-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="relative flex items-center justify-center px-4 py-1.5 w-full
                          hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                href={blogLink.hash}
              >
                {blogLink.name}
              </Link>
            </motion.li>
          )}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[40] sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.nav
              className="fixed top-[4.5rem] left-1/2 -translate-x-1/2 w-[88%] max-w-[18rem] z-[45]
                        bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl
                        rounded-2xl border border-gray-200/50 dark:border-gray-700/50
                        shadow-2xl shadow-black/[0.15] overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ul className="flex flex-col py-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link.hash}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      className={clsx(
                        "flex items-center px-5 py-3.5 text-[0.95rem] font-medium transition-all duration-200",
                        "hover:bg-gray-50 dark:hover:bg-gray-800/50",
                        {
                          "text-emerald-600 dark:text-emerald-400 font-semibold":
                            activeSection === link.name,
                          "text-gray-600 dark:text-gray-300":
                            activeSection !== link.name,
                        },
                      )}
                      href={link.hash}
                      onClick={() => {
                        if (!link.hash.startsWith("/")) {
                          setActiveSection(link.name);
                          setTimeOfLastClick(Date.now());
                        }
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
