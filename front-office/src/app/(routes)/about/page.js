
'use client';
 
import { useRouter } from 'next/navigation'
import React  from 'react';
import "../../../styles/contact.css";

import "../../../styles/about.css";

import Head from '@/components/Head';
import AboutCompany from '@/components/AboutCompany';
import Mission from '@/components/Mission';
import Values from '@/components/Values';
import Team from '@/components/Team';

function page() {
  
  const router = useRouter()

  return (

    <>

      <section className=" w-full min-h-full mb-20 ">
       <Head/>
       <AboutCompany/>
       <Mission/>
       <Values/>
        <Team/>
        </section>
 
    </>
  )
}



export default page;
