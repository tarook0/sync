"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function GameTrailer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = "625trtheKbA" // Sync-O-Theft Gameplay Demo video ID

  return (
    <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
      {!isPlaying ? (
        <>
          <div className="absolute inset-0 bg-black">
            <div className="relative w-full h-full">
              {/* YouTube thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Game trailer thumbnail"
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  // Fallback to medium quality thumbnail if maxres is not available
                  ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
          <button
            className="absolute inset-0 flex items-center justify-center group"
            onClick={() => setIsPlaying(true)}
            aria-label="Play trailer"
          >
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              <Play className="h-10 w-10 text-white fill-white" />
            </div>
          </button>
        </>
      ) : (
        <div className="w-full h-full bg-black">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Sync-O-Theft Gameplay Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      )}
    </div>
  )
}
