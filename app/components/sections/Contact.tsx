'use client'

import SectionLayout from '../layouts/SectionLayout'

export default function Contact() {
  const leftContent = (
    <>
      <p>Contact information and details...</p>
      {/* Add contact information or form */}
    </>
  )

  const rightContent = (
    <>
      {/* Add complementary content, social links, or a contact form */}
      Contact form or additional information...
    </>
  )

  return (
    <SectionLayout
      id="contact"
      title="Contact me"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
} 