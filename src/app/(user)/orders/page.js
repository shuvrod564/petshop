 
import React from 'react'
import UserLayout from '../UserLayout' 
import Link from 'next/link'
import Image from 'next/image'
import { TiStarFullOutline } from 'react-icons/ti'
export const metadata = {
    title: "Orders"
}

const data = [
    {
      title: "Energizing Dog Food",
      thumbnail: "/images/products/15e7dd34ddbb6563f254c05860fce1e3.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    },
    {
      title: "Tuna & Salmon Dry Food",
      thumbnail: "/images/products/energizing-dog-food.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
      wishlist: true
    },
    {
      title: "Energizing Dog Food",
      thumbnail: "/images/products/AdultDogsFood_2 1.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    },
    {
      title: "Tuna & Salmon Dry Food",
      thumbnail: "/images/products/ce0a1d9a62c0b05ab034f73646bb5f3f.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    }, 
]

const Page = () => {
    return ( 
        <UserLayout>
            <div className="flex flex-col gap-5">
                {
                    data.map((item, index)=> {
                        return(
                            <div key={index} className="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] p-4 rounded-lg">
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-[60%] sm:flex gap-4 md:gap-5">
                                        <Link href={"/listing/detail"} className="block w-[120px]">
                                            <Image
                                                src={item.thumbnail}
                                                width={120} height={110}
                                                alt="thumbnail"
                                                className="w-full aspect-[16/15] object-cover object-center bg-bg-gray rounded-lg"
                                            />
                                        </Link>
                                        <div className="col mt-3 sm:mt-0">
                                            <p className="md:text-lg font-medium">
                                                <Link href={"#"} className="text-dark hover:text-primary">{item.title}</Link>
                                            </p>
                                            <p className="text-gray mb-1">{item.category}</p>
                                            <p className="md:text-lg font-medium text-dark mb-1">
                                                {item.price} 
                                            </p>
                                            <button className="text-primary inline-flex items-center gap-2">
                                                <TiStarFullOutline />
                                                <span>Give Rating & Review</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[40%] text-center lg:text-right mt-3 lg:mt-0">
                                        <p className=" text-green font-medium lg:mb-2">Delivery On:  Tue, 11 Feb 2024</p>
                                        <p className="text-gray">your item has been delivered</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </UserLayout>
    )
}

export default Page