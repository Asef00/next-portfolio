import { PortfolioItem, PortfolioFormData } from '@/app/types/portfolio'
import { db } from '@/app/lib/db'

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const items = await db.portfolioItem.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      section: true,
    },
  })
  return items
}

export async function getPortfolioItem(
  id: string
): Promise<PortfolioItem | null> {
  return await db.portfolioItem.findUnique({
    where: { id },
    include: {
      section: true,
    },
  })
}

export async function getPortfolioItemBySlug(
  slug: string
): Promise<PortfolioItem | null> {
  return await db.portfolioItem.findUnique({
    where: { slug },
    include: {
      section: true,
    },
  })
}

export async function createPortfolioItem(data: PortfolioFormData) {
  return await db.portfolioItem.create({
    data,
  })
}

export async function updatePortfolioItem(
  id: string,
  data: Partial<PortfolioFormData>
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
