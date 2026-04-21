import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rocky Plays | Adventure Log",
  description: "A digital adventure log tracking Rocky's missions and fun times.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <footer className="py-8 flex flex-col items-center justify-center text-sm text-gray-500 border-t border-white/5 mt-auto space-y-2">
          <p>© {new Date().getFullYear()} Rocky Plays. All missions classified.</p>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </footer>
      </body>
    </html>
  );
}
