/* eslint-disable react/no-unescaped-entities */
import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const AboutMe = () => {
    return (
        <div className='mt-[-3rem] bg-black pb-[3rem]' id='about'>
            <div className='w-[80%] pt-[5rem] mx-auto sm:pt-[7rem] md:pt-[10rem] grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
                <div>
                    <p className='heading_mini'>About Me</p>
                    <h1 className='heading_primary'>
                        Proffessional <span className='text-yellow-400'>Website</span> for your business
                    </h1>
                    <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
                        Hey there! I'm Mehedi, a dynamic full-stack developer immersed in the tech world for the past 2 years. My journey started with a passion for problem-solving and a commitment to crafting digital experiences that leave a lasting impression.
                    </p>
                    <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
                        I navigate both front-end and back-end realms with ease, weaving together seamless user interfaces and robust server-side functionalities.
                    </p>
                    <div
                        className='mt-[2rem] space-y-3'>
                        <div

                            className='flex items-center space-x-4'>
                            <CheckIcon className='size-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Frontend Development</p>
                        </div>
                        <div
                            className='flex items-center space-x-4'>
                            <CheckIcon className='size-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Bakend Development</p>
                        </div>
                        <div

                            className='flex items-center space-x-4'>
                            <CheckIcon className='size-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Web Development</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='size-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>MERN Development</p>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                        <div
                            data-aos="zoom-in"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="200"
                            className='p-6 text-center bg-yellow-500'>
                            <p className='text-[50px] text-black font-bold'>2</p>
                            <p className='text-[20px] text-black font-[600]'>Years experience</p>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="400"
                            className='p-6 text-center bg-yellow-500'>
                            <p className='text-[50px] text-black font-bold'>20+</p>
                            <p className='text-[20px] text-black font-[600]'>Project Done</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe