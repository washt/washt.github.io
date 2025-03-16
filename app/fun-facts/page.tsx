"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const wikiPages = [
  {
    title: "Ant Mill",
    description: "A phenomenon where army ants get trapped in a circular path and march to their deaths",
    url: "https://en.wikipedia.org/wiki/Ant_mill",
  },
  {
    title: "Dyatlov Pass Incident",
    description: "Mysterious deaths of nine hikers in the northern Ural Mountains in 1959",
    url: "https://en.wikipedia.org/wiki/Dyatlov_Pass_incident",
  },
  {
    title: "Tanganyika Laughter Epidemic",
    description: "Mass psychogenic illness that affected thousands in Tanzania in 1962",
    url: "https://en.wikipedia.org/wiki/Tanganyika_laughter_epidemic",
  },
  {
    title: "Dancing Plague of 1518",
    description: "A case of dancing mania in Strasbourg where people danced until they died",
    url: "https://en.wikipedia.org/wiki/Dancing_plague_of_1518",
  },
  {
    title: "Mary Toft",
    description: "Woman who claimed to give birth to rabbits in 18th-century England",
    url: "https://en.wikipedia.org/wiki/Mary_Toft",
  },
  {
    title: "Tarrare",
    description: "French showman with an insatiable appetite who could eat anything",
    url: "https://en.wikipedia.org/wiki/Tarrare",
  },
  {
    title: "Voynich Manuscript",
    description: "Illustrated codex with unknown writing system that has never been deciphered",
    url: "https://en.wikipedia.org/wiki/Voynich_manuscript",
  },
  {
    title: "Wow! Signal",
    description: "Strong narrowband radio signal detected in 1977 that may have been from space",
    url: "https://en.wikipedia.org/wiki/Wow!_signal",
  },
  {
    title: "Bloop",
    description: "Ultra-low frequency underwater sound detected in 1997",
    url: "https://en.wikipedia.org/wiki/Bloop",
  },
  {
    title: "List of Unusual Deaths",
    description: "Wikipedia's compilation of bizarre ways people have died",
    url: "https://en.wikipedia.org/wiki/List_of_unusual_deaths",
  },
  {
    title: "Kowloon Walled City",
    description: "Ungoverned, densely populated settlement in Hong Kong",
    url: "https://en.wikipedia.org/wiki/Kowloon_Walled_City",
  },
  {
    title: "The Garden of Earthly Delights",
    description: "Triptych painting by Hieronymus Bosch filled with bizarre imagery",
    url: "https://en.wikipedia.org/wiki/The_Garden_of_Earthly_Delights",
  },
  {
    title: "Phantom Time Hypothesis",
    description: "Conspiracy theory that suggests the Early Middle Ages never happened",
    url: "https://en.wikipedia.org/wiki/Phantom_time_hypothesis",
  },
  {
    title: "Stone Tape Theory",
    description: "Paranormal hypothesis that suggests buildings can record events",
    url: "https://en.wikipedia.org/wiki/Stone_Tape",
  },
  {
    title: "Sailing Stones",
    description: "Rocks that move across the desert floor without human or animal intervention",
    url: "https://en.wikipedia.org/wiki/Sailing_stones",
  },
  {
    title: "Göbekli Tepe",
    description: "Ancient archaeological site that predates Stonehenge by 6,000 years",
    url: "https://en.wikipedia.org/wiki/Göbekli_Tepe",
  },
  {
    title: "Gombe Chimpanzee War",
    description: "Violent conflict between chimpanzee groups studied by Jane Goodall",
    url: "https://en.wikipedia.org/wiki/Gombe_Chimpanzee_War",
  },
  {
    title: "Nazca Lines",
    description: "Ancient geoglyphs in Peru only visible from the air",
    url: "https://en.wikipedia.org/wiki/Nazca_Lines",
  },
  {
    title: "Tunguska Event",
    description: "Powerful explosion over Siberia in 1908 that flattened 80 million trees",
    url: "https://en.wikipedia.org/wiki/Tunguska_event",
  },
  {
    title: "Mariana Trench",
    description: "Deepest oceanic trench on Earth with bizarre lifeforms",
    url: "https://en.wikipedia.org/wiki/Mariana_Trench",
  },
  {
    title: "Svalbard Global Seed Vault",
    description: "Secure seed bank on a remote island near the Arctic",
    url: "https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault",
  },
  {
    title: "The Fool's Cap World Map",
    description: "16th-century map depicting the world inside a jester's cap",
    url: "https://en.wikipedia.org/wiki/The_Fool%27s_Cap_Map_of_the_World",
  },
  {
    title: "Movile Cave",
    description: "Cave isolated for 5.5 million years with unique ecosystem",
    url: "https://en.wikipedia.org/wiki/Movile_Cave",
  },
  {
    title: "Centralia, Pennsylvania",
    description: "Town abandoned due to an underground coal fire burning since 1962",
    url: "https://en.wikipedia.org/wiki/Centralia,_Pennsylvania",
  },
  {
    title: "Ghost Ship Mary Celeste",
    description: "Merchant vessel found adrift and deserted in 1872",
    url: "https://en.wikipedia.org/wiki/Mary_Celeste",
  },
  {
    title: "Time Cube",
    description: "Pseudoscientific theory claiming that each day consists of four simultaneous days",
    url: "https://en.wikipedia.org/wiki/Time_Cube",
  },
  {
    title: "Project MKUltra",
    description: "CIA mind control program that conducted experiments on humans",
    url: "https://en.wikipedia.org/wiki/Project_MKUltra",
  },
  {
    title: "Roanoke Colony",
    description: "Lost colony in America where all settlers disappeared mysteriously",
    url: "https://en.wikipedia.org/wiki/Roanoke_Colony",
  },
  {
    title: "Japanese River Otter",
    description: "Declared extinct in 2012, but with occasional claimed sightings",
    url: "https://en.wikipedia.org/wiki/Japanese_river_otter",
  },
  {
    title: "Kentucky Meat Shower",
    description: "Incident in 1876 when meat fell from the sky in Kentucky",
    url: "https://en.wikipedia.org/wiki/Kentucky_meat_shower",
  },
]

export default function FunFacts() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredWikiPages = wikiPages.filter(
    (page) =>
      page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6 text-secondary">Fun Facts</h1>
      <p className="mb-6 text-muted-foreground">A collection of my favorite esoteric Wikipedia pages.</p>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search wiki pages..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWikiPages.map((page, index) => (
          <a
            key={index}
            href={page.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-[1.02]"
          >
            <Card className="h-full border-2 hover:border-secondary">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{page.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{page.description}</CardDescription>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {filteredWikiPages.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">No results found</h3>
          <p className="text-muted-foreground mt-2">Try a different search term</p>
        </div>
      )}
    </div>
  )
}

