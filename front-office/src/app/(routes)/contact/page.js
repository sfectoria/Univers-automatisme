'use client';
import React, { useEffect } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { Button } from '@/components/ui/button';

import { Send } from 'lucide-react';

import "../../../styles/contact.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import Socials from '@/components/Socials';
function page() {

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

    <section className="w-full min-h-screen mb-[10rem]">

      {/* Partie avec le fond #B8D941 */}
      <div className="first-section bg-primary p-6 lg:p-24 flex justify-center lg:justify-end relative">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between ">
          <div className="  lg:w-1/2  mb-6 lg:mb-0 text-center md:text-left " >
            <div className="text-xl uppercase font-caveat  mb-4 text-white  " data-aos="fade-right">

              Contactez-nous
            </div>
            <h1 data-aos="fade-right" className=" title  font-bold mb-4 hidden md:block ms:block  
             text-white   md:ml-0 drop-shadow-lg leading-tight tracking-normal"  style={{ fontSize: "3.5rem" }} >
              Discutons  <br /> de votre<span className=" responsive-container mx-6 realistic-marker-highlight text-primary"> problème.</span>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }} className='svg-filters'>
                <defs>
                  <filter id="marker-shape">
                    <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
                    <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                  </filter>
                </defs>
              </svg>

            </h1>

          </div>
        </div>

        {/* formulaire */}
        <div className="w-[60%] md:block   lg:w-1/2 lg:mx-6 lg:mt-0 lg:pl-56 lg:top-10 flex justify-center lg:justify-end absolute ">
          <div className="formulaire w-full  px-8 py-10 mx-auto bg-white shadow-2xl lg:max-w-xl rounded-xl " data-aos="fade-up-left">
            <h1 className="text-2xl  uppercase  mb-4 font-caveat text-primary ">Envoyez-nous un message</h1>
            <form className="mt-6">
              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-800 font-inter  tracking-wide" style={{ fontSize: "13px" }}>Nom complet</label>
                <input type="text" placeholder="Nom complet" className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground border-primary" />
              </div>
              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm text-gray-800 font-inter  tracking-wide" style={{ fontSize: "13px" }}>Adresse e-mail</label>
                <input type="email" placeholder="Adresse e-mail" className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary" />
              </div>
              <div className="w-full mt-6">
                <label className="block mb-2 text-sm text-gray-800 font-inter  tracking-wide" style={{ fontSize: "13px" }}>Message</label>
                <textarea className="flex min-h-[120px] w-full rounded-[30px] border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary" placeholder="message"></textarea>
              </div>
              {/* <Button className="w-1/3 px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-xl drop-shadow-lg" style={{ background: "#B8D941" }}>
                    Send Message
                  </Button> */}
              <Button className='gap-x-2 mt-6'>

                Envoyer <Send size={18} />
              </Button>
            </form>
          </div>
        </div>


      </div>


    


      {/* Partie restante avec le fond blanc */}
      <div className="bg-white flex-1 visible block">
      <div className="hidden md:block md:visible ms:block lg:w-1/2 lg:mx-6">
        <div className="mt-6 space-y-8 md:mt-8">
          <div className="icon grid grid-cols-1 gap-12 md:grid-cols-2 mt-8 ml-24 mx-2">
            <div className="flex gap-4" data-aos="fade-right">
              <div className="mt-4 drop-shadow-lg text-primary">
                <AiOutlineMail size={24} />
              </div>
              <div>
                <h2 className="mt-4  font-caveat tracking-[1px] text-primary" style={{ fontSize: "18px" }}>Comment pouvons-nous vous aider ?</h2>
                <p className="mt-2 text-sm text-gray-700 font-inter tracking-wide" >Notre équipe est là pour vous aider.</p>
                <p className="mt-2 text-sm text-gray-700  font-inter tracking-wide" >info@loremipsumdolor</p>
              </div>
            </div>
            <div className="flex gap-3" data-aos="fade-left">
              <div className="mt-4 drop-shadow-lg text-primary">
                <SlLocationPin size={24} />
              </div>
              <div>
                <h2 className="mt-4  font-caveat tracking-[2px] text-primary" style={{ fontSize: "18px" }}>Notre emplacement</h2>
                <p className="mt-2 text-sm text-gray-700  font-inter tracking-wide" >Dummy Road 125x</p>
                <p className="mt-2 text-sm text-gray-700  font-inter tracking-wide" >Street Location,City,Area</p>
              </div>
            </div>
          </div>
        </div>

      </div>
        <div className="container px-4 mt-[6.5rem] mx-auto block visible
        
        ">
          <div className="lg:flex lg:items-center lg:-mx-6">

            <iframe className="w-screen mt-20 border-primary border-2 rounded-lg p-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.8625213585906!2d10.189982275570134!3d36.821814166481346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3550232fe4b9%3A0x488b37a9204e79dd!2sSfectoria!5e0!3m2!1sfr!2stn!4v1722344990685!5m2!1sfr!2stn" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
        <div>
          <Socials
            containerStyles='flex gap-x-10 items-center justify-center mt-14'
            iconsStyles='text-primary text-[26px] hover:text-primary transition-all'
          />
        </div>
      </div>


    </section>

  );

}

export default page;