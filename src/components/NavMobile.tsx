import { XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link';
import React from 'react'

type props = {
    showNav: boolean;
    closeNav: () => void
}

const NavMobile = ({ showNav, closeNav }: props) => {
    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
    return (
        <div>
            <div className={`fixed top-0 transform transition-all duration-500 z-[100000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh] ${navOpenStyle}`}>

            </div>
            <ul className={`text-white ${navOpenStyle} fixed flex justify-center items-center flex-col transform transition-all 
            duration-200 delay-300 h-[100%] w-[60%] bg-red-600 space-y-14 z-[1000009]`}>
                <li><Link onClick={closeNav} className='nav_link' href="/">Home</Link></li>
                <li><Link onClick={closeNav} className='nav_link' href="#about">About</Link></li>
                <li><Link onClick={closeNav} className='nav_link' href="#services">Services</Link></li>
                <li><Link onClick={closeNav} className='nav_link' href="#skill">Skill</Link></li>
                <li><Link onClick={closeNav} className='nav_link' href="#contact">Contact</Link></li>
                <XMarkIcon onClick={closeNav} className='absolute top-[-1.4rem] right-[1.4rem] size-[2.2rem] ' />
            </ul>
        </div>

    )
}

export default NavMobile