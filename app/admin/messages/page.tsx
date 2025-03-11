import { formatDate } from '@/app/lib/utils'

// This would normally come from your database
const mockMessages = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    message: 'I would like to discuss a potential project with you.',
    createdAt: new Date('2023-06-15'),
    read: true,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    message:
      'Your portfolio is impressive! Are you available for freelance work?',
    createdAt: new Date('2023-06-20'),
    read: false,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    message: 'I have a question about your design process.',
    createdAt: new Date('2023-06-25'),
    read: false,
  },
]

export default function AdminMessages() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-white">Messages</h1>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
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
            {mockMessages.map((message) => (
              <tr key={message.id} className="hover:bg-gray-800">
                <td className="px-6 py-4">{message.name}</td>
                <td className="px-6 py-4">{message.email}</td>
                <td className="px-6 py-4 truncate max-w-xs">
                  {message.message}
                </td>
                <td className="px-6 py-4">{formatDate(message.createdAt)}</td>
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
      </div>
    </div>
  )
}
