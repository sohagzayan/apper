"use client"
import React from 'react'
import HeroSearch from '../hero-search/HeroSearch'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const HeroSection = () => {
    return (
        <div className='wrapper relative'>
            <div className='grid relative grid-cols-12   items-center  '>
                <div className='lg:col-span-7 col-span-12' >
                    <h1 className='text-purple lg:text-[55px] text-[40px] -tracking-[1px] leading-tight font-bold'>
                        Best way to <span className='text-primary'>manage your customers.</span>
                    </h1>
                    <p className='p-paragraph'>Find Jobs, Employment & Career Opportunities</p>
                    <HeroSearch />
                </div >
                <div className='lg:col-span-5 col-span-12 w-full '>
                    <div className='relative w-full after:absolute after:w-[300px] after:h-[300px] after:rounded-full after:bg-primary after:top-[50%] after:left-[50%] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:-z-10 z-20 flex justify-center'>
                        <Image src="/assets/images/businessman.png" alt='hero image' width={400} height={400} className='lg:block hidden' />
                        <Image src="/assets/images/businessman2.png" alt='hero image' width={200} height={200} className='lg:hidden block' />
                    </div>
                </div>
            </div>
            <div className=''>
                <Image src="/assets/images/banner-shape.svg" alt="banner" style={{ width: "100%", height: "100%" }} width={0} height={0} sizes='100wv' />
            </div>
        </div>
    )
}

export default HeroSection