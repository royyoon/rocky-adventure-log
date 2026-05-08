import Link from "next/link";
import { getFeaturedMissions, getMissions, getAllCategories } from "./lib/data";
import { MissionCard } from "./components/MissionCard";
import { Gamepad2, Star, Map, Play, Sparkles } from "lucide-react";

export default function Home() {
  const featuredMissions = getFeaturedMissions();
  const allMissions = getMissions();
  
  // Sort by date descending and get latest 4
  const recentMissions = [...allMissions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  const mainFeatured = featuredMissions.length > 0 ? featuredMissions[0] : recentMissions[0];
  const categories = getAllCategories();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden border-b-4 border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-[var(--background)] z-10" />
          <img 
            src="/fun_hero_bg.png" 
            alt="Fun Playground Background" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 border-2 border-[var(--color-fun-yellow)] backdrop-blur-md mb-8 shadow-sm">
            <span className="w-3 h-3 rounded-full bg-[var(--color-fun-green)] animate-bounce shadow-sm" />
            <span className="text-sm font-black tracking-wider text-[var(--color-fun-green)] uppercase">Ready to Play!</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] stroke-2 stroke-black" style={{WebkitTextStroke: "2px #1e293b"}}>
            Rocky's Adventures
          </h1>
          <p className="text-xl md:text-3xl text-slate-800 font-bold mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
            Join Rocky on his super fun adventures and games!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/missions"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-fun-orange)] text-white font-black text-xl rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_8px_0_#c2410c] hover:shadow-[0_4px_0_#c2410c] hover:translate-y-1"
            >
              <Gamepad2 className="w-6 h-6 fill-white" />
              <span>Let's Go!</span>
            </Link>
            
            <Link 
              href="/videos"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[var(--color-fun-blue)] font-black text-xl rounded-full transition-all hover:bg-slate-50 border-4 border-[var(--color-fun-blue)] shadow-[0_8px_0_#1e40af] hover:shadow-[0_4px_0_#1e40af] hover:translate-y-1"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>Watch Videos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Rocky's Brain Quest App Promo */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full -mt-16 relative z-20">
        <a 
          href="https://apps.apple.com/us/app/rockys-brain-quest/id6762644035" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] bg-white transition-transform hover:scale-[1.02]"
        >
          <div className="md:grid md:grid-cols-2 relative z-10 bg-gradient-to-br from-green-500 to-blue-600">
            <div className="relative aspect-video md:aspect-auto overflow-hidden">
              <img 
                src="/brain_quest_banner.png" 
                alt="Rocky's Brain Quest App"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center relative text-white">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-yellow-400 text-yellow-950 font-black uppercase tracking-wider mb-4 shadow-sm text-sm border-2 border-white/20">
                  <Sparkles className="w-4 h-4" /> New App Release!
                </span>
                <h3 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-md">
                  Rocky's Brain Quest
                </h3>
                <p className="text-xl font-medium mb-8 text-white/90 drop-shadow-sm leading-relaxed">
                  A Minecraft-based trivia game that embeds math and logic training! Download now to play and learn.
                </p>
                
                <div className="inline-flex items-center bg-white text-blue-600 font-extrabold text-lg px-6 py-3 rounded-2xl shadow-[0_4px_0_#93c5fd] group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  Get it on the App Store
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Categories Navigation Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((cat, i) => {
            const colors = ["bg-rose-100 text-rose-500 border-rose-200", "bg-amber-100 text-amber-500 border-amber-200", "bg-emerald-100 text-emerald-500 border-emerald-200", "bg-sky-100 text-sky-500 border-sky-200"];
            const colorClass = colors[i % colors.length];
            return (
              <Link 
                key={cat} 
                href={`/category/${cat.toLowerCase().replace(/ /g, '-')}`}
                className={`p-6 rounded-[2rem] flex flex-col items-center justify-center text-center gap-4 transition-all hover:scale-105 border-4 ${colorClass} shadow-sm bg-white/60 backdrop-blur-sm`}
              >
                <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm`}>
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <span className="font-black text-lg uppercase tracking-wider text-slate-700">{cat}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Mission */}
      {mainFeatured && (
        <section className="py-12 px-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">Our Favorite Adventure</h2>
          </div>
          
          <Link href={`/missions/${mainFeatured.slug}`} className="group block relative overflow-hidden rounded-[2rem] border-4 border-slate-100 bg-white shadow-xl hover:-translate-y-1 transition-all">
            <div className="md:grid md:grid-cols-2 relative z-10">
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={mainFeatured.heroImage} 
                  alt={mainFeatured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center relative bg-white">
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-fun-orange)] text-white text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
                    {mainFeatured.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-[var(--color-fun-blue)] transition-colors text-slate-800">
                    {mainFeatured.title}
                  </h3>
                  <p className="text-slate-600 text-lg mb-8 line-clamp-3 font-medium">
                    {mainFeatured.shortDescription}
                  </p>
                  
                  <div className="inline-flex flex-row items-center font-black text-[var(--color-fun-blue)] uppercase tracking-wider text-lg">
                    Check it out! <span className="ml-2 group-hover:translate-x-2 transition-transform">🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Recent Missions grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-slate-200">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">Latest Fun!</h2>
          <Link href="/missions" className="text-sm font-black text-[var(--color-fun-orange)] uppercase tracking-wider hover:text-orange-600 transition-colors bg-orange-100 px-4 py-2 rounded-full">
            See All Magic
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentMissions.map(mission => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>
    </div>
  );
}
