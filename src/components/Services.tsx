import React from 'react'
import ServicesCard from './Helper/ServicesCard'

const Services = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-[#0b0c13]' id='services'>
            <div className='text-center'>
                <p className='heading_mini'>Popular Services</p>
                <h1 className='heading_primary'>My Special <span className='text-yellow-400'>Services</span> For You </h1>
            </div>
            <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[3rem]'>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                >
                    <ServicesCard title='React Website' num='01' desc='Bring your user interfaces to life with dynamic and responsive web applications using the power of React.js. I specialize in creating seamless and engaging user experiences that captivate audiences.' />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="200"
                >
                    <ServicesCard title='Next JS Website' num='02' desc='Leverage the benefits of server-side rendering and a streamlined development experience with Next.js. I can help you build fast, efficient, and scalable web applications that stand out in the digital landscape.' />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="400"
                >
                    <ServicesCard title='Fullstack Website' num='03' desc='As a full-stack developer, I bring a holistic approach to your projects. From crafting polished front-end experiences to architecting powerful back-end systems, I ensure your entire application ecosystem is seamlessly integrated and optimized.' />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="600"
                >
                    <ServicesCard title='Node JS Api' num='04' desc='Empower your back-end with the efficiency and versatility of Node.js. From server-side logic to API development, I excel in harnessing the full potential of Node.js to create robust and scalable solutions.' />
                </div>
                {/* <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="800"
                >
                    <ServicesCard title='Node JS Api' num='05' />
                </div> */}
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="1000"
                >
                    <ServicesCard title='MERN WebApp' num='06' desc="Specializing in MongoDB, Express.js, React.js, and Node.js (MERN stack), I offer end-to-end development solutions. Whether you're starting from scratch or enhancing an existing project, I have the expertise to deliver top-notch MERN stack applications." />
                </div>
            </div>
        </div>
    )
}

export default Services