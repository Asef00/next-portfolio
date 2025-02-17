export interface PortfolioItem {
  id: string
  name: string
  year: string
  image: string
  slug: string
  description: string
  content: string // Rich text content
  category: 'uiux' | 'graphic' | 'illustration' | 'painting'
  createdAt: Date
  updatedAt: Date
}
