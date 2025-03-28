import { getHero, getSolutions } from '@/sanity/helpers'
import HeroImage from '@/sections/HomePage/HeroImage'
import HeroSection from '@/sections/HomePage/HeroSection'
import SolutionsSection from '@/sections/HomePage/SolutionsSection'

export default async function Home() {
  const hero = await getHero()
  const solutions = await getSolutions()
  return (
    <div>
      <HeroSection hero={hero} />
      <HeroImage />
      <div className='px-4'>
        <SolutionsSection solutions={solutions} />
      </div>
    </div>
  )
}
