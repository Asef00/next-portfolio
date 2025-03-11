'use client'

import { useCallback, useState } from 'react'
import { UploadButton } from '@uploadthing/react'
import { OurFileRouter } from '@/app/api/uploadthing/core'
import Image from 'next/image'

interface ImageUploadProps {
  onUploadComplete: (url: string) => void
  className?: string
}

export default function ImageUpload({
  onUploadComplete,
  className = '',
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleClientUploadComplete = useCallback(
    (res: { url: string }[]) => {
      setIsUploading(false)
      const url = res[0]?.url
      if (url) {
        setPreview(url)
        onUploadComplete(url)
      }
    },
    [onUploadComplete]
  )

  const handleUploadError = useCallback((error: Error) => {
    setIsUploading(false)
    setError(error.message || 'Upload failed')
    console.error('Upload error:', error)
  }, [])

  return (
    <div className={`space-y-4 ${className}`}>
      {preview ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
          <Image
            src={preview}
            alt="Uploaded image"
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-col items-center justify-center">
        <UploadButton<OurFileRouter, 'imageUploader'>
          endpoint="imageUploader"
          onClientUploadComplete={handleClientUploadComplete}
          onUploadError={handleUploadError}
          onUploadBegin={() => {
            setIsUploading(true)
            setError(null)
          }}
          appearance={{
            button: {
              background: isUploading ? '#4B5563' : '#F97316',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '0.375rem',
            },
            container: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            },
          }}
          content={{
            button: isUploading ? 'Uploading...' : 'Upload Image',
          }}
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  )
}
