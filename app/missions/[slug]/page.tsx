import { getMissionBySlug } from "../../lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, Sparkles, Award, Play } from "lucide-react";


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
    <article className="min-h-screen pb-20 bg-white">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full mt-[-64px] border-b-[6px] border-slate-100 rounded-b-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-sky-200">
          <img 
            src={mission.heroImage} 
            alt={mission.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 inset-x-0 p-4 md:p-8 max-w-5xl mx-auto w-full z-10">
          <Link 
            href="/missions" 
            className="inline-flex items-center text-sm font-black uppercase tracking-wider text-[var(--color-fun-blue)] hover:text-blue-800 mb-6 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Adventures
          </Link>
          
          <div className="flex gap-2 mb-4">
            <span className="px-5 py-2 text-sm font-black uppercase tracking-wider bg-[var(--color-fun-orange)] text-white rounded-full shadow-[0_4px_0_#c2410c]">
              {mission.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-4 drop-shadow-sm tracking-tight">
            {mission.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-slate-600 font-bold">
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full shadow-sm">
              <Calendar className="w-5 h-5 text-[var(--color-fun-green)]" />
              <span>{formattedDate}</span>
            </div>
            {mission.tags.map(tag => (
              <span key={tag} className="flex items-center text-xs font-black uppercase tracking-widest bg-sky-100 text-sky-700 px-4 py-2 rounded-full border-2 border-sky-200">
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
          
          <section className="bg-white p-8 rounded-[3rem] border-[3px] border-slate-100 shadow-[0_8px_0_#cbd5e1] hover:-translate-y-1 transition-transform">
            <h2 className="flex items-center gap-2 text-3xl font-black uppercase tracking-tight mb-6 text-slate-800 border-b-2 border-slate-100 pb-4">
              <Sparkles className="w-8 h-8 text-[var(--color-fun-yellow)]" />
              What Happened!
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-6 font-bold">
              {mission.shortDescription}
            </p>
            <div className="prose prose-lg max-w-none text-slate-600 font-medium">
              <p>{mission.fullDescription}</p>
            </div>
          </section>

          {mission.videoUrl && (
            <section className="space-y-6">
              <h2 className="flex items-center gap-2 text-3xl font-black uppercase tracking-tight text-slate-800 ml-2">
                <Play className="w-8 h-8 text-rose-500 fill-rose-500" />
                Watch the Video!
              </h2>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border-4 border-slate-200 shadow-xl bg-slate-100">
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
          <div className="bg-emerald-50 p-8 rounded-[2.5rem] border-4 border-emerald-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Award className="w-24 h-24 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider mb-6 flex items-center gap-2 text-emerald-800">
              Outcome
            </h3>
            <p className="text-emerald-900 font-bold text-lg relative z-10 leading-relaxed">
              {mission.missionOutcome}
            </p>
          </div>

          <div className="bg-violet-50 p-8 rounded-[2.5rem] border-4 border-violet-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Sparkles className="w-24 h-24 text-violet-500" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider mb-6 text-violet-800">
              Favorite Moment!
            </h3>
            <p className="text-violet-900 font-bold italic text-xl leading-relaxed relative z-10">
              "{mission.favoriteMoment}"
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
