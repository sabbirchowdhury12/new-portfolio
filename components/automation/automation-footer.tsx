import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Automation", href: "/automation" },
  { label: "Projects", href: "/project" },
  { label: "Learn", href: "/learn" },
];

export default function AutomationFooter() {
  return (
    <footer className="bg-[#F5E6D3] border-t-2 border-[#BE5F47]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-['Modern_Antiqua'] text-gray-900">
              Sabbir Chowdhury
            </span>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              Full-Stack Developer & automation engineer building intelligent
              systems that remove repetitive manual work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-['Modern_Antiqua'] text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#BE5F47] transition text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#BE5F47]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
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
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/80 mt-12 pt-8 flex justify-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Sabbir Chowdhury. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}