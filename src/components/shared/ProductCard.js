 
import React from 'react' 
import Link from 'next/link';
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { BsSuitHeart } from "react-icons/bs";
import { HiHeart } from 'react-icons/hi2';

export function ProductCard(props) {
    

    return (
        <>
            <div className="border border-[#ADDFFF] rounded-lg sm:p-2.5 p-1 group transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
                  <div className="relative">
                    <Link href={"/listing/detail"} className="block bg-[#F5F5F5] rounded-lg">
                      <Image src={props.item.thumbnail} width={450} height={450} alt={props.item.title} className="w-full sm:h-[210px] h-[150px] object-contain object-center" />
                    </Link>
                    <div className="bg-primary-extra-light pl-2 pr-5 py-1 text-[9px] sm:text-[10px] text-dark font-medium inline-block absolute top-0 sm:top-3 left-0 z-10 leading-[1.1] rounded-tl-md sm:rounded-tl-none">
                      EXTRA ₹<span className="font-bold">{props.item.off} off</span> <br />
                      Use code SAVE<span className="font-bold">{props.item.off}</span>
                      <span className="block w-3 h-full bg-bg-gray absolute top-0 right-0 clip"></span>
                    </div>
                    <button className={`
                      bg-white rounded-full sm:w-9 sm:h-9 w-7 h-7 flex justify-center items-center absolute sm:top-2.5 sm:right-2.5 z-10 top-1 right-1
                      ${ props.item.wishlist == true ? "text-primary" : "text-dark" }
                    `}> 
                      { props.item.wishlist == true ? <HiHeart className="sm:text-lg" /> : <BsSuitHeart /> }
                    </button>
                  </div>
                  <div className="pt-4 md:pt-5 lg:pt-6 xl:pt-7 text-center px-2 sm:pb-5 pb-2">
                    <h3 className={`text-sm sm:text-sm md:text-base font-medium text-dark sm:mb-2.5`}>
                      <Link href={"/listing/detail"} aria-label={props.item.title} title={props.item.title} className="text-dark group-hover:text-white group-hover:hover:text-white">
                        {props.item.title}
                      </Link>
                    </h3> 
                    <p className="sm:mb-2.5 mb-1 text-xs lg:text-sm">
                      <Link href={"#"} aria-label={props.item.category} title={props.item.category} className="text-[#747474] group-hover:text-bg-gray group-hover:hover:text-white">
                        {props.item.category}
                      </Link>
                    </p>
                    {
                      props.title != 'Best Selling Products' && (
                        <div className="h-[1px] w-20 bg-[#C4C4C4] mx-auto mb-2.5 relative">
                          <span className="bg-primary w-2 h-2 block rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:bg-white"></span>
                        </div> 
                      )
                    }
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                      <span className="text-primary group-hover:text-white text-sm sm:text-sm md:text-base font-medium transition-all duration-300">{props.item.price}</span>
                      {
                        props.title != 'Best Selling Products' && ( 
                          <span className="text-gray group-hover:text-bg-gray text-xs font-medium line-through transition-all duration-300">{props.item.price}</span>
                        )
                      }
                    </div>
                    <div className="text-center sm:mb-5 sm:mt-2.5 mt-1.5 mb-2"> 
                      <div className="relative inline-block px-6 pt-1 pb-2 bg-[#ADDFFF] leading-[1.1]"> 
                        <span className="text-[10px] sm:text-xs text-primary relative z-20">UP TO {props.item.discount} OFF</span>
                        <span className="block w-3 h-full bg-white absolute top-0 left-0 clip-left transition-all duration-300 group-hover:bg-primary"></span>
                        <span className="block w-3 h-full bg-white absolute top-0 right-0 clip transition-all duration-300 group-hover:bg-primary"></span>
                      </div>
                    </div>
                    <Link href={"#"} className="text-xs sm:text-xs md:text-sm px-4 sm:py-2 py-2 sm:min-w-[140px] sm:min-h-[34px] bg-border-color text-white rounded-[10px] hover:bg-primary-light hover:text-primary inline-flex items-center gap-2 group-hover:text-primary group-hover:bg-white group-hover:hover:text-green group-hover:font-medium">
                      <IoCartOutline className="text-base md:text-lg" />
                      <span>Add To Cart</span>
                    </Link>
                  </div>
                </div>
        </>
    )
}
