'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageUpload from '@/app/components/ui/ImageUpload'

interface SectionFormProps {
  initialData?: {
    id?: string
    title?: string
    description?: string
    image?: string
    order?: number
  }
  onSubmit: (formData: FormData) => Promise<void>
}

export default function SectionForm({
  initialData,
  onSubmit,
}: SectionFormProps) {
  const [imageUrl, setImageUrl] = useState(initialData?.image || '')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    // Always include the image field, even if empty
    formData.set('image', imageUrl)

    await onSubmit(formData)
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-200"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={initialData?.title}
            required
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="order"
            className="block text-sm font-medium text-gray-200"
          >
            Order
          </label>
          <input
            type="number"
            id="order"
            name="order"
            defaultValue={initialData?.order || 0}
            required
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">
            Image (Optional)
          </label>
          {imageUrl ? (
            <div className="mt-2 relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt="Upload"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setImageUrl('')}
                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full"
              >
                Remove
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
            rows={5}
            defaultValue={initialData?.description}
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
          {loading ? 'Saving...' : 'Save Section'}
        </button>
      </div>
    </form>
  )
}
