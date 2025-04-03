import React from 'react'

const Newsletter = () => {
    return (
        <section className='container mx-auto bg-[#BFF265] rounded-lg px-5'>
            <div className='flex items-center justify-between gap-10 py-28'>
                <h1 className='text-4xl text-black font-semibold'>
                    Your Source for Green Energy Updates
                </h1>
                <div className='flex items-center gap-x-4'>
                    <input type="email" name="email" id="email" />
                    <button>Get in touch</button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
