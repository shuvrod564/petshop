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
import { ProductCard } from '../shared/ProductCard';

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
                <ProductCard key={index} item={item} />
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
