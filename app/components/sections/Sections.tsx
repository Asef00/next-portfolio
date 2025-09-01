'use client'

import About from '@/app/components/sections/About'
import Contact from '@/app/components/sections/Contact'
import SectionComponent from '@/app/components/sections/SectionComponent'
import { Section } from '@/app/types/section'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionsProps {
  sections: Section[]
}

export default function Sections({ sections }: SectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // target .section inside containerRef only
      gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, x: 300 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0,
            scrollTrigger: {
              id: section.id,
              trigger: section,
              start: 'top center',
              end: 'bottom center',
              //   pin: true,
              //   pinSpacing: false,
              //   snap: 1 / (sections.length + 1), // evenly distributed snap points
              //   scrub: true,
              // markers: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })
      ScrollTrigger.create({
        // animation:
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        snap: {
          snapTo: 1 / (sections.length + 1),
          duration: 0.7,
          //   delay: 0,
          ease: 'power1.inOut',
        }, // snap to each section evenly
        // markers: true,
        // scrub: 1,
        // toggleActions: 'play none none reverse',
      })
    },
    { scope: containerRef } // keeps it scoped + cleaned up automatically
  )

  return (
    <div ref={containerRef}>
      <About />
      {sections.map((section: Section) => (
        <SectionComponent
          key={section.id}
          title={section.title}
          description={section.description}
          image={section.image || undefined}
          slug={section.slug}
        />
      ))}
      <Contact />
    </div>
  )
}
