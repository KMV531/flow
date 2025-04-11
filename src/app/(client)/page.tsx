import { getAbout, getBlogs, getHero, getSolutions } from '@/sanity/helpers'
import AboutSection from '@/sections/HomePage/AboutSection'
import HeroImage from '@/sections/HomePage/HeroImage'
import HeroSection from '@/sections/HomePage/HeroSection'
import SolutionsSection from '@/sections/HomePage/SolutionsSection'
import ResultSection from '../../sections/HomePage/ResultSection'
import TestimonialSection from '@/sections/HomePage/TestimonialSection'
import ExpertSection from '@/sections/HomePage/ExpertSection'
import Newsletter from '@/components/Newsletter'
import BlogSection from '@/sections/HomePage/BlogSection'

export default async function Home() {
  const hero = await getHero()
  const solutions = await getSolutions()
  const aboutUs = await getAbout()
  const blogs = await getBlogs()

  return (
    <div>
      <HeroSection hero={hero} />
      <HeroImage />
      <div className='px-4'>
        <SolutionsSection solutions={solutions} />
      </div>
      <AboutSection aboutUs={aboutUs} />
      <div className='bg-white px-4 pb-1'>
        <ResultSection />
        <TestimonialSection />
      </div>
      <div className='bg-[#012b22]'>
        <ExpertSection />
        <div className='px-5'>
          <Newsletter />
        </div>
        <BlogSection blogs={blogs} />
      </div>
    </div>
  )
}
