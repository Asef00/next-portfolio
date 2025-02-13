'use client'

import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const isActive = (sectionId: string) => {
    return activeSection === sectionId
      ? 'text-orange-500'
      : 'hover:text-gray-400'
  }

  const isContactActive = activeSection === 'contact'

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed md:hidden z-50 top-6 left-6 ${
          isContactActive ? 'text-black' : 'text-white'
        }`}
        aria-label="Toggle menu"
      >
        {!isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Navigation */}
      <nav
        className={`fixed w-full md:w-[280px] h-screen transition ${
          isContactActive
            ? 'bg-white text-black'
            : 'bg-gray-600 md:bg-black text-black md:text-white'
        } text-2xl md:text-base p-6 
        transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform
        ${isMenuOpen ? 'z-40' : 'z-30'}`}
      >
        <div className="flex flex-col h-full md:justify-center justify-end">
          <div className="space-y-6">
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left ${isActive('about')}`}
            >
              About
            </button>

            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('uiux')}
                className={`block w-full text-left ${isActive('uiux')}`}
              >
                UI/UX Design
              </button>
              <button
                onClick={() => scrollToSection('graphic-design')}
                className={`block w-full text-left ${isActive(
                  'graphic-design'
                )}`}
              >
                Graphic Designs
              </button>
              <button
                onClick={() => scrollToSection('paintings')}
                className={`block w-full text-left ${isActive('paintings')}`}
              >
                Paintings and Printmaking
              </button>
              <button
                onClick={() => scrollToSection('illustrations')}
                className={`block w-full text-left ${isActive(
                  'illustrations'
                )}`}
              >
                Illustrations
              </button>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left ${isActive('contact')}`}
            >
              Contact me
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
