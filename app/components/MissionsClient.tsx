"use client";

import { useState } from "react";
import { Mission } from "../types";
import { MissionGrid } from "./MissionGrid";
import { cn } from "../lib/utils";
import { Filter } from "lucide-react";

export function MissionsClient({ 
  initialMissions, 
  categories 
}: { 
  initialMissions: Mission[], 
  categories: string[] 
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredMissions = activeCategory === "All"
    ? initialMissions
    : initialMissions.filter(m => m.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between glass-panel p-4 rounded-2xl">
        <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-wider text-sm">
          <Filter className="w-5 h-5" />
          Filter by Sector:
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all",
              activeCategory === "All"
                ? "bg-[var(--neon-blue)] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
            )}
          >
            All
          </button>
          
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all",
                activeCategory === cat
                  ? "bg-[var(--neon-blue)] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <MissionGrid missions={filteredMissions} />
    </div>
  );
}
