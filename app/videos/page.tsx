import { getMissions } from "../lib/data";
import { Tv } from "lucide-react";
import Link from "next/link";

export default function VideosPage() {
  const missions = getMissions();
  // Filter only missions that have a videoUrl
  const videoMissions = missions.filter(m => m.videoUrl && m.videoUrl !== "");

  return (
    <div className="min-h-screen px-4 py-12 md:py-20 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-fun-orange)] text-white border-4 border-slate-200 mb-6 shadow-md shadow-orange-200">
          <Tv className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-slate-800 drop-shadow-sm">
          Play Room
        </h1>
        <p className="text-slate-600 font-medium text-xl max-w-2xl mx-auto">
          Watch all the fun times and cool adventures right here in the Play Room!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videoMissions.map((mission) => (
          <div key={mission.id} className="bg-white p-6 rounded-[2.5rem] flex flex-col items-center border-[3px] border-slate-100 shadow-[0_8px_0_#cbd5e1]">
            <Link href={`/missions/${mission.slug}`} className="w-full mb-6">
              <h2 className="text-2xl font-black mb-2 text-slate-800 hover:text-[var(--color-fun-blue)] transition-colors">{mission.title}</h2>
              <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-fun-orange)]">
                {mission.category}
              </span>
            </Link>
            
            <div className="w-full relative aspect-video rounded-[1.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-inner">
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
          <div className="col-span-1 lg:col-span-2 py-20 text-center text-slate-500 font-bold">
            <p className="text-2xl">No fun videos found yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
