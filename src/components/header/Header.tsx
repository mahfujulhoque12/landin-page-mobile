import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
// import logo1 from '/public/logo/logo1.jpg';npx shadcn@latest add carousel

import logo2 from '/public/logo/logo2.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { SiShopify } from 'react-icons/si';


const Header = () => {
  return (
    <MaxWidthWrapper>

        <div className='flex justify-between gap-3 items-center bg-white  h-20'>
            <Link href="#">
                <Image src={logo2} width={100} height={100} alt='logo' className='w-[80px] h-[50px]'/>
            </Link>
            <div className='text-2xl font-semibold  text-green-500'>Your Brand </div>
            <div className='relative'> 
                <button className='text-green-500 cursor-pointer'><SiShopify  size={40} /></button>
                <span className='text-xs font-normal bg-green-900 text-white p-0.5 rounded-full absolute -top-2 -right-1'>02</span>
            </div>

        </div>
    </MaxWidthWrapper>
  )
}

export default Header