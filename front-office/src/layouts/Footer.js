import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logounivers from '../images/logounivers.png'
import Image from 'next/image';
function Footer() {
  const FooterLinks = [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: "Products",
      link: "/products",
    },
    {
      id: 3,
      title: "About",
      link: "/about",
    },
    
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="rounded-t-3xl " style={{ background: '#393d40' ,bottom:0}}>
      <div className="container">

        <div className="grid md:grid-cols-3 py-4  mx-10">
          {/* company Details */}
          <div className="py-8 px-4 ">
            <div className="flex items-center gap-3">
              <Image
                src={logounivers}
                width={100}
                height={80}
                alt="logo-univers"
          
              />

              <h1 className="sm:text-xl  sm:text-left text-justify mb-3 flex items-center  font-bold" style={{ color: '#b8d941' }}>
                Univers-Automatisme
              </h1>
            </div>

            <p className="text-left mt-4  mx-4" style={{ color: '#f2f2f2' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat dolor illum a aut iste expedita.
            </p>
            <br />
            {/* <div>
              <div className="flex items-center gap-3">
                <FaLocationArrow style={{ color: '#b8d941' }} />
                <p style={{ color: '#eaf2ae' }}>Tunisia,tunisia</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt style={{ color: '#b8d941' }} />
                <p style={{ color: '#eaf2ae' }}>+216 123456789</p>
              </div>
            </div> */}
            <div className="flex items-center gap-5 mt-4 mx-14">
                <a href="#">
                  <FaFacebook className="border-2 p-1 rounded-full text-3xl hover:text-primary duration-300 text-gray1"  />
                </a>
                <a href="#">
                  <FaInstagram className="border-2 p-1 rounded-full  text-3xl hover:text-primary duration-300 text-gray1" />
                </a>
                <a href="#">
                  <FaLinkedin className="border-2 p-1 rounded-full text-3xl hover:text-primary duration-300 text-gray1" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 gap-5">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary text-gray1"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary text-gray1"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Location</h1>
                  {/* <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary text-gray1"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul> */}
                  <div>
              <div className="flex items-center gap-3">
                <FaLocationArrow style={{ color: '#b8d941' }} />
                <p style={{ color: '#f2f2f2' }}>Tunisia,tunisia</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt style={{ color: '#b8d941' }} />
                <p style={{ color: '#f2f2f2' }}>+216 123456789</p>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail style={{ color: '#b8d941' }} size={35} />
                <p style={{ color: '#f2f2f2' }}>universautomatisme@info</p>
              </div>
            </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>

    
  )
}

export default Footer
