'use client'

import AnimatedSection from './AnimatedSection'

interface SectionLayoutProps {
  id: string
  leftContent: React.ReactNode
  rightContent?: React.ReactNode
  rootContent?: React.ReactNode
  className?: string
  reversOnMobile?: boolean
}

export default function SectionLayout({
  id,
  leftContent,
  rightContent,
  rootContent,
  className = '',
  reversOnMobile = true,
}: SectionLayoutProps) {
  return (
    <div
      className={`h-screen pl-mobile-nav-width md:pl-desktop-nav-width snap-start flex items-center justify-center overflow-hidden ${className}`}
    >
      {rootContent}
      <AnimatedSection id={id}>
        <div className="container mx-auto md:px-6">
          <div
            className={`flex ${
              reversOnMobile ? 'flex-col-reverse' : 'flex-col'
            } md:flex-row md:space-x-12 space-y-8 md:space-y-0 gap-9 md:gap-0`}
          >
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
