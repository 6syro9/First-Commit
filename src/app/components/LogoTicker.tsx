'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const LogoTicker = () => {
  return (
    <div className='py-6 bg-white md:py-12'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <div className='container'>
                  <motion.div className='flex gap-14 flex-none pr-14' animate={{translateX:"-100%"}}
                  transition={{
                    duration:18,
                    repeat:Infinity,
                    ease:"linear",
                    repeatType:"loop"

                  }}>
                    <Image src={'/logo-acme.png'} width={200} height={200} alt=''></Image>
                    <Image src={'/logo-quantum.png'} width={200} height={200} alt=''></Image>
                    <Image src={'/logo-celestial.png'} width={200} height={200} alt=''></Image>
                    <Image src={'/logo-pulse.png'} width={200} height={200} alt=''></Image>
                    <Image src={'/logo-apex.png'} width={200} height={200} alt=''></Image>
                  {/* second set of logos for the animation */}
                    <Image src={'/logo-acme.png'} width={200} height={200} alt=''></Image>
                    <Image src={'/logo-quantum.png'} width={200} height={200} alt=''></Image>
                    <Image src={'/logo-celestial.png'} width={200} height={200} alt=''></Image>
                    <Image src={'/logo-pulse.png'} width={200} height={200} alt=''></Image>
                    <Image src={'/logo-apex.png'} width={200} height={200} alt=''></Image>
                    </motion.div>
                </div> 
        </div>        
    </div>
  )
}

export default LogoTicker
