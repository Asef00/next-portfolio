import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

export const uploadRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .middleware(async () => {
      return { userId: 'admin' }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { url: file.url }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof uploadRouter
