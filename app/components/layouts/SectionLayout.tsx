'use client'

interface SectionLayoutProps {
  id: string
  leftContent: React.ReactNode
  rightContent?: React.ReactNode
}

export default function SectionLayout({
  id,
  leftContent,
  rightContent,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center py-20"
    >
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
    </section>
  )
}
