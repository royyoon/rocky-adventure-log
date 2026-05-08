import { getMissions, getAllCategories } from "../lib/data";
import { MissionsClient } from "../components/MissionsClient";
import { Compass } from "lucide-react";

export default function MissionsPage() {
  const missions = getMissions();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen px-4 py-12 md:py-20 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-fun-yellow)] text-yellow-900 border-4 border-white mb-6 shadow-md shadow-yellow-200">
          <Compass className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-slate-800 drop-shadow-sm">
          All Adventures!
        </h1>
        <p className="text-slate-600 font-medium text-xl max-w-2xl mx-auto">
          Check out all of Rocky's fun adventures and play times! Use the filters below to find your favorites.
        </p>
      </div>
      
      <MissionsClient initialMissions={missions} categories={categories} />
    </div>
  );
}
