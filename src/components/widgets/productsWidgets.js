'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { BsSuitHeart } from "react-icons/bs";
import { HiHeart } from 'react-icons/hi2';

const data = [
  {
    title: "Energizing Dog Food",
    thumbnail: "/images/products/energizing-dog-food.png",
    category: "Gourmet Fido",
    price: "Rs. 299.00",
    prevprice: "Rs. 349.00",
    discount: "50%",
    off: "150",
  },
  {
    title: "Energizing Dog Food",
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
    thumbnail: "/images/products/energizing-dog-food.png",
    category: "Gourmet Fido",
    price: "Rs. 299.00",
    prevprice: "Rs. 349.00",
    discount: "50%",
    off: "150",
  },
  {
    title: "Energizing Dog Food",
    thumbnail: "/images/products/energizing-dog-food.png",
    category: "Gourmet Fido",
    price: "Rs. 299.00",
    prevprice: "Rs. 349.00",
    discount: "50%",
    off: "150",
  },
  {
    title: "Energizing Dog Food",
    thumbnail: "/images/products/energizing-dog-food.png",
    category: "Gourmet Fido",
    price: "Rs. 299.00",
    prevprice: "Rs. 349.00",
    discount: "50%",
    off: "150",
  },
]

const ProductsWidgets = ({title}) => {
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
    <div className="py-10 md:py-12">
      <div className="container">
        <h2 className="text-black font-bold text-xl md:text-2xl mb-4">{title}</h2>

        <Slider {...settings} className="product_carousel common_carousel_dots">
          {
            data.map((item, index)=> {
              return( 
                <div key={index} className="border border-[#ADDFFF] rounded-lg p-2 group transition-all duration-300 hover:bg-primary hover:border-primary">
                  <div className="relative">
                    <Link href={"#"} className="block bg-[#F5F5F5] rounded-lg">
                      <Image src={item.thumbnail} width={500} height={500} alt={item.title} className="w-full h-[230px] object-contain object-center" />
                    </Link>
                    <div className="bg-green pl-3 pr-5 py-2 text-xs text-white font-medium inline-block absolute top-3 left-0 z-10 leading-[1.1]">
                      EXTRA ₹<span className="font-bold">{item.off} off</span> <br />
                      Use code SAVE<span className="font-bold">{item.off}</span>
                      <span className="block w-3 h-full bg-bg-gray absolute top-0 right-0 clip"></span>
                    </div>
                    <button className={`
                      bg-white rounded-full w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10
                      ${ item.wishlist == true ? "text-primary" : "text-dark" }
                    `}> 
                      { item.wishlist == true ? <HiHeart className="text-lg" /> : <BsSuitHeart /> }
                    </button>
                  </div>
                  <div className="pt-4 text-center px-2 pb-5">
                    <h3 className={` text-base md:text-lg font-medium text-dark mb-2.5`}>
                      <Link href={"#"} aria-label={item.title} title={item.title} className="text-dark group-hover:text-white group-hover:hover:text-green">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="">
                      <Link href={"#"} aria-label={item.category} title={item.category} className="text-[#747474] group-hover:text-bg-gray group-hover:hover:text-green">
                        {item.category}
                      </Link>
                    </p>
                    <div className="h-[1px] w-20 bg-[#C4C4C4] mx-auto my-4 relative">
                      <span className="bg-primary w-2 h-2 block rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:bg-white"></span>
                    </div>
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                      <span className="text-primary group-hover:text-white text-base md:text-lg font-medium transition-all duration-300">{item.price}</span>
                      <span className="text-gray group-hover:text-bg-gray text-xs font-medium line-through transition-all duration-300">{item.price}</span>
                    </div>
                    <div className="text-center mb-5 mt-4"> 
                      <div className="relative inline-block px-6 pt-1 pb-2 bg-[#ADDFFF] leading-[1.1]">
                        {/* <Image src={"/images/icons/off-ribbon.svg"} width={200} height={50} alt="tag bg" className="absolute top-0 left-0 object-contain object-center w-full h-full" /> */}
                        <span className="text-xs text-primary relative z-20">UP TO {item.discount} OFF</span>
                        <span className="block w-3 h-full bg-white absolute top-0 left-0 clip-left transition-all duration-300 group-hover:bg-primary"></span>
                        <span className="block w-3 h-full bg-white absolute top-0 right-0 clip transition-all duration-300 group-hover:bg-primary"></span>
                      </div>
                    </div>
                    <Link href={"#"} className="text-sm md:text-base px-5 py-3 min-w-[160px] min-h-[40px] bg-border-color text-white rounded-lg hover:bg-primary-light hover:text-primary inline-flex items-center gap-2 group-hover:text-primary group-hover:bg-white group-hover:hover:text-green group-hover:font-medium">
                      <IoCartOutline className="text-lg md:text-xl" />
                      <span>Add To Cart</span>
                    </Link>
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

export default ProductsWidgets
