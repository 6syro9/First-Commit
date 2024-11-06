import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm bg-white/50 z-50'>
        <div className='bg-black p-3 text-white flex justify-center items-center gap-3'>
            <h1 className='text-slate-200'>Streamline your workflow and boost your productivity!</h1>
            <p className='bg-gradient-to-l from-slate-400 to-slate-300 bg-clip-text text-transparent font-bold'> Get started for free!</p>
        </div>
        <div className='p-2'>
            <div className='container flex justify-between items-center'>
                <Image src="/logosaas.png" width={40} height={40} alt='logo'/>
                <div className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <nav className='hidden md:flex gap-10 text-black/660 items-center'>
                    <a href='#' className=''>Home</a>
                    <a href='#' className=''>Features</a>
                    <a href='#' className=''>Pricing</a>
                    <a href='#' className=''>Contact</a>
                    <div className='bg-black rounded-xl'>
                        <button className='bg-gradient-to-l from-slate-400 to-slate-300 bg-clip-text text-transparent px-3 py-2 rounded-lg font-semibold inline-flex justify-center'> Get for free</button>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header