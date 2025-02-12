'use client'

import SectionLayout from '../layouts/SectionLayout'
import SeeMoreLink from '../ui/SeeMoreLink'

export default function Illustrations() {
  const leftContent = (
    <>
      <h2 className="text-section-heading">Illustrations</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
      </p>
      <SeeMoreLink />
    </>
  )

  return <SectionLayout id="illustrations" leftContent={leftContent} />
}
