import { nav_items } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
    return (
        <div className=' hidden lg:block'>
            <ul className='flex items-center gap-10 capitalize'>
                {nav_items.map((menu, index) => <li className='font-medium text-purple' key={menu.label + index}><Link href="/">
                    {menu.label}
                </Link></li>)}
            </ul>
        </div>
    )
}

export default NavItems