import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rocky Plays | Adventures!",
  description: "A fun digital log tracking Rocky's adventures and games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-[var(--foreground)] min-h-screen flex flex-col selection:bg-[var(--color-fun-yellow)] selection:text-black`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <footer className="py-8 flex flex-col items-center justify-center text-sm text-slate-500 border-t border-slate-200 mt-auto space-y-2 bg-white/50 backdrop-blur-sm">
          <p className="font-medium">© {new Date().getFullYear()} Rocky Plays. Always ready for fun! 🎉</p>
          <Link href="/privacy" className="hover:text-[var(--color-fun-blue)] transition-colors font-bold">Privacy Policy</Link>
        </footer>
      </body>
    </html>
  );
}
