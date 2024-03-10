import AboutMe from '@/src/components/AboutMe'
import Banner from '@/src/components/Banner'
import Contact from '@/src/components/Contact'
import Footer from '@/src/components/Footer'
import NavMobile from '@/src/components/NavMobile'
import Navbar from '@/src/components/Navbar'
import Project from '@/src/components/Project'
import Services from '@/src/components/Services'
import Skills from '@/src/components/Skills'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  const [showNav, setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: "top-bottom"
    })

  }, [])
  return (
    <div className='overflow-hidden '>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
      {/* banner */}
      <Banner />
      {/* about me */}
      <AboutMe />
      {/* services */}
      <Services />
      {/* skills */}
      <Skills />
      {/* project */}
      <Project />
      {/* contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage