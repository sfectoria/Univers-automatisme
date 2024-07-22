"use client"
import React, { useEffect } from 'react'

import { Send } from 'lucide-react'
import Image from 'next/image'
import picture from "../../images/picture.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import { Button } from '../ui/button'
function AboutCompany() {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
    
        });
        AOS.refresh();
      }, []);
  return (
    <>
     <section className='pb-[3rem] pt-[3rem] md:pt-[8rem]' data-aos="fade-left">
          <h2 className="bottom-10 lg:bottom-0 font-PlayfairDisplay section-title mb-13 xl:mb-16 text-center mx-auto lg:text-center mt-4 ">
            About  <span className=' font-caveat '>Us</span> 
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto lg:gap-[7rem] gap-16 items-center'>
            <div className="   photo relative flex items-center justify-center min-h-full w-full bg-gradient-to-l from-[#EAF2AE] to-primary lg:flex">
              <div className=" absolute h-full w-full overflow-clip">
                <div className="animation-delay-4000 absolute -right-1/4 top-1/4 h-16 w-[40rem] animate-blob overflow-clip bg-purple-400 opacity-40 blur-[80px]"></div>
                <div className="animation-delay-2000 absolute -right-1/4 top-1/4 h-16 w-[40rem] rotate-45 animate-plug overflow-clip bg-[#b7ebbf] opacity-40 blur-[80px]"></div>
              </div>
              <div className="relative aspect-square lg:h-[26rem] rounded-full bg-[#EAF2AE]">
              
                <div className="h-full w-full overflow-hidden rounded-full">
              
                    <Image
                      src={picture}
                      alt="Picture of the lady with book"
                      className="scale-[.70] "
                      loading="eager"

                    />
                 
                </div>
              </div>
            </div>
            <div className='relative md:static' >
              <h1
                className='text-[20px] font-caveat uppercase text-primary '>Know about Us</h1>
              <h2 className='text-[25px] md:text-35px lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize lg:mb-[3rem] mb-[1rem] font-bold text-primary'>
                Univers <span className='text-[#EAF2AE] font-caveat'>Automatisme</span>
              </h2>
              <div className='lg:mb-[3rem] flex items-center md:space-x-10'>
                <span className='w-[200px] hidden md:block h-[5px] bg-primary rounded-sm'></span>
                <p className='text-[19px] text-gray-800 subtitle'>
                  Univers Automatisme est une société tunisienne spécialisée dans l'importation ,la distribution et l'installation des composants pneumatiques,électriques,Hydraulique et d'Automatismes pour l'industrie .
                </p>
              </div>
              <Button className='gap-x-2'>
                Contact us <Send size={18} />
              </Button>
            </div>
          </div>
        </section>
    
    
    
    </>
  )
}

export default AboutCompany