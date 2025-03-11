import ProUpgradeButton from '@/app/components/ui/ProUpgradeButton'
import Link from 'next/link'
export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-white">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 shadow-md">
          <h2 className="text-xl text-white mb-4">Portfolio Items</h2>
          <p className="text-gray-300 mb-4">
            Manage your portfolio projects and case studies.
          </p>
          <Link
            href="/admin/portfolio"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            View Portfolio →
          </Link>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 shadow-md">
          <h2 className="text-xl text-white mb-4">Website Sections</h2>
          <p className="text-gray-300 mb-4">
            Edit the main sections of your website.
          </p>
          <Link
            href="/admin/sections"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Manage Sections →
          </Link>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 py-1">
            PRO
          </div>
          <h2 className="text-xl text-white mb-4">Messages</h2>
          <p className="text-gray-300 mb-4">
            View and respond to contact form submissions.
          </p>
          <span className="text-gray-500 cursor-not-allowed">
            Upgrade to Pro →
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 mt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 className="text-xl text-white mb-2">Upgrade to Pro</h2>
            <p className="text-gray-300">
              Get access to advanced features like Messages, Settings,
              Analytics, and more.
            </p>
          </div>
          <ProUpgradeButton />
        </div>
      </div>
    </div>
  )
}
