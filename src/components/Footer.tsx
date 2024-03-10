import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Footer = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black '>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
                <div>
                    <div className='font-logo text-white text-[18px]'>
                        <span className='text-[30px] md:text-[40px] text-yellow-400'>MD</span> Mehedi
                    </div>
                    <p className='text-[15px] text-white opacity-65'>
                        Discover more about what I have to offer, your gateway to additional insights and connections. Explore quick links, stay updated on social media, or simply drop a line via the contact details. With a clean design and easy navigation, the footer complements your journey throughout the site. Connect, engage, and dive deeper into the world of possibilities that await you.
                    </p>
                    <p className='mt-[1.3rem] text-yellow-300 underline font-semibold'>mdmehedi23234@gmail.com</p>
                </div>
                <div className="md:mx-auto">
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                        Quick Link
                    </h1>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300 '>
                        About
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300 '>
                        Projects
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300 '>
                        Services
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300 '>
                        Contact
                    </p>

                </div>
                <div className="lg:mx-auto">
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                        Address
                    </h1>
                    <div className="flex items-center my-[1rem] space-x-2 ">
                        <MapIcon className='size-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>Khagrachhari, Chittagong Bangladesh</p>
                    </div>
                    <div className="flex items-center my-[1rem] space-x-2 ">
                        <EnvelopeIcon className='size-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>mdmehedi23234@gmail.com</p>
                    </div>
                    <div className="flex items-center my-[1rem] space-x-2 ">
                        <PhoneIcon className='size-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>+8801 98553 6338</p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-[1.4rem]  mx-auto text-white opacity-70">
                &#169; Copyright mehedi 2024
            </div>
        </div>
    )
}

export default Footer