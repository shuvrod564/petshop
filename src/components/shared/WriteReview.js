import Image from 'next/image'
import React from 'react'

export function WriteReview({page=""}) {
    

    return (
        <>
            <div className="sm:flex flex-wrap">
                <div className="col flex flex-wrap gap-2.5">
                    <Image
                        src={"/images/global/testi.png"}
                        width={100} height={80}
                        alt="image"
                        className="w-[70px] aspect-[1] object-cover object-center"
                    />
                    <Image
                        src={"/images/global/03998e358e89d441f4ddc07c8ed72951.png"}
                        width={100} height={80}
                        alt="image"
                        className="w-[70px] aspect-[1] object-cover object-center"
                    />
                    <Image
                        src={"/images/global/testimonial-03.png"}
                        width={100} height={80}
                        alt="image"
                        className="w-[70px] aspect-[1] object-cover object-center"
                    />

                </div>
                {
                    page != "product-review" && ( 
                        <div className="sm:w-[136px] mt-4 sm:mt-0">
                            <button className="border border-primary text-primary px-2.5 h-[38px] rounded-md hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                                Write a review
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    )
}
