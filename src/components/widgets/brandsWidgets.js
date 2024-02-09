'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const brands = [
  { logo: "/images/products/brands/1.jpg" },
  { logo: "/images/products/brands/2.jpg" },
  { logo: "/images/products/brands/3.jpg" },
  { logo: "/images/products/brands/4.jpg" },
  { logo: "/images/products/brands/5.jpg" },
  { logo: "/images/products/brands/6.jpg" },
  { logo: "/images/products/brands/1.jpg" },
  { logo: "/images/products/brands/2.jpg" },
  { logo: "/images/products/brands/3.jpg" },
  { logo: "/images/products/brands/4.jpg" },
  { logo: "/images/products/brands/5.jpg" },
  { logo: "/images/products/brands/6.jpg" },
]

const BrandsWidgets = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [  
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
        }
      },
    ]
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        <h2 className="text-black font-bold text-xl md:text-2xl mb-4 md:mb-8">Shop by Brand</h2>

         <Slider {...settings} className="">
          {
            brands.map((item, index)=> {
              return (
                <div key={index}>
                  <Image 
                    src={item.logo} 
                    width={200} height={100} 
                    alt="brand logo" 
                    className="w-full h-24 object-contain object-center"
                  /> 
                </div>
              )
            })
          }
        </Slider>
      </div>
      {/* container */}
    </div>
  )
}

export default BrandsWidgets
