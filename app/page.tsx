"use client";

import Image from "next/image";
import { Button } from "../components/button";
import { GameFeatureCard } from "../components/game-feature-card";
import { ScreenshotGallery } from "../components/screenshot-gallery";
import { SystemRequirements } from "../components/system-requirements";
import { NewsletterSignup } from "../components/newsletter-signup";
import { GameTrailer } from "../components/game-trailer";
import { GameHeader } from "../components/game-header";
import { GameFooter } from "../components/game-footer";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { HowToPlayModal } from "../components/how-to-play-modal";

export default function HomePage() {
  const downloadNow = "https://fivelittletheives.itch.io/sync-o-theft";
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <GameHeader />
      <main className="flex-1">
        {/* Hero Section - already has id="home" */}
        <section id="home" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
          <div className="relative h-[90vh] w-full overflow-hidden">
            <video
              src="/videos/purple.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
              SYNC-O-THEFT
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 drop-shadow-md">
              A top-down 2D stealth game with a non-linear timeline perspective
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={downloadNow}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8">
                  Download Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-black/50 text-white border-white/30 hover:bg-black/70"
                onClick={() => {
                  const trailerSection = document.querySelector("#trailer");
                  if (trailerSection) {
                    trailerSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Watch Trailer
              </Button>
            </div>
          </div>
        </section>

        {/* Game Trailer Section */}
        <section id="trailer" className="py-16 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Official Trailer
            </h2>
            <GameTrailer />
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Game Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GameFeatureCard
                title="Immersive World"
                description="Explore vast, detailed environments filled with secrets and wonders waiting to be discovered."
                iconName="map"
              />
              <GameFeatureCard
                title="Epic Escape"
                description="Master daring escapes as you outwit traps, guards, and impossible odds in a tense, dynamic evasion system.."
                iconName="swords"
              />
              <GameFeatureCard
                title="Compelling Story"
                description="Experience a rich narrative with memorable characters and meaningful choices."
                iconName="book-open"
              />
              <GameFeatureCard
                title="Stunning Visuals"
                description="Witness breathtaking graphics and visual effects that bring the game world to life."
                iconName="palette"
              />
              <GameFeatureCard
                title="Dynamic Soundtrack"
                description="Immerse yourself in an adaptive musical score that enhances every moment of gameplay."
                iconName="music"
              />
              <GameFeatureCard
                title="Time Trials"
                description="Work together or go head-to-head in fast-paced, time-sensitive challenges that demand teamwork and precision.."
                iconName="users"
              />
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section id="media" className="py-16 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Screenshots
            </h2>
            <ScreenshotGallery />
          </div>
        </section>

        <section id="story" className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">The Story</h2>

            <div className="max-w-4xl mx-auto bg-gray-800/50 p-6 md:p-8 rounded-lg border border-gray-700 mb-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-4">
                  Once upon a time there were some squirrels that mastered bird's food heist, cracked 3 squirrel-proof
                  wild-bird feeders and lived happily ever after.
                </p>

                <p className="text-lg text-gray-300 mb-4">
                  Until... some youtuber, who became a bird watcher for illogical reasons, decided to make their life
                  much worse by building a giant maze to test the squirrels' mental and physical limits, filled with
                  obstacles, springs and a lot of other distractors, so our beloved squirrels must train, hope for the
                  best, prepare for the worst and get all the help they can get from all their friends to beat this
                  engineer's maze and get a life-supply of nuts.
                </p>

                <p className="text-lg text-gray-300 mb-4">
                  Two of those squirrels were Slappy and her friend Skippy, they went to the grand squirrel to get from
                  his wisdom, he advised them to forget the life-supply of nuts, and climb the ladder one stair at a
                  time, so they should draw the perfect plan to rob the local bank in their area.
                </p>

                <p className="text-lg text-gray-300 mb-4">
                  The local bank in their area is not an ordinary bank, it doesn't have vault or safe, so all its
                  valuable items are thrown on the ground, guarded by some dogs who can't arrest anyone.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">1st Mission</h3>

                <p className="text-lg text-gray-300 mb-4">
                  Slappy and Skippy are all over the news for their brave successful attempt to do the robbery. Their
                  robbery is covered by The New Island Times, The Kingdom Post, analyzed by famous Floor Street analysts
                  and all over social media. Every animal in the kingdom wants to meet them and help them because every
                  animal (except bourgeois dogs) hates banks from the bottom of its heart thanks to the loans and
                  interest.
                </p>

                <p className="text-lg text-gray-300 mb-4">
                  Slappy and Skippy loved the thrill of victory and wanted to feel it again so they convinced a new team
                  mate to do the next heist with them, he's a master-mind, architect, loves video games and especially
                  crafts games, has a unique ability which is removing and placing a special block where ever he wants.
                  He was a little skeptical at first, to be honest he should, cause who would do a heist with the help
                  of two normal squirrels with no abilities?
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">2nd Mission</h3>

                <p className="text-lg text-gray-300">
                  After the surgically perfect executed heist, multiple fan clubs were found with hundreds of animals
                  joining them every day.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Join the Heist</h3>
                <p className="text-lg text-gray-300 mb-4">
                  In Sync-O-Theft, you'll take control of a team of skilled animal thieves, each with their own unique
                  abilities. Plan your heists carefully, navigate through challenging environments, and outsmart guards
                  to steal valuable nuts.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  With a non-linear timeline perspective, you'll need to coordinate your team's actions across different
                  time periods, creating the perfect synchronized heist.
                </p>
                <p className="text-lg text-gray-300">
                  Will you become the most notorious animal thieves in the kingdom, or will you get caught in the act?
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/15.png" alt="Game story illustration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section id="system-requirements" className="py-16 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              System Requirements
            </h2>
            <SystemRequirements />
          </div>
        </section>

        {/* Pre-order CTA */}
        <section
          id="pre-order"
          className="py-16 bg-gradient-to-r from-purple-900 to-blue-900"
        >
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Begin Your Adventure?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Download now and experience the game for yourself.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={downloadNow}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8">
                  Download  
                </Button>
              </Link>

              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 flex items-center gap-2"
                onClick={() => setIsHowToPlayOpen(true)}
              >
                <HelpCircle className="h-5 w-5" />
                How to Play
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="community" className="py-16 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Stay Updated
            </h2>
            <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest news, updates,
              and exclusive offers about the game.
            </p>
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <GameFooter />
      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onClose={() => setIsHowToPlayOpen(false)}
      />
    </div>
  );
}
