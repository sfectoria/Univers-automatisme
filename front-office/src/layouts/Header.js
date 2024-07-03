"use client";
import Image from 'next/image'
import logounivers from '../images/logounivers.png'
import "../styles/globals.css"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);


  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "contact",
    },
  ];
  return (

    <section>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white   nav" style={{ background: '#f2f2f2' }}>

        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        {/* <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1> */}
        <div className="flex items-center gap-3 mx-4">
          <Image
            src={logounivers}
            width={100}
            height={80}
            alt="logo-univers"

          />
          <span className="self-center cursor-pointer text-xl font-bold whitespace-nowrap " style={{ color: '#393d40' }}>Univers-Automatisme</span>


        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-5 cursor-pointer capitalize font-bold  hover:scale-105 hover:text-primary duration-200 link-underline text-secondary"
            >

              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10  md:hidden"
          style={{ color: "#393d40" }}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  " style={{ color: '#b8d941', background: '#74706d' }}>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
      header Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Provident distinctio facere soluta et, 
      iure perferendis eaque tenetur vitae veritatis quam necessitatibus saepe, enim,
     expedita maiores explicabo. Fuga repellat dicta laudantium.
      </div>
    </section>

    // <section >
    //   <nav  >
    //     <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-2" style={{ background: '#f2f2f2' }}>
    //       <div className="flex items-center gap-3">
    //         <Image
    //           src={logounivers}
    //           width={100}
    //           height={80}
    //           alt="logo-univers"

    //         />
    //         <span className="self-center text-xl font-bold whitespace-nowrap " style={{ color: '#393d40' }}>Univers-Automatisme</span>

    //       </div>

    //       <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

    //         <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
    //           <span className="sr-only">Open main menu</span>
    //           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
    //           </svg>
    //         </button>
    //         <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
    //           <ul className="flex flex-col font-semibold mt-4 text-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0   px-5">
    //             <li>
    //               <Link href="/" className="block py-2 px-3 md:p-0 " aria-current="page" style={{ color: '#393d40' }}>Home</Link>
    //             </li>
    //             <li>
    //               <Link href="/about" className="block py-2 px-3 md:p-0  " style={{ color: '#393d40' }}>About</Link>
    //             </li>

    //             <li>
    //               <Link href="/contact" className="block py-2 px-3 md:p-0  " style={{ color: '#393d40' }}>Contact</Link>
    //             </li>

    //           </ul>
    //         </div>




    //       </div>
    //     </div>
    //   </nav>
    //   <div>
    //     header
    //   </div>
    // </section>
  )
}


export default Header;
