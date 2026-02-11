"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BiSolidZap } from "react-icons/bi"
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs"
import ColorBends from "@/components/ColorBends"

export default function Page() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ColorBends rotation={-10} color="#ffffff" frequency={1} />
      </div>

      <header className="sticky top-4 z-20 mx-4 sm:mx-6 lg:mx-8 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-base font-semibold tracking-wide text-white">
            SERON AI
          </h1>

          <div className="flex items-center gap-4">
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-white hover:text-neutral-300 transition">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-96px)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center space-y-10">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 bg-black/30 backdrop-blur-sm text-xs text-white/90">
              <BiSolidZap className="w-4 h-4" />
              Powered by Cloudflare
              <ArrowRight className="w-4 h-4 opacity-70" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Seamless image generation
            <span className="block text-neutral-400 mt-3">
              with Seron AI
            </span>
          </h2>

          <p className="text-neutral-300 max-w-2xl mx-auto leading-relaxed px-2 sm:px-6">
            Turn simple prompts into high-quality visuals using fast,
            reliable AI models — designed for creators.
          </p>

          <div className="flex justify-center gap-4">
            <SignedIn>
              <Link href="/create">
                <button className="h-11 px-8 rounded-md bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition">
                  Start creating
                </button>
              </Link>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="h-11 px-8 rounded-md border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition">
                  Get started
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </main>
    </div>
  )
}