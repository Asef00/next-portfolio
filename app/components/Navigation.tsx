'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-orange-500" : "hover:text-gray-400"
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed md:hidden z-50 top-6 left-6 text-white"
        aria-label="Toggle menu"
      >
        {!isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Navigation */}
      <nav className={`fixed md:relative w-full md:w-[280px] h-screen bg-gray-600 md:bg-black border-r border-gray-600 text-black md:text-white text-2xl md:text-base p-6 
        transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform
        ${isMenuOpen ? 'z-40' : ''}`}>
        <div className="flex flex-col h-full md:justify-center justify-end">
          <div className="space-y-6">
            <Link 
              href="/about" 
              className={`block ${isActive('/about')}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="space-y-3">
              <Link 
                href="/uiux" 
                className={`block ${isActive('/uiux')}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                UI/UX Design
              </Link>
              <Link 
                href="/graphic-design" 
                className={`block ${isActive('/graphic-design')}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Graphic Designs
              </Link>
              <Link 
                href="/paintings" 
                className={`block ${isActive('/paintings')}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Paintings and Printmaking
              </Link>
              <Link 
                href="/illustrations" 
                className={`block ${isActive('/illustrations')}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Illustrations
              </Link>
            </div>
            
            <Link 
              href="/contact" 
              className={`block ${isActive('/contact')}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact me
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
} 