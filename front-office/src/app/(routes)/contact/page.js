
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
// import { Label } from '@/components/ui/label';
import "../../../styles/contact.css";
function page() {
  return (

    <section className="w-full min-h-screen">
      {/* Partie avec le fond #B8D941 */}
      <div className="first-section bg-[#B8D941] p-6 lg:p-24 flex justify-center lg:justify-end relative">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between ">
          <div className="  lg:w-1/2  mb-6 lg:mb-0 text-center md:text-left " >
            <div className="text-xl uppercase font-caveat  mb-4 text-white  ">
              Contact us
            </div>
            <h1 className="title text-6xl font-bold mb-4 hidden md:block ms:block  
             text-white  m-2  md:ml-0 drop-shadow-lg">
              Let's talk about <br /> your  <mark className='problem ' style={{color:"#B8D941",backgroundColor:"white",display:"inline",}}> problem.</mark>
            </h1>

          </div>
        </div>
      
      {/* formulaire */}
      <div className="w-[60%] md:block   lg:w-1/2 lg:mx-6 lg:mt-0 lg:pl-56 lg:top-10 flex justify-center lg:justify-end absolute ">
              <div className="formulaire w-full  px-8 py-10 mx-auto bg-white shadow-2xl lg:max-w-xl rounded-xl ">
                <h1 className="text-2xl  uppercase  mb-4 font-caveat " style={{ color: "#B8D941" }}>Send Us a message</h1>
                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-800  " style={{fontSize:"14px",fontFamily:" Times"}}>Full Name</label>
                    <input type="text" placeholder="John Doe" className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  style={{borderColor: "#B8D941"}}/>
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-800 " style={{fontSize:"14px",fontFamily:" Times"}}>Email address</label>
                    <input type="email" placeholder="johndoe@example.com" className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" style={{borderColor: "#B8D941"}}/>
                  </div>
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-800 font-inter" style={{fontSize:"14px",fontFamily:" Times"}}>Message</label>
                    <textarea className="flex min-h-[120px] w-full rounded-[30px] border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Message" style={{borderColor: "#B8D941"}}></textarea>
                  </div>
                  {/* <Button className="w-1/3 px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-xl drop-shadow-lg" style={{ background: "#B8D941" }}>
                    Send Message
                  </Button> */}
                     <Button className='gap-x-2 mt-6'>
                     Send Message <Send size={18} />
                </Button>
                </form>
              </div>
            </div>


      </div>
      <div className="hidden md:block ms:block lg:w-1/2 lg:mx-6">
        <div className="mt-6 space-y-8 md:mt-8">
          <div className="icon grid grid-cols-1 gap-12 md:grid-cols-2 mt-8 ml-24 mx-2">
            <div className="flex gap-4">
              <div className="mt-4 drop-shadow-lg">
                <AiOutlineMail size={24} color='#B8D941' />
              </div>
              <div>
                <h2 className="mt-4  font-caveat tracking-[2px]" style={{ color: "#B8D941",fontSize: "18px" }}>How Can we Help?</h2>
                <p className="mt-2 text-sm text-gray-700 " style={{fontFamily:"times"}}>Our friendly team is here to help.</p>
                <p className="mt-2 text-sm text-gray-700 " style={{fontFamily:" times"}}>contact@info.com</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-4 drop-shadow-lg">
                <SlLocationPin size={24} color='#B8D941' />
              </div>
              <div>
                <h2 className="mt-4  font-caveat tracking-[2px] " style={{ color: "#B8D941",fontSize: "18px" }}>Our Location</h2>
                <p className="mt-2 text-sm text-gray-700 " style={{fontFamily:"Segoe UI Emoji"}}>401 Broadway, 24th floor</p>
                <p className="mt-2 text-sm text-gray-700 " style={{fontFamily:"Segoe UI Emoji"}}>Orchard Road, London</p>
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