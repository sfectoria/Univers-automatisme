'use client';
import React, { useState, useEffect } from 'react';

// components
import Logo from '../components/Logo';
// import ThemeToggler from './ThemeToggler';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import { usePathname } from 'next/navigation';
const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener('scroll', scrollYPos);
  });
  return (

    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent backdrop-blur-lg'
          : 'py-6 dark:bg-transparent backdrop-blur-lg'
      } sticky top-0 z-10 transition-all ${pathname === '/' && 'bg-[#F7FBE9] backdrop-blur-lg'} `}>
      <div className='mx-auto max-w-[86rem] px-4'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            {/* <ThemeToggler /> */}
            {/* mobile nav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header;
