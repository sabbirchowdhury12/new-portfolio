"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin, Phone, Send, Menu } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sabbirchowdhury40854@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1617 837797" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-white text-xl sm:text-2xl font-['Modern_Antiqua']">
          Sabbir Chowdhury
        </h1>

        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:opacity-80 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 text-white hover:opacity-80 transition hidden lg:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:opacity-80 transition lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>

          <a
            href="/learn"
            className="bg-white text-[#BE5F47] px-4 py-2 rounded-full hover:opacity-90 transition text-sm"
          >
            Learn
          </a>
        </div>
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
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/90 hover:text-white transition text-lg font-['Modern_Antiqua']"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h2 className="text-lg font-['Modern_Antiqua'] text-gray-900">
                  Quick Connect
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/me.png"
                    alt="Sabbir Chowdhury"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="space-y-4 mb-6">
                    {contactInfo.map((info) => (
                      <div key={info.label}>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {info.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <form className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE5F47]/30 focus:border-[#BE5F47] transition placeholder:text-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE5F47]/30 focus:border-[#BE5F47] transition placeholder:text-gray-400"
                    />
                    <textarea
                      placeholder="Your Message..."
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE5F47]/30 focus:border-[#BE5F47] transition placeholder:text-gray-400 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-2.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 transition hover:opacity-90"
                      style={{
                        background:
                          "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                      }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
