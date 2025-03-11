'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageUpload from '@/app/components/ui/ImageUpload'
import RichTextEditor from '@/app/components/ui/RichTextEditor'
import { PortfolioItem } from '@/app/types/portfolio'

interface PortfolioFormProps {
  initialData?: PortfolioItem
  onSubmit: (formData: FormData) => Promise<void>
}

export default function PortfolioForm({
  initialData,
  onSubmit,
}: PortfolioFormProps) {
  const [imageUrl, setImageUrl] = useState(initialData?.image || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.set('image', imageUrl)
    formData.set('content', content)

    try {
      await onSubmit(formData)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
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
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-200"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={initialData?.category}
            required
            className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">
            Image
          </label>
          {imageUrl ? (
            <div className="space-y-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
                <Image
                  src={imageUrl}
                  alt="Portfolio item"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setImageUrl('')}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
                <span className="text-gray-400">|</span>
                <button
                  type="button"
                  onClick={() => setImageUrl('')}
                  className="text-blue-500 text-sm"
                >
                  Change
                </button>
              </div>
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
            Short Description
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
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Content
          </label>
          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Write detailed content here..."
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Portfolio Item'}
        </button>
      </div>
    </form>
  )
}
