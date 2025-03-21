import Image from 'next/image'
import Link from 'next/link'
import PortfolioLayout from '@/app/components/layouts/PortfolioLayout'
import { getPortfolioItems } from '@/app/lib/portfolio'

export default async function Portfolio() {
  const portfolioItems = await getPortfolioItems()

  return (
    <PortfolioLayout title="UI/UX Design">
      {portfolioItems.map((item) => (
        <Link
          key={item.id}
          href={`/portfolio/${item.slug}`}
          className="group flex flex-col space-y-4"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-800">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-medium group-hover:text-orange-500 transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-gray-400">{item.year}</p>
        </Link>
      ))}
    </PortfolioLayout>
  )
}
