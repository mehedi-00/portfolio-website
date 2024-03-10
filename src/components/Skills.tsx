/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SkillCard from './Helper/SkillCard'

const Skills = () => {
    return (
        <div className='pt-[5rem]  pb-[3rem] bg-black' id='skill'>
            <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                <div className='col-span-3'>
                    <p className='heading_mini'>My Skills</p>
                    <h1 className="heading_primary">Lets's Explore Popular <span className='text-yellow-300'>Skills</span> & Experience</h1>
                    <p className='text-white opacity-70 text-[15px] my-[1.5rem]'>
                        Proficient in the complete Full-Stack development lifecycle, from crafting elegant front-end interfaces using React.js and Next.js to building robust back-end solutions with Node.js and Express.js. Specialized in MERN stack development, integrating MongoDB for seamless data management.
                    </p>
                    <button className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:size-56'>
                        <span className='relative z-10'>Learn More</span>
                    </button>
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
                        <div
                            data-aos="flip-left"
                            data-aos-anchor-placement="top-center"

                        >
                            <SkillCard title="React" image="/images/react.svg" percent="90%" />
                        </div>
                        <div
                            data-aos="flip-left"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="200"
                        >
                            <SkillCard title="CSS" image="/images/css.svg" percent="97%" />
                        </div>
                        <div
                            data-aos="flip-left"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="400"
                        >
                            <SkillCard title="JavaScript" image="/images/js.svg" percent="77%" />
                        </div>
                        <div
                            data-aos="flip-left"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="600"
                        >
                            <SkillCard title="TypeScript" image="/images/ts.svg" percent="67%" />
                        </div>
                        <div
                            data-aos="flip-left"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="800"
                        >
                            <SkillCard title="HTML" image="/images/html.svg" percent="95%" />
                        </div>
                        <div
                            data-aos="flip-left"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="1000"
                        >
                            <SkillCard title="Node JS" image="/images/node.svg" percent="65%" />
                        </div>
                        <div
                            data-aos="flip-left"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="1200"
                        >
                            <SkillCard title="MOngoDB" image="/images/mongo.svg" percent="68%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills