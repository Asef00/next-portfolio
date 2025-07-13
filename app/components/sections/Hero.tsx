'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

function setHeroCookie() {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `heroShown=true; expires=${expires}; path=/`
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show hero, then hide after 3s and set cookie
    const timer = setTimeout(() => {
      setIsVisible(false)
      setHeroCookie()
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setHeroCookie()
  }

  return (
    <section
      className={`fixed inset-0 z-50 bg-white text-black transition-transform duration-1000 ease-in-out
        ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="container mx-auto px-6 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Name</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Creative Designer & Developer
            </p>
            <button
              onClick={handleClose}
              className="text-lg hover:text-gray-600 transition-colors"
            >
              Enter Site →
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full aspect-square">
              {/* Replace src with your image */}
              <Image
                src="/your-image.jpg"
                alt="Hero image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
