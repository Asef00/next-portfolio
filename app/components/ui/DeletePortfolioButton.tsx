'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface DeletePortfolioButtonProps {
  id: string
  name: string
}

export default function DeletePortfolioButton({
  id,
  name,
}: DeletePortfolioButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    setIsDeleting(true)
    try {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        router.refresh()
      } else {
        console.error('Failed to delete portfolio item')
      }
    } catch (error) {
      console.error('Error deleting portfolio item:', error)
    } finally {
      setIsDeleting(false)
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-red-500 hover:text-red-600 transition-colors"
      >
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full text-start">
            <h3 className="text-xl text-white mb-4">Delete Portfolio Item</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete &quot;{name}&quot;? This action
              cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
