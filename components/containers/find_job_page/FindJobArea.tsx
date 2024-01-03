import React from 'react'
import FilterPanel from './FilterPanel'

const FindJobArea = () => {
    return (
        <div className='wrapper'>
            <div className='grid grid-cols-12'>
                <div className='col-span-4 bg-primary-50 px-[30px] py-[35px]'>
                    <FilterPanel />
                </div>
                <div className='col-span-8'>Jobs</div>
            </div>
        </div>
    )
}

export default FindJobArea