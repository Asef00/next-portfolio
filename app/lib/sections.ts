import { db } from '@/app/lib/db'
import { Section, SectionFormData } from '@/app/types/section'

export async function getSections(): Promise<Section[]> {
  return await db.section.findMany({
    orderBy: {
      order: 'asc',
    },
  })
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
  return await db.section.delete({
    where: { id },
  })
}
