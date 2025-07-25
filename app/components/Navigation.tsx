'use client'

import { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { NavigationSection } from '@/app/types/section'
import Link from 'next/link'

interface NavigationProps {
  mobileTitle?: string
  hideOnDesktop?: boolean
  children?: React.ReactNode
}

export default function Navigation({
  mobileTitle,
  hideOnDesktop,
  children,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [sections, setSections] = useState<NavigationSection[]>([])
  const activeSection = useActiveSection()

  useEffect(() => {
    // Fetch sections on client side
    async function fetchSections() {
      const response = await fetch('/api/sections')
      const data = await response.json()
      setSections(data)
    }

    fetchSections()
  }, [])

  useEffect(() => {
    // Scroll to section if hash is present on initial load
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      // Wait for sections to be loaded/rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [sections])

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
        {isMenuOpen ? (
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {/* Mobile Title */}
      {mobileTitle && (
        <h1 className="fixed top-16 left-5 text-2xl md:hidden text-orange-500 [writing-mode:sideways-lr]">
          {mobileTitle}
        </h1>
      )}

      {/* Navigation */}
      <nav
        className={`fixed flex flex-col justify-center h-full w-full md:w-desktop-nav-width text-2xl md:text-base p-6  bg-gray-600 md:bg-transparent ${
          hideOnDesktop ? 'md:hidden' : ''
        }
          ${isContactActive && 'text-black'}
        transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform
        ${isMenuOpen ? 'z-40' : 'z-30'}`}
      >
        <div className="flex flex-col justify-end md:justify-center">
          <div className="space-y-6">
            <Link
              href="/#about"
              className={`block w-full text-left ${isActive('about')}`}
            >
              About
            </Link>

            <div className="space-y-3">
              {sections.map((section) => (
                <Link
                  key={section.slug}
                  href={`/#${section.slug}`}
                  className={`block w-full text-left ${isActive(section.slug)}`}
                >
                  {section.title}
                </Link>
              ))}
            </div>

            <Link
              href="/#contact"
              className={`block w-full text-left ${isActive('contact')}`}
            >
              Contact me
            </Link>
          </div>
        </div>
        {children}
      </nav>
    </>
  )
}
