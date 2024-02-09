
'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
 

const data = [
  { thumb: "/images/global/discount-banner-01.png" },
  { thumb: "/images/global/discount-banner-02.png" },
  { thumb: "/images/global/discount-banner-03.png" },
  { thumb: "/images/global/discount-banner-04.png" },
  { thumb: "/images/global/discount-banner-01.png" },
  { thumb: "/images/global/discount-banner-02.png" },
  { thumb: "/images/global/discount-banner-03.png" },
  { thumb: "/images/global/discount-banner-04.png" },
]

const DiscountCardWidgets = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <div className="py-8">
      <div className="container">
        <Slider {...settings} className="common_carousel_dots">
          {
            data.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <Image
                    src={item.thumb}
                    width={309} height={213}
                    alt='image'
                    className="object-contain relative z-0 w-full "
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

export default DiscountCardWidgets
