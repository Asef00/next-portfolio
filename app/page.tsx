import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import UiUx from '@/app/components/sections/UiUx'
import GraphicDesign from '@/app/components/sections/GraphicDesign'
import Paintings from '@/app/components/sections/Paintings'
import Illustrations from '@/app/components/sections/Illustrations'
import Contact from '@/app/components/sections/Contact'
import Navigation from '@/app/components/Navigation'

export default function Home() {
  return (
    <>
      <div className="flex">
        <Navigation />
        <main className="w-full flex-1 md:ml-[280px]">
          <Hero />
          <div className="relative">
            <About />
            <UiUx />
            <GraphicDesign />
            <Paintings />
            <Illustrations />
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}
