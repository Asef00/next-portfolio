import SectionForm from '@/app/components/forms/SectionForm'
import { getSection, updateSection } from '@/app/lib/sections'
import { generateSlug } from '@/app/lib/utils'
import { SectionFormData } from '@/app/types/section'
import { redirect } from 'next/navigation'

export default async function EditSection({
  params,
}: {
  params: { id: string }
}) {
  const section = await getSection(params.id)

  if (!section) {
    redirect('/admin/sections')
  }

  async function handleSubmit(formData: FormData) {
    'use server'

    const title = formData.get('title') as string
    const slug = generateSlug(title)

    // Create the base data object without the image
    const data: Partial<SectionFormData> = {
      title,
      slug,
      description: formData.get('description') as string,
      order: parseInt(formData.get('order') as string, 10),
    }

    // Only add image property if it exists in the form data
    const imageValue = formData.get('image') as string | null
    if (imageValue) {
      data.image = imageValue
    } else if (formData.has('image')) {
      // If image field exists but is empty, set to empty string instead of null
      data.image = ''
    }
    // If image field doesn't exist at all, don't include it in the update

    await updateSection(params.id, data)
    redirect('/admin/sections')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl text-white mb-6">Edit Section</h2>
      <SectionForm
        initialData={{
          id: section.id,
          title: section.title,
          description: section.description,
          image: section.image || '',
          order: section.order,
        }}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
