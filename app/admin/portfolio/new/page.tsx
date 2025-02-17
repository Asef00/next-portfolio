import PortfolioForm from '@/app/components/forms/PortfolioForm'
import { createPortfolioItem } from '@/app/lib/portfolio'
import { redirect } from 'next/navigation'

export default function NewPortfolioItem() {
  async function handleSubmit(formData: FormData) {
    'use server'

    // TODO: Handle image upload
    const data = {
      name: formData.get('name') as string,
      slug: formData.get('name') as string, // TODO: Generate proper slug
      year: formData.get('year') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
      content: formData.get('content') as string,
      image: '/placeholder.jpg', // TODO: Replace with uploaded image URL
    }

    await createPortfolioItem(data)
    redirect('/admin/portfolio')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl text-white mb-6">Add New Portfolio Item</h2>
      <PortfolioForm onSubmit={handleSubmit} />
    </div>
  )
}
