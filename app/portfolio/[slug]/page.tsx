import { getPortfolioItemBySlug } from '@/app/lib/portfolio'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PortfolioLayout from '@/app/components/layouts/PortfolioLayout'

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic'

type Params = Promise<{ slug: string }>

export default async function PortfolioItemPage(props: { params: Params }) {
  const { slug } = await props.params
  const item = await getPortfolioItemBySlug(slug)

  if (!item) {
    notFound()
  }

  return (
    <PortfolioLayout title={item.name}>
      <div className="col-span-2">
        <div className="relative aspect-video w-full overflow-hidden bg-gray-800">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-400">{item.year}</p>
          <p className="text-lg">{item.description}</p>
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      </div>
    </PortfolioLayout>
  )
}
