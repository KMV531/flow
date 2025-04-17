import SectionTitle from '@/components/SectionTitle'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'

const TestimonialSection = () => {
  return (
    <section className='bg-[#012b22] rounded-lg my-36 text-white'>
      <div className='container mx-auto px-5 pb-36'>
        <div className='flex flex-col justify-between gap-y-5'>
          <SectionTitle name='Testimonials' />
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold mb-7'>
            What our customers say
          </h1>
          <div className='flex items-center justify-center'>
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
