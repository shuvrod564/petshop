import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

export function Reviews({size=''}) {
    

    return (
        <>
            <span className={`
                inline-flex items-center gap-1.5 rounded-lg bg-green text-white font-medium
                ${size=='small' ? 'h-[30px] text-sm px-2' : 'h-[34px] px-2.5 py-2'}
            `}>
                4.3  <TiStarFullOutline />
            </span>
            <span className={`
                  text-gray
                ${size == 'small' ? 'pl-2' : 'text-base lg:text-lg font-medium pl-2.5'}
            `}>1093 Ratings & 423 Reviews</span>
        </>
    )
}
