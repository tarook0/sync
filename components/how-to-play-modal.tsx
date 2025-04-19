"use client"
import { X } from "lucide-react"
import { Button } from "./button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

interface HowToPlayModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HowToPlayModal({ isOpen, onClose }: HowToPlayModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border border-gray-700 rounded-lg shadow-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gray-900 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">How to Play</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="p-6">
          <Tabs defaultValue="basics">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="basics">Basics</TabsTrigger>
              <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
              <TabsTrigger value="characters">Characters</TabsTrigger>
              <TabsTrigger value="tips">Tips & Goals</TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="space-y-4">
              <h3 className="text-xl font-semibold text-white">How to Start Playing</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  In The hub move your way to the play to go to map selection window, in it, choose between a new random
                  generated map, saved map or level of the week in case you've downloaded it, then you'll be moved to
                  character selection window.
                </p>
                <p>
                  In the character selection window, you'll find all the characters you bought (always remember you can
                  buy new characters in the store) with their stats. Choose your first character and hit play.
                </p>
                <p>
                  After each character's turn, you'll be moved to character selection window again to choose your next
                  character.
                </p>
                <p>Remember to equip some power-ups to increase your chance of winning.</p>
                <p>
                  When you end playing with the 5th character, the level ends and you'll be told the result of this
                  heist.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="gameplay" className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">The Logic of the Game</h3>
                <p className="text-gray-300 mb-4">
                  You win when the total nuts' worth, that all characters in the level stole and got away with it, is
                  60% of the total nuts' worth in the level.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Guards</h4>
                <p className="text-gray-300 mb-2">In the map there are three types of guards:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-medium text-white">Normal:</span> It's a white bulldog that loves mice and
                    hates cats, chases player when entering guard's field of view, can't use portals, stops chasing
                    player after exiting guard's field of view for some time, in case of collision with the player, the
                    player is caught.
                  </li>
                  <li>
                    <span className="font-medium text-white">Super:</span> It's a brown rottweiler that chases player
                    when entering guard's field of view, can use portals, stops chasing player after exiting guard's
                    field of view for some time, in case of collision with the player, the player is caught.
                  </li>
                  <li>
                    <span className="font-medium text-white">Panther:</span> It's a pink panther that doesn't have field
                    of view, chases player when player steals panther's nut (the golden nut in the room), can use
                    portals and won't leave player until it returns the nut, in case of collision with the player, the
                    player is not caught, but the panther's nut is lost from the player's bag and it's returned to its
                    initial location.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Portals</h4>
                <p className="text-gray-300 mb-2">In the map there are two types of portals:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Lobby-room portal</li>
                  <li>Room-room portal</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Character Turns</h4>
                <p className="text-gray-300">
                  Each character's turn starts at the same time of the old characters, i.e., when playing with the 2nd
                  character, you'll find the 1st character do exactly what you did in the 1st character's turn, and in
                  the 3rd character's turn, 1st and 2nd characters do exactly what you did in their character's turns.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="characters" className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-3">Characters List</h3>
              <p className="text-gray-300 mb-4">
                Here's the list of the game's characters and their abilities (press F to activate the ability and wait
                to recharge):
              </p>

              <ul className="space-y-4 text-gray-300">
                <li className="p-3 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white">Squirrel</h4>
                  <p>
                    A normal squirrel who will do anything to get some nuts but doesn't know what's like to have an
                    ability.
                  </p>
                </li>
                <li className="p-3 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white">The Prince</h4>
                  <p>
                    A very fast cheetah who can slow the time of everything around it for some time because it runs
                    super-fast, carrying its dagger and collecting sand.
                  </p>
                </li>
                <li className="p-3 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white">Steve</h4>
                  <p>An architect beaver obsessed with building and putting blocks everywhere.</p>
                </li>
                <li className="p-3 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white">Ghost</h4>
                  <p>An angry elephant who can get through walls when needed.</p>
                </li>
                <li className="p-3 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white">Ninja</h4>
                  <p>A spy cat who can sneak and get into guard's field of view without being caught and chased.</p>
                </li>
                <li className="p-3 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white">Scopper</h4>
                  <p>A Falcon who can fly extremely high for a small period of time.</p>
                </li>
                <li className="p-3 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white">Faceoff</h4>
                  <p>
                    Twin opossum, one's strong but slow and the other's fast but weak, share everything they steal
                    between them, and they can shift between the two of them unless the strong one is lifting nuts
                    heavier than the weak one can.
                  </p>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="tips" className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">The Goal of the Game</h3>
                <p className="text-gray-300">
                  The game should be fun and challenging, and the player should strategically plan ahead the whole level
                  and wisely use each character's ability when needed in the right time and location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Side Notes</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>If a character is caught it'll lose all nuts it looted.</li>
                  <li>There are some hidden mini games, have fun finding them.</li>
                  <li>You can choose every character once except squirrel.</li>
                  <li>You can equip only one power-up per character.</li>
                  <li>Power-ups are paid with in-match nuts and not game-nuts.</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
