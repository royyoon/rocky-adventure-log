import { getMissionsByCategory, getAllCategories } from "../../lib/data";
import { MissionGrid } from "../../components/MissionGrid";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Folder } from "lucide-react";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage(props: Props) {
  const params = await props.params;
  const decodedCategory = decodeURIComponent(params.category).replace(/-/g, " ");
  
  // Find the exact category casing from our data
  const categories = getAllCategories();
  const matchedCategory = categories.find(c => c.toLowerCase() === decodedCategory.toLowerCase());
  
  if (!matchedCategory) {
    notFound();
  }

  const missions = getMissionsByCategory(matchedCategory);

  return (
    <div className="min-h-screen px-4 py-12 md:py-20 max-w-7xl mx-auto w-full">
      <Link 
        href="/missions" 
        className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white mb-12 transition-colors glass-panel px-4 py-2 rounded-full"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        All Missions
      </Link>
      
      <div className="mb-12">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--neon-purple)]/10 text-[var(--neon-purple)] border border-[var(--neon-purple)]/20 mb-6 drop-shadow-[0_0_15px_rgba(176,38,255,0.2)]">
          <Folder className="w-5 h-5" />
          <span className="font-bold uppercase tracking-widest text-sm">Sector Archive</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">
          {matchedCategory}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Viewing all classified logs filed under the {matchedCategory} sector.
        </p>
      </div>

      <MissionGrid missions={missions} />
    </div>
  );
}
