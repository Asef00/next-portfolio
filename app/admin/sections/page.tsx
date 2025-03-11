import Link from 'next/link'
import { getSections } from '@/app/lib/sections'
import DeleteSectionButton from '@/app/components/ui/DeleteSectionButton'

export default async function AdminSections() {
  const sections = await getSections()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-white">Sections</h2>
        <Link
          href="/admin/sections/new"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Section
        </Link>
      </div>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <table className="w-full text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left">Order</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {sections.map((section) => (
              <tr key={section.id} className="hover:bg-gray-800">
                <td className="px-6 py-4">{section.order}</td>
                <td className="px-6 py-4">{section.title}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/admin/sections/${section.id}`}
                    className="text-orange-500 hover:text-orange-600 transition-colors mr-4"
                  >
                    Edit
                  </Link>
                  <DeleteSectionButton id={section.id} title={section.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
