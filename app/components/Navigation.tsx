"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Compass, Tv, Info, Menu, X, Smile } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const navLinks = [
  { href: "/", label: "Home Base", icon: Gamepad2 },
  { href: "/missions", label: "Adventures", icon: Compass },
  { href: "/videos", label: "Play Room", icon: Tv },
  { href: "/about", label: "About", icon: Info },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slat-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[var(--color-fun-orange)] to-[var(--color-fun-yellow)] flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform border border-white/50">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-800 group-hover:text-[var(--color-fun-orange)] transition-colors">
              Rocky Plays
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-bold transition-all hover:text-[var(--color-fun-orange)] hover:-translate-y-0.5",
                    isActive ? "text-[var(--color-fun-blue)]" : "text-slate-600"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 bg-slate-100 rounded-xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-4 rounded-2xl text-base font-bold transition-colors shadow-sm",
                      isActive 
                        ? "bg-[var(--color-fun-blue)] text-white" 
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
