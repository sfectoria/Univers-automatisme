"use client";
import Image from 'next/image'
import logounivers from '../images/logounivers.png'
import "../styles/globals.css"
import Link from 'next/link';
import users from '../images/users.png'


const Header = () => {

  return (


    <section >
      <nav  >
        <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-2" style={{ background: '#f2f2f2' }}>
          <div className="flex items-center gap-3">
            <Image
              src={logounivers}
              width={100}
              height={85}
              alt="logo-univers"

            />
            <span className="self-center text-xl font-bold whitespace-nowrap " style={{ color: '#393d40' }}>Univers-Automatisme</span>

          </div>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
              <ul className="flex flex-col font-semibold mt-4 text-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0   px-5">
                <li>
                  <Link href="/" className="block py-2 px-3 md:p-0 " aria-current="page" style={{ color: '#393d40' }}>Home</Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 px-3 md:p-0  " style={{ color: '#393d40' }}>About</Link>
                </li>

                <li>
                  <Link href="/contact" className="block py-2 px-3 md:p-0  " style={{ color: '#b8d941' }}>Contact</Link>
                </li>
                <li>
                  
                    <Image className="w-9 h-9 rounded-full" src={users} alt="user photo" />
                 
                </li>
              </ul>
            </div>




          </div>
        </div>
      </nav>
      <div>
        header
      </div>
    </section>
  )
}


export default Header;
