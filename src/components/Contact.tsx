/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Contact = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-800' id='contact'>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <p className='heading_mini'>Get in Touch</p>
                    <h1 className='heading_primary'>Lets make your <span className='text-yellow-400'>Brand</span> brilliant</h1>
                    <p className='text-15px] text-white mt-[1rem] opacity-65'>
                        Whether you have questions, want to discuss potential collaborations, or just want to share your thoughts, our Contact Us page is here to welcome your messages. The user-friendly form ensures a straightforward process, allowing you to express yourself without any hassle. Your feedback and inquiries are highly valued, and we look forward to hearing from you. Let's start a conversation and explore the possibilities together.
                    </p>
                    <h1 className='mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold'>
                        +880 19855 36338
                    </h1>
                </div>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
                        <input type="text" name="" placeholder='Name' id="" className='py-[0.7rem] outline-none text-white bg-gray-700 rounded-md px-4' />
                        <input type="email" name="" placeholder='Email' id="" className='py-[0.7rem] outline-none text-white bg-gray-700 rounded-md px-4' />
                    </div>
                    <input type="text" placeholder='Subject' name="" id="" className='py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-gray-700 rounded-md px-4' />
                    <textarea placeholder='Message' rows={4} className='py-[0.7rem] my-[1.5rem] w-full outline-none text-white bg-gray-700 rounded-md px-4'></textarea>
                    <button className='py-[0.7rem]  w-full outline-none text-white bg-blue-700 hover:bg-blue-800  rounded-md px-4'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact