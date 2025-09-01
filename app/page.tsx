import { getSections } from '@/app/lib/sections'
import Navigation from '@/app/components/Navigation'
import Hero from '@/app/components/sections/Hero'
import { cookies } from 'next/headers'
import Sections from './components/sections/Sections'

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic'

export default async function Home() {
  const cookieStore = await cookies()
  const heroShown = cookieStore.get('heroShown')

  const sections = await getSections()

  return (
    <>
      <Navigation />
      <main>
        {!heroShown && <Hero />}
        <Sections sections={sections} />
      </main>
    </>
  )
}
