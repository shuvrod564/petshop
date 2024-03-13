import React from 'react'
import { FourStarsIcon, StarsSmIcon } from '../common/icons'
import Image from 'next/image'

const data = [
    {
        icon: <StarsSmIcon />,
        progress: "65",
        count: "128"
    },
    {
        icon: <Image src={"/images/icons/four-star-rating.png"} width={108} height={16} alt="rating" />,
        progress: "35",
        count: "55"
    },
    {
        icon: <Image src={"/images/icons/three-star-rating.png"} width={108} height={16} alt="rating" />,
        progress: "0",
        count: "0"
    },
    {
        icon: <Image src={"/images/icons/two-star-rating.png"} width={108} height={16} alt="rating" />,
        progress: "0",
        count: "0"
    },
    {
        icon: <Image src={"/images/icons/one-star-rating.png"} width={108} height={16} alt="rating" />,
        progress: "5",
        count: "2"
    },
]

export function RatingViews(props) {
    

    return (
        <>
            <ul className="flex gap-3 flex-col">
                {
                    data.map((item, index)=> {
                        return(
                            <li key={index} className="flex items-center">
                                <div className="w-[35%]">
                                    {item.icon}
                                </div>
                                <div className="w-[50%] px-4">
                                    <div className="border rounded-md border-border-color w-full h-4 relative overflow-hidden">
                                        <div className=" bg-green absolute top-0 left-0 h-full" style={{ width: `${item.progress}%` }}></div>
                                    </div>
                                </div>
                                <div className="w-[15%]">
                                    <span className="text-gray">({item.count})</span>
                                </div>
                            </li>

                        )
                    })
                }
            </ul>
        </>
    )
}
