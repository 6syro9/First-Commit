import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='bg-black text-[#BCBCBC] text-sm py-10 text-center items-center justify-center'>
        <div className='flex justify-center'><Image src={'/logosaas.png'} width={120} height={120} alt='logo' className='h-24 w-24'></Image></div>
        <div>
                  <nav className='h flex  gap-6 items-center justify-center '>
                      <a href='#' className=''>About</a>
                      <a href='#' className=''>Features</a>
                      <a href='#' className=''>Customers</a>
                      <a href='#' className=''>Help</a>
                  </nav>
        </div>
        <div className=''>
          <div className='flex w-8 h-8'>
            <Image src={'/social-insta.svg'} width={220} height={220} alt='instagram' />
            <Image src={'/social-x.svg'} width={220} height={220} alt='x'></Image>
            <Image src={'/social-pin.svg'} width={220} height={220} alt='x'></Image>
            <Image src={'/social-linkedin.svg'} width={220} height={220} alt='x'></Image>
            <Image src={'/social-youtube.svg'} width={220} height={220} alt='x'></Image>
          </div>
          <p>&copy; 2024 Your Company, Inc. All rights reserved.</p>

        </div>

    </section>
  )
}

export default Footer
