'use client'

import SectionLayout from '../layouts/SectionLayout'

export default function About() {
  const leftContent = (
    <>
      <p>Your about content goes here...</p>
      {/* Add more content as needed */}
    </>
  )

  const rightContent = (
    <>
      {/* Add your right column content */}
      Right column content...
    </>
  )

  return (
    <SectionLayout
      id="about"
      title="About"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
} 