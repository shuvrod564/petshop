import { PriceDetails } from '@/components/shared/PriceDetails';
import { ProductCartItem } from '@/components/shared/ProductCartItem';
import ProductsWidgets from '@/components/widgets/productsWidgets';
import Link from 'next/link'
import React from 'react'
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";


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
    {
      title: "Energizing Dog Food",
      thumbnail: "/images/products/ce5d902723600ad49adc1cb1cc1bb3c0.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    }, 
]


export function CartLayout(props) {
    

    return (
        <main>
            <div className="py-9 md:py-12">
                <div className="container">
                    <div className="flex flex-row flex-wrap">
                        <div className="w-full lg:w-[70%] 2xl:w-[calc(100%-380px)] 2xl:pr-12 lg:pr-7">
                            <div className="border border-border-color rounded-lg">
                                <div className="px-4 sm:px-5 py-3.5 flex items-center justify-between gap-2.5 flex-wrap border-b border-border-color">
                                    <h1 className="text-base md:text-lg font-medium text-dark">My Cart (3)</h1>
                                    <Link href={"/listing"} className="inline-flex items-center gap-2.5 text-primary hover:text-black focus:text-black">
                                        <LiaLongArrowAltLeftSolid className="text-xl md:text-2xl" />
                                        <span>Continue Shopping</span>
                                    </Link>
                                </div>
                                <div className="">
                                    {
                                        data.map((item, index)=> {
                                            return <ProductCartItem key={index} data={item} />
                                        })
                                    }
                                </div>
                            </div>
                            {/* border */}
                        </div>
                        <div className="w-full lg:w-[30%] 2xl:w-[380px] mt-10 lg:mt-0">
                            <PriceDetails />
                        </div>
                    </div>
                </div>
            </div>


            <ProductsWidgets title="View Similar Product" />
        </main>
    )
}
