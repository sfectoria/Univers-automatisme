
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
function page() {
  return (

    <section className='flex  justify-between  h-[50vh] ' style={{ background: "#B8D941" }}>
      <div className="container px-6 py-12 mx-auto z-10">
        <div className=" lg:flex lg:items-center lg:-mx-6" >

         
         

        <div className="lg:w-1/2 lg:mx-6">
                <p className="text-base font-medium text-white capitalize dark:text-white lg:text-3xl" style={{fontSize:"20px"}}>
                    contact us
                </p>
                <h1 className="text-3xl font-semibold text-white capitalize dark:text-white lg:text-3xl">
                    Let's talk about <br /> your problem.
                </h1>

                <div className="mt-6 space-y-8 md:mt-8">
                    {/* <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                            Cecilia Chapman 711-2880 Nulla
                            St. Mankato Mississippi 96522
                        </span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(257) 563-7401</span>
                    </p> */}
                    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 mt-24">
                    <div className='flex gap-6'>
                    <div className='mt-4'>
                    <AiOutlineMail  size={30} color='#B8D941'/>
                    </div>

                    <div>
                    <h2 className="mt-4 text-base font-medium  dark:text-white" style={{color:"#393D40"}}>How Can we Help?</h2>
                    <p className="mt-2 text-sm  dark:text-gray-400" style={{color:"#74706D"}}>Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm  dark:text-blue-400" style={{color:"#74706D"}}>contact@info.com</p>
                    </div>
                </div>
                    <div className='flex gap-6'>
                    <div className='mt-4'>
                    <SlLocationPin  size={30} color='#B8D941'/>
                    </div>
                    
                    <div>
                    <h2 className="mt-4 text-base font-medium dark:text-white" style={{color:"#393D40"}}>Our Location</h2>
                    <p className="mt-2 text-sm  dark:text-gray-400" style={{color:"#74706D"}}>401 Broadway , 24th floor</p>
                    <p className="mt-2 text-sm  dark:text-blue-400" style={{color:"#74706D"}}>Orchard Road, London</p>
                    </div>
                </div>
                </div>
                </div>
            </div>





          {/* section form */}
          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div
              className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 className="text-lg font-bold " style={{color:"#B8D941"}}>Send Us a message</h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                  <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                  <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea className="block w-full  px-2 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message" ></textarea>
                </div>

                <button className="w-1/3 px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" style={{background:"#B8D941"}}>
                  Send Message
                </button>
              </form>
            </div>
          </div>






        </div>
      </div>

    </section>

  );

}

export default page;