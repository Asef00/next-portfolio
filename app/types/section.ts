export interface Section {
  id: string
  title: string
  description: string
  image: string | null
  slug: string
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface NavigationSection {
  title: string
  slug: string
}

export interface SectionFormData {
  title: string
  description: string
  image?: string | null
  slug: string
  order: number
}
