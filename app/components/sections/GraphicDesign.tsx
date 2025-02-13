'use client'

import SectionLayout from '@/app/components/layouts/SectionLayout'
import SeeMoreLink from '@/app/components/ui/SeeMoreLink'

export default function GraphicDesign() {
  const leftContent = (
    <>
      <h2 className="text-section-heading">Graphic designs</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
      </p>
      <SeeMoreLink />
    </>
  )

  return <SectionLayout id="graphic-design" leftContent={leftContent} />
}
