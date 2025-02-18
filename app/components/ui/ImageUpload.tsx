'use client'

import { UploadButton } from '@uploadthing/react'
import { OurFileRouter } from '@/app/lib/uploadthing'

interface ImageUploadProps {
  onUploadComplete: (url: string) => void
}

export default function ImageUpload({ onUploadComplete }: ImageUploadProps) {
  return (
    <UploadButton<OurFileRouter>
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (res?.[0]) {
          onUploadComplete(res[0].url)
        }
      }}
      onUploadError={(error: Error) => {
        console.error(error)
      }}
    />
  )
}
