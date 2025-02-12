import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import UiUx from "./components/sections/UiUx"
import GraphicDesign from "./components/sections/GraphicDesign"
import Paintings from "./components/sections/Paintings"
import Illustrations from "./components/sections/Illustrations"
import Contact from "./components/sections/Contact"

export default function Home() {
  return (
    <main className="w-full">
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
  );
}
