import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    navbar: boolean;
    closeNavbar: () => void;
}
const MobileNavbar = ({ navbar, closeNavbar } : Props) => {
    const navbarAnimation = navbar ? "translate-y-0" : "translate-y-[-100%]" 
  return (
    <div className={`fixed ${navbarAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>
        <div className="w-[100%] h-screen flex flex-col items-center justify-center uppercase">
            <div className="nav-links-mobile">Home</div>
            <div className="nav-links-mobile">About</div>
            <div className="nav-links-mobile">Projects</div>
            <div className="nav-links-mobile">Skills</div>
            <div className="nav-links-mobile">Contact</div>
        </div>
        <div className="absolute top-4 w-[90%] flex items-center justify-between cursor-pointer">
            <div className=''>
                
            </div>
            <div onClick={closeNavbar} className='cursor-pointer w-[2.1rem] h-[2rem] text-yellow-400'>
                <XMarkIcon/> 
            </div> 
        </div>
    </div>
  )
}

export default MobileNavbar
