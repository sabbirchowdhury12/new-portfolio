import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 text-center bg-white bg-opacity-80 text-gray-500 dark:bg-[#1D2432] dark:text-white py-20">
      <small className="mb-2 block text-xs">SABBIR CHOWDHURY &copy; 2024</small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Netlify hosting.
      </p>
    </footer>
  );
}
