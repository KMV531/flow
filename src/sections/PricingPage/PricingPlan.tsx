import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'

const PricingPlan = () => {
  return (
    <div className='container mx-auto px-5 lg:px-0 py-20'>
      <h1 className='py-20 text-2xl lg:text-[6rem] font-medium'>Pricing</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl'>
        {/* Left Pricing Plan */}
        <div className='flex flex-col space-y-4 border-t-2 border-t-[#BFF265] rounded-xl p-5'>
          <h3 className='py-5'>Basic</h3>
          <div className='flex items-center justify-start space-x-2'>
            <h1 className='text-[4rem] font-medium'>$59</h1>
            <p className='text-lg text-gray-400'>per month</p>
          </div>
          <p className='max-w-2xl'>
            For small households or businesses with moderate energy consumption
          </p>
          <Button className='text-black rounded-xl bg-white hover:bg-[#012b22] hover:text-white ring-2 ring-[#012b22] cursor-pointer'>
            Get Started
          </Button>
          <p>What&apos;s included</p>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>500 kWh of 100% renewable energy</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Access to energy usage dashboard</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Monthly usage reports</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Email support</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Carbon offset certificate</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
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
            Ideal for medium-sized households or eco-conscious small businesses
          </p>
          <Button className='text-white rounded-xl bg-[#012b22] hover:bg-[#BFF265] hover:text-black ring-2 hover:ring-[#BFF265] ring-white cursor-pointer'>
            Get Started
          </Button>
          <p>What&apos;s included</p>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>1,000 kWh of 100% renewable energy</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Priority support</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Energy usage optimization tips</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Real-time usage tracking</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Annual impact report</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
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
            Perfect for high energy users and sustainability-focused businesses
          </p>
          <Button className='text-black rounded-xl bg-white hover:bg-[#012b22] hover:text-white ring-2 ring-[#012b22] cursor-pointer'>
            Get Started
          </Button>
          <p>What&apos;s included</p>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>2,500 kWh of 100% renewable energy</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Dedicated account manager</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Custom energy optimization consultation</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Access to beta features & programs</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Quarterly sustainability report</p>
          </div>
          <div className='flex items-center justify-start space-x-2'>
            <Check size={25} className='rounded-full bg-[#BFF265] text-white' />
            <p>Recognition in our Green Partner Program</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlan
