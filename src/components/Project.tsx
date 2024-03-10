import React from 'react'
import ProjectCard from './Helper/ProjectCard'

const Project = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900 '>
            <div className="text-center">
                <p className="heading_mini">Recent Works</p>
                <h1 className='heading_primary'>
                    My Best <span className='text-yellow-300'>Projects</span>
                </h1>
            </div>
            <ProjectCard title="E-commerce Website" tech={["Next Js", "TypeScript", "Tailwind", "React"]} image="/images/p1.png" desc="Embark on a seamless online shopping experience with my latest e-commerce project. Leveraging the power of NEXTJS and React, I've crafted a dynamic and visually stunning platform that not only captivates users but also ensures a smooth and intuitive navigation." />

            <ProjectCard title="Portfolio Website" tech={["Next Js", "TypeScript", "Tailwind", "React"]}
                image="/images/p2.png"
                desc="The digital realm with my meticulously crafted portfolio website. Powered by React and enhanced with Tailwind CSS, this dynamic showcase is not just a static display but an interactive journey into my skills and experiences" />
            <ProjectCard title="Fullstack Food delivery Webapp" tech={["Next Js", "TypeScript", "Node JS", "MongoDB"]} image="/images/p4.png" desc="Embark on a culinary adventure with my Fullstack Food Delivery Web App, a dynamic platform powered by Next.js, TypeScript, Node.js, and MongoDB. This application combines a visually appealing front-end with seamless user navigation, real-time order tracking, and secure authentication. Leveraging MongoDB for flexible data storage, the app ensures an engaging experience from menu exploration to order delivery. This project reflects my commitment to creating efficient, secure, and user-centric full-stack solutions that enhance the modern online food ordering experience." />
            <ProjectCard title="Travel Website" tech={["Next Js", "TypeScript", "Tailwind", "React"]} image="/images/p3.png" desc="Embark on a virtual expedition with my Travel Website, an immersive platform meticulously crafted with Next.js, TypeScript, and Node.js technologies. This dynamic combination delivers a seamless user experience, blending captivating visuals with responsive design. Navigate through destinations, plan your journey, and access real-time updates effortlessly. " />
        </div>
    )
}

export default Project