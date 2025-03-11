import SectionForm from '@/app/components/forms/SectionForm'
import { createSection } from '@/app/lib/sections'
import { generateSlug } from '@/app/lib/utils'
import { SectionFormData } from '@/app/types/section'
import { redirect } from 'next/navigation'

export default function NewSection() {
  async function handleSubmit(formData: FormData) {
    'use server'

    const title = formData.get('title') as string
    const slug = generateSlug(title)

    const data: SectionFormData = {
      title,
      slug,
      description: formData.get('description') as string,
      image: formData.has('image') ? (formData.get('image') as string) : null,
      order: parseInt(formData.get('order') as string, 10),
    }

    await createSection(data)
    redirect('/admin/sections')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl text-white mb-6">Add New Section</h2>
      <SectionForm onSubmit={handleSubmit} />
    </div>
  )
}
