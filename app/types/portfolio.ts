export interface PortfolioItem {
  id: string
  name: string
  slug: string
  year: string
  image: string
  description: string
  content: string
  category: string
  createdAt: Date
  updatedAt: Date
}

export interface PortfolioFormData {
  name: string
  slug: string
  year: string
  image: string
  description: string
  content: string
  category: string
}
