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
    <div className="min-h-screen bg-black text-white p-6">
      {/* Back Link - now vertically centered */}
      <div className="h-16 flex items-center">
        <Link
          href="/"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors"
        >
          ← Back
        </Link>
      </div>

      <div className="container mx-auto">
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
