import React, {useState} from 'react'
import Navbar from '@/components/Navbar/Navbar'
import MobileNavbar from '@/components/Navbar/MobileNavbar'
import Hero from '@/components/Hero/Hero'
const HomePage = () => {
  const [navbar, setNavbar] = useState(false)
  const openNavbar = () => setNavbar(true)
  const closeNavbar = () => setNavbar(false)
  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar */}
        <MobileNavbar navbar={navbar} closeNavbar={closeNavbar}/>
        <Navbar openNavbar = {openNavbar} />
        {/* Hero Section */}
        <Hero />
      </div>
    </div>
  )
}

export default HomePage
