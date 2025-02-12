'use client'

import SectionLayout from '../layouts/SectionLayout'

export default function GraphicDesign() {
  const leftContent = (
    <>
      <p>Your graphic design descriptions here...</p>
      {/* Add more content as needed */}
    </>
  )

  const rightContent = (
    <>
      {/* Add your graphic design portfolio/images */}
      Portfolio content...
    </>
  )

  return (
    <SectionLayout
      id="graphic-design"
      title="Graphic Designs"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
} 