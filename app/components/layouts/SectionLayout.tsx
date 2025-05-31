'use client'

import AnimatedSection from './AnimatedSection'

interface SectionLayoutProps {
  id: string
  leftContent: React.ReactNode
  rightContent?: React.ReactNode
  rootContent?: React.ReactNode
  className?: string
}

export default function SectionLayout({
  id,
  leftContent,
  rightContent,
  rootContent,
  className = '',
}: SectionLayoutProps) {
  return (
    <div
      className={`h-screen snap-start flex items-center justify-center overflow-hidden ${className}`}
    >
      {rootContent}
      <AnimatedSection id={id}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex justify-center flex-col">
              {leftContent}
            </div>
            {/* Right Column */}
            {rightContent && (
              <div className="w-full md:w-1/2 flex justify-center flex-col">
                {rightContent}
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
