"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brush, Code, Contact, FileText, Image, Sidebar } from "lucide-react"

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { ModeToggle } from "@/components/mode-toggle"

export function MainSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Vibe Board",
      href: "/vibe-board",
      icon: Image,
    },
    {
      title: "Fun Facts",
      href: "/fun-facts",
      icon: FileText,
    },
    {
      title: "Resume",
      href: "/portfolio",
      icon: Code,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: Contact,
    },
    {
      title: "Paint Department",
      href: "/paint",
      icon: Brush,
    },
  ]

  return (
    <SidebarComponent>
      <SidebarHeader className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 px-2">
          <Sidebar className="h-6 w-6 text-primary" />
        </Link>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <ModeToggle />
      </SidebarFooter>
      <SidebarRail />
    </SidebarComponent>
  )
}

