import Link from "next/link";
import Image from "next/image";
import { Mission } from "../types";
import { Play } from "lucide-react";


// Use a simple date formatter to avoid large date-fns bundle if it's an issue, but standard JS date is fine for now
function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function MissionCard({ mission }: { mission: Mission }) {
  return (
    <Link href={`/missions/${mission.slug}`} className="group block h-full">
      <div className="flex flex-col h-full bg-white rounded-3xl border-[3px] border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_0_#cbd5e1] hover:border-slate-200">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Placeholder while loading */}
          <img 
            src={mission.heroImage} 
            alt={mission.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 text-xs font-black uppercase tracking-wider bg-white/90 backdrop-blur-md rounded-full text-slate-800 border-2 border-slate-200 shadow-sm shadow-black/10">
              {mission.category}
            </span>
          </div>

          {/* Video Icon if has video */}
          {mission.videoUrl && (
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center border-4 border-white shadow-md group-hover:bg-rose-400 group-hover:scale-110 transition-all">
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-1 relative bg-white">
          <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-fun-yellow)] border-4 border-white flex items-center justify-center shadow-sm">
            <span className="text-xl">⭐</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-fun-green)]" />
            Adventure Date: {formatDate(mission.date)}
          </div>
          
          <h3 className="text-xl font-black text-slate-800 mb-2 line-clamp-2 group-hover:text-[var(--color-fun-blue)] transition-colors tracking-tight">
            {mission.title}
          </h3>
          
          <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1 font-medium leading-relaxed">
            {mission.shortDescription}
          </p>
          
          <div className="mt-auto pt-4 border-t-2 border-slate-100 flex items-center text-[var(--color-fun-orange)] font-black text-sm tracking-wide uppercase">
            Let's Go! <span className="ml-2 group-hover:translate-x-1 transition-transform">🎉</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
