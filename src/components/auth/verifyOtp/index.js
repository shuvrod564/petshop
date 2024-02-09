"use client";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { showNotification } from '@/lib/config';
import { useRouter } from 'next/navigation';
import { ResendOtp } from "./resendOtp";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const VerifyOtp = ({ verifyFor = "",ls_email }) => {

  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();  

  /* Validate Verification Code */
  const verifyOtp = (data) => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}verify_otp`, {
      method: "POST",
      body: JSON.stringify({ otp: data.otp, email: ls_email }),
      headers: {
        'accept': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          if(verifyFor == 'registration') {
            router.push("/login");
          }
          else {
            router.push("/resetpassword?email="+ls_email);
          }
          showNotification(data.message, "success");
          reset();
        } else {
          showNotification(data.message, "error");
        }
      })
      .catch(({response}) => {
        showNotification(response.data.message, "error");
      });
      setIsLoading(false);
  };

  return (
      <section className="flex flex-col gap-7">
        <form
          className="flex flex-col lg:px-8 md:px-5 sm:px-4 px-3 gap-10"
          onSubmit={handleSubmit(verifyOtp)}
          method="POST"
        >
          <div className="input-group">
            <input
              type="number"
              id="otp"
              name="otp"
              {...register("otp")}
              autoComplete="off"
              placeholder="Enter your Verification Code"
              className="w-full rounded border border-[#E2E5DE] focus:border-[#622525] focus:ring-1  text-base outline-none text-[#4a5568] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-no-repeat pl-9"
            />
          </div>
          
          <ResendOtp verifyFor={verifyFor} ls_email={ls_email} />

          <div className="input-button pt-5">
            <button disabled={isLoading} className="flex justify-center items-center text-white bg-primary w-full border-0 py-2 px-6 focus:outline-none hover:bg-[#622525] rounded text-lg transition-all duration-300" >
              {isLoading ? (
                  <>
                    <AiOutlineLoading3Quarters className="text-sm text-white mr-2" />
                    <span>Loading...</span>
                  </>
                ) : <>Verify</>
              }
            </button>
          </div>
        </form>
      </section>
  );
};