import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

export function Reviews(props) {
    

    return (
        <>
            <span className="inline-flex items-center gap-1.5 h-[34px] rounded-lg px-2.5 py-2 bg-green text-white font-medium">
                4.3  <TiStarFullOutline />
            </span>
            <span className="text-base lg:text-lg font-medium text-gray pl-2.5">1093 Ratings & 423 Reviews</span>
        </>
    )
}
