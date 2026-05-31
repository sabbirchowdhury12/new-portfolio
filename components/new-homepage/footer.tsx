"use client";

import { motion } from "framer-motion";
import { Mail, Globe, MapPin, Phone, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5E6D3] border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-['Modern_Antiqua'] text-gray-900">
                Sabbir Chowdhury
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full-Stack Developer & Tech Lead building scalable web
              applications with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-['Modern_Antiqua'] text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#BE5F47] transition text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#BE5F47]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-['Modern_Antiqua'] text-gray-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="w-4 h-4 text-[#BE5F47]" />
                sabbirchowdhury40854@gmail.com
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone className="w-4 h-4 text-[#BE5F47]" />
                +880 1617 837797
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-[#BE5F47]" />
                Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Globe className="w-4 h-4 text-[#BE5F47]" />
                sabbirchowdhury.com
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-['Modern_Antiqua'] text-gray-900 mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Have a project in mind? Let&apos;s build something great together.
            </p>
            <a
              href="mailto:sabbirchowdhury40854@gmail.com"
              className="inline-block px-6 py-3 rounded-xl text-white text-sm font-semibold transition hover:opacity-90"
              style={{
                background:
                  "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/80 pt-8">
          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} Sabbir Chowdhury. All rights
              reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=100075403486886",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/sabbir-chowdhury12",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/sabbirchowdhury12",
                  path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/sabb_irchowdhury12",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#BE5F47] hover:border-[#BE5F47] hover:text-white transition text-gray-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-[#BE5F47] transition text-sm"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
