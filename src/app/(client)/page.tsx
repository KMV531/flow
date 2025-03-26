import HeroSection from '@/components/HeroSection'
import { getHero } from '@/sanity/helpers'

export default async function Home() {
  const hero = await getHero()
  return (
    <div>
      <HeroSection hero={hero} />
    </div>
  )
}
