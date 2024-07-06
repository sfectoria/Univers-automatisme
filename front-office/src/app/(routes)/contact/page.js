
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
function page() {
  return (

    <section className="w-full min-h-screen">
      {/* Partie avec le fond #B8D941 */}
      <div className="bg-[#B8D941] p-6 lg:p-24 flex justify-center lg:justify-end relative ">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between ">
          <div className="lg:w-1/2 lg:mx-6 mb-6 lg:mb-0 ">
            <p className="text-base font-medium text-white capitalize lg:text-3xl px-1  py-1 drop-shadow-lg  -ml-16" style={{ fontSize: "20px" }}>
              Contact us
            </p>
            <h1 className="text-4xl font-bold text-white capitalize lg:text-3xl m-2 drop-shadow-lg shadow-black -ml-16">
              Let's talk about <br /> your problem.
            </h1>

          </div>
        </div>
      
      {/* formulaire */}
      <div className="lg:w-1/2 lg:mx-6 lg:mt-0 lg:pl-56 lg:top-10 flex justify-center lg:justify-end absolute">
              <div className="w-full px-8 py-10 mx-auto bg-white shadow-2xl lg:max-w-xl rounded-xl">
                <h1 className="text-xl font-bold drop-shadow-lg " style={{ color: "#B8D941" }}>Send Us a message</h1>
                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-800 drop-shadow-lg">Full Name</label>
                    <input type="text" placeholder="John Doe" className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  style={{borderColor: "#B8D941"}}/>
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-800 drop-shadow-lg">Email address</label>
                    <input type="email" placeholder="johndoe@example.com" className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" style={{borderColor: "#B8D941"}}/>
                  </div>
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-800 drop-shadow-lg">Message</label>
                    <textarea className="flex min-h-[120px] w-full rounded-[30px] border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Message" style={{borderColor: "#B8D941"}}></textarea>
                  </div>
                  <Button className="w-1/3 px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-xl drop-shadow-lg" style={{ background: "#B8D941" }}>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>


      </div>
      <div className="lg:w-1/2 lg:mx-6">
        <div className="mt-6 space-y-8 md:mt-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-8 px-16">
            <div className="flex gap-4">
              <div className="mt-4 drop-shadow-lg">
                <AiOutlineMail size={30} color='#B8D941' />
              </div>
              <div>
                <h2 className="mt-4 text-base font-medium drop-shadow-lg" style={{ color: "#B8D941",fontSize: "18px" }}>How Can we Help?</h2>
                <p className="mt-2 text-sm text-gray-700 font-sans drop-shadow-lg">Our friendly team is here to help.</p>
                <p className="mt-2 text-sm text-gray-700 font-sans drop-shadow-lg">contact@info.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-4 drop-shadow-lg">
                <SlLocationPin size={30} color='#B8D941' />
              </div>
              <div>
                <h2 className="mt-4 text-base font-medium drop-shadow-lg" style={{ color: "#B8D941",fontSize: "18px" }}>Our Location</h2>
                <p className="mt-2 text-sm text-gray-700 font-sans drop-shadow-lg">401 Broadway, 24th floor</p>
                <p className="mt-2 text-sm text-gray-700 font-sans drop-shadow-lg">Orchard Road, London</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      


      

      {/* Partie restante avec le fond blanc */}
      <div className="bg-white flex-1">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
        
          </div>
        </div>
      </div>
    </section>

  );

}

export default page;