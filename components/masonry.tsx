"use client"

import React, { useEffect, useState } from "react"

type MasonryProps = {
  children: React.ReactNode[]
  columns?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  spacing?: number
}

export function Masonry({ children, columns = { default: 1 }, spacing = 4 }: MasonryProps) {
  const [columnCount, setColumnCount] = useState(columns.default)

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth

      if (width >= 1280 && columns.xl) {
        setColumnCount(columns.xl)
      } else if (width >= 1024 && columns.lg) {
        setColumnCount(columns.lg)
      } else if (width >= 768 && columns.md) {
        setColumnCount(columns.md)
      } else if (width >= 640 && columns.sm) {
        setColumnCount(columns.sm)
      } else {
        setColumnCount(columns.default)
      }
    }

    updateColumnCount()
    window.addEventListener("resize", updateColumnCount)
    return () => window.removeEventListener("resize", updateColumnCount)
  }, [columns])

  const columnArray = Array.from({ length: columnCount }, (_, i) => i)
  const childrenArray = React.Children.toArray(children)

  return (
    <div className="w-full flex" style={{ gap: `${spacing * 0.25}rem` }}>
      {columnArray.map((columnIndex) => (
        <div key={columnIndex} className="flex flex-col flex-grow" style={{ gap: `${spacing * 0.25}rem` }}>
          {childrenArray.filter((_, i) => i % columnCount === columnIndex)}
        </div>
      ))}
    </div>
  )
}

