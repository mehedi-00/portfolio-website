/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import TypeWriterEffect from './Helper/TypeWriterEffect'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg'>
            <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center '>
                    <div>
                        <h1 data-aos="fade-right" className='text-[#c4cfde] mb-[1.3rem]'>Welcome to my world</h1>
                        <div data-aos="fade-left" data-aos-delay="400" >
                            <h1 className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] 
                            font-semibold leading-[2.6rem] text-white'>Hi, I'm <span className='text-yellow-300'>Mehedi</span></h1>
                            <TypeWriterEffect />
                        </div>
                        <p data-aos="fade-up" data-aos-delay="800" className='mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]'>
                            As a passionate full-stack developer with 2 years of hands-on experience in the field. I thrive on turning ideas into reality through clean and efficient code. Let's innovate and create together!
                        </p>
                        <div className='mt-[2rem] flex items-center space-x-6'>
                            <button

                                data-aos="zoom-in"
                                data-aos-delay="1200"
                                className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:size-56'>
                                <Link href={"#contact"} className='relative z-10'>Contact Me</Link>
                            </button>
                            <button
                                data-aos="zoom-out"
                                data-aos-delay="1600"
                                className='before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:size-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180'>
                                <span className='relative z-10'>Download CV</span>
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="2000" className="hidden md:flex items-end h-full">
                        <Image src="/images/my.png" alt='hero' width={600} height={600} className='object-contain ' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner