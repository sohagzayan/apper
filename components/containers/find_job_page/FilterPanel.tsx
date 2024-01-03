"use client"
import { date_posted_data, job_type_data, tags_data } from '@/utils/data'
import React, { useState } from 'react'
import SingleFilter from '@/components/shared/single-filter/SingleFilter'
import { Input } from '@/components/ui/input'
import { Briefcase, MapPin, Search } from 'lucide-react'
import InputField from '@/components/shared/input-field/InputField'
import PriceRange from '@/components/shared/price-range/PriceRange'
import { Slider } from "@/components/ui/slider"
import { cn } from '@/lib/utils'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const FilterPanel = () => {
    const [jobTypeFilter, setJobTypeFilter] = useState<string[]>([])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)



    return (
        <div>
            <div className='flex flex-col gap-6'>
                <div>
                    <h3 className='font-medium py-3 text-purple'>Search by Keywords</h3>
                    <div className='flex flex-col gap-5'>
                        <InputField placeholder="Job title, keywords, or company" icon={<Search size={20} strokeWidth={0.75} />} />
                    </div>
                </div>
                <div>
                    <h3 className='font-medium py-3 text-purple'>Location</h3>
                    <div className='flex flex-col gap-5'>
                        <InputField placeholder="City or postcode" icon={<MapPin size={20} strokeWidth={0.75} />} />
                    </div>
                </div>
                <div>
                    <h3 className='font-medium py-3 text-purple'>Category</h3>
                    <div className='flex flex-col gap-5'>
                        <Select>
                            <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Choose a Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">Residential</SelectItem>
                                    <SelectItem value="banana">Commercial</SelectItem>
                                    <SelectItem value="blueberry">Industrial</SelectItem>
                                    <SelectItem value="grapes">Apartments</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div>
                    <h3 className='font-medium py-3 text-purple'>Job type</h3>
                    <div className='flex flex-col gap-5'>
                        {job_type_data.map((j, index) => <SingleFilter
                            key={j.label + index}
                            filter={j}
                            value={jobTypeFilter}
                            setValue={setJobTypeFilter}
                        />)}
                    </div>
                </div>
                <div>
                    <h3 className='font-medium py-3 text-purple'>Date Posted</h3>
                    <div className='flex flex-col gap-5'>
                        {date_posted_data.map((j, index) => <SingleFilter
                            key={j.label + index}
                            filter={j}
                            value={jobTypeFilter}
                            setValue={setJobTypeFilter}
                        />)}
                    </div>
                </div>
                <div>
                    <h3 className='font-medium py-3 text-purple'>Experience Level</h3>
                    <div className='flex flex-col gap-5'>
                        {date_posted_data.map((j, index) => <SingleFilter
                            key={j.label + index}
                            filter={j}
                            value={jobTypeFilter}
                            setValue={setJobTypeFilter}
                        />)}
                    </div>
                </div>
                <div>
                    <h3 className='font-medium py-3 text-purple'>Salary</h3>
                    <div className='flex  items-center gap-4'>
                        <div className='flex items-center gap-4'>
                            <Input type='number' placeholder='Min' min={0} />
                            <span>-</span>
                            <Input type='number' placeholder='Max' min={0} className='border-none outline-none ' />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-medium py-3 text-purple'>Tags</h3>
                    <div className='flex flex-wrap gap-5'>
                        {tags_data.map((t, i) => <li
                            key={t + i}
                            className='text-[13px] font-light text-purple bg-white px-3 py-1  rounded-md cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 ease-in-out'
                        >
                            {t}
                        </li>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterPanel