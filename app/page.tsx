import { getSections } from '@/app/lib/sections'
import Navigation from '@/app/components/Navigation'
import SectionComponent from '@/app/components/sections/SectionComponent'
import Hero from '@/app/components/sections/Hero'
import Contact from '@/app/components/sections/Contact'
import { Section } from './types/section'
import About from './components/sections/About'
import ScrollAnimation from './components/ScrollAnimation'

export default async function Home() {
  const sections = await getSections()

  return (
    <>
      <div className="flex">
        <Navigation />
        <main className="w-full flex-1 md:ml-[280px]">
          <ScrollAnimation className="min-h-screen">
            <Hero />
          </ScrollAnimation>
          <ScrollAnimation className="min-h-screen">
            <About />
          </ScrollAnimation>
          {sections.map((section: Section) => (
            <ScrollAnimation key={section.id} className="min-h-screen">
              <SectionComponent
                title={section.title}
                description={section.description}
                image={section.image || undefined}
                slug={section.slug}
              />
            </ScrollAnimation>
          ))}
          <ScrollAnimation className="min-h-screen">
            <Contact />
          </ScrollAnimation>
        </main>
      </div>
    </>
  )
}
