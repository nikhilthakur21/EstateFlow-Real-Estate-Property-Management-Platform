import React from 'react';

const FluidSkeleton = () => {
  return (
    <div className="relative overflow-hidden w-full bg-zinc-950  rounded-2xl p-1 mb-4 group">
      {/* 1. Unique Architectural Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* 2. The "Scanning Beam" (Unique Animation) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-20 bg-orange-500/10 blur-[40px] -skew-x-12 animate-scan"></div>
      </div>

      {/* 3. The Main Card Body */}
      <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-[14px] px-6 py-5 flex flex-wrap items-center gap-6">
        
        {/* Animated Hexagon/House Icon Placeholder */}
        <div className="relative h-12 w-12 flex-shrink-0">
            <div className="absolute inset-0 bg-zinc-800 rotate-45 rounded-sm animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-4 w-4 bg-zinc-700 rounded-full"></div>
            </div>
        </div>

        {/* Info Rows with "Staggered" Pulse */}
        <div className="flex-1 space-y-3">
          {/* Top Row: Title/Name */}
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 bg-orange-500/40 rounded-full animate-ping"></div>
            <div className="h-4 w-1/3 bg-zinc-800 rounded-full"></div>
          </div>
          
          {/* Bottom Row: Subtitles */}
          <div className="flex gap-4 items-center">
            <div className="h-3 w-24 bg-zinc-800/50 rounded-md"></div>
            <div className="h-3 w-3 bg-zinc-800 rounded-full"></div>
            <div className="h-3 w-40 bg-zinc-800/50 rounded-md"></div>
          </div>
        </div>

        {/* Decorative "Corner Bracket" for Action Button area */}
        <div className="relative h-10 w-10 flex items-center justify-center border border-zinc-800 rounded-xl">
            <div className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-orange-500/50 rounded-tr-sm"></div>
            <div className="h-4 w-4 bg-zinc-800 rounded-sm"></div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(600%) skewX(-12deg); }
        }
        .animate-scan {
          animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default FluidSkeleton;