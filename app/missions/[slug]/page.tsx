import { getMissionBySlug } from "../../lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, Flag, Award, Play } from "lucide-react";


type Props = {
  params: Promise<{ slug: string }>;
};

export default async function MissionDetail(props: Props) {
  const params = await props.params;
  const mission = getMissionBySlug(params.slug);

  if (!mission) {
    notFound();
  }

  const d = new Date(mission.date);
  const formattedDate = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <article className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full mt-[-64px]">
        <div className="absolute inset-0 bg-black">
          <img 
            src={mission.heroImage} 
            alt={mission.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 inset-x-0 p-4 md:p-8 max-w-5xl mx-auto w-full z-10">
          <Link 
            href="/missions" 
            className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[var(--neon-blue)] hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Database
          </Link>
          
          <div className="flex gap-2 mb-4">
            <span className="px-4 py-1.5 text-sm font-bold uppercase tracking-wider bg-[var(--neon-blue)] text-black rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              {mission.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            {mission.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--neon-blue)]" />
              <span>{formattedDate}</span>
            </div>
            {mission.tags.map(tag => (
              <span key={tag} className="flex items-center text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 w-full mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="glass-panel p-8 rounded-[2rem]">
            <h2 className="flex items-center gap-2 text-2xl font-black uppercase tracking-wider mb-6 text-white border-b border-white/10 pb-4">
              <Flag className="w-6 h-6 text-[var(--neon-green)]" />
              Mission Briefing
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6 font-medium">
              {mission.shortDescription}
            </p>
            <div className="prose prose-invert prose-lg max-w-none text-gray-400">
              <p>{mission.fullDescription}</p>
            </div>
          </section>

          {mission.videoUrl && (
            <section className="space-y-4">
              <h2 className="flex items-center gap-2 text-2xl font-black uppercase tracking-wider text-white">
                <Play className="w-6 h-6 text-[#ff2a2a]" />
                Video Archives
              </h2>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,42,42,0.15)] bg-black">
                <iframe 
                  src={mission.videoUrl} 
                  title={`${mission.title} Video`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="glass-panel p-8 rounded-[2rem] border-t-4 border-t-[var(--neon-green)] relative overflow-hidden">
            <div className="absolute top-0 right-0 -m-4 w-24 h-24 bg-[var(--neon-green)]/10 blur-2xl rounded-full" />
            <h3 className="text-xl font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--neon-green)]" />
              Outcome
            </h3>
            <p className="text-gray-300 font-medium">
              {mission.missionOutcome}
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border-t-4 border-t-[var(--neon-purple)] relative overflow-hidden">
            <div className="absolute top-0 right-0 -m-4 w-24 h-24 bg-[var(--neon-purple)]/10 blur-2xl rounded-full" />
            <h3 className="text-xl font-black uppercase tracking-wider mb-4 text-white">
              Favorite Moment
            </h3>
            <p className="text-gray-300 italic text-lg leading-relaxed">
              "{mission.favoriteMoment}"
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
