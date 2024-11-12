'use client';
import React from 'react'
import { motion } from 'framer-motion';


const Hero = () => {
  // const heroRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset:["start end", "end start"] 
  // });

  // const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  return (
        <section className='pt-8 pb-20 md:pt-16 md:pb-32 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col lg:flex-row items-start gap-12'>
              {/* Left content column */}
              <div className='flex-1 space-y-8'>
                <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1.5 rounded-lg bg-white/50 backdrop-blur-sm'>
                  Version 2.0 is here
                </div>
                
                <h1 className='text-7xl md:text-7xl font-bold tracking-tighter bg-gradient-to-l from-black to-[#001E80] bg-clip-text text-transparent max-w-xl'>
                  Pathway to productivity
                </h1>
                
                <p className='text-xl text-[#010D3E] tracking-tight max-w-xl'>
                  Celebrate the joy of accomplishment with an app designed to track your progress, 
                  motivate your effort, and celebrate your successes.
                </p>
    
                {/* Buttons */}
                <div className='flex gap-4 pt-2'>
                  <button className="bg-black px-6 py-3 rounded-lg font-semibold text-white hover:bg-black/90 transition-colors">
                    Get for free
                  </button>
                  <button className="px-6 py-3 rounded-lg border border-[#222]/20 hover:border-[#222]/40 transition-colors bg-white/50 backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>
    
              {/* Right images column */}
              <div className='flex-1 relative md:h-[600px]'>
                {/* Main cog image */}
                <div className='relative w-full h-full'>
                  < motion.img 
                    src='/cog.png' 
                    alt='cog' 
                    width={650} 
                    height={650}
                    className='object-contain absolute  '
                    animate={{translateY:[-30, 30],}}
                    transition={{ repeat: Infinity,
                                  repeatType:"mirror",
                                  duration: 4,
                                  ease:"easeInOut"

                    }}  
                  />
                </div>
                
                {/* Floating cylinder image */}
                <div className='absolute -left-28 -top-12 hidden md:block'>
                  < motion.img
                    src='/cylinder.png' 
                    width={220} 
                    height={220} 
                    alt='cylinder image' 

                   

                  />
                </div>
                <div>
                    <motion.img
                     src={'/noodle.png'} width={220} height={220} className=' hidden lg:block absolute top-[500px] left-[500px] rotate-[30deg]' alt='noodle image'
                     
                     />
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}

export default Hero
