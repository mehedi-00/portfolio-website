import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWriterEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'a React Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'a Next JS Developer',
                1000,
                'a Mern Stack Developer',
                1000,
                // 'We produce food for Chinchillas',
                // 1000
            ]}
            wrapper="span"
            speed={50}
            className='text-white xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-bols'
            repeat={Infinity}
        />
    )
}

export default TypeWriterEffect