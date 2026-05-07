"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun className="rotate-0 scale-100 transition-all hover:text-yellow-500 data-[state=dark]:-rotate-90 data-[state=dark]:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all hover:text-yellow-500 data-[state=dark]:rotate-0 data-[state=dark]:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
