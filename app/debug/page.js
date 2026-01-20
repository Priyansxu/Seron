"use client"

import { useAuth } from '@clerk/nextjs'

export default function DebugPage() {
  const { isLoaded, userId } = useAuth()
  
  const publicKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Clerk Debug Info</h1>
      
      <div className="space-y-4 font-mono text-sm">
        <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
          <p className="text-neutral-400">Public Key Present:</p>
          <p className={publicKey ? "text-green-400" : "text-red-400"}>
            {publicKey ? "✅ YES" : "❌ NO"}
          </p>
          {publicKey && (
            <p className="text-neutral-500 mt-2 break-all">
              {publicKey.substring(0, 30)}...
            </p>
          )}
        </div>
        
        <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
          <p className="text-neutral-400">Clerk Loaded:</p>
          <p className={isLoaded ? "text-green-400" : "text-yellow-400"}>
            {isLoaded ? "✅ YES" : "⏳ Loading..."}
          </p>
        </div>
        
        <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
          <p className="text-neutral-400">User ID:</p>
          <p className="text-white">
            {userId || "Not signed in"}
          </p>
        </div>

        <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
          <p className="text-neutral-400">Environment:</p>
          <p className="text-white">
            {process.env.NODE_ENV}
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <a href="/" className="text-blue-400 hover:underline">← Back to Home</a>
      </div>
    </div>
  )
}