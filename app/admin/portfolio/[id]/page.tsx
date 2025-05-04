import PortfolioForm from '@/app/components/forms/PortfolioForm'
import { getPortfolioItem, updatePortfolioItem } from '@/app/lib/portfolio'
import { generateSlug } from '@/app/lib/utils'
import { PortfolioFormData } from '@/app/types/portfolio'
import { redirect } from 'next/navigation'

type Params = Promise<{ id: string }>
export default async function EditPortfolio(props: { params: Params }) {
  const { id } = await props.params
  const item = await getPortfolioItem(id)

  if (!item) {
    redirect('/admin/portfolio')
  }

  async function handleSubmit(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const slug = generateSlug(name)
    const image = formData.get('image') as string

    const data: PortfolioFormData = {
      name,
      slug,
      year: formData.get('year') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
      content: formData.get('content') as string,
      image: image || item?.image || '', // Keep existing image if no new one uploaded
    }

    await updatePortfolioItem(id, data)
    redirect('/admin/portfolio')
  }

  // Create a new object with the correct category value
  const formData = {
    ...item,
    category: item.section.slug,
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl text-white mb-6">Edit Portfolio Item</h2>
      <PortfolioForm initialData={formData} onSubmit={handleSubmit} />
    </div>
  )
}
