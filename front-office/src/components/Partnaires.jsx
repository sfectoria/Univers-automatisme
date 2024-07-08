'use client';

import Image from 'next/image';
import vuo from "../../public/partnaires/vuo.png";
import aidro from "../../public/partnaires/aidro.png";
import burket from "../../public/partnaires/burket.png";
import pixsys from "../../public/partnaires/pixsys.png";
import smc from "../../public/partnaires/smc.png";

const Partnaires = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className=' relative font-inter antialiased'>
      <h2 className='section-title mb-12 text-center mx-auto'>Partnaires</h2>
        <main className="relative  flex flex-col justify-center bg-green-500 overflow-hidden">
          <div className="w-full mx-auto py-20">
            <div className="text-center">
              <div
                x-data="{}"
                x-init="$nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
              >
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  <li>
                    <Image src={vuo} alt="Vuo" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={pixsys} alt="Pixsys" width={180} height={180} />
                  </li>
                  <li>
                    <Image src={aidro} alt="Aidro" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={burket} alt="Burket" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={smc} alt="SMC" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={vuo} alt="Vuo" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={pixsys} alt="Pixsys" width={180} height={180} />
                  </li>
                  <li>
                    <Image src={aidro} alt="Aidro" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={burket} alt="Burket" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={smc} alt="SMC" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={vuo} alt="Vuo" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={pixsys} alt="Pixsys" width={180} height={180} />
                  </li>
                  <li>
                    <Image src={aidro} alt="Aidro" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={burket} alt="Burket" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={smc} alt="SMC" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={vuo} alt="Vuo" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={pixsys} alt="Pixsys" width={180} height={180} />
                  </li>
                  <li>
                    <Image src={aidro} alt="Aidro" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={burket} alt="Burket" width={128} height={128} />
                  </li>
                  <li>
                    <Image src={smc} alt="SMC" width={128} height={128} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Partnaires;
