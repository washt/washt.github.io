import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3rem)] gap-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        <span className="text-primary">tucker wash</span>
      </h1>
      <p className="max-w-3xl text-xl text-muted-foreground">
        Explore my digital space featuring a vibe board, fun facts, portfolio, and interactive experiences.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { href: "/vibe-board", label: "Vibe Board", color: "bg-primary hover:bg-primary/90" },
          { href: "/fun-facts", label: "Fun Facts", color: "bg-secondary hover:bg-secondary/90" },
          {
            href: "/portfolio",
            label: "Resume",
            color: "bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground",
          },
          {
            href: "/contact",
            label: "Contact",
            color: "bg-quaternary hover:bg-quaternary/90 text-quaternary-foreground",
          },
          { href: "/paint", label: "Paint Department", color: "bg-muted hover:bg-muted/90" },
        ].map((link) => (
          <Link key={link.href} href={link.href}>
            <Button className={`${link.color}`}>{link.label}</Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

