"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SilderIcon01 from '../../../public/ps-icon-01.svg';
import SilderIcon02 from '../../../public/ps-icon-02.svg';
import SilderIcon03 from '../../../public/ps-icon-03.svg';
import SilderIcon04 from '../../../public/ps-icon-04.svg';
import Banner from '@/components/banner.jsx';

export const metadata = {
  title: "Slider with Progress Indicator - Cruip Tutorials",
  description: "Page description",
};

export default function ProgressSlider() {
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
      desc: "Controle des fluides",
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

  const duration = 5000; // Duration in milliseconds
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    resetInterval();

    timeoutRef.current = setTimeout(() => {
      setActive((prevActive) => (prevActive + 1) % items.length);
    }, duration);

    setProgress(0);
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 100 / (duration / 100)));
    }, 100);

    return () => {
      resetTimeout();
      resetInterval();
    };
  }, [active, items.length]);

  const handleClick = (index) => {
    resetTimeout();
    resetInterval();
    setActive(index);
    setProgress(0);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <h2 className="section-title mt-12 mb-12 xl:my-12 text-center mx-auto">
        Gamme <span className="font-caveat">de produits</span>
      </h2>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-24">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {items.map((item, index) => (
                <button
                  key={index}
                  className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
                  onClick={() => handleClick(index)}
                >
                  <span
                    className={`text-center flex flex-col items-center ${
                      active === index
                        ? ''
                        : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'
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
                        style={{ width: active === index ? `${progress}%` : '0%' }}
                      ></span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="relative flex flex-col">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 ${
                    active === index ? 'block' : 'hidden'
                  }`}
                >
                  {[0, 1, 2, 3].map((colIndex) => (
                    <div className="grid gap-4" key={colIndex}>
                      {item.img
                        .slice(colIndex * 3, (colIndex + 1) * 3)
                        .map((img, i) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
      <Banner
        tutorialUrl="https://cruip.com/create-a-carousel-with-progress-indicators-using-tailwind-and-nextjs/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/progress-slider.tsx"
      />
    </section>
  );
}
