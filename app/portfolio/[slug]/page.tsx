import { getPortfolioItemBySlug } from '@/app/lib/portfolio'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PortfolioLayout from '@/app/components/layouts/PortfolioLayout'

export default async function PortfolioItemPage({
  params,
}: {
  params: { slug: string }
}) {
  const item = await getPortfolioItemBySlug(params.slug)

  if (!item) {
    notFound()
  }

  return (
    <PortfolioLayout title={item.name}>
      <div className="col-span-2">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-800">
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
