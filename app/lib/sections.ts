import { db } from '@/app/lib/db'
import { Section, SectionFormData } from '@/app/types/section'

const UNCATEGORIZED_SECTION = {
  title: 'Uncategorized',
  slug: 'uncategorized',
  description: 'Default section for items without a specific category',
  order: 0,
}

async function ensureUncategorizedSection() {
  const existing = await db.section.findUnique({
    where: { slug: UNCATEGORIZED_SECTION.slug },
  })

  if (!existing) {
    await db.section.create({
      data: UNCATEGORIZED_SECTION,
    })
  }
}

export async function getSections(): Promise<Section[]> {
  return await db.section.findMany({
    orderBy: {
      order: 'asc',
    },
  })
}

export async function getAllSections(): Promise<Section[]> {
  return await getSections()
}

export async function getSection(id: string): Promise<Section | null> {
  return await db.section.findUnique({
    where: { id },
  })
}

export async function createSection(data: SectionFormData) {
  return await db.section.create({
    data,
  })
}

export async function updateSection(
  id: string,
  data: Partial<SectionFormData>
) {
  return await db.section.update({
    where: { id },
    data,
  })
}

export async function deleteSection(id: string) {
  const section = await db.section.findUnique({
    where: { id },
    select: { slug: true },
  })

  if (!section) {
    throw new Error('Section not found')
  }

  // Ensure uncategorized section exists
  await ensureUncategorizedSection()

  // Move all portfolio items to uncategorized section
  await db.portfolioItem.updateMany({
    where: { category: section.slug },
    data: { category: UNCATEGORIZED_SECTION.slug },
  })

  // Then delete the section
  return await db.section.delete({
    where: { id },
  })
}
