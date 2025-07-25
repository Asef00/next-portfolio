'use client'

import Navigation from '@/app/components/Navigation'
import { useRouter } from 'next/navigation'

interface PortfolioLayoutProps {
  title: string
  children: React.ReactNode
}

export default function PortfolioLayout({
  title,
  children,
}: PortfolioLayoutProps) {
  const router = useRouter()

  return (
    <main>
      <Navigation mobileTitle={title}>
        {/* Back Link - now vertically centered */}
        <button
          onClick={() => router.back()}
          className="font-bold hover:text-orange-500 hover:border-orange-500 transition-colors pb-[5px] border-b w-[100px] -ml-6 mt-8 text-right"
        >
          Back
        </button>
      </Navigation>
      <div className="flex pl-mobile-nav-width">
        <div className="container mx-auto py-16 md:py-[93px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Heading Column - now with orange text */}
            <div className="hidden md:block col-span-1">
              <h1 className="text-[42px] sticky top-6 text-orange-500">
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
    </main>
  )
}
