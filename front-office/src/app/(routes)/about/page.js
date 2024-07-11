'use client';
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
// import { Label } from '@/components/ui/label';
import aboutus from '../../../images/aboutus.png'
import "../../../styles/contact.css";
import Image from 'next/image';
import hero from '../../../images/hero.png'
import DevImg from '@/components/DevImg';
import "../../../styles/about.css";
import { useState, useEffect } from 'react';
function page() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(true);
  }, []);
  return (
    <>

      <section className=" w-full min-h-screen mb-20">
        <div className=" px-6 lg:px-24 ">
          <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-4  ">
            <div className='aboutus__img  order-1 xl:order-none max-w-[550px] mt-10'>
              <Image src={hero} />
              {/* <div className="hidden xl:flex flex-1 relative">
                <DevImg
                  containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                  imgSrc="/about/developer.png"
                />
              </div> */}
            </div>
            <div className='flex-1 font-caveat text-center text-5xl mt-2 mb-4  ' style={{ color: "#B8D941" }}>About Us
              <p className='text-xl text-slate-800 mt-6 font-inter'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et nostrum ratione sed iure, beatae dolor dolorum dicta error impedit sit reiciendis consequuntur facilis eum distinctio quos aliquid fugit a!</p>
              <div className='font-inter flex justify-center'>
                <Button className='gap-x-2 mt-6 '>
                  Contact Us <Send size={18} />
                </Button>
              </div>
              <ul className="mt-8 py-6 flex flex-wrap justify-center gap-4 text-xs sm:mt-0 lg:justify-center ">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                    style={{ color: "#B8D941" }}
                  >
                    <span className="sr-only">Facebook</span>

                    <svg className="h-9 w-9 border bg-white rounded-full " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                    style={{ color: "#B8D941" }}
                  >
                    <span className="sr-only">Instagram</span>

                    <svg className="h-9 w-9 border bg-white rounded-full p-1 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                    style={{ color: "#B8D941" }}
                  >
                    <span className="sr-only">Twitter</span>

                    <svg className="h-9 w-9 border bg-white rounded-full p-1 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                    style={{ color: "#B8D941" }}
                  >
                    <span className="sr-only">GitHub</span>

                    <svg className="h-9 w-9 border bg-white rounded-full p-1 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                    style={{ color: "#B8D941" }}
                  >
                    <span className="sr-only">Dribbble</span>

                    <svg className="h-9 w-9 border bg-white rounded-full p-1 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>



        <section className="relative  flex flex-col justify-center  overflow-hidden">
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <section className="grid gap-12 md:grid-cols-3 md:gap-16">
              <article className='Article'>
                <div className='Article__content'>
                  <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20">
                      <defs>
                        <linearGradient id="icon1-a" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#EAF2AE" />
                          <stop offset="100%" stopColor="#EAF2AE" />
                        </linearGradient>
                        <linearGradient id="icon1-b" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#B8D941" />
                          <stop offset="100%" stopColor="#B8D941" />
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
                    <span className={`flex tabular-nums text-[#B8D941] text-5xl font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out ${shown ? '[--num:40]' : ''}`}>
                      <span className="supports-[counter-set]:sr-only">40</span>K+
                    </span>
                    <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#B8D941] to-[#EAF2AE] mb-2">Variations</span>
                  </h2>
                  <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>
                </div>

              </article>

              <article className='Article shadow-xl  rounded-2xl p-6'> 
               
                <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center -rotate-3 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19">
                    <defs>
                      <linearGradient id="icon2-a" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#EAF2AE" />
                        <stop offset="100%" stopColor="#EAF2AE" />
                      </linearGradient>
                      <linearGradient id="icon2-b" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#B8D941" />
                        <stop offset="100%" stopColor="#B8D941" />
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
                  <span className={`flex tabular-nums text-[#EAF2AE] text-5xl font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out ${shown ? '[--num:70]' : ''}`}>
                    <span className="supports-[counter-set]:sr-only">70</span>K+
                  </span>
                  <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#EAF2AE] mb-2">Lessons</span>
                </h2>
                <p className="text-sm text-white"> Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>
               
               
              </article>

              <article className='shadow-xl  rounded-2xl p-6'>
                <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
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
                        fill="#B8D941"
                        fillOpacity=".56"
                        d="M0 13a12.966 12.966 0 0 0 4.39 9.737l1.15-1.722s.82-.237.997-.555c.554-.997-.43-2.733-.43-2.733a5.637 5.637 0 0 0-.198-1.23c-.148-.369-1.182-.874-1.182-.874S3.73 13.998 3.73 13a1.487 1.487 0 0 1 1.404-1.55 2.424 2.424 0 0 0 1.588-1.146s1.256-.332 1.551-.847c.295-.515-.332-2.36-.332-2.36a3.086 3.086 0 0 0-.012-1.481 2.8 2.8 0 0 0-.93-1.12 6.143 6.143 0 0 0-1.447-2.148A12.981 12.981 0 0 0 0 13ZM13 0c-.35 0-.696.018-1.04.045-.112.35-.695 1.248-.548 1.653.147.406 1.353.783 1.353.783s-.32 1.25.235 1.692c.554.443 1.44-.148 1.773-.037.331.111.258 2.29.258 2.29s1.07 1.181 2.124 1.33c1.053.147 2.656-1.64 2.656-1.64a21.131 21.131 0 0 0 3.448-1.102A12.974 12.974 0 0 0 13 0Z"
                      />
                      <path
                        fill="#B8D941"
                        fillOpacity=".4"
                        d="M21.398 13.848c.296.702-.555 2.494-1.256 2.843a4.76 4.76 0 0 0-1.82 1.452c-.259.406-.598 2.082-1.447 2.415-.85.332-2.863 2.228-3.934 1.932-1.071-.296-1.071-2.842-.333-3.988.441-.683-.074-2.179-.113-2.695-.039-.517-1.586-1.478-1.586-1.994 0-.813 1.772-2.955 1.772-2.955s1.453-.48 1.896-.37c.448.164.877.374 1.28.628.782.058 1.552.22 2.29.48l.848.775s2.107.777 2.403 1.477Z"
                      />
                    </g>
                  </svg>
                </div>
                <h2>
                  <span className={`flex tabular-nums text-[#B8D941] text-5xl font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out ${shown ? '[--num:149]' : ''}`}>
                    <span className="supports-[counter-set]:sr-only">149</span>+
                  </span>
                  <span className="inline-flex text-2xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#B8D941] to-[#EAF2AE] mb-2">Workshops</span>
                </h2>
                <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p>
              </article>
            </section>
          </div>
        </section>








        <div className="flex justify-center font-caveat text-4xl text-[#B8D941]">
          <p>Meet our team</p>

        </div>
      </section>
    </>
  );

}

export default page;