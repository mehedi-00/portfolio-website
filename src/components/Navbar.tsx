import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type props = {
    openNav: () => void
}


const Navbar = ({ openNav }: props) => {
    const [navSticky, setNavSticky] = useState(false)
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true)
            }
            if (window.scrollY <= 90) {
                setNavSticky(false)
            }
        }
        window.addEventListener('scroll', handler);
    }, [])
    const stickyStyle = navSticky ? 'bg-[#212428] shadow-gray-900 sadow-sm' : ''
    return (
        <div className={`fixed ${stickyStyle} w-[100%] transition-all duration-300 z-[1000] `}>
            <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
                <div className='font-logo text-white text-[18px]'>
                    <Link href={'/'}> <span className='text-[30px] md:text-[40px] text-yellow-400'>MD</span>
                        Mehedi</Link>
                </div>
                <ul className='md:flex hidden items-center space-x-10'>
                    <li><Link className='nav_link' href="/">Home</Link></li>
                    <li><Link className='nav_link' href="#about">About</Link></li>
                    <li><Link className='nav_link' href="#services">Services</Link></li>
                    <li><Link className='nav_link' href="#skill">Skill</Link></li>
                    <li><Link className='nav_link' href="#contact">Contact</Link></li>
                </ul>
                <Bars3CenterLeftIcon onClick={openNav} className='size-[2.3rem] md:hidden text-white rotate-180' />
            </div>
        </div>
    )
}

export default Navbar