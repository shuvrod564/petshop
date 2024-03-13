import { DiscountIcon } from '@/components/common/icons'
import { CheckDeliveryDate } from '@/components/shared/CheckDeliveryDate'
import { Counter } from '@/components/shared/Counter'
import { Reviews } from '@/components/shared/Reviews'
import { Sizes } from '@/components/shared/Sizes'
import React from 'react'

const offers = [
    { title: "EXTRA 5% off on orders > ₹2000. Use code SAVE150" },
    { title: "EXTRA ₹250 off above ₹5000. Use code SAVE250" },
    { title: "ADDITIONAL 10% off on ICICI credit cards up to ₹300" },
]

export function ProductDetailInfo(props) {
    

    return (
        <>
            <h1 className="text-xl md:text-2xl font-medium text-dark mb-2">Tuna & Salmon Dry Food</h1>
            <p className="text-gray mb-2">Kibble Treat</p>
            <Reviews />
            <div className="flex items-start gap-3 mt-3">
                <div className="">
                    <span className="text-dark text-2xl md:text-3xl font-medium block">Rs. 345.00</span>
                    <span className="text-gray text-base md:text-lg inline-block mt-0.5 line-through">Rs. 449.00</span>
                </div>
                <div className="inline-block px-6 pt-1 pb-1 bg-[#ADDFFF] leading-[1.1] relative top-0.5"> 
                    <span className="text-xs sm:text-sm text-primary font-medium relative z-20">UP TO 50% OFF</span>
                    <span className="block w-3 h-full bg-white absolute top-0 left-0 clip-left transition-all duration-300 group-hover:bg-primary"></span>
                    <span className="block w-3 h-full bg-white absolute top-0 right-0 clip transition-all duration-300 group-hover:bg-primary"></span>
                </div>
            </div>

            <div className="sm:flex flex-row flex-wrap gap-4 md:gap-x-7 xl:gap-x-8 mt-4">
                <div className="w-[128px]">
                    <h2 className="text-base md:text-lg font-medium text-dark mb-3 md:mb-4">Quantity:</h2>
                    <Counter />
                </div>
                <div className="col mt-4 sm:mt-0">
                    <h2 className="text-base md:text-lg font-medium text-dark mb-3 md:mb-4">Size</h2>
                    <Sizes />
                </div>
            </div>

            <CheckDeliveryDate />

            <p className="text-dark text-base md:text-lg font-medium mt-6 md:mt-8 mb-5 md:mb-6">Don&apos;t Miss Out on These Amazing Offers</p>
            <ul className="flex flex-col gap-3">
                {
                    offers.map((item, index)=>{
                        return(
                            <li className="flex gap-2">
                                <figure className="w-6 pt-1">
                                    <DiscountIcon />
                                </figure>
                                <span className="col block text-base md:text-lg text-gray font-medium">{item.title}</span>
                            </li> 
                        )
                    })
                }
            </ul>
        </>
    )
}
