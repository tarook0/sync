"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function ScreenshotGallery() {
  const [currentImage, setCurrentImage] = useState<number | null>(null)

  const screenshots = [
    {
      src: "/images/1.png",
      alt: "Game screenshot 1 - Character in a forest",
    },
    {
      src: "/images/2.png",
      alt: "Game screenshot 2 - Battle scene",
    },
    {
      src: "/images/3.png",
      alt: "Game screenshot 3 - City landscape",
    },
    {
      src: "/images/4.png",
      alt: "Game screenshot 4 - Character customization",
    },
    {
      src: "/images/5.png",
      alt: "Game screenshot 5 - Boss fight",
    },
    {
      src: "/images/6.png",
      alt: "Game screenshot 6 - Multiplayer mode",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
  }

  const closeLightbox = () => {
    setCurrentImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (currentImage === null) return

    if (direction === "prev") {
      setCurrentImage(currentImage === 0 ? screenshots.length - 1 : currentImage - 1)
    } else {
      setCurrentImage(currentImage === screenshots.length - 1 ? 0 : currentImage + 1)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={screenshot.src || "/placeholder.svg"}
              alt={screenshot.alt}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {currentImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={closeLightbox}>
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>

          <button className="absolute left-4 text-white hover:text-gray-300" onClick={() => navigateImage("prev")}>
            <ChevronLeft className="h-10 w-10" />
            <span className="sr-only">Previous</span>
          </button>

          <div className="relative h-[80vh] w-[80vw]">
            <Image
              src={screenshots[currentImage].src || "/placeholder.svg"}
              alt={screenshots[currentImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <button className="absolute right-4 text-white hover:text-gray-300" onClick={() => navigateImage("next")}>
            <ChevronRight className="h-10 w-10" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      )}
    </>
  )
}
