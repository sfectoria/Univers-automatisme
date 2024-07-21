"use client";
import React, { useEffect } from 'react'
import { ModalVideo, useToggle } from '@baskvava/react-video-modal';
import { motion } from 'framer-motion';
import picture from '../images/picture.png'
import light from '../images/light.jpg'
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import Image from 'next/image';
import AOS from "aos";
import 'aos/dist/aos.css';
function Head() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,

        });
        AOS.refresh();
    }, []);



    const hero_content = {
        title: ["Univers", "Automatisme"],
        description:
            "Univers Automatisme est votre partenaire d'excellence pour l'intégration des nouvelles technologies.",
        button: "Get Started",
        play_button: "View Demo",
    };
    const { isOpen, toggle, close } = useToggle();

    return (
        <>
            <section className="head py-12 xl:py-24 lg:h-[84vh]   relative flex min-h-full w-full flex-col sm:place-content-center  px-4" >
                {/* Patterns */}
                <div className="absolute right-0 hidden min-h-full w-1/4 flex-col justify-center bg-gradient-to-l from-[#EAF2AE] to-primary lg:flex">
                    {/* right patterns */}
                    <div className="absolute h-full w-full overflow-clip">
                        <div className="animation-delay-4000 absolute -right-1/4 top-1/4 h-16 w-[40rem] animate-blob overflow-clip bg-purple-400 opacity-40 blur-[80px] "></div>
                        <div className="animation-delay-2000 absolute -right-1/4 top-1/4 h-16 w-[40rem] rotate-45 animate-plug  overflow-clip bg-[#b7ebbf] opacity-40 blur-[80px] "></div>
                    </div>
                    {/* Circle */}
                    <div className="absolute -left-full aspect-square h-[26rem] rounded-full  bg-[#EAF2AE] lg:-left-1/2">
                        {/* pop buttons */}
                        <div className="absolute -top-2 -left-[55%]">
                            <svg
                                viewBox="0 0 139 76"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-28 w-auto"
                                stroke="2"
                            >
                                <path
                                    d="M0.510223 74.8816C0.446128 75.1502 0.611913 75.4199 0.880513 75.484C1.14911 75.5481 1.41882 75.3823 1.48291 75.1137L0.510223 74.8816ZM65.3275 19.8927L65.4565 19.4096L65.3275 19.8927ZM137.723 8.44723C137.972 8.32821 138.077 8.02972 137.958 7.78055L136.019 3.72C135.9 3.47083 135.601 3.36532 135.352 3.48434C135.103 3.60336 134.997 3.90184 135.116 4.15102L136.841 7.76039L133.231 9.48446C132.982 9.60349 132.876 9.90197 132.995 10.1511C133.115 10.4003 133.413 10.5058 133.662 10.3868L137.723 8.44723ZM1.48291 75.1137C6.72361 53.1517 14.4425 37.2712 24.933 27.9839C35.3897 18.7265 48.666 15.9632 65.1986 20.3757L65.4565 19.4096C48.6615 14.927 35.0221 17.7163 24.2701 27.2351C13.552 36.724 5.76907 52.8435 0.510223 74.8816L1.48291 75.1137ZM65.1986 20.3757C76.1825 23.3073 82.216 27.8129 84.7462 32.7042C87.2641 37.5717 86.3794 42.9573 83.2109 47.8364C76.8481 57.6342 61.4327 65.1136 47.122 61.5152L46.8781 62.485C61.628 66.1939 77.4679 58.5158 84.0495 48.3811C87.3531 43.294 88.363 37.5196 85.6344 32.2447C82.918 26.9936 76.5642 22.3742 65.4565 19.4096L65.1986 20.3757ZM47.122 61.5152C43.6105 60.6322 41.056 58.7008 39.4136 56.0604C37.7659 53.4114 37.017 50.0165 37.188 46.1914C37.5303 38.536 41.5571 29.249 49.2048 21.1063C64.4713 4.85188 94.1464 -6.80109 137.341 8.46747L137.674 7.52464C94.16 -7.85694 64.0512 3.83847 48.4759 20.4217C40.7028 28.6979 36.5442 38.2022 36.189 46.1467C36.0113 50.1215 36.7856 53.7287 38.5645 56.5886C40.3487 59.457 43.1244 61.5411 46.8781 62.485L47.122 61.5152Z"
                                    fill="black"
                                />
                            </svg>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}


                        >

                            <div className="absolute -top-2 -left-2 flex cursor-pointer flex-col rounded-xl bg-primary px-8 py-6 text-center transition hover:-translate-y-1 hover:shadow-md">
                                <span className="text-4xl font-bold text-[#fff]">6k</span>
                                <span className="text-base text-[#fff]">Clients</span>
                            </div>
                        </motion.div>

                     
                        <div className="absolute bottom-4 -left-[34%] z-9 flex cursor-pointer flex-row items-center space-x-4 rounded-xl bg-white px-4 py-2 text-center shadow transition hover:-translate-y-1 hover:shadow-md">
                            <span className="aspect-square h-8 overflow-clip rounded-full bg-gray-200">
                                <Image src={light} alt="Idea" loading="eager" />
                            </span>
                            <span className="text-sm font-bold text-primary">
                                Bring your Ideas to life
                            </span>
                        </div>
                    
                        <div className="absolute bottom-1/4 -right-16 z-10 flex cursor-pointer flex-col rounded-xl bg-white px-10 py-4 text-center transition hover:-translate-y-1 hover:shadow-md xl:-right-1/4">
                            <span className="text-5xl font-bold text-primary">40%</span>
                            <span className="text-base text-primary">Market</span>
                        </div>

                        {/* Image */}
                        <div className="h-full w-full overflow-hidden rounded-full ">


                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                                <Image

                                    src={picture}
                                    alt="Picture of the lady with book"
                                    className="scale-[.70] z-8"
                                    loading="eager"
                                />
                            </motion.div>

                        </div>
                    </div>
                </div>

                {/* Content */}

                <div className=" z-8 mx-11 flex w-full max-w-[1080px] flex-col space-y-8">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>


                        <h1 className="content flex  flex-col space-y-1 text-4xl font-bold sm:text-5xl xl:text-7xl text-primary">
                            {hero_content?.title &&
                                hero_content?.title.map((item, i) => <span key={i} >{item}</span>)}
                        </h1>
                        <p className="content  subtitle text-[14px]  text-gray-600 xl:max-w-lg xl:text-xl mt-4 ">
                            {hero_content?.description}
                        </p>
                    </motion.div>


                    {/* Buttons */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <div className="  flex flex-col  mx-auto gap-y-3 md:flex-row gap-x-8  xl:mx-0 mb-12  ">


                            <Button className=' gap-x-2 lg:min-w-[166px] w-[140px]' onClick={() => router.push('/contact')}>
                                Contact us <Send size={18} />
                            </Button>
                            <div >
                                <button className=" group flex flex-row items-center lg:min-w-[166px] min-w-[100px] space-x-4" onClick={toggle}>
                                    <div className="rounded-full bg-primary  p-4 group-hover:bg-primary/80">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5 text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-primary">{hero_content?.play_button}</span>

                                </button>

                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>
            <ModalVideo
                className="modal-video"
                title="video"
                header="About univers automatisme"
                controls="default"
                max-width={800}
                isOpen={isOpen}
                onClosed={close}
                url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
        </>
    )
}

export default Head