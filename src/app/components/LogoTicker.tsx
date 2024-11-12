'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LogoTicker = () => {
  return (
    <div className="py-6 bg-white md:py-12">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className="container">

          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              x: "-100%", 
            }}
            transition={{
              duration: 18, 
              repeat: Infinity, 
              ease: "linear", 
            }}
          >
            {/* Logos for the ticker */}
            <Image src="/logo-acme.png" width={200} height={200} alt="Acme" />
            <Image src="/logo-quantum.png" width={200} height={200} alt="Quantum" />
            <Image src="/logo-celestial.png" width={200} height={200} alt="Celestial" />
            <Image src="/logo-pulse.png" width={200} height={200} alt="Pulse" />
            <Image src="/logo-apex.png" width={200} height={200} alt="Apex" />

            {/* Second set of logos to loop */}
            <Image src="/logo-acme.png" width={200} height={200} alt="Acme" />
            <Image src="/logo-quantum.png" width={200} height={200} alt="Quantum" />
            <Image src="/logo-celestial.png" width={200} height={200} alt="Celestial" />
            <Image src="/logo-pulse.png" width={200} height={200} alt="Pulse" />
            <Image src="/logo-apex.png" width={200} height={200} alt="Apex" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
