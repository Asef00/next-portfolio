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
          <a
            href="/admin/portfolio"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            View Portfolio →
          </a>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 shadow-md">
          <h2 className="text-xl text-white mb-4">Website Sections</h2>
          <p className="text-gray-300 mb-4">
            Edit the main sections of your website.
          </p>
          <a
            href="/admin/sections"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Manage Sections →
          </a>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 shadow-md">
          <h2 className="text-xl text-white mb-4">Messages</h2>
          <p className="text-gray-300 mb-4">
            View and respond to contact form submissions.
          </p>
          <a
            href="/admin/messages"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Check Messages →
          </a>
        </div>
      </div>
    </div>
  )
}
