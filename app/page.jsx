"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import {FiDownload} from 'react-icons/fi'

//components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"


const Home = () => {

  const downloadCV = async() => {
    window.location.href = "https://cloud.appwrite.io/v1/storage/buckets/6798738100064f37f961/files/6798739d003e7efbcce9/view?project=679856db0007bfb500e0&project=679856db0007bfb500e0&mode=admin"
  }

  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none  ">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">Hello I'm  <br/> <span className="text-accent">Abhishek Pawara</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button  
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                onClick={downloadCV}
              >
                <span>Download CV</span>
                <FiDownload  className="text-xl "/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home

