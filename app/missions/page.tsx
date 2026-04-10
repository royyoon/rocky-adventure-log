import { getMissions, getAllCategories } from "../lib/data";
import { MissionsClient } from "../components/MissionsClient";
import { Map } from "lucide-react";

export default function MissionsPage() {
  const missions = getMissions();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen px-4 py-12 md:py-20 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--neon-blue)]/10 text-[var(--neon-blue)] border border-[var(--neon-blue)]/20 mb-6 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          <Map className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Mission Database
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Access the complete archive of Rocky's classified adventures. Use the filters below to narrow down the search.
        </p>
      </div>
      
      <MissionsClient initialMissions={missions} categories={categories} />
    </div>
  );
}
