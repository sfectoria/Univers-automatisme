"use client";
import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import AOS from "aos";
import 'aos/dist/aos.css';
function Values() {
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
     {/* <section className="relative  flex flex-col justify-center  overflow-hidden" data-aos="fade-left"> */}
            <div className="w-full flex flex-col items-center  py-24" data-aos="fade-left">
              <h2 className="font-PlayfairDisplay section-title mb-8 xl:mb-16 text-center mx-auto" >
              <span className=' font-caveat '>Nos</span> Valeurs
              </h2>
              <section className="flex flex-wrap justify-center  lg:gap-10 gap-10  m-[20px] lg:m-0 ">

                <article className='shadow-xl md:w-full lg:w-[25%]   rounded-2xl p-6 bg-gradient-to-tr from-primary to-[#EAF2AE]'>
                 
                    <div className=" text-primary w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20">
                        <defs>
                          <linearGradient id="icon1-a" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#EAF2AE" />
                            <stop offset="100%" stopColor="#EAF2AE" />
                          </linearGradient>
                          <linearGradient id="icon1-b" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" />
                            <stop offset="100%" stopColor="currentColor" />
                          </linearGradient>
                        </defs>
                        <g fill="none" fillRule="nonzero">
                          <path
                            fill="url(#icon1-a)"
                            d="M20.625 0H9.375a9.375 9.375 0 0 0 0 18.75h11.25a9.375 9.375 0 0 0 0-18.75Z"
                            transform="translate(.885 .885)"
                          />
                          <path
                            fill="url(#icon1-b)"
                            d="M9.375 17.5A8.125 8.125 0 0 1 1.25 9.375 8.125 8.125 0 0 1 9.375 1.25 8.125 8.125 0 0 1 17.5 9.375 8.125 8.125 0 0 1 9.375 17.5Z"
                            transform="translate(.885 .885)"
                          />
                        </g>
                      </svg>
                    </div>
                    <h2>
                      <span className={`flex tabular-nums text-[#fff] text-5xl font-bold mb-2 transition-[_--num] duration-[3s] ease-out`}>
                        <CountUp end={40} delay={1} duration={4} />
                        {"K+"}
                      </span>
                      <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#EAF2AE] mb-2">Variations</span>
                    </h2>
                    <p className="text-sm  text-white">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>
               



                </article>

                <article className='rounded-2xl  md:w-full lg:w-[25%]   p-6 shadow-xl' >

                  <div className="w-14 h-14 rounded shadow-md bg-primary flex justify-center items-center -rotate-3 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19">
                      <defs>
                        <linearGradient id="icon2-a" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#EAF2AE" />
                          <stop offset="100%" stopColor="#fff" />
                        </linearGradient>
                        <linearGradient id="icon2-b" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#fff" />
                          <stop offset="100%" stopColor="#fff" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="nonzero">
                        <path
                          fill="url(#icon2-a)"
                          d="M5.5 0a5.5 5.5 0 0 0 0 11c.159 0 .314-.01.469-.024a15.896 15.896 0 0 1-2.393 6.759A.5.5 0 0 0 4 18.5h1a.5.5 0 0 0 .362-.155C7.934 15.64 11 11.215 11 5.5A5.506 5.506 0 0 0 5.5 0Z"
                        />
                        <path
                          fill="url(#icon2-b)"
                          d="M18.5 0a5.5 5.5 0 0 0 0 11c.159 0 .314-.01.469-.024a15.896 15.896 0 0 1-2.393 6.759.5.5 0 0 0 .424.765h1a.5.5 0 0 0 .363-.155C20.934 15.64 24 11.215 24 5.5A5.506 5.506 0 0 0 18.5 0Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2>
                    <span className={`flex tabular-nums text-primary text-5xl font-bold mb-2 transition-[_--num] duration-[3s] ease-out`}>
                      <CountUp end={70} delay={1} duration={4} />
                      {"K+"}
                    </span>
                    <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#EAF2AE] mb-2">Lessons</span>
                  </h2>
                  <p className="text-sm text-slate-500 "> Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>


                </article>

                <article className='shadow-xl md:w-full lg:w-[25%]    rounded-2xl p-6 bg-gradient-to-tr from-primary to-[#EAF2AE] ' >
                  <div className=" text-primary w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                      <defs>
                        <radialGradient id="icon3-a" cx="68.15%" cy="27.232%" r="67.641%" fx="68.15%" fy="27.232%">
                          <stop offset="0%" stopColor="#EAF2AE" />
                          <stop offset="100%" stopColor="#EAF2AE" />
                        </radialGradient>
                      </defs>
                      <g fill="none" fillRule="nonzero">
                        <circle cx="13" cy="13" r="13" fill="url(#icon3-a)" />
                        <path
                          fill="currentColor"
                          fillOpacity=".56"
                          d="M0 13a12.966 12.966 0 0 0 4.39 9.737l1.15-1.722s.82-.237.997-.555c.554-.997-.43-2.733-.43-2.733a5.637 5.637 0 0 0-.198-1.23c-.148-.369-1.182-.874-1.182-.874S3.73 13.998 3.73 13a1.487 1.487 0 0 1 1.404-1.55 2.424 2.424 0 0 0 1.588-1.146s1.256-.332 1.551-.847c.295-.515-.332-2.36-.332-2.36a3.086 3.086 0 0 0-.012-1.481 2.8 2.8 0 0 0-.93-1.12 6.143 6.143 0 0 0-1.447-2.148A12.981 12.981 0 0 0 0 13ZM13 0c-.35 0-.696.018-1.04.045-.112.35-.695 1.248-.548 1.653.147.406 1.353.783 1.353.783s-.32 1.25.235 1.692c.554.443 1.44-.148 1.773-.037.331.111.258 2.29.258 2.29s1.07 1.181 2.124 1.33c1.053.147 2.656-1.64 2.656-1.64a21.131 21.131 0 0 0 3.448-1.102A12.974 12.974 0 0 0 13 0Z"
                        />
                        <path
                          fill="currentColor"
                          fillOpacity=".4"
                          d="M21.398 13.848c.296.702-.555 2.494-1.256 2.843a4.76 4.76 0 0 0-1.82 1.452c-.259.406-.598 2.082-1.447 2.415-.85.332-2.863 2.228-3.934 1.932-1.071-.296-1.071-2.842-.333-3.988.441-.683-.074-2.179-.113-2.695-.039-.517-1.586-1.478-1.586-1.994 0-.813 1.772-2.955 1.772-2.955s1.453-.48 1.896-.37c.448.164.877.374 1.28.628.782.058 1.552.22 2.29.48l.848.775s2.107.777 2.403 1.477Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2>
                    <span className={`flex tabular-nums text-[#fff] text-5xl font-bold mb-2 transition-[_--num] duration-[3s] ease-out `}>
                      <CountUp end={149} delay={1} duration={4} />
                      {"K+"}
                    </span>
                    <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#EAF2AE] mb-2">Workshops</span>
                  </h2>
                  <p className="text-sm text-white ">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>
                </article>

              </section>
            </div>
          {/* </section> */}
    
    
    </>
  )
}

export default Values