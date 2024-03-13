"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import { AiOutlineLoading3Quarters } from "react-icons/ai"; 
import { GoArrowRight } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export function OtpLogin({setLoginType, logintype}) {
    

    return (
        <>
             <form
              method="POST"
              className="flex flex-col lg:px-4 md:px-3 sm:px-3 px-2 gap-5"
            //   onSubmit={handleSubmit(onSubmit)}
            > 
              <div className="rounded-lg border border-border-color focus:border-[#622525] focus:ring-1 flex flex-row items-center"> 
                <select name="country_code" id="country_code" className="w-16 h-7 pl-3 text-dark bg-white border-r border-border-color">
                    <option value="+91">+91</option>
                </select>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  placeholder="Mobile Number"
                  autoComplete="off"
                  className="w-full h-12 col text-base outline-none text-[#4a5568] py-1 px-4 sm:px-5 leading-8 transition-colors duration-200 ease-in-out bg-no-repeat" 
                />
                
              </div>
               
      
              <div className="text-left">
                <button className="inline-flex justify-center items-center text-white bg-primary rounded-lg border-0 py-2 px-6 focus:outline-none hover:bg-dark text-lg font-medium transition-all duration-300" >
                  Verify Number
                </button>
              </div>
              <div> 
                <p className="pt-2.5 text-dark font-medium mb-4">Or login with</p>
                <div className="input-group">  
                  <button
                    type="button" 
                    onClick={()=>setLoginType('email')}
                    className="w-full flex items-center justify-between px-5 h-12 rounded-xl bg-[#F5F5F5] border border-dark text-gray text-base font-medium hover:bg-primary-light"
                  >
                    <span>Email / Mobile No. / Password</span> 
                  </button>
                  
                </div>
              </div>
              {/* <div className="pt-3 text-center">
                <Link legacyBehavior href="/forgotpassword">
                  <a className="text-primary transition-all duration-150 hover:text-dark">Forgot Password?</a>
                </Link>
              </div> */}

              <div>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2.5 h-12 bg-bg-gray text-dark text-lg hover:bg-primary-light hover:text-primary rounded-lg"
                  >
                    <Image
                      src={"/images/icons/facebook.svg"}
                      width={25} height={25}
                      alt="Facebook"
                    />
                    <span>Facebook</span>
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2.5 h-12 bg-bg-gray text-dark text-lg hover:bg-primary-light hover:text-primary rounded-lg"
                  >
                    <Image
                      src={"/images/icons/google.svg"}
                      width={25} height={25}
                      alt="Google"
                    />
                    <span>Google</span>
                  </button>
                </div>
              </div>

              {/* <div className=" md:mb-8 lg:mb-12 pt-3">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2.5 text-dark hover:text-primary text-lg font-medium"
                >
                  <span>Register New Account </span>
                  <GoArrowRight className="text-xl" />
                </Link>
              </div> */}
            </form> 
        </>
    )
}
