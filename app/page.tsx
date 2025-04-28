import { getSections } from '@/app/lib/sections'
import Navigation from '@/app/components/Navigation'
import SectionComponent from '@/app/components/sections/SectionComponent'
import Contact from '@/app/components/sections/Contact'
import { Section } from './types/section'
import About from './components/sections/About'
import Hero from '@/app/components/sections/Hero'

export default async function Home() {
  const sections = await getSections()

  return (
    <>
      <div className="flex h-screen">
        <Navigation />
        <main className="w-full flex-1 md:ml-[280px] snap-y snap-mandatory overflow-y-scroll">
          <Hero/>
          <div className="snap-start min-h-screen">
            <About />
          </div>
          {sections.map((section: Section) => (
            <div key={section.id} className="snap-start min-h-screen">
              <SectionComponent title={section.title} description={section.description} image={section.image || undefined} slug={section.slug} />
            </div>
          ))}
             <div className="snap-start min-h-screen">
            <Contact />
          </div>

        </main>
      </div>
    </>
  )
}
