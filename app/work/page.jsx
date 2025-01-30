"use client"

// components
import WorkSliderBtns from '@/components/WorkSliderBtns'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    num: "01",
    category: 'Fullstack',
    title: 'Huwistyle E-Commerce Platform',
    description: "Huwistyle Apparel is an e-commerce platform specializing in fashion and lifestyle products. The project included user authentication, product management, order processing, and payment integration.",
    stack: [
      {
        name: "React"
      },
      {
        name: 'Node'
      },
      {
        name: 'Express'
      },
      {
        name: 'MongoDB'
      },
      {
        name: 'Tailwind CSS'
      },
      {
        name: 'Redux-Toolkit'
      },
    ],
    image: '/work/huwistyle.png',
    live: '',
    github: ""
  },
  {
    num: "02",
    category: 'Fullstack',
    title: 'SVMS NGO Website',
    description: "SVMS is an NGO website designed to showcase and support various initiatives for tribal communities in Shirpur tehsil. The platform highlights projects focused on education, skill development, environmental conservation, and leadership empowerment. The site also features a dynamic content management system for easy updates and scalability.",
    stack: [
      {
        name: "React"
      },
      {
        name: 'Node'
      },
      {
        name: 'Express'
      },
      {
        name: 'MongoDB'
      },
      {
        name: 'Tailwind CSS'
      },
      
    ],
    image: '/work/svms.png',
    live: '',
    github: ""
  }
]


const Work = () => {

  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex
    // update project state with the new slide
    setProject(projects[currentIndex])
  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: 'easeIn'} }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              {/* project category */}
              <h2 className='text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize '>{project.category} project</h2>
              {/* project title */}
              <h3 className='text-2xl text-accent '>{project.title}</h3>
              {/* project description */}
              <p className='text-white/60 '>{project.description}</p>
              {/* stack */}
              <ul className='grid grid-cols-3 gap-y-2'>
                {project.stack.map((item, index) => {
                  return <li key={index} className='text-xl text-accent ' >
                    {item.name}
                    
                  </li>
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent ' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent ' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
              {projects.map((item, index)=> {
                return <SwiperSlide key={index} className='w-full '>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay   */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill className='object-contain' alt=''/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles={"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none  "} btnStyles={"bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "}/>
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Work
