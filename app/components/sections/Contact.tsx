import Image from 'next/image'
import SectionLayout from '../layouts/SectionLayout'
import SocialLink from '../ui/SocialLink'

export default function Contact() {
  const leftContent = (
    <>
      <Image
        src="/contact.jpg"
        alt="contact art"
        width={627}
        height={293}
        className="absolute top-0"
        priority
      />
      <h2 className="text-section-heading text-black flex items-center gap-8">
        Contact
        <span className="w-[180px] h-0.5 bg-black inline-block" />
        me
      </h2>
      <p className="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </>
  )

  const rightContent = (
    <>
      <div className="flex flex-col gap-4 border-l border-black pl-[38px] ml-[120px]">
        {/* email */}
        <div>
          <h3 className="font-medium">Email</h3>
          <a
            href="mailto:reza.hmoqadam@gmail.com"
            className="hover:text-orange-500 transition-colors"
            aria-label="Email me at reza.hmoqadam@gmail.com"
          >
            Reza.hmoqadam@gmail.com
          </a>
        </div>
        {/* phone number */}
        <div>
          <h3 className="font-medium">Phone</h3>
          <a
            href="tel:+989365227382"
            className="hover:text-orange-500 transition-colors"
            aria-label="Call me at +98 936 5227382"
          >
            +98 936 5227382
          </a>
        </div>
        {/* social */}
        <div>
          <h3 className="font-medium mb-2">Social</h3>
          <div className="flex gap-3">
            <SocialLink
              href="https://www.instagram.com/bohemianent?igsh=MXR0NjVxbHRjaGFuNg%3D%3D&utm_source=qr"
              iconName="insta"
              label="Visit my GitHub profile"
            />
            <SocialLink
              href="https://www.linkedin.com/in/reza-hashemimoghadam/"
              iconName="linkedin"
              label="Visit my LinkedIn profile"
            />
            <SocialLink
              href="https://www.behance.net/rezamoqadam"
              iconName="be"
              label="Visit my Twitter profile"
            />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <SectionLayout
      id="contact"
      leftContent={leftContent}
      rightContent={rightContent}
      className="text-black bg-white relative"
    />
  )
}
