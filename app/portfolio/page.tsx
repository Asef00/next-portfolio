import Image from 'next/image'
import Link from 'next/link'
import PortfolioLayout from '@/app/components/layouts/PortfolioLayout'
import { getPortfolioItems } from '@/app/lib/portfolio'

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic'

type SearchParams = Promise<{ category: string }>
export default async function Portfolio(props: { searchParams: SearchParams }) {
  const items = await getPortfolioItems()
  const { category } = await props.searchParams
  const filteredItems = category
    ? items.filter((item) => item.section.slug === category)
    : items

  return (
    <PortfolioLayout title={filteredItems[0].section.title}>
      {filteredItems.map((item) => (
        <Link
          key={item.id}
          href={`/portfolio/${item.slug}`}
          className="group flex flex-col"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-800">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-medium group-hover:text-orange-500 transition-colors mt-6">
            {item.name}
          </h3>
          <p className="text-sm text-gray-400">{item.year}</p>
        </Link>
      ))}
    </PortfolioLayout>
  )
}
