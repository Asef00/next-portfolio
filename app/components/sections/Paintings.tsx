'use client'

import SectionLayout from '../layouts/SectionLayout'

export default function Paintings() {
  const leftContent = (
    <>
      <p>Your paintings and printmaking descriptions here...</p>
      {/* Add more content as needed */}
    </>
  )

  const rightContent = (
    <>
      {/* Add your paintings gallery/images */}
      Gallery content...
    </>
  )

  return (
    <SectionLayout
      id="paintings"
      title="Paintings and Printmaking"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
} 