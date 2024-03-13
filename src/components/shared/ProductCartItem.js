import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Counter } from './Counter'

export function ProductCartItem({data, type="", index="0"}) {

    if(type=='summery') {
        return (
            <>
                <div className={`p-4 sm:p-5 flex gap-4 ${index != 0 ? 'border-t border-border-color' : ''}`}>
                    <Link href={"/listing/detail"} className="block w-[30%]">
                        <Image
                            src={data.thumbnail}
                            width={120} height={90}
                            alt={data.title}
                            className="aspect-[16/15] bg-bg-gray"
                        />
                    </Link>
                    <div className="w-[70%]">
                        <h3 className="text-base md:text-lg font-medium mb-2">
                            <Link href={"/listing/detail"} className="text-dark hover:text-primary">{data.title}</Link>
                        </h3>
                        <p className="text-gray mb-2">Quantity : 1</p>
                        <p className="mb-0">
                            <span className="text-primary text-lg sm:text-xl font-medium">{data.price}</span> 
                        </p>
                    </div>
                </div>
            </>
        )
    }
    

    return (
        <>
            <div className="p-4 sm:p-5">
                <div className="flex flex-row flex-wrap">
                    <div className="w-full md:w-[25%]">
                        <div className="flex">
                            <div className="w-7">
                                <input type="checkbox" 
                                    className="form-check "
                                />
                            </div>
                            <div className="w-[calc(100%-28px)] 2xl:pl-4 pl-2"> 
                                <Link href={"#"} className="block bg-bg-gray">
                                    <Image
                                        src={data.thumbnail}
                                        width={200} height={100}
                                        alt={data.title}
                                        className="aspect-[16/15] object-cover object-center"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[75%] md:pl-5">
                        <div className="flex">
                            <div className="col"> 
                                <h2 className="text-base md:text-lg font-medium text-truncate mb-2">
                                    <Link href={"/listing/detail"} className="text-dark hover:text-primary">{data.title}</Link>
                                </h2>
                                <p className="mb-1 text-gray">{data.category}</p>
                                <p className="mb-3 text-gray"><span className="text-dark">Delivery by:</span> Tue, 11 Feb 2024</p>
                                <p className="mb-1.5">
                                    <span className="text-primary text-lg sm:text-xl font-medium">{data.price}</span>
                                    <span className="text-gray line-through ml-2">{data.prevprice}</span>
                                </p>
                                <p className="text-dark">
                                    Get Extra 20% Discount Use Code 
                                    <span className="border border-dashed border-primary rounded-lg px-1.5 ml-2">PETLYBUY</span>
                                </p>
                            </div>
                            <div className="w-[129px]">
                                <Counter
                                    page="cart"
                                />
                                <div className="text-right mt-5 md:mt-8"> 
                                    <button className="text-red uppercase font-medium">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
