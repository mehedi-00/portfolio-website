import Image from 'next/image';
import React from 'react'
type props = {
    title: string;
    image: string;
    tech: string[];
    desc: string;
}
const ProjectCard = ({ title, image, tech, desc }: props) => {
    const techColor = (num: number) => {
        let curentStatus;
        if (num === 1) {
            curentStatus = 'bg-blue-700 text-white';
        } else if (num === 2) {
            curentStatus = 'bg-white text-black';
        } else if (num === 3) {
            curentStatus = 'bg-sky-500 text-black';
        } else {
            curentStatus = 'bg-blue-500 text-white';
        }
        return curentStatus;
    }
    return (
        <div className='grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
                <Image src={`${image}`} alt={title} width={500} height={500} className='object-contain rounded-xl mx-auto shadow-md' />

            </div>
            <div>
                <h1 className='text-[25px] text-white'>
                    {title}
                </h1>
                <p className='text-white opacity-65 text-[15px] mt-[1rem]'>
                    {desc}
                </p>
                <div className='mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
                    {
                        tech.map((text, index) => <h1 key={index} className={` px-6 py-3 rounded-lg text-center ${techColor(index)}`}>
                            {text}
                        </h1>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard