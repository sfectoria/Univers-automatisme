'use client';
import { GanttChartSquare, Blocks, Gem } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi libero quidem sit deserunt fuga.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi libero quidem sit deserunt fuga.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi libero quidem sit deserunt fuga.',
  },
  
];
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContents } from '@/store/contents';

const Services = () => {
const content=useSelector((state)=>state.contents.items)
const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchContents())
}, [dispatch])


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
    <section className='mb-12 xl:mb-36   ' data-aos="fade-right" >
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
         <span className=' font-caveat '>Nos</span>  Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3   justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {content.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
              
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon1}
                  </div>
                </CardHeader>
                {/* <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent> */}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
