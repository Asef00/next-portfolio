import ProUpgradeButton from '@/app/components/ui/ProUpgradeButton'

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-white">Settings</h1>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white mb-6">
        <h2 className="text-xl font-bold mb-2">Upgrade to Pro</h2>
        <p className="mb-4">
          Advanced settings and customization options are available exclusively
          to Pro users. Upgrade now to personalize your portfolio and access
          additional features.
        </p>
        <ProUpgradeButton />
      </div>

      <div className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-xl text-white mb-6 flex items-center">
          General Settings
          <span className="ml-2 bg-orange-500 text-xs px-1.5 py-0.5 rounded-full text-white">
            PRO
          </span>
        </h2>

        <form className="space-y-6 opacity-50 pointer-events-none">
          <div>
            <label
              htmlFor="site-title"
              className="block text-sm font-medium text-gray-200"
            >
              Site Title
            </label>
            <input
              type="text"
              id="site-title"
              name="site-title"
              defaultValue="My Portfolio"
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="site-description"
              className="block text-sm font-medium text-gray-200"
            >
              Site Description
            </label>
            <textarea
              id="site-description"
              name="site-description"
              rows={3}
              defaultValue="Professional portfolio showcasing my work and skills."
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-gray-200"
            >
              Contact Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="contact-email"
              defaultValue="contact@example.com"
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Social Media Links
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="LinkedIn"
                  defaultValue="https://linkedin.com/in/username"
                  className="flex-1 rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="GitHub"
                  defaultValue="https://github.com/username"
                  className="flex-1 rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Twitter"
                  defaultValue="https://twitter.com/username"
                  className="flex-1 rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-xl text-white mb-6 flex items-center">
          Account Settings
          <span className="ml-2 bg-orange-500 text-xs px-1.5 py-0.5 rounded-full text-white">
            PRO
          </span>
        </h2>

        <form className="space-y-6 opacity-50 pointer-events-none">
          <div>
            <label
              htmlFor="current-password"
              className="block text-sm font-medium text-gray-200"
            >
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              name="current-password"
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-200"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-200"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <p className="text-gray-400">
          Upgrade to Pro to access all settings and customization options
        </p>
      </div>
    </div>
  )
}
