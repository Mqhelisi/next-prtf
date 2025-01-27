"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import HeroSectionGradientBackground from "@/components/sections/herow"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/seprator"
import HeroSectionImageWithReviews from "@/components/sections/heroo"
import IconSection2ColsGrid from "@/components/sections/detailed"
import HeroFormCenterAlignedSearchWithTags from "@/components/sections/contactTags"
import ToppMenu from "@/components/ui/topmenu"


export default function ModeToggle() {
  const { setTheme } = useTheme()
  // const { data, error } = useSWR('http://127.0.0.1:5000/api/sensors', fetcher)
 
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  return (
    <div>
      {/* <h1>JSON.stringify(data)</h1> */}
      <ToppMenu/>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <HeroSectionGradientBackground/>
    <Separator/>
    <HeroSectionImageWithReviews/>
    <Separator/>
    <IconSection2ColsGrid/>
    <Separator/>
    <HeroFormCenterAlignedSearchWithTags/>
    </div>
  )
}
