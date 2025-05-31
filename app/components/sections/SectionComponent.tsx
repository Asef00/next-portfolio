import Image from 'next/image'
import SectionLayout from '@/app/components/layouts/SectionLayout'
import SeeMoreLink from '@/app/components/ui/SeeMoreLink'

interface SectionComponentProps {
  title: string
  description: string
  image?: string
  slug: string
}

export default function SectionComponent({
  title,
  description,
  image,
  slug,
}: SectionComponentProps) {
  const leftContent = (
    <>
      <h2 className="text-section-heading">{title}</h2>
      <p className="text-lg mt-6">{description}</p>
      <div className="mt-8">
        <SeeMoreLink
          href={`/portfolio?category=${slug}`}
          text={`View ${title} Projects`}
        />
      </div>
    </>
  )

  const rightContent = image ? (
    <Image
      src={image}
      alt={title}
      width={1000}
      height={1000}
      className="max-w-full max-h-full"
    />
  ) : null

  return (
    <SectionLayout
      id={slug}
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
}
