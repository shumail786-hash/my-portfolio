import React from 'react'
import { Bars3Icon } from '@heroicons/react/16/solid'

interface Props {
    openNavbar : () => void;
}
const Navbar = ({ openNavbar } : Props) => {
  return (
    <div className='w-full top-0 h-[12vh] bg-[#141c27] shadow-md uppercase'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold tracking-widest capitalize'>Shu
            <span className='text-yellow-300 tracking-widest lowercase'>Mail</span>
        </h1>
        <div className='nav-links'>Home</div>
        <div className='nav-links'>About</div>
        <div className='nav-links'>Projects</div>
        <div className='nav-links'>Skills</div>
        <div className='nav-links'>Contact</div>

      <div onClick={openNavbar} className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300 border'>
        <Bars3Icon/> 
      </div>
      </div>
    </div>
  )
}

export default Navbar
