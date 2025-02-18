'use client'

import { useState } from 'react'
import { PortfolioItem } from '@/app/types/portfolio'
import ImageUpload from '@/app/components/ui/ImageUpload'

interface PortfolioFormProps {
  initialData?: Partial<PortfolioItem>
  onSubmit: (data: FormData) => Promise<void>
}

export default function PortfolioForm({
  initialData,
  onSubmit,
}: PortfolioFormProps) {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(initialData?.image || '')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.set('image', imageUrl)
    await onSubmit(formData)

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={initialData?.name}
            required
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-200"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            defaultValue={initialData?.category}
            required
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
          >
            <option value="uiux">UI/UX Design</option>
            <option value="graphic">Graphic Design</option>
            <option value="illustration">Illustration</option>
            <option value="painting">Painting</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-200"
          >
            Year
          </label>
          <input
            type="text"
            id="year"
            name="year"
            defaultValue={initialData?.year}
            required
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">
            Image
          </label>
          {imageUrl ? (
            <div className="mt-2 relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img src={imageUrl} alt="Upload" className="object-cover" />
              <button
                type="button"
                onClick={() => setImageUrl('')}
                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full"
              >
                Change
              </button>
            </div>
          ) : (
            <ImageUpload onUploadComplete={setImageUrl} />
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-200"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            defaultValue={initialData?.description}
            required
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-200"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={6}
            defaultValue={initialData?.content}
            required
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  )
}
