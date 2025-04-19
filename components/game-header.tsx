"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./button"
import { Menu, X, Gamepad2, HelpCircle } from "lucide-react"
import { HowToPlayModal } from "./how-to-play-modal"
export function GameHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false)

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "trailer",
        "features",
        "media",
        "story",
        "system-requirements",
        "download",
        "community",
      ]

      const currentPosition = window.scrollY + 100 // Add offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" onClick={() => scrollToSection("home")}>
          <Gamepad2 className="h-6 w-6 text-white" />
          <span className="text-lg font-bold text-white">SYNC-O-THEFT</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-sm font-medium ${
              activeSection === "home" ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className={`text-sm font-medium ${
              activeSection === "features" ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("media")}
            className={`text-sm font-medium ${
              activeSection === "media" ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Media
          </button>
          <button
            onClick={() => scrollToSection("story")}
            className={`text-sm font-medium ${
              activeSection === "story" ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Story
          </button>
          <button
            onClick={() => scrollToSection("system-requirements")}
            className={`text-sm font-medium ${
              activeSection === "system-requirements" ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            System Requirements
          </button>
          <button
            onClick={() => scrollToSection("community")}
            className={`text-sm font-medium ${
              activeSection === "community" ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Community
          </button>
        </nav>
        <div className="hidden md:flex gap-4">
        <Button
              variant="ghost"
              className="text-white hover:bg-white/10 flex items-center gap-2"
              onClick={() => setIsHowToPlayOpen(true)}
            >
              <HelpCircle className="h-4 w-4" />
              How to Play
            </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Sign In
          </Button>
          <Button onClick={() => scrollToSection("download")}>Download Now</Button>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <nav className="flex flex-col p-4 gap-4">
            <button
              className="text-sm font-medium text-white/90 hover:text-white py-2 text-left"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-sm font-medium text-white/90 hover:text-white py-2 text-left"
              onClick={() => scrollToSection("features")}
            >
              Features
            </button>
            <button
              className="text-sm font-medium text-white/90 hover:text-white py-2 text-left"
              onClick={() => scrollToSection("media")}
            >
              Media
            </button>
            <button
              className="text-sm font-medium text-white/90 hover:text-white py-2 text-left"
              onClick={() => scrollToSection("story")}
            >
              Story
            </button>
            <button
              className="text-sm font-medium text-white/90 hover:text-white py-2 text-left"
              onClick={() => scrollToSection("system-requirements")}
            >
              System Requirements
            </button>
            <button
              className="text-sm font-medium text-white/90 hover:text-white py-2 text-left"
              onClick={() => scrollToSection("community")}
            >
              Community
            </button>
            <button
                className="text-sm font-medium text-white/90 hover:text-white py-2 text-left flex items-center gap-2"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsHowToPlayOpen(true)
                }}
              >
                <HelpCircle className="h-4 w-4" />
                How to Play
              </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="w-full" onClick={() => scrollToSection("download")}>
                download now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
    
    <HowToPlayModal isOpen={isHowToPlayOpen} onClose={() => setIsHowToPlayOpen(false)} />
    </>
  )
}
