import PopularSearches from '@/components/shared/popular-searches/PopularSearches'
import { Button } from '@/components/ui/button'
import { MapPin, Search } from 'lucide-react'
import React from 'react'

const HeroSearch = () => {
    return (
        <div>
            <div>
                <form action="">
                    <div className='grid grid-cols-12 bg-white shadow-shadow1 pl-[30px] pt-[20px] pr-[20px] border border-gray-100 rounded-[10px] pb-[20px]'>
                        <div className='col-span-12 lg:col-span-5 flex items-center'>
                            <span ><Search className='text-primary' /></span>
                            <input type="text" placeholder='Job title, keywords, or company' className='w-full h-[60px] text-[14px] px-[10px] border-none outline-none text-purple' />
                        </div>
                        <div className='col-span-12 lg:col-span-4 flex items-center'>
                            <span ><MapPin className='text-primary' /></span>
                            <input type="text" placeholder='City or postcode' className='w-full h-[60px] text-[14px] px-[10px] border-none outline-none text-purple' />
                        </div>
                        <div className='col-span-12 lg:col-span-3 lg:mt-0 mt-3 flex items-center justify-center'>
                            <Button className='bg-primary w-full h-full'>Find Jobs</Button>
                        </div>
                    </div>
                </form>
                <PopularSearches />
            </div>
        </div>
    )
}

export default HeroSearch