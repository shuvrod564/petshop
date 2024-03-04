
'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { NotificationOnIcon, PhoneWhiteIcon, ShopIcon } from "./icons";
import { NavSearch } from "./navSearch"; 
import { CategoryMegaMenu } from "../categoryMegaMenu";
import { HiMiniBars3 } from "react-icons/hi2"; 
import { MobileFixedMenu } from "./mobileFixedMenu";
import { ResponsiveMenu } from "./responsiveMenu";

const Header = () => { 
  const [nav_sticky, setNavSticky] = useState(false)
  const [hide_catmenu, setCatmenu] = useState(false)
  const [res_menu, setResMenu] = useState(false)

  const handleCloseResMenu =()=> {
    setResMenu(false)
  }
 

  useEffect(()=>{
    const handleScroll = () => {
      const scroll_H = window.scrollY;
      
      if (scroll_H > 100) {
        setNavSticky(true) 
      } else {
        setNavSticky(false) 
      }
    }

    document.addEventListener('scroll', handleScroll)
    handleScroll();

    return(()=> {
      document.removeEventListener('scroll', handleScroll)
      handleScroll();
    })
  }, [])

  return (
    <>
      <div className={nav_sticky ? 'fixed top-0 left-0 w-full h-auto z-50 sticky_nav bg-white' : "bg-[#f2f2f260]"}>
        <nav className={`
           shadow py-2 
        `}>
          <div className="container flex flex-row justify-between">
            <div className="inline-flex gap-3">
              {
                nav_sticky && (
                  <button type="button" onClick={()=>setCatmenu(!hide_catmenu)} className="text-dark text-3xl hidden lg:inline-block">
                    { hide_catmenu ? <IoCloseOutline /> : <HiMiniBars3 />  } 
                  </button>
                )
              }
              <button type="button" onClick={()=>setResMenu(true)} className="text-dark text-3xl lg:hidden">
                { res_menu ? <IoCloseOutline /> : <HiMiniBars3 />  } 
              </button>
              
              <Link href={"/"} className="inline-block">
                <Image src={"/images/logo.webp"} width={69} height={64} alt="logo" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
              </Link>
            </div>

            <div className="inline-flex justify-end items-center sm:gap-x-4 gap-0 col">
              <NavSearch />
              <Link href={"/login"} className="text-dark inline-flex items-center gap-2 font-medium text-lg">
                <FaRegCircleUser className="text-xl" /> <span className="hidden sm:inline-block">Login</span>
              </Link>
              <button className="text-dark inline-flex items-center gap-2 font-medium text-lg mx-4">
                <span className="relative">
                  <IoCartOutline className="text-2xl" />
                  <span className="bg-yellow text-primary text-[12px] font-medium rounded-full w-4 h-4 flex justify-center items-center absolute -top-1 -right-1">2</span>
                </span>
                 <span className="hidden sm:inline-block">Cart</span>
              </button>
              <Link href={"#"} className="border-2 border-[#E1AC18] inline-flex items-center gap-1 sm:gap-2 pl-1 md:pr-3 pr-1 py-1 rounded-3xl bg-white relative">
                <Image src={"/images/icons/coin.svg"} width={30} height={30} alt="Coin" className=" w-4 h-4 md:w-[30px] md:h-[30px]" />
                <span className="text-dark font-medium text-xs md:text-base absolute md:static -top-2 -right-3 bg-white px-1 rounded-lg md:bg-transparent">151</span>
              </Link>
              <Link href={"#"} className="border border-primary bg-primary hidden lg:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-white">
                <ShopIcon />
                <span>Become a Merchant</span>
              </Link> 
            </div>
          </div> 
          {/* container */}
        </nav> 
        <div className={`cat__menu ${hide_catmenu ? 'open' : 'hidden lg:block'}`}> 
          <CategoryMegaMenu />
        </div> 
      </div>
      <ResponsiveMenu res_menu={res_menu} setResMenu={setResMenu} handleCloseResMenu={handleCloseResMenu} />
      <MobileFixedMenu />
    </>
  );
};

export default Header;