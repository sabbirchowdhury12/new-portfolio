"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sabbirchowdhury40854@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1617 837797" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
];

export default function ContactSection() {
  const [pending, setPending] = useState(false);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#BE5F47] uppercase tracking-wider text-sm mb-2">
            CONTACT
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-4">
            Get In <span className="text-[#BE5F47]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Fill out the form and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFE8DC] flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#BE5F47]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Decorative */}
            <div
              className="rounded-2xl p-6 text-white hidden lg:block"
              style={{
                background:
                  "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
              }}
            >
              <h3 className="text-xl font-['Modern_Antiqua'] mb-2">
                Let&apos;s Work Together
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              e.stopPropagation();
              setPending(true);
              const formData = new FormData(e.currentTarget);
              sendEmail(formData).then(({ error }) => {
                if (error) {
                  toast.error(error);
                } else {
                  toast.success("Email sent successfully!");
                  e.currentTarget.reset();
                }
                setPending(false);
              });
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="senderName"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE5F47]/30 focus:border-[#BE5F47] transition placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="senderEmail"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE5F47]/30 focus:border-[#BE5F47] transition placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project Collaboration"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE5F47]/30 focus:border-[#BE5F47] transition placeholder:text-gray-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE5F47]/30 focus:border-[#BE5F47] transition placeholder:text-gray-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full px-6 py-3.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
              }}
            >
              {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
