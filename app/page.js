"use client"

import Link from "next/link"
import { Zap, ArrowRight } from "lucide-react"
import ColorBends from "@/components/ColorBends"

export default function Page() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .acme-text {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(200, 210, 255, 0.8) 25%,
            rgba(160, 180, 255, 0.6) 50%,
            rgba(140, 160, 255, 0.5) 75%,
            rgba(120, 140, 255, 0.4) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 
            0 0 40px rgba(255, 255, 255, 0.3),
            0 0 80px rgba(180, 200, 255, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.1);
          filter: drop-shadow(0 4px 12px rgba(255, 255, 255, 0.15));
        }
        
        .acme-text-stroke {
          position: absolute;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(220, 230, 255, 0.3) 50%,
            rgba(200, 210, 255, 0.2) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.6);
        }
        
        .glass-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <div className="absolute inset-0 -z-10">
        <ColorBends autoRotate={1} frequency={1} />
      </div>

      <header className="sticky top-4 mx-4 sm:mx-6 lg:mx-8 z-20 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white">
            Vega AI
          </h1>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8 sm:py-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <button className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-sm font-medium rounded-xl shadow-md hover:bg-white/25 transition-all duration-300">
            <Zap className="w-4 h-4" />
            <span>Powered by Cloudflare</span>
            <ArrowRight className="w-4 h-4 opacity-80" />
          </button>

          <div className="relative mb-8">
            <h2 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight">
              <span className="acme-text-stroke">
                Unleashed, Vega AI
              </span>
              <span className="acme-text relative" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                Unleashed, Vega AI
              </span>
            </h2>
            <div className="glass-shine" />
          </div>

          <p className="font-bold sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transform your ideas into stunning visuals instantly with our AI-powered image
            generation engine.
          </p>

          <div className="w-full flex justify-center">
            <Link href="/create">
              <button className="px-10 py-4 border border-white bg-[#dedfe1] text-black rounded-md font-mono transition-all duration-300 hover:bg-[#bcbbfb] transform hover:scale-105 active:scale-95 shadow-xl">
                Start Creating
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}