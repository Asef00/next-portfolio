import PortfolioForm from '@/app/components/forms/PortfolioForm'
import { createPortfolioItem } from '@/app/lib/portfolio'
import { generateSlug } from '@/app/lib/utils'
import { redirect } from 'next/navigation'

export default function NewPortfolioItem() {
  async function handleSubmit(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const slug = generateSlug(name)
    const image = formData.get('image') as string

    const data = {
      name,
      slug,
      year: formData.get('year') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
      content: formData.get('content') as string,
      image: image || '', // Ensure we have a string value for image
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
