'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "@/components/styles/ProductGallery.css";
import Link from 'next/link';
import { BoldWhiteIcon, CartWhiteIcon } from '../common/icons';
import { PiLightning } from "react-icons/pi";

const images = [
    { image: '/images/products/15e7dd34ddbb6563f254c05860fce1e3.png' },
    { image: '/images/products/energizing-dog-food.png' },
    { image: '/images/products/AdultDogsFood_2 1.png' },
    { image: '/images/products/ce0a1d9a62c0b05ab034f73646bb5f3f.png' },
    { image: '/images/products/ce5d902723600ad49adc1cb1cc1bb3c0.png' },
    { image: '/images/products/15e7dd34ddbb6563f254c05860fce1e3.png' },
    { image: '/images/products/energizing-dog-food.png' },
    { image: '/images/products/AdultDogsFood_2 1.png' },
    { image: '/images/products/ce0a1d9a62c0b05ab034f73646bb5f3f.png' },
    { image: '/images/products/ce5d902723600ad49adc1cb1cc1bb3c0.png' },
]

export function ProductGallery(props) {
    

    return (
        <>
            <Carousel
                thumbWidth={70} 
                verticalSwipe="standard"
                className="relative" 
            >
                {
                    images.map((item, index)=> {
                        return (
                            <div key={index}>
                                <img src={item.image}
                                    alt="Product Image"
                                /> 
                            </div>

                        )
                    })
                } 
            </Carousel>
            <div className="flex flex-row flex-wrap justify-between mt-5">
                <Link href={'/cart'} className=" bg-green text-white px-6 h-14 rounded-lg inline-flex items-center justify-center gap-2.5 text-base md:text-lg font-medium hover:bg-gray focus:bg-gray active:bg-dark w-[calc(50%-0.25rem)]">
                    <CartWhiteIcon />
                    <span>Add To Cart</span>
                </Link>
                <Link href={'/checkout'} className=" bg-primary text-white px-6 h-14 rounded-lg inline-flex items-center justify-center gap-2.5 text-base md:text-lg font-medium hover:bg-dark focus:bg-dark active:bg-gray w-[calc(50%-0.25rem)]">
                    <BoldWhiteIcon className="text-xl" />
                    <span>Buy Now</span>
                </Link>
            </div>
        </>
    )
}
