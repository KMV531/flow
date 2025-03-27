import { getHero } from '@/sanity/helpers'
import HeroImage from '@/sections/HomePage/HeroImage'
import HeroSection from '@/sections/HomePage/HeroSection'

export default async function Home() {
  const hero = await getHero()
  return (
    <div>
      <HeroSection hero={hero} />
      <HeroImage />
    </div>
  )
}
