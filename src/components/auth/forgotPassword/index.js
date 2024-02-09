"use client";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { formOptions } from './validator';
import { showNotification } from '@/lib/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { request } from "@/lib/service";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const ForgotPassword = () => {
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const [isLoading, setIsLoading] = useState(false);
  const { errors } = formState;
  const router = useRouter();

  const forgotPassword = async (data) => {
    setIsLoading(true);
    try {
      const res = await request(
        "post",
        `${process.env.NEXT_PUBLIC_API_URL}forgot_password`,
        JSON.stringify({ data })
      );
      if (res.data.success) {
        router.push("/verifyotp?email="+res.data.userEmail);
        showNotification(res.data.message, "success");
      } else {
        showNotification(res.data.message, "error");
      }
    } catch ({ response }) {
      showNotification(response.data.message, "error");
    }
    setIsLoading(false);      
  };

  return (
      <section className="flex flex-col gap-7">
        <form
          className="flex flex-col lg:px-8 md:px-5 sm:px-4 px-3 gap-10"
          onSubmit={handleSubmit(forgotPassword)}
          method="POST"
        >
          <div className="input-group">
            <label
              htmlFor="email"
              className="text-sm lg:text-base text-dark mb-2 text-left block"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
              autoComplete="off"
              placeholder="Email"
              className="w-full rounded border border-[#E2E5DE] focus:border-[#622525] focus:ring-1  text-base outline-none text-[#4a5568] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-no-repeat pl-9"
              style={{
                backgroundImage: `url("/images/icons/email.svg")`,
                backgroundPosition: "center left .65rem",
              }}
            />
          </div>
          {errors && errors.email && (
            <p className="text-red-500 text-left" style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}

          <div className="input-button pt-5">
            <button disabled={isLoading} className="flex justify-center items-center text-white bg-primary w-full border-0 py-2 px-6 focus:outline-none hover:bg-[#622525] rounded text-lg transition-all duration-300" >
                  {isLoading ? (
                  <>
                      <AiOutlineLoading3Quarters className="text-sm text-white mr-2" />
                      <span>Loading...</span>
                  </>
                  ) : <>Submit</>
              }
            </button>
            <div className="pt-3 text-center">
              <Link legacyBehavior href="/login">
                <a className="text-primary transition-all duration-150 hover:text-dark">Login</a>
              </Link>
            </div>
          </div>
        </form>
      </section>
  );
};


