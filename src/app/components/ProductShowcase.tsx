'use client';
import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';



const ProductShowcase = () => {
    const sectionRef = useRef(null);
    const {scrollYProgress} =  useScroll({
        target: sectionRef,
        offset:['start end', 'end start']
    })
    const translateY = useTransform(scrollYProgress, [0,1], [150,-150])
  return (
   <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
        <div className='container'>
            <div className='flex justify-center'>
                <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1.5 rounded-lg bg-white/50 backdrop-blur-sm'> Boost your Productivity</div>
            </div>
            <h2 className=' md:text-[54px] md:leading-[60px] text-center text-3xl font-bold tracking-tighter bg-gradient-to-r from-black to-[#001E80] bg-clip-text text-transparent mt-6'> A more effective way to track progress</h2>
            <p className='  text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'> Effortlessly turn your ideas into a full functional, responsive, SaaS website in just minutes </p>
            <motion.div className='flex justify-center relative'>
                <Image src={'/product-image.png'} width={900} height={900} alt='product-image' className='mt-10'/>
                <motion.img style={{translateY}} src={'/pyramid.png'} width={262} height={262} alt='pyramid image' className='absolute -right-36 -top-32'/>
                <motion.img style={{translateY}} src={'/tube.png'} alt='tube image' height={248} width={248} className='absolute bottom-24 -left-36'/>
                
            </motion.div>
        </div>
    </section>
  )
}

export default ProductShowcase
