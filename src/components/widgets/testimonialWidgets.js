
'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { ImQuotesLeft } from "react-icons/im";
import { LikeIcon, QuoteGreyIcon, RatingIcon } from '../common/icons';

const data = [
  {
    name: "Emery Baptista",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    thumb: "/images/global/03998e358e89d441f4ddc07c8ed72951.png"
  },
  {
    name: "Cristofer Philips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    thumb: "/images/global/testimonial-02.png"
  },
  {
    name: "Adison Lipshutz",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    thumb: "/images/global/testimonial-03.png"
  },
  {
    name: "Emma Butt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    thumb: "EB",
    type: "name"
  },
]

const TestimonialWidgets = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [ 
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
    <div className="py-8 md:py-12 bg-bg-gray">
      <div className="container">
        <h2 className="text-black font-bold text-xl md:text-2xl mb-4">How Do Our Customers Feel About Us?</h2>

        <Slider {...settings} className="common_carousel_dots testimonial_carousel">
          {
            data.map((item, index)=> {
              return (
                <div key={index} className="mt-12">
                  <div className="bg-white px-5 md:px-6 pb-6 pt-12 rounded-lg relative text-center testimonial__card"> 
                    <div className="w-[100px] h-[100px] bg-white rounded-full shadow-lg flex justify-center items-center mx-auto -top-[50px] absolute left-1/2 -translate-x-1/2">
                      {
                        item.type=='name' ? (
                          <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-r from-primary to-green flex items-center justify-center text-2xl md:text-3xl lg:text-4xl text-white">{item.thumb}</div>
                        ) : ( 
                          <Image src={item.thumb} width={90} height={89} className="w-[90px] h-[90px] rounded-full object-cover object-center" alt={item.name} />
                        )
                      }
                    </div>
                    <div className="my-6 text-center">
                      <ImQuotesLeft className="text-dark text-3xl mx-auto" />
                    </div>
                    <p className="text-dark mb-5">
                      {item.description}
                    </p>
                    <div className="text-center my-6">
                      <QuoteGreyIcon className="mx-auto" />
                    </div>
                    <p className="text-base md:text-lg font-medium text-dark mb-3 sm:mb-4">{item.name}</p>
                    <RatingIcon className="mx-auto" />
                    <LikeIcon className="mx-auto mt-4 md:mt-5" />
                  </div>
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

export default TestimonialWidgets
