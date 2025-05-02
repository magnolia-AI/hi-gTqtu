'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="font-bold text-xl mb-6">
          <span className="text-primary">Portfolio</span>
        </div>
        <nav className="flex flex-col gap-4">
          <a
            href="#about"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <Button className="mt-4" onClick={() => setOpen(false)}>
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
