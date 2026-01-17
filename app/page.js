"use client"

import Link from "next/link"
import { Zap } from "lucide-react"
import ColorBends from "@/components/ColorBends"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={30}
          speed={0.3}
          scale={1.2}
          frequency={1.4}
          warpStrength={1.2}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.08}
          transparent
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="backdrop-blur-md bg-black/20 border-b border-white/10 py-4 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Vega AI</h1>
            <Link
              href="/create"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Create
            </Link>
          </div>
        </header>

        <section className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-2xl text-center space-y-8">

            <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto">
              Introducing Vega AI. Generates images from text, powered by Cloudflare.
              Describe anything and turn it into visuals instantly.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link
                href="/create"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg shadow-white/20"
              >
                <Zap className="w-5 h-5" />
                Start Creating
              </Link>
              
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <footer className="backdrop-blur-md bg-black/20 border-t border-white/10 py-4 text-center text-sm text-white/50">
          Vega AI · Powered by Cloudflare
        </footer>
      </div>
    </main>
  )
}