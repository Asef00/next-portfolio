'use client'

import { useRef, useEffect } from 'react'
import { useScrollSnap } from 'react-scroll-snap'

interface ScrollSnapProps {
  children: React.ReactNode
  className?: string
}

const ScrollAnimation = ({ children, className = '' }: ScrollSnapProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { snapToElement } = useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 })

  useEffect(() => {
    if (scrollRef.current) {
      snapToElement(scrollRef.current.children[0])
    }
  }, [snapToElement])

  return (
    <div ref={scrollRef} className={`snap-y snap-mandatory overflow-y-scroll h-screen ${className}`}>
      {children}
    </div>
  )
}

export default ScrollAnimation