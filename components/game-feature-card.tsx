import { Map, Swords, BookOpen, Palette, Music, Users } from "lucide-react"
import { Card, CardContent, CardHeader } from "./card"

interface GameFeatureCardProps {
  title: string
  description: string
  iconName: string
}

export function GameFeatureCard({ title, description, iconName }: GameFeatureCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "map":
        return <Map className="h-10 w-10 text-purple-400" />
      case "swords":
        return <Swords className="h-10 w-10 text-red-400" />
      case "book-open":
        return <BookOpen className="h-10 w-10 text-blue-400" />
      case "palette":
        return <Palette className="h-10 w-10 text-green-400" />
      case "music":
        return <Music className="h-10 w-10 text-yellow-400" />
      case "users":
        return <Users className="h-10 w-10 text-pink-400" />
      default:
        return <Map className="h-10 w-10 text-purple-400" />
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
      <CardHeader className="pb-2">
        <div className="mb-2">{getIcon(iconName)}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
