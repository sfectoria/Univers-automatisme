
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
function page() {
  return (

    <section className=" w-full min-h-screen mb-20">
      <div className=" px-6 lg:px-24 ">
        <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-4  ">
          <div className='aboutus__img  order-1 xl:order-none max-w-[550px] mt-10'>
         
            <Image src={hero}/>
          </div>
          <div className='flex-1 font-caveat text-center text-5xl mt-2 mb-4  ' style={{ color: "#B8D941" }}>About Us
            <p className='text-3xl text-slate-800 mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et nostrum ratione sed iure, beatae dolor dolorum dicta error impedit sit reiciendis consequuntur facilis eum distinctio quos aliquid fugit a!</p>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto my-10 ">
      <div className="bg-[#EAF2AE] px-6 lg:px-16 py-10 rounded-3xl">
       
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-caveat">
              A Unique approach <br className="lg:flex hidden"/> to learning foreign <br className="lg:flex hidden" /> languages
              online
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Learn at your own pace, with lifetime <br  className="lg:flex hidden"/> access on mobile and desktop
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button>
          </div>
          <Image src={hero} alt="" />
        </div>
      </div>
    </div> */}
    </section>

  );

}

export default page;