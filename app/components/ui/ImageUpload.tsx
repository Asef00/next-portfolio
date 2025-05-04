'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageUploadProps {
  onFileSelect?: (file: File | null) => void
  className?: string
}

export default function ImageUpload({ onFileSelect, className = '' }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    
    // Create preview URL
    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile)
      setPreview(previewUrl)
    } else {
      setPreview(null)
    }

    // Call onFileSelect if provided
    onFileSelect?.(selectedFile)
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
        {preview && (
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
            onLoad={() => URL.revokeObjectURL(preview)}
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors">
            Select Image
          </div>
        </label>
      </div>
    </div>
  )
}
