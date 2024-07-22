import React from "react";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ryan Davis",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+012 345 6789",
  },
  {
    icon: <MailIcon size={20} />,
    text: "youremail@email.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "321 Blue Avenue, NY, USA",
  },
];

const sectors = [
  {
    name: "Pneumatic",
    description: "Specializing in systems and components that use.",
    svg: `
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
      </svg>
    `
  },
  {
    name: "Hydraulic",
    description: "Providing solutions that utilize fluid power .",
    svg: `
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 13.5c-1.1 0-2 .9-2 2v4c0 .55-.45 1-1 1h-2.5v-4h-2v4H7c-.55 0-1-.45-1-1v-4c0-1.1-.9-2-2-2H3v-1h.5c1.1 0 2-.9 2-2V9c0-1.1.9-2 2-2h2V6h2v1h2c1.1 0 2 .9 2 2v1c1.1 0 2 .9 2 2h.5v1h-1.5zM14 7v2H9V7h5zm-1 8v-2h-4v2h4z" fill="currentColor"/>
      </svg>
    `
  },
  {
    name: "Instrumentation & Control",
    description: "Focusing on the measurement, monitoring.",
    svg: `
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 15.07v4.25c0 .41-.34.75-.75.75H5.75c-.41 0-.75-.34-.75-.75v-4.25c-1.47-.48-2.5-1.85-2.5-3.42 0-2.01 1.62-3.63 3.63-3.63 1.54 0 2.88.98 3.37 2.4h.13c.5-1.42 1.84-2.4 3.38-2.4 2.01 0 3.63 1.62 3.63 3.63 0 1.57-1.03 2.94-2.5 3.42zM16.38 8.95c-.55 0-1 .45-1 1s.45 1 1 1h.87c-.09 2.31-1.89 4.19-4.13 4.36v1.24h2v1h-2v1.51h-1V17.55H11v-1h2v-1.51c-2.24-.18-4.04-2.05-4.13-4.36h.87c.55 0 1-.45 1-1s-.45-1-1-1H7.62c-.5 0-.88-.39-.88-.88V7.5c0-.5.39-.88.88-.88h1.75c.5 0 .88.39.88.88v.57h3.5v-.57c0-.5.39-.88.88-.88h1.75c.5 0 .88.39.88.88v1.57c0 .49-.39.88-.88.88zM14.25 2c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75h.75V5h-.75V2zm-4.5 0c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75h.75V5h-.75V2zM12 9.88l.69-.73c.29-.29.76-.29 1.05 0l2.49 2.5c.29.29.29.76 0 1.05-.29.29-.76.29-1.05 0L13.12 12H10.88l-.06.08-.79.81c-.29.29-.76.29-1.05 0-.29-.29-.29-.76 0-1.05l.78-.8-.71-.74c-.29-.29-.29-.76 0-1.05s.76-.29 1.05 0L12 9.88z" fill="currentColor"/>
      </svg>
    `
  },
  {
    name: "Vacuum Technology",
    description: "Expertise in creating and maintaining low-pressure environments.",
    svg: `
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10.27V6c0-2.21-1.79-4-4-4H7C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4v-4.27l-2.23-.23L21 10.27zm-3.9-4.23H6.9V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v.04zm-8 3.22l1.17 1.5-1.17 1.5V8.26zm3.79 2.76L12 9.5l-1.88 2.52h3.75zM7 17.7c-1.1 0-2-.9-2-2v-1.18h2v1.17c0 .55.45 1 1 1 .55 0 1-.45 1-1V8h1v7.7h.5v-4.2h1v4.2h1.5V8h1v7.7h1v-3.19h2V15.7c0 1.1-.9 2-2 2H7zm7-3.2h-1V8h1v6.5z" fill="currentColor"/>
      </svg>
    `
  }
];




export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="font-PlayfairDisplay section-title mb-8 xl:mb-16 text-center mx-auto">
          About <span className=" font-caveat ">Us</span>
        </h2>

        <div className="flex flex-col xl:flex-row ">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative ">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative items-center"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="company-info">
              <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="secteur-d'activité">
                secteur-d'activité
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="company-info"
                >
                  Company Info
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8 ">
         
                <TabsContent value="secteur-d'activité" cl>
                  <div class="relative font-inter antialiased">
                    <main class="  flex flex-col justify-center bg-slate-50 overflow-hidden">
                      <div class="w-full grid max-w-6xl mx-auto px-4 md:px-6 py-1 sm:grid-cols-2 gap-4">
                      {sectors.map((sector, index) => (
                          <div key={index} className="group  relative cursor-pointer overflow-hidden bg-white px-3 pt-5 pb-10 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:max-w-sm rounded-bl-[20%]  rounded-tr-[20%]  mb-4">
                            <span className="absolute top-5 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
                            <div className="relative z-10 mx-auto max-w-md">
                              <span className="grid h-20 w-20  place-items-center rounded-full bg-primary transition-all duration-300 group-hover:primary">
                                <div dangerouslySetInnerHTML={{ __html: sector.svg }} />
                              </span>
                              <div className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p className="font-semibold">{sector.name}</p>
                                <p>{sector.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </main>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="company-info">
                  <div class="relative font-inter antialiased">
                    <main class="  flex flex-col justify-center bg-slate-50 overflow-hidden">
                      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-5">
                        <div class="w-full max-w-3xl mx-auto">
                          <div class="-my-6">
                            <div class="relative pl-8 sm:pl-32 py-6 group">
                              <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                                The origin
                              </div>

                              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                  JAN, 2000
                                </time>
                                <div class="text-xl font-bold text-slate-900">
                                  Univers Automatisme was founded in Tunis,
                                  Tunisia.
                                </div>
                              </div>

                              <div class="text-slate-500">
                                We specialize in importing and installing
                                pneumatic, electric, and hydraulic components.
                              </div>
                            </div>

                            <div class="relative pl-8 sm:pl-32 py-6 group">
                              <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                                The milestone
                              </div>

                              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                  May, 2021
                                </time>
                                <div class="text-xl font-bold text-slate-900">
                                  Reached 1k customers.
                                </div>
                              </div>

                              <div class="text-slate-500">
                                Our focus on quality products and service has
                                built a strong reputation.
                              </div>
                            </div>

                            <div class="relative pl-8 sm:pl-32 py-6 group">
                              <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                                The acquisitions
                              </div>

                              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                  MAY, 2015
                                </time>
                                <div class="text-xl font-bold text-slate-900">
                                  Acquired several local automation companies.
                                </div>
                              </div>

                              <div class="text-slate-500">
                                This expansion increased our market share and
                                product range.
                              </div>
                            </div>

                            {/* <div class="relative pl-8 sm:pl-32 py-6 group">
                                <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                                  The IPO
                                </div>

                                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                    May, 2023
                                  </time>
                                  <div class="text-xl font-bold text-slate-900">
                                    Acme went public at the New York Stock
                                    Exchange
                                  </div>
                                </div>

                                <div class="text-slate-500">
                                  Pretium lectus quam id leo. Urna et pharetra
                                  pharetra massa massa. Adipiscing enim eu neque
                                  aliquam vestibulum morbi blandit cursus risus.
                                </div>
                              </div> */}
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
