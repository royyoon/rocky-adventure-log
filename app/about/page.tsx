import { Info, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-32 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[var(--color-fun-blue)] text-white border-4 border-slate-200 mb-8 shadow-md">
          <Info className="w-12 h-12" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight text-slate-800 drop-shadow-sm">
          About This Site!
        </h1>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-[3rem] text-center space-y-8 relative overflow-hidden border-4 border-slate-100 shadow-[0_10px_0_#cbd5e1]">
        <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-[var(--color-fun-orange)] via-[var(--color-fun-yellow)] to-[var(--color-fun-green)]" />
        
        <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-black">
          Welcome to <strong className="text-[var(--color-fun-blue)]">Rocky's Adventures</strong>! 
        </p>
        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
          This fun site is all about the most exciting trips, epic games, and incredible times of a real-life kid! 
          From playing Minecraft to unearthing hidden creek treasures and attending wild Banana Ball games, every adventure is shared here.
        </p>
        <p className="text-lg md:text-2xl text-[var(--color-fun-orange)] font-black uppercase tracking-wider">
          Stay tuned. The next fun time is always just around the corner!
        </p>
        
        <div className="pt-8 mt-8 border-t-2 border-slate-100 flex flex-col items-center justify-center gap-4 text-sm text-slate-500 font-bold">
          <Sparkles className="w-8 h-8 text-[var(--color-fun-yellow)]" />
          <p>
            All stories and pictures here are approved by Rocky's Parents. 
            Have fun exploring!
          </p>
        </div>
      </div>
    </div>
  );
}
