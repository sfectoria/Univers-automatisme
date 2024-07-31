"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

export const metadata = {
  title: "Slider with Progress Indicator - Cruip Tutorials",
  description: "Page description",
};


import SilderIcon01 from "../../../public/ps-icon-01.svg";
import SilderIcon02 from "../../../public/ps-icon-02.svg";
import SilderIcon03 from "../../../public/ps-icon-03.svg";
import SilderIcon04 from "../../../public/ps-icon-04.svg";

import Banner from "@/components/banner.jsx";
import AOS from "aos";
import 'aos/dist/aos.css';
export default function ProgressSlider() {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,

  //   });
  //   AOS.refresh();
  // }, []);


  const items = [
    {
      img: [
        "/family-product/masonry-01.jpg",
        "/family-product/masonry-02.jpg",
        "/family-product/masonry-03.jpg",
        "/family-product/masonry-04.jpg",
        "/family-product/masonry-05.jpg",
        "/family-product/masonry-06.jpg",
        "/family-product/masonry-07.jpg",
        "/family-product/masonry-08.jpg",
        "/family-product/masonry-09.jpg",
        "/family-product/masonry-10.jpg",
        "/family-product/masonry-11.jpg",
        "/family-product/masonry-12.jpg",
      ],
      desc: "Pneumatique",
      buttonIcon: SilderIcon01,
    },
    {
      img: [
        "/family-product/masonry-01.jpg",
        "/family-product/masonry-02.jpg",
        "/family-product/masonry-03.jpg",
        "/family-product/masonry-04.jpg",
        "/family-product/masonry-05.jpg",
        "/family-product/masonry-06.jpg",
        "/family-product/masonry-07.jpg",
        "/family-product/masonry-08.jpg",
        "/family-product/masonry-09.jpg",
        "/family-product/masonry-10.jpg",
        "/family-product/masonry-11.jpg",
        "/family-product/masonry-12.jpg",
      ],
      desc: "Instrumentation",
      buttonIcon: SilderIcon02,
    },
    {
      img: [
        "/family-product/masonry-01.jpg",
        "/family-product/masonry-02.jpg",
        "/family-product/masonry-03.jpg",
        "/family-product/masonry-04.jpg",
        "/family-product/masonry-05.jpg",
        "/family-product/masonry-06.jpg",
        "/family-product/masonry-07.jpg",
        "/family-product/masonry-08.jpg",
        "/family-product/masonry-09.jpg",
        "/family-product/masonry-10.jpg",
        "/family-product/masonry-11.jpg",
        "/family-product/masonry-12.jpg",
      ],
      desc: " Controle des fluides",
      buttonIcon: SilderIcon03,
    },
    {
      img: [
        "/family-product/masonry-01.jpg",
        "/family-product/masonry-02.jpg",
        "/family-product/masonry-03.jpg",
        "/family-product/masonry-04.jpg",
        "/family-product/masonry-05.jpg",
        "/family-product/masonry-06.jpg",
        "/family-product/masonry-07.jpg",
        "/family-product/masonry-08.jpg",
        "/family-product/masonry-09.jpg",
        "/family-product/masonry-10.jpg",
        "/family-product/masonry-11.jpg",
        "/family-product/masonry-12.jpg",
      ],
      desc: "Technique du vide",
      buttonIcon: SilderIcon04,
    },
  ];
  const duration = 5000;
  const itemsRef = useRef(null);
  const frame = useRef(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };



  return (
    <>
      <section className="relative min-h-screen   flex flex-col justify-center bg-slate-50 overflow-hidden " >
        <h2 className="section-title mt-12 mb-12 xl:my-12 text-center mx-auto">
          Gamme  <span className=' font-caveat '>de produits </span>
        </h2>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-24 ">
          <div className="flex justify-center ">
            <div className="w-full max-w-5xl mx-auto text-center">
              {/* Item image */}
              <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 ">
                {items.map((item, index) => (
                  <button
                    key={index}
                    className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
                    onClick={() => {
                      setActive(index);
                      setProgress(0);
                    }}
                  >
                    <span
                      className={`text-center flex flex-col items-center ${active === index
                        ? ""
                        : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
                        }`}
                    >
                      <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                        <Image src={item.buttonIcon} alt={item.desc} />
                      </span>
                      <span className="block text-sm font-medium text-slate-900 mb-2">
                        {item.desc}
                      </span>
                      <span
                        className="block relative w-full bg-slate-400 h-1 rounded-full"
                        role="progressbar"
                        aria-valuenow={active === index ? progress : 0}
                      >
                        <span
                          className="absolute inset-0 bg-secondGreen-500 rounded-[inherit]"
                          style={{
                            width: active === index ? `${progress}%` : "0%",
                          }}
                        ></span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>
              <div className="transition-all duration-150 delay-300 ease-in-out">
                <div className="relative flex flex-col" ref={itemsRef}>
                  {items.map((item, index) => (
                    <Transition
                      key={index}
                      show={active === index}
                      enter="transition ease-in-out duration-500 delay-400"
                      enterFrom="opacity-0 scale-105"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in-out duration-300"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        {[0, 1, 2, 3].map((colIndex) => (
                          <div className="grid gap-4" key={colIndex}>
                            {item.img.slice(colIndex * 3, (colIndex + 1) * 3).map((img, i) => (
                              <div key={i}>
                                <Image
                                  className="h-auto max-w-full rounded-lg"
                                  height={400}
                                  width={400}
                                  src={img}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </Transition>
                  ))}
                </div>
              </div>
              {/* Buttons */}
            </div>
          </div>
        </div>
      </section>

      <Banner
        tutorialUrl="https://cruip.com/create-a-carousel-with-progress-indicators-using-tailwind-and-nextjs/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/progress-slider.tsx"
      />
    </>
  );
}
