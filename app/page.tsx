import Link from "next/link";
import { getFeaturedMissions, getMissions, getAllCategories } from "./lib/data";
import { MissionCard } from "./components/MissionCard";
import { Rocket, Star, Map, MonitorPlay } from "lucide-react";

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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0a0a0f]/80 to-[#0a0a0f] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
            alt="Space Background" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse shadow-[0_0_8px_var(--color-neon-green)]" />
            <span className="text-sm font-medium tracking-widest text-[var(--neon-green)] uppercase">System Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400">
            Rocky's Adventure Log
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transmission incoming... join the most classified, action-packed missions across the galaxy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/missions"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--neon-blue)] text-black font-black text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -translate-x-full skew-x-12" />
              <Rocket className="w-5 h-5 fill-black" />
              <span>Initiate Sequence</span>
            </Link>
            
            <Link 
              href="/videos"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-bold text-lg rounded-full backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
            >
              <MonitorPlay className="w-5 h-5" />
              <span>View Archives</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Mission */}
      {mainFeatured && (
        <section className="py-12 px-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-[#ffb800]" />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider">Priority Target</h2>
          </div>
          
          <Link href={`/missions/${mainFeatured.slug}`} className="group block relative overflow-hidden rounded-[2rem] border border-[var(--neon-blue)] shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-[var(--card-bg)]">
            <div className="md:grid md:grid-cols-2 relative z-10">
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={mainFeatured.heroImage} 
                  alt={mainFeatured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Rocket className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1 rounded-full bg-[var(--neon-blue)]/20 text-[var(--neon-blue)] border border-[var(--neon-blue)]/30 text-sm font-bold uppercase tracking-wider mb-4">
                    {mainFeatured.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-[var(--neon-blue)] transition-colors">
                    {mainFeatured.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 line-clamp-3">
                    {mainFeatured.shortDescription}
                  </p>
                  
                  <div className="inline-flex items-center font-bold text-white uppercase tracking-wider border-b-2 border-[var(--neon-blue)] pb-1 group-hover:text-[var(--neon-blue)] transition-colors">
                    Access File <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Categories Navigation Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-black uppercase tracking-wider mb-8 text-center text-gray-400">Database Sectors</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.slice(0, 4).map((cat) => (
            <Link 
              key={cat} 
              href={`/category/${cat.toLowerCase().replace(/ /g, '-')}`}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-colors hover:bg-[var(--neon-blue)]/10 hover:border-[var(--neon-blue)]/50 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Map className="w-6 h-6 text-gray-400 group-hover:text-[var(--neon-blue)] transition-colors" />
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Missions grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider">Recent Logs</h2>
          <Link href="/missions" className="text-sm font-bold text-[var(--neon-purple)] uppercase tracking-wider hover:text-white transition-colors">
            View All Data
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
