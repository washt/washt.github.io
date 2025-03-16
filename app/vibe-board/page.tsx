"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Masonry } from "@/components/masonry"
import { Loader2 } from "lucide-react"

type Image = {
  id: number
  src: string
  width: number
  height: number
}

export default function VibeBoard() {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const observerTarget = useRef(null)

  // Generate random images for demo
  const generateRandomImages = (startId: number, count: number) => {
    const newImages: Image[] = []
    for (let i = 0; i < count; i++) {
      const id = startId + i
      const width = Math.floor(Math.random() * 300) + 200
      const height = Math.floor(Math.random() * 300) + 200
      newImages.push({
        id,
        src: `/placeholder.svg?width=${width}&height=${height}`,
        width,
        height,
      })
    }
    return newImages
  }

  // Load initial images
  useEffect(() => {
    setImages(generateRandomImages(1, 20))
    setLoading(false)
  }, [])

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1)
          setLoading(true)

          // Simulate loading more images
          setTimeout(() => {
            setImages((prevImages) => [...prevImages, ...generateRandomImages(prevImages.length + 1, 10)])
            setLoading(false)
          }, 1000)
        }
      },
      { threshold: 1.0 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [loading])

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-8 text-primary">Vibe Board</h1>
      <p className="mb-6 text-muted-foreground">
        An infinite scroll canvas of images that represent my aesthetic and inspiration.
      </p>

      <Masonry columns={{ default: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {images.map((image) => (
          <Card key={image.id} className="mb-4 overflow-hidden border-0 shadow-md bg-muted">
            <CardContent className="p-0">
              <img
                src={image.src || "/placeholder.svg"}
                alt={`Vibe image ${image.id}`}
                className="w-full h-auto object-cover transition-all hover:scale-105 duration-300"
                style={{ aspectRatio: `${image.width}/${image.height}` }}
              />
            </CardContent>
          </Card>
        ))}
      </Masonry>

      <div ref={observerTarget} className="flex justify-center py-8">
        {loading && (
          <div className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span>Loading more vibes...</span>
          </div>
        )}
      </div>
    </div>
  )
}

