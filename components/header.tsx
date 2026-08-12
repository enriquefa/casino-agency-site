"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useActiveSection } from "@/hooks/use-active-section"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection(["services", "about", "team", "contact"])

  const navItems = [
    { label: "Services", href: "#services", id: "services" },
    { label: "About", href: "#about", id: "about" },
    { label: "Team", href: "#team", id: "team" },
    { label: "Contact", href: "#contact", id: "contact" },
  ]

  // Smooth scroll directly back to the top of the viewport
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setIsMenuOpen(false) // Closes the mobile drawer if open
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo element */}
          <Link href="#" onClick={scrollToTop} className="flex items-center gap-2">
            <Image
              src="/images/ads-logo-gold.png"
              alt="Ads BlackJack"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{
                  color: activeSection === item.id ? "#f6b848" : "#a0a0a0",
                }}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Desktop Cal.com Trigger Button */}
            <button
              type="button"
              data-cal-link="https://cal.com/adsblackjack/free-strategy-session"
              data-cal-config='{"layout":"month_view"}'
              className="px-5 py-2.5 text-sm font-semibold rounded-full transition-colors cursor-pointer"
              style={{ 
                backgroundColor: "#f6b848", 
                color: "#202020" 
              }}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium transition-colors"
                  style={{
                    color: activeSection === item.id ? "#f6b848" : "#a0a0a0",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Cal.com Trigger Button */}
              <button
                type="button"
                data-cal-link="https://cal.com/adsblackjack/free-strategy-session"
                data-cal-config='{"layout":"month_view"}'
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-2.5 text-sm font-semibold rounded-full w-fit transition-colors text-left cursor-pointer"
                style={{ 
                  backgroundColor: "#f6b848", 
                  color: "#202020" 
                }}
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}