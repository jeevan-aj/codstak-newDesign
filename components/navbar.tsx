"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">CodStak</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Challenges
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Blogs
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Newsletter
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Interview Prep
          </Link>
         
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Challenges
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Newsletter
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Interview Prep
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              YouTube
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" size="sm" className="w-full">
                Log in
              </Button>
              <Button size="sm" className="w-full ">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

