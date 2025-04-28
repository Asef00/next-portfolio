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
      <div className="flex h-screen">
        <Navigation />
        <main className="w-full flex-1 md:ml-[280px] snap-y snap-mandatory overflow-y-scroll">
          <div >
            <Hero />
          </div>
          <div>
            <About />
          </div>
          {sections.map((section: Section) => (
            <div key={section.id}>
              <SectionComponent title={section.title} description={section.description} image={section.image || undefined} slug={section.slug} />
            </div>
          ))}
          <div>
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}
