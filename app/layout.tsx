import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sabbir Chowdhury | Personal Portfolio",
  description: "Sabbir is a full-stack developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={`${poppins.className} bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className=" mx-auto">{children}</div>

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
