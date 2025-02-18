import { createRouteHandler } from 'uploadthing/next'
import { uploadRouter } from '@/app/lib/uploadthing'

export const { GET, POST } = createRouteHandler({
  router: uploadRouter,
})
