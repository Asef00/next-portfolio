import Link from 'next/link'
import { getPortfolioItems } from '@/app/lib/portfolio'
import { formatDate } from '@/app/lib/utils'
import DeletePortfolioButton from '@/app/components/ui/DeletePortfolioButton'

export default async function AdminPortfolio() {
  const items = await getPortfolioItems()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-white">Portfolio Items</h2>
        <Link
          href="/admin/portfolio/new"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Item
        </Link>
      </div>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <table className="w-full text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Section</th>
              <th className="px-6 py-3 text-left">Year</th>
              <th className="px-6 py-3 text-left">Created</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-800">
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.section.title}</td>
                <td className="px-6 py-4">{item.year}</td>
                <td className="px-6 py-4">{formatDate(item.createdAt)}</td>
                <td className="px-6 py-4 text-right space-x-4">
                  <Link
                    href={`/admin/portfolio/${item.id}`}
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Edit
                  </Link>
                  <DeletePortfolioButton id={item.id} name={item.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
