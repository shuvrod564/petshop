import Image from 'next/image'
import React from 'react'
import { PhoneWhiteIcon, ShopIcon } from './icons'
import Link from 'next/link'

export function MobileFixedMenu(props) {
    

    return (
        <div className="py-3 px-3 sm:px-5 bg-dark flex lg:hidden justify-between items-center gap-2 fixed bottom-0 left-0 w-full z-50"> 
            <Link href={"#"} className="border border-white inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white text-dark">
                <ShopIcon />
                <span>Become a Merchant</span>
            </Link>
            <Link href={"#"} className="border border-white inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-transparent text-white">
                <PhoneWhiteIcon />
                <span>Support</span>
            </Link>
        </div>
    )
}
