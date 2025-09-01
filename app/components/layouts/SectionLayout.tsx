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
    <section
      id={id}
      className={`pl-mobile-nav-width md:pl-desktop-nav-width overflow-hidden ${className}`}
    >
      {rootContent}
      <div className="container ml-auto h-screen flex ">
        <div
          className={`flex section ${
            reversOnMobile ? 'flex-col-reverse' : 'flex-col'
          } md:flex-row md:space-x-12 space-y-8 md:space-y-0 gap-9 md:gap-0`}
        >
          {/* Left Column */}
          {leftContent && (
            <div className="w-full md:w-1/2 flex justify-center flex-col">
              {leftContent}
            </div>
          )}
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
