'use client'

import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const testimonials = [
  {
    testimony:
      'FLOW transformed my energy use. Efficient, green tech, outstanding service!',
    profile: '/7100a99bac80c1a4d2b9697b84cd3a636349b5da-800x800.jpg',
    name: 'Jenny Wilson',
    profession: 'Solar Energy Service',
  },
  {
    testimony:
      'FLOW transformed my energy use. Efficient, green tech, outstanding service!',
    profile: '/711835e76796382411062147d6b2b3ade92b3ec9-960x958.jpg',
    name: 'John Doe',
    profession: 'Software Engineer',
  },
  {
    testimony:
      'FLOW transformed my energy use. Efficient, green tech, outstanding service!',
    profile: '/7100a99bac80c1a4d2b9697b84cd3a636349b5da-800x800.jpg',
    name: 'Jeff Peterson',
    profession: 'Graphic Designer',
  },
  {
    testimony:
      'FLOW transformed my energy use. Efficient, green tech, outstanding service!',
    profile: '/711835e76796382411062147d6b2b3ade92b3ec9-960x958(1).jpg',
    name: 'Jenny Haliday',
    profession: 'Marketing Assistant',
  },
  {
    testimony:
      'FLOW transformed my energy use. Efficient, green tech, outstanding service!',
    profile: '/7100a99bac80c1a4d2b9697b84cd3a636349b5da-800x800.jpg',
    name: 'Jane Doe',
    profession: 'Accountant',
  },
]

export function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )
  return (
    <Carousel
      className='w-full max-w-5xl'
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: 'start',
      }}
    >
      <CarouselContent className='-ml-1'>
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.name}
            className='pl-1 md:basis-1/2 lg:basis-1/3'
          >
            <div className='p-1'>
              <Card className='bg-[#BFF265]'>
                <CardContent className='flex flex-col aspect-square items-start justify-between p-6'>
                  <p className='text-sm'>&quot;{testimonial.testimony}&quot;</p>
                  <div className='flex items-start justify-start gap-x-5'>
                    <Image
                      src={testimonial.profile}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className='object-cover rounded-full'
                    />
                    <div className='flex flex-col gap-y-1'>
                      <h1 className='font-semibold'>{testimonial.name}</h1>
                      <p className='text-sm'>{testimonial.profession}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
