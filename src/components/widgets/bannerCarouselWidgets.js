'use client'
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    thumbnail: "/images/global/slider-01.webp",
    title: "The Best Food for Your Furry Friend"
  },
  {
    thumbnail: "/images/global/slider-01.webp",
    title: "The Best Food for Your Furry Friend"
  },
  {
    thumbnail: "/images/global/slider-01.webp",
    title: "The Best Food for Your Furry Friend"
  },
]

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ['600']
})

const BannerCarouselWidgets = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
      <>
      <div className="container py-6"> 
      <div className="bg-[url('/images/global/gradient-abstract-background.png')] bg-no-repeat bg-cover bg-center rounded-lg px-6 py-7 md:py-8 lg:px-10">

        <Slider {...settings} className="hero_carousel">
          {
            data.map((item, index)=> {
              return( 
                <div key={index} className="!flex flex-row flex-wrap items-center">
                  <div className="lg:w-[350px] md:w-[280px] w-full">
                    <Image src={item.thumbnail} width={500} height={500} alt="thumbnail" />
                  </div>
                  <div className="col lg:pl-14 md:pl-6 py-5 md:py-0 text-center md:text-left">
                    <p className={`${poppins.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white`}>{item.title}</p>
                    <p className="text-lg text-[#33E120]"><i>Its Taste so Good</i></p>
                    <p className="text-lg md:text-2xl lg:text-3xl font-light text-white my-4 lg:my-5"><i>Starting From <b className="font-bold">₹199</b> Only</i></p>
                    <Link href={"#"} className="text-base md:text-lg px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary-light hover:text-primary">Buy Now</Link>
                  </div>
                </div>
              )
            })
          }
           
        </Slider>
      </div>
      </div>
    </>
  )
}

export default BannerCarouselWidgets
