import { Info, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-32 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 text-white border border-white/10 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Info className="w-10 h-10" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Transmission Info
        </h1>
      </div>

      <div className="glass-panel p-8 md:p-12 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent opacity-50" />
        
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
          Welcome to <strong className="text-white">Rocky Plays – Adventure Log</strong>! 
        </p>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          This secure database archives the most exciting missions, epic showdowns, and incredible discoveries of a real-life hero. 
          From battling the First Order to unearthing hidden creek treasures and attending wild Banana Ball games, every adventure is carefully documented here.
        </p>
        <p className="text-lg md:text-xl text-[var(--neon-blue)] font-bold uppercase tracking-wider">
          Stay tuned. The next mission is always just around the corner.
        </p>
        
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4 text-sm text-gray-500">
          <ShieldCheck className="w-6 h-6 text-green-500/50" />
          <p>
            All data in this log is highly classified and manually approved by Mission Command (Parents). 
            No sensitive location data or personal identifiers are transmitted.
          </p>
        </div>
      </div>
    </div>
  );
}
