import React from 'react'
import UserLayout from '../UserLayout' 
import Link from 'next/link'
import Image from 'next/image'
import { TbTrashFilled } from "react-icons/tb";
import { TiStarFullOutline } from 'react-icons/ti'
import { CartColoredIcon } from '@/components/common/icons';
import { Reviews } from '@/components/shared/Reviews';
export const metadata = {
    title: "Whishlist"
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
                                    <div className="w-full col sm:flex gap-4 md:gap-5">
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
                                            <p className="text-gray mb-1.5">{item.category}</p>
                                            <div className="mb-1.5"> 
                                                <Reviews size="small" />
                                            </div>
                                            <p className=" mb-1">
                                                <span className="md:text-lg font-medium text-dark">{item.price} </span>
                                                <span className="text-gray line-through ml-1">{item.prevprice}</span>
                                            </p> 
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[170px] text-center lg:text-right mt-3 lg:mt-0 flex flex-col gap-3 items-end justify-between">
                                        <button className="text-gray text-xl">
                                            <TbTrashFilled />
                                        </button>
                                        <button className="text-primary inline-flex items-center gap-2.5 border border-primary rounded-lg px-4 py-2 hover:bg-primary-light hover:text-white">
                                            <CartColoredIcon />
                                            <span>Move To Cart</span>
                                        </button>
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