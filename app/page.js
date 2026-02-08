"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BiSolidZap } from "react-icons/bi"
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs"
import ColorBends from "@/components/ColorBends"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ColorBends rotation={-10} color="#ffffff" frequency={1} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <h1 className="text-sm font-semibold tracking-wide text-white">
            SERON AI
          </h1>

          <div className="flex items-center gap-3">
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
                <button className="text-sm text-neutral-300 hover:text-white transition">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-56px)] px-4">
        <div className="max-w-3xl w-full text-center space-y-10">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/15 bg-white/5 text-xs text-white/80">
              <BiSolidZap className="w-3.5 h-3.5" />
              Powered by Cloudflare
              <ArrowRight className="w-3.5 h-3.5 opacity-70" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Seamless image generation
            <span className="block text-neutral-400 mt-2">
              with Seron AI
            </span>
          </h2>

          <p className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Turn simple prompts into high-quality visuals using fast,
            reliable AI models — designed for creators.
          </p>

          <div className="flex justify-center gap-3">
            <SignedIn>
              <Link href="/create">
                <button className="h-10 px-6 rounded-md bg-white text-black text-sm font-medium hover:bg-neutral-200 transition">
                  Start creating
                </button>
              </Link>
            </SignedIn>

            <SignedOut>
              <SignUpButton mode="modal">
                <button className="h-10 px-6 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition">
                  Get started
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </main>
    </div>
  )
}