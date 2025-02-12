'use client'

import SectionLayout from '../layouts/SectionLayout'

export default function Illustrations() {
  const leftContent = (
    <>
      <p>Your illustrations descriptions here...</p>
      {/* Add more content as needed */}
    </>
  )

  const rightContent = (
    <>
      {/* Add your illustrations gallery/images */}
      Illustrations content...
    </>
  )

  return (
    <SectionLayout
      id="illustrations"
      title="Illustrations"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
} 