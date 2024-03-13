import React from 'react'
import { StarsIcon } from '../common/icons'
import { BiUser } from 'react-icons/bi'

export function ReviewsItem({item}) {
    

    return (
        <>
            <li>
                <div className="flex items-start gap-2.5">
                    <figure className="w-6">
                        <BiUser className="text-2xl text-dark" />
                    </figure>
                    <div className={`col border-[#D9D9D9] bb`}>
                        <p className="text-dark text-base md:text-lg font-medium mb-2.5 !leading-[0.9]">{item.author}</p>
                        <p className="text-gray text-xs md:text-sm md:mb-4 mb-2 !leading-[0.9]">{item.date}</p>
                        <div className="max-w-[80px]"> 
                            <StarsIcon className="w-full" />
                        </div>
                        <p className="sm:mt-5 mt-2 text-gray">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </li>
        </>
    )
}
