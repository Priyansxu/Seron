"use client";

import Link from "next/link";
import ColorBends from "@/components/ColorBends";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <ColorBends
          rotation={30}
          speed={0.2}
          colors={["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1"]}
          transparent={true}
          autoRotate={0.05}
          scale={1}
          frequency={1.5}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.3}
          noise={0.05}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          Welcome to Vega AI
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
          Unleash your creativity with AI-powered image generation. Explore, create, and transform ideas into stunning visuals instantly.
        </p>
        <Link href="/create">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
            Start Creating
          </button>
        </Link>
      </div>
    </div>
  );
}