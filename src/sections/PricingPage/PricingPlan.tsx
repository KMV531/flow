import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PricingPlan = () => {
  return (
    <div className='container mx-auto px-5 lg:px-0 py-20'>
      <h1 className='py-20 text-[2rem] md:text-[4rem] lg:text-[6rem] font-medium'>
        Pricing
      </h1>
      <div className='flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl'>
          {/* Left Pricing Plan */}
          <div className='flex flex-col space-y-4 border-t-2 border-t-[#BFF265] rounded-xl p-5'>
            <h3 className='py-5'>Basic</h3>
            <div className='flex items-center justify-start space-x-2'>
              <h1 className='text-[4rem] font-medium'>$59</h1>
              <p className='text-lg text-gray-400'>per month</p>
            </div>
            <p className='max-w-2xl'>
              For small households or businesses with moderate energy
              consumption
            </p>
            <Button className='text-black rounded-xl bg-white hover:bg-[#012b22] hover:text-white ring-2 ring-[#012b22] cursor-pointer'>
              Get Started
            </Button>
            <p>What&apos;s included</p>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>500 kWh of 100% renewable energy</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Access to energy usage dashboard</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Monthly usage reports</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Email support</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Carbon offset certificate</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Option to upgrade anytime</p>
            </div>
          </div>

          {/* Middle Pricing Plan */}
          <div className='flex flex-col space-y-4 bg-[#012b22] text-white rounded-xl p-5 relative'>
            <p className='bg-[#BFF265] text-black p-2 rounded-t-xl absolute text-center left-0 right-0 top-0 mb-5'>
              Recommended
            </p>
            <h3 className='py-5'>Pro</h3>
            <div className='flex items-center justify-start space-x-2'>
              <h1 className='text-[4rem] font-medium'>$100</h1>
              <p className='text-lg text-gray-400'>per month</p>
            </div>
            <p className='max-w-2xl'>
              Ideal for medium-sized households or eco-conscious small
              businesses
            </p>
            <Button className='text-white rounded-xl bg-[#012b22] hover:bg-[#BFF265] hover:text-black ring-2 hover:ring-[#BFF265] ring-white cursor-pointer'>
              Get Started
            </Button>
            <p>What&apos;s included</p>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>1,000 kWh of 100% renewable energy</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Priority support</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Energy usage optimization tips</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Real-time usage tracking</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Annual impact report</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Tree planting for every 6 months of subscription</p>
            </div>
          </div>

          {/* Right Pricing Plan */}
          <div className='flex flex-col space-y-4 border-t-2 border-t-[#BFF265] rounded-xl p-5'>
            <h3 className='py-5'>Vip</h3>
            <div className='flex items-center justify-start space-x-2'>
              <h1 className='text-[4rem] font-medium'>$299</h1>
              <p className='text-lg text-gray-400'>per month</p>
            </div>
            <p className='max-w-2xl'>
              Perfect for high energy users and sustainability-focused
              businesses
            </p>
            <Button className='text-black rounded-xl bg-white hover:bg-[#012b22] hover:text-white ring-2 ring-[#012b22] cursor-pointer'>
              Get Started
            </Button>
            <p>What&apos;s included</p>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>2,500 kWh of 100% renewable energy</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Dedicated account manager</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Custom energy optimization consultation</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Access to beta features & programs</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Quarterly sustainability report</p>
            </div>
            <div className='flex items-center justify-start space-x-2'>
              <Check
                size={25}
                className='rounded-full bg-[#BFF265] text-white'
              />
              <p>Recognition in our Green Partner Program</p>
            </div>
          </div>
        </div>

        <section className='bg-[#BEF264] rounded-xl mt-14 mb-28'>
          <div className='container mx-auto flex flex-col md:flex-row md:justify-between items-center p-10 gap-y-3'>
            <div className='flex flex-col space-y-2'>
              <h1 className='text-xl font-semibold'>
                Not sure which plan to choose ?
              </h1>
              <p>
                For assistance, please visit our Contact Us page or call our
                customer support hotline at 123456789. Our dedicated team is
                ready to help you on your journey to a greener, more sustainable
                future.
              </p>
            </div>
            <div className='flex flex-col md:flex-row gap-y-3 items-center justify-end md:gap-x-4 w-full'>
              <Link
                href={'/contact-us'}
                className='flex justify-center text-black bg-white p-2 rounded-full w-full md:w-auto px-5 cursor-pointer hover:bg-[#012b22] hover:text-white'
              >
                Book a free consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PricingPlan
