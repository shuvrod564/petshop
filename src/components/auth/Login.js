"use client";
import React, { useState } from "react";
import Link from "next/link";     
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go"; 
import Image from "next/image"; 
import { OtpLogin } from "./OtpLogin";

const Login = () => {
  const [logintype, setLoginType] = useState('email');
  
  const [lb_showPassword, setShowPassword] = useState(false);

   

  return (
      <div className="flex flex-col gap-7">
        <h1 className="text-xl md:text-2xl font-medium text-dark text-left">Login / Signup</h1>
        {
          logintype == 'email' ? (
            <form
              method="POST"
              className="flex flex-col lg:px-4 md:px-3 sm:px-3 px-2 gap-5" 
            > 
              <div className="input-group"> 
                <input
                  type="email"
                  id="email"
                  name="email" 
                  placeholder="Email or Mobile Number*"
                  autoComplete="off"
                  className="w-full h-12 rounded-lg border border-border-color focus:border-primary focus:ring-1  text-base outline-none text-[#4a5568] py-1 px-4 sm:px-5 leading-8 transition-colors duration-200 ease-in-out" 
                /> 
              </div>
              <div className="input-group"> 
                <div className="relative">
                  <input
                    type={lb_showPassword ? 'text' : 'password'}
                    id="password"
                    name="password" 
                    placeholder="Password*"
                    className="w-full h-12 rounded-lg border border-border-color focus:border-primary focus:ring-1  text-base outline-none text-[#4a5568] py-1 px-4 sm:px-5 leading-8 transition-colors duration-200 ease-in-out" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!lb_showPassword)}
                    className="absolute right-4 md:right-5 top-1/2 transform -translate-y-1/2 text-gray text-lg"
                  >
                    {lb_showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </button>
                </div> 
              </div>
      
              <div className="text-left">
                <button className="inline-flex justify-center items-center text-white bg-primary rounded-lg border-0 py-2 px-6 focus:outline-none hover:bg-dark text-lg font-medium transition-all duration-300" >
                  Login
                </button>
              </div>
              <div> 
                <p className="pt-2.5 text-dark font-medium mb-4">Or login with</p>
                <div className="input-group">  
                  <button
                    type="button" 
                    onClick={()=>setLoginType('otp')}
                    className="w-full flex items-center justify-between px-5 h-12 rounded-xl bg-[#F5F5F5] border border-primary text-primary text-base font-medium hover:bg-primary-light hover:text-white"
                  >
                    <span>Login With OTP</span>
                    <GoArrowRight className="text-xl" />
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
                    className="w-full flex items-center justify-center gap-2.5 h-12 bg-bg-gray text-dark text-lg hover:bg-secondary hover:text-primary rounded-lg"
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
                    className="w-full flex items-center justify-center gap-2.5 h-12 bg-bg-gray text-dark text-lg hover:bg-secondary hover:text-primary rounded-lg"
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
                  href="/register"
                  className="inline-flex items-center gap-2.5 text-dark hover:text-primary text-lg font-medium"
                >
                  <span>Register New Account </span>
                  <GoArrowRight className="text-xl" />
                </Link>
              </div> */}
            </form> 
          ) : (
            <OtpLogin 
              logintype={logintype} 
              setLoginType={setLoginType}  
            />
          )
        }
         
      </div>
  );
};

export default Login;
