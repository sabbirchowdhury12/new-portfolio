"use client";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-white text-xl sm:text-2xl font-['Modern_Antiqua']">
        Sabbir Chowdhury
      </h1>
      <div className="hidden lg:flex gap-8 items-center">
        <a href="#about" className="text-white hover:opacity-80 transition">
          About
        </a>
        <a href="#skills" className="text-white hover:opacity-80 transition">
          Skills
        </a>
        <a
          href="#experience"
          className="text-white hover:opacity-80 transition"
        >
          Experience
        </a>
        <a href="#projects" className="text-white hover:opacity-80 transition">
          Projects
        </a>
        <a href="#contact" className="text-white hover:opacity-80 transition">
          Contact
        </a>
        {/* <button className="p-2 text-white hover:opacity-80 transition">
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
        <a
          href="/learn"
          className="bg-white text-[#BE5F47] px-6 py-2 rounded-full hover:opacity-90 transition"
        >
          Learn
        </a> */}
      </div>
      <div className="lg:flex gap-4 items-center">
        <button className="p-2 text-white hover:opacity-80 transition">
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
        <a
          href="/learn"
          className="bg-white text-[#BE5F47] px-4 py-2 rounded-full hover:opacity-90 transition text-sm"
        >
          Learn
        </a>
      </div>
    </nav>
  );
}
