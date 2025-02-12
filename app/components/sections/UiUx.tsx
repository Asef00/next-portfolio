'use client'

import SectionLayout from '../layouts/SectionLayout'

export default function UiUx() {
  const leftContent = (
    <>
      <p>Project descriptions, text content...</p>
      {/* Add more content as needed */}
    </>
  )

  const rightContent = (
    <>
      {/* Add your right column content */}
      Images, galleries, or other visual content...
    </>
  )

  return (
    <SectionLayout
      id="uiux"
      title="UI/UX Design"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
} 