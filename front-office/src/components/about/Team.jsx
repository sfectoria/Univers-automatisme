"use client";
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { FaDribbble, FaTwitter } from 'react-icons/fa';

import AOS from "aos";
import 'aos/dist/aos.css';
import Image from 'next/image';
function Team() {
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
            <section data-aos="fade-right">
                <h2 className="font-PlayfairDisplay section-title  text-center mx-auto" >
                    Rencontrez <span className=' font-caveat '>l'Équipe</span>
                </h2>

                <div className="px-8  py-16  md:px-12 lg:px-32 max-w-7xl items-center -ml-2 sm:-ml-0" >
                    <div className="grid gap-20 lg:grid-cols-2  ">
                        <div className='space-y-1 ' >
                            <h1
                                className='text-[20px] font-caveat uppercase text-primary '>
                                Découvrez notre équipe</h1>
                            <h1 data-aos="fade-right"
                                className="text-3xl font-semibold tracking-tight text-primary lg:text-[2.7rem] lg:leading-none">
                                Rencontrez notre équipe
                                <span className=" text-[#EAF2AE]"><br />Diversifiée. Compétente. Unie.</span>
                            </h1>

                            <div className='grid grid-cols-2  sm:grid-cols-1'>
                                <p className="py-2 text-gray-800 subtitle  flex flex-col col-span-1">
                                Un groupe de personnes passionnées travaillant ensemble pour innover et exceller dans notre secteur.

                                </p>
                            </div>

                        </div>
                        <Swiper
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },

                                390: { slidesPerView: 1 }
                            }}
                            spaceBetween={15}
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                            }}



                            className="mySwiper "
                        >
                            <SwiperSlide className='swiper-slide'>
                                <div className="space-y-4 w-[320px] h-[320px] sm:h-full sm:w-full" >
                                    <div className="  aspect-[3/2] p-2 overflow-hidden border rounded-3xl border-primary">
                                        <Image
                                            className="object-cover w-full h-full rounded-2xl"
                                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                                            alt=""
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="inline-flex items-start justify-between w-full">
                                        <div className="space-y-1">
                                            <h3 className=" font-caveat leading-6 text-primary" style={{ fontSize: '1.3rem' }}>
                                                Michael Andreuzza
                                            </h3>
                                            <p className="text-gray-800" style={{ fontSize: '0.8rem' }}>
                                                Creator of Windstatic.com
                                            </p>
                                        </div>
                                        <div>
                                            <ul role="list" className="flex space-x-4">
                                                <li>
                                                    <a href="#_" className="text-primary">
                                                        <FaDribbble name="logo-dribbble" role="img" className="md hydrated" aria-label="logo dribbble" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#_" className="text-primary">
                                                        <span className="sr-only"> Twitter </span>
                                                        <FaTwitter name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="space-y-4  w-[320px] h-[320px] sm:h-full sm:w-full" >
                                    <div className=" aspect-[3/2] p-2 overflow-hidden border rounded-3xl border-primary">
                                        <Image
                                            className="object-cover w-full h-full rounded-2xl"
                                            src="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80"
                                            alt=""
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="inline-flex items-start justify-between w-full">
                                        <div className="space-y-1">
                                            <h3 className="font-caveat leading-6 text-primary" style={{ fontSize: '1.3rem' }}>
                                                Melonia Tusk
                                            </h3>
                                            <p className="text-gray-800" style={{ fontSize: '0.8rem' }}>
                                                Founder of Fesla
                                            </p>
                                        </div>
                                        <div className='mx-4'>
                                            <ul role="list" className="flex  space-x-4">
                                                <li>
                                                    <a href="#_" className="text-primary">
                                                        <FaDribbble name="logo-dribbble" role="img" className="md hydrated" aria-label="logo dribbble" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#_" className="text-primary">
                                                        <span className="sr-only"> Twitter </span>
                                                        <FaTwitter name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="space-y-4  w-[320px] h-[320px] sm:h-full sm:w-full" >
                                    <div className=" aspect-[3/2] p-2 overflow-hidden border rounded-3xl border-primary">
                                        <Image
                                            className="object-cover w-full h-full rounded-2xl"
                                            src="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80"
                                            alt=""
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="inline-flex items-start justify-between w-full">
                                        <div className="space-y-1">
                                            <h3 className="font-caveat leading-6 text-primary" style={{ fontSize: '1.3rem' }}>
                                                Melonia Tusk
                                            </h3>
                                            <p className="text-gray-800" style={{ fontSize: '0.8rem' }}>
                                                Founder of Fesla
                                            </p>
                                        </div>
                                        <div className='mx-4'>
                                            <ul role="list" className="flex  space-x-4">
                                                <li>
                                                    <a href="#_" className="text-primary">
                                                        <FaDribbble name="logo-dribbble" role="img" className="md hydrated" aria-label="logo dribbble" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#_" className="text-primary">
                                                        <span className="sr-only"> Twitter </span>
                                                        <FaTwitter name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="space-y-4  w-[320px] h-[320px] sm:h-full sm:w-full" >
                                    <div className=" aspect-[3/2] p-2 overflow-hidden border rounded-3xl border-primary">
                                        <Image
                                            className="object-cover w-full h-full rounded-2xl"
                                            src="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80"
                                            alt=""
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="inline-flex items-start justify-between w-full">
                                        <div className="space-y-1">
                                            <h3 className="font-caveat leading-6 text-primary" style={{ fontSize: '1.3rem' }}>
                                                Melonia Tusk
                                            </h3>
                                            <p className="text-gray-800" style={{ fontSize: '0.8rem' }}>
                                                Founder of Fesla
                                            </p>
                                        </div>
                                        <div className='mx-4'>
                                            <ul role="list" className="flex  space-x-4">
                                                <li>
                                                    <a href="#_" className="text-primary">
                                                        <FaDribbble name="logo-dribbble" role="img" className="md hydrated" aria-label="logo dribbble" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#_" className="text-primary">
                                                        <span className="sr-only"> Twitter </span>
                                                        <FaTwitter name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>




                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Team