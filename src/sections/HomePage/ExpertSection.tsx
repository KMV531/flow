import SectionTitle from '@/components/SectionTitle'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ExpertSection = () => {
    return (
        <section className='container mx-auto px-10 mb-32'>
            <div className='flex flex-col justify-between gap-y-5'>
                <SectionTitle name='Our experts' />
                <h1 className='text-4xl text-white font-semibold mb-7'>
                    Meet our experts
                </h1>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <Image src={"/7100a99bac80c1a4d2b9697b84cd3a636349b5da-800x800.jpg"} alt='Jenny WIlson' width={80} height={80} className='object-cover rounded-lg' />
                    <h2>Jenny Wilson</h2>
                    <p className='text-lg text-gray-500'>{"Senior Sustainability Consultant"}</p>
                    <Linkedin size={20} />
                </div>
            </div>
            <hr className='bg-gray-500 mt-5 mb-32' />
        </section>
    )
}

export default ExpertSection
