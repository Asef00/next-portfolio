import { PortfolioItem } from '@/app/types/portfolio'
import { db } from '@/app/lib/db' // You'll need to set up your database connection

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // Replace this with your actual database query
  const items = await db.portfolioItem.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return items
}

export async function getPortfolioItem(
  slug: string
): Promise<PortfolioItem | null> {
  // Replace this with your actual database query
  const item = await db.portfolioItem.findUnique({
    where: {
      slug,
    },
  })

  return item
}

export async function createPortfolioItem(
  data: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt'>
) {
  return await db.portfolioItem.create({
    data,
  })
}

export async function updatePortfolioItem(
  id: string,
  data: Partial<PortfolioItem>
) {
  return await db.portfolioItem.update({
    where: { id },
    data,
  })
}

export async function deletePortfolioItem(id: string) {
  return await db.portfolioItem.delete({
    where: { id },
  })
}
