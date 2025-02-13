import Image from 'next/image'
import PortfolioLayout from '@/app/components/layouts/PortfolioLayout'

// You can replace this with your actual portfolio data
const portfolioItems = [
  {
    id: 1,
    name: 'Project One',
    year: '2024',
    image: '/portfolio/work1.jpg',
  },
  {
    id: 2,
    name: 'Project Two',
    year: '2023',
    image: '/portfolio/work2.jpg',
  },
  {
    id: 3,
    name: 'Project Three',
    year: '2023',
    image: '/portfolio/work3.jpg',
  },
  {
    id: 4,
    name: 'Project Four',
    year: '2022',
    image: '/portfolio/work4.jpg',
  },
]

export default function Portfolio() {
  return (
    <PortfolioLayout title="UI/UX Design">
      {portfolioItems.map((item) => (
        <div key={item.id} className="flex flex-col space-y-4">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-800">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-medium">{item.name}</h3>
          <p className="text-sm text-gray-400">{item.year}</p>
        </div>
      ))}
    </PortfolioLayout>
  )
}
