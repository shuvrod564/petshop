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
        <div className="shoadow border border-[#ddd]">
          <Image 
            src={"/images/global/banner-001.webp"} 
            width={1340} height={550} alt="thumbnail" 
            className=""
          />
        </div>
      </div>
    </>
  )
}

export default BannerCarouselWidgets
