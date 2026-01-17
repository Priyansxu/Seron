"use client"

export default function Header() {
  return (
    <header className="sticky top-4 mx-4 sm:mx-6 lg:mx-8 z-20 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white">
          Vega AI
        </h1>
      </div>
    </header>
  )
}