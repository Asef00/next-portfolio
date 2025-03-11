import ProUpgradeButton from '@/app/components/ui/ProUpgradeButton'

export default function AdminMessages() {
  // Mock data for demonstration
  const messages = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      message: 'I would like to discuss a potential project with you.',
      date: 'June 15, 2023',
      read: true,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      message:
        'Your portfolio is impressive! Are you available for freelance work?',
      date: 'June 20, 2023',
      read: false,
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-white">Messages</h1>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white mb-6">
        <h2 className="text-xl font-bold mb-2">Upgrade to Pro</h2>
        <p className="mb-4">
          The Messages feature is available exclusively to Pro users. Upgrade
          now to access all contact form submissions and manage client
          communications.
        </p>
        <ProUpgradeButton />
      </div>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-lg text-white">Recent Messages</h2>
          <span className="text-sm text-gray-400">Preview Mode</span>
        </div>

        <table className="w-full text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Message</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {messages.map((message) => (
              <tr key={message.id} className="hover:bg-gray-800 opacity-50">
                <td className="px-6 py-4">{message.name}</td>
                <td className="px-6 py-4">{message.email}</td>
                <td className="px-6 py-4 truncate max-w-xs">
                  {message.message}
                </td>
                <td className="px-6 py-4">{message.date}</td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      message.read
                        ? 'bg-green-100 text-green-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {message.read ? 'Read' : 'Unread'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 bg-gray-800 text-center">
          <p className="text-gray-400">
            Upgrade to Pro to view all messages and unlock full functionality
          </p>
        </div>
      </div>
    </div>
  )
}
