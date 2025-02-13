import Image from 'next/image'
import SectionLayout from '@/app/components/layouts/SectionLayout'

export default function About() {
  const leftContent = (
    <>
      <div className="relative w-full aspect-square">
        <Image
          src="/about.jpg"
          alt="About me"
          fill
          className="object-cover rounded-lg max-w-[518px] mx-auto"
          priority
        />
      </div>
    </>
  )

  const rightContent = (
    <>
      <h1 className="text-section-heading">
        Reza
        <br />
        Moghadam
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <a
        href="/path-to-your-resume.pdf"
        download
        className="inline-block mt-8 text-orange-500 hover:text-orange-600 transition-colors"
      >
        Download my resume →
      </a>
    </>
  )

  return (
    <SectionLayout
      id="about"
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
}
