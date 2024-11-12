'use client';
import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion';


const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target:sectionRef,
    offset:['start end', 'end start'],
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])
  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
        <div className='container'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-black/85 to-slate-500 bg-clip-text text-transparent '> sign up for free today</h2>
                <p className='text-lg tracking-tigth text-center'> Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                <motion.img 
                style={{translateY}}
                src={'/star.png'} width={360} height={300} alt='star motion.img'
                 className='absolute -left-52 '/>
                <motion.img
                style={
                  {translateY}
                } src={'/spring.png'} width={360} height={300} alt='star image' className='absolute -right-24 '/>
            </div> 
            <div className='flex justify-center items-center mt-10'>
                <button className='bg-black text-white p-2 rounded-lg mx-6'> Get for Free</button>
                <button> Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default CallToAction
