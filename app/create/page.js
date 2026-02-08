"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"
import { RiAiGenerate } from "react-icons/ri"
import { IoSparkles } from "react-icons/io5"
import { FaHeart } from "react-icons/fa"
import { Loader, ArrowUpRight, Settings, Cpu, X, Download, RotateCcw } from "lucide-react"

export default function CreatePage() {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [model, setModel] = useState("flux")
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showModelPicker, setShowModelPicker] = useState(false)

  const [width, setWidth] = useState(1024)
  const [height, setHeight] = useState(1024)
  const [steps, setSteps] = useState(25)

  const imageRef = useRef(null)

  const generateImage = async (e) => {
    e?.preventDefault()
    if (!prompt.trim()) {
      setError("Please enter a prompt")
      return
    }
    setLoading(true)
    setError("")

    try {
      const body =
        model === "sdxl"
          ? { prompt, model }
          : { prompt, model, width, height, steps }

      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")

      setImage(data.image)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const downloadImage = async () => {
    if (!image) return
    const res = await fetch(image)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `SeronAi-${model}-${Date.now()}.png`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-10">
      <h1 className="mb-6 text-sm font-semibold tracking-wide text-neutral-300">
        SERON AI
      </h1>

      <div className="relative w-full max-w-3xl aspect-square rounded-md font-mono bg-[#111111] flex items-center justify-center overflow-hidden">
        {image ? (
          <>
            <Image
              ref={imageRef}
              src={image}
              alt="Generated"
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-3 right-3 flex rounded-md overflow-hidden border border-neutral-800/70 bg-neutral-950/20 backdrop-blur-md">
              <button
                onClick={downloadImage}
                className="flex items-center justify-center px-3 py-2 text-neutral-300 hover:bg-neutral-900 transition"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={generateImage}
                className="flex items-center justify-center px-3 py-2 text-neutral-300 hover:bg-neutral-900 transition border-l border-neutral-800"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center space-y-3">
            <div className="w-10 h-10 mx-auto rounded-full bg-neutral-900/80 flex items-center justify-center">
              <IoSparkles className="w-4 h-4 text-neutral-400" />
            </div>
            <p className="text-xs text-neutral-500">
              {loading ? "Generating…" : "Your image will appear here"}
            </p>
          </div>
        )}
      </div>

      <form
        onSubmit={generateImage}
        className="w-full max-w-3xl mt-6 space-y-3"
      >
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Golden hour landscape with rolling hills, river, and dramatic clouds..."
          rows={3}
          className="w-full resize-none rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700"
        />
        {error && (
         <div className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-400 font-mono">
         {error}
        </div>
       )}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-10 rounded-md bg-white text-black text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-neutral-200 transition"
        >
          {loading ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              Generating
            </>
          ) : (
            <>
              <RiAiGenerate className="w-4 h-4" />
              Generate
            </>
          )}
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowModelPicker(true)}
            className="flex-1 h-9 rounded-md border border-neutral-800 bg-neutral-950 text-xs text-neutral-300 flex items-center justify-center gap-2 hover:bg-neutral-900 transition"
          >
            <Cpu className="w-4 h-4" />
            {model === "sdxl"
              ? "SDXL"
              : model === "phoenix"
              ? "PHOENIX 1.0"
              : "FLUX.2 [Klein]"}
          </button>

          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex-1 h-9 rounded-md border border-neutral-800 bg-neutral-950 text-xs text-neutral-300 flex items-center justify-center gap-2 hover:bg-neutral-900 transition"
          >
            <Settings className="w-4 h-4" />
            Advanced
          </button>
        </div>

        {showAdvanced && model !== "sdxl" && (
          <div className="rounded-md border border-neutral-800 bg-neutral-950 p-4 space-y-4">
            {[
              ["Width", width, setWidth, 512, 2048, 64],
              ["Height", height, setHeight, 512, 2048, 64],
              ["Steps", steps, setSteps, 10, 50, 1],
            ].map(([label, value, set, min, max, step]) => (
              <div key={label} className="space-y-1">
                <label className="text-xs text-neutral-400">
                  {label}: {value}
                </label>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={(e) => set(Number(e.target.value))}
                  className="w-full accent-white"
                />
              </div>
            ))}
          </div>
        )}
      </form>

      {showModelPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
              <h2 className="text-sm font-semibold text-neutral-200">
                Select model
              </h2>
              <button onClick={() => setShowModelPicker(false)}>
                <X className="w-4 h-4 text-neutral-400 hover:text-neutral-200" />
              </button>
            </div>

            <div className="divide-y divide-neutral-800">
              {[
                ["sdxl", "SDXL", "Fast, reliable image generation"],
                ["flux", "FLUX.2 [Klein]", "Custom dimensions and steps"],
                ["phoenix", "PHOENIX 1.0", "Cinematic & stylized visuals"],
              ].map(([id, title, desc]) => (
                <button
                  key={id}
                  onClick={() => {
                    setModel(id)
                    setShowModelPicker(false)
                  }}
                  className={`w-full px-6 py-4 text-left transition ${
                    model === id
                      ? "bg-white/10"
                      : "hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <div className="text-sm font-medium text-neutral-200">
                    {title}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="mt-10 text-xs text-neutral-500">
        <Link
          href="https://priyanshu.is-a.dev"
          target="_blank"
          className="flex items-center gap-1 hover:text-neutral-700 transition"
        >
          Made with <FaHeart className="text-red-500" /> by Priyanshu
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </footer>
    </div>
  )
}