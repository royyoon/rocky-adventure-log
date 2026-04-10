import { getMissions } from "../lib/data";
import { MonitorPlay } from "lucide-react";
import Link from "next/link";

export default function VideosPage() {
  const missions = getMissions();
  // Filter only missions that have a videoUrl
  const videoMissions = missions.filter(m => m.videoUrl && m.videoUrl !== "");

  return (
    <div className="min-h-screen px-4 py-12 md:py-20 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20 mb-6 drop-shadow-[0_0_15px_rgba(255,42,42,0.3)]">
          <MonitorPlay className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">
          Video Archives
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Visual transmissions from the field. Catch up on the latest recorded missions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videoMissions.map((mission) => (
          <div key={mission.id} className="glass-panel p-6 rounded-[2rem] flex flex-col items-center">
            <Link href={`/missions/${mission.slug}`} className="w-full mb-6">
              <h2 className="text-2xl font-black mb-2 hover:text-[var(--neon-blue)] transition-colors">{mission.title}</h2>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-400">
                {mission.category}
              </span>
            </Link>
            
            <div className="w-full relative aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/5">
              <iframe 
                src={mission.videoUrl} 
                title={`${mission.title} Video`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
        {videoMissions.length === 0 && (
          <div className="col-span-1 lg:col-span-2 py-20 text-center text-gray-400">
            <p className="text-xl">No video logs found in the archives.</p>
          </div>
        )}
      </div>
    </div>
  );
}
