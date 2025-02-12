'use client'

import SectionLayout from '../layouts/SectionLayout'
import SeeMoreLink from '../ui/SeeMoreLink'

export default function UiUx() {
  const leftContent = (
    <>
      <h1 className="text-section-heading">UI / UX Design</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
      </p>
      <SeeMoreLink href="/" />
    </>
  )

  return (
    <SectionLayout id="uiux" title="UI/UX Design" leftContent={leftContent} />
  )
}
