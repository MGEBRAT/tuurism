'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import NavbarMobile from '../NavbarMobile/NavbarMobile'
import { TfiAlignJustify } from "react-icons/tfi";
import Button from '../Button/Button';

const Header = () => {

    const [ openNav, setOpenNav ] = useState(false);

  return (
    
    
    <header className='w-full h-[70px] flex justify-center items-center mt-[50px] fixed z-[100]'>
        <div className=' flex justify-between w-[1440px] bg-headerBackground rounded-full h-[80px] p-[40px] backdrop-blur'> 
            <div className='flex justify-center items-center'>
                <Link href="/"  className='flex justify-center items-center'>
                    <Image src='/assets/img/Header/logo.svg' alt='лого' width={40} height={40} className='' />
                </Link>
            </div>
            <div className="flex">
                <NavbarMobile containerStyle={`${openNav ? 'max-h-max border-b border-zinc-800 p-[15px]' : '  left-full p-[15px] border-zinc-800' } fixed w-full top-[71px] left-0 right-0 transition-all duration-300 bg-zinc-900 md:hidden`} />
                {/* start component navbar */}
                <Navbar containerStyle ='flex items-center justify-center text-[22px] hidden md:flex ' />
                {/* end component navbar */}
            </div>
            <div className="flex justify-center items-center gap-2">
                <Button href='/' containerStyle='text-[22px] w-[150px] h-[40px] text-[20px]' text='Book a trip' />
                <Button href='/' containerStyle='text-[22px] w-[100px] h-[40px] text-[20px]' text='Login' />
            </div>
            {/* start menu bar */}
            <button onClick={() => setOpenNav(!openNav)} className='text-xl text-white w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
                <TfiAlignJustify className='' />
            </button>
            {/* end menu bar */}
        </div>
    </header>
    
  )
}

export default Header
