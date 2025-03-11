import { getSections } from '@/app/lib/sections'
import Navigation from '@/app/components/Navigation'
import SectionComponent from '@/app/components/sections/SectionComponent'
import Hero from '@/app/components/sections/Hero'
import Contact from '@/app/components/sections/Contact'
import { Section } from './types/section'
import About from './components/sections/About'

export default async function Home() {
  const sections = await getSections()

  return (
    <>
      <div className="flex">
        <Navigation />
        <main className="w-full flex-1 md:ml-[280px]">
          <Hero />
          <div className="relative">
            <About />
            {sections.map((section: Section) => (
              <SectionComponent
                key={section.id}
                title={section.title}
                description={section.description}
                image={section.image}
                slug={section.slug}
              />
            ))}
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}
