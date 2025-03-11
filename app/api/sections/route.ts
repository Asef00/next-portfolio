import { getSections } from '@/app/lib/sections'
import { Section, NavigationSection } from '@/app/types/section'
import { NextResponse } from 'next/server'

export async function GET() {
  const sections = await getSections()

  // Return only what's needed for navigation
  const navigationSections: NavigationSection[] = sections.map(
    (section: Section) => ({
      title: section.title,
      slug: section.slug,
    })
  )

  return NextResponse.json(navigationSections)
}
