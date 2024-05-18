import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

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
        <div className='nav-links hidden md:block'>Home</div>
        <div className='nav-links hidden md:block'>About</div>
        <div className='nav-links hidden md:block'>Projects</div>
        <div className='nav-links hidden md:block'>Skills</div>
        <div className='nav-links hidden md:block'>Contact</div>

        <div className='md:hidden cursor-pointer flex items-center justify-center w-[2rem] h-[2rem]'
          onClick={openNavbar}>
          <RxHamburgerMenu className='w-full h-full text-yellow-300' />
        </div> 
      </div>
    </div>
  )
}

export default Navbar
