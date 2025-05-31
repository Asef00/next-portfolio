import { getSections } from '@/app/lib/sections'
import Navigation from '@/app/components/Navigation'
import SectionComponent from '@/app/components/sections/SectionComponent'
import { Section } from './types/section'
import Hero from '@/app/components/sections/Hero'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default async function Home() {
  const sections = await getSections()

  return (
    <>
      <div className="grid grid-cols-12">
        <Navigation />
        <main className="col-span-10">
          <Hero />
          <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            <About />
            {sections.map((section: Section) => (
              <SectionComponent
                key={section.id}
                title={section.title}
                description={section.description}
                image={section.image || undefined}
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
