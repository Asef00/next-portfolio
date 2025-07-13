import Image from 'next/image'
import SectionLayout from '../layouts/SectionLayout'
import SocialLink from '../ui/SocialLink'
import SectionTitle from '@/app/components/sections/SectionTitle'

export default function Contact() {
  const rootContent = (
    <Image
      src="/contact.jpg"
      alt="contact art"
      width={627}
      height={293}
      className="absolute top-0 left-mobile-nav-width md:left-[308px]"
      priority
    />
  )

  const leftContent = (
    <>
      <SectionTitle
        title={
          <div className="flex items-center gap-8 text-black mb-6 md:mb-2.5">
            Contact
            <span className="w-[180px] h-0.5 bg-black inline-block" />
            me
          </div>
        }
      />
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </>
  )

  const rightContent = (
    <>
      <div className="flex flex-col gap-4 md:border-l border-black md:pl-[38px] md:ml-[120px]">
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
        <div className="flex gap-3 mt-4 md:mt-6">
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
    </>
  )

  return (
    <SectionLayout
      id="contact"
      leftContent={leftContent}
      rightContent={rightContent}
      rootContent={rootContent}
      className="text-black bg-white relative"
      reversOnMobile={false}
    />
  )
}
