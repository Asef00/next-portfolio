import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient() {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }

  const prisma = new PrismaClient()

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
  }

  return prisma
}

// Create a proxy that only initializes Prisma when accessed
export const db = new Proxy({} as PrismaClient, {
  get(target, prop) {
    const client = getPrismaClient()
    return client[prop as keyof PrismaClient]
  },
})
