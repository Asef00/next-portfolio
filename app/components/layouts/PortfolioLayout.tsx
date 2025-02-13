import Link from 'next/link'

interface PortfolioLayoutProps {
  title: string
  children: React.ReactNode
}

export default function PortfolioLayout({
  title,
  children,
}: PortfolioLayoutProps) {
  return (
    <div className="flex">
      {/* Back Link - now vertically centered */}
      <Link
        href="/"
        className="fixed top-1/2 font-bold hover:text-orange-500 hover:border-orange-500 transition-colors pb-[5px] border-b w-[100px] -ml-6 text-right"
      >
        Back
      </Link>

      <div className="container mx-auto py-[93px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading Column - now with orange text */}
          <div className="md:col-span-1">
            <h1 className="text-portfolio-heading sticky top-6 text-orange-500">
              {title}
            </h1>
          </div>

          {/* Portfolio Items Grid */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
