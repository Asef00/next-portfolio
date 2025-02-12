'use client'

interface SectionLayoutProps {
  id: string;
  title: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export default function SectionLayout({ id, title, leftContent, rightContent }: SectionLayoutProps) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-8">{title}</h2>
            <div className="space-y-4">
              {leftContent}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <div className="h-full">
              {rightContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 