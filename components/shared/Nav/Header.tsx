'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../Button/Button'
import NavItems from './NavItems'
import { openMenu, closeMenu } from "@/redux/features/mobileMenu-slice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, useAppSelector } from '@/redux/store'
import { Spin as Hamburger } from 'hamburger-react'




const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const isOpenMenu = useAppSelector((state) => state.mobileMenuReducer.value.isOpenMenu)

    return (
        <div className='bg-primary-50 '>
            <div className='flex wrapper items-center justify-between '>
                <div>
                    <Image src="/assets/images/logo.png" alt='logo' width={150} height={150} />
                </div>
                <div>
                    <NavItems />
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex justify-end lg:hidden ' ><Hamburger
                        toggled={isOpenMenu}
                        toggle={() => dispatch(openMenu())}
                        color='#32236F'
                    /> </div>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}

export default Header