import Link from "next/link";
import Image from "next/image";
import { Mission } from "../types";
import { Play } from "lucide-react";


// Use a simple date formatter to avoid large date-fns bundle if it's an issue, but standard JS date is fine for now
function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function MissionCard({ mission }: { mission: Mission }) {
  return (
    <Link href={`/missions/${mission.slug}`} className="group block h-full">
      <div className="flex flex-col h-full bg-[var(--card-bg)] rounded-3xl border border-[var(--card-border)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--neon-glow)] hover:border-[var(--neon-blue)]">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder while loading */}
          <img 
            src={mission.heroImage} 
            alt={mission.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md rounded-full text-white border border-white/20">
              {mission.category}
            </span>
          </div>

          {/* Video Icon if has video */}
          {mission.videoUrl && (
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-500/80 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-red-500 transition-colors">
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs font-medium text-[var(--neon-blue)] mb-2">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-blue)] shadow-[0_0_8px_var(--neon-blue)] animate-pulse" />
            Mission Logged: {formatDate(mission.date)}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[var(--neon-blue)] transition-colors">
            {mission.title}
          </h3>
          
          <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
            {mission.shortDescription}
          </p>
          
          <div className="mt-auto pt-4 border-t border-[var(--card-border)] flex items-center text-[var(--neon-blue)] font-bold text-sm tracking-wide uppercase">
            Execute Mission <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
