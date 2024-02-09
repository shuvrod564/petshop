"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { request } from "@/lib/service";
import { formOptions } from "./validator";
import { showNotification } from "@/lib/config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Register = () => {
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const [isLoading, setIsLoading] = useState(false);
  const { errors } = formState;
  const [lb_showPassword, setShowPassword] = useState(false);
  const [lb_showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const register_type = "Normal";
    const { confirmPassword, ...payload } = data;
    payload.register_type = register_type;
    try {
      const res = await request(
        "post",
        `${process.env.NEXT_PUBLIC_API_URL}register`,
        JSON.stringify(payload)
      );
      if(res.status === 200 && res.data.userStatus == 'Inactive')
      {
        showNotification(res.data.message, "info");
        reset();
        router.push("/verifyemail?email="+res.data.userEmail);
      }
      else if(res.status === 200 && res.data.userStatus == 'Active')
      {
        showNotification(res.data.message, "info");
        reset();
        router.push("/login");
      }
      else {
        showNotification(res.data.message, "success");
        reset();
        router.push("/verifyemail?email="+res.data.userEmail);
      }
    } catch ({ response }) {
      showNotification(response.data.message, "error");
    }
    setIsLoading(false);
  };

  return (
      <section className="flex flex-col gap-7">
        <form
          method="POST"
          className="flex flex-col lg:px-8 md:px-5 sm:px-4 px-3 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-group">
            <input
              type="email"
              {...register("email")}
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
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

          <div className="relative">
            <input
              type={lb_showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              {...register('password')}
              placeholder="Password"
              className="w-full rounded border border-[#E2E5DE] focus:border-[#622525] focus:ring-1  text-base outline-none text-[#4a5568] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-no-repeat pl-9"
              style={{
                backgroundImage: `url("/images/icons/password.svg")`,
                backgroundPosition: 'center left .65rem',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!lb_showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {lb_showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          {errors && errors.password && (
            <p className="text-red-500 text-left" style={{ color: "red" }}>
              {errors.password.message}
            </p>
          )}
          <div className="relative">
            <input
              type={lb_showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              {...register('confirmPassword')}
              placeholder="Confirm Password"
              className="w-full rounded border border-[#E2E5DE] focus:border-[#622525] focus:ring-1  text-base outline-none text-[#4a5568] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-no-repeat pl-9"
              style={{
                backgroundImage: `url("/images/icons/password.svg")`,
                backgroundPosition: 'center left .65rem',
              }}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!lb_showConfirmPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {lb_showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {errors && errors.confirmPassword && (
            <p className="text-red-500 text-left" style={{ color: "red" }}>
              {errors.confirmPassword.message}
            </p>
          )}

          <div className="input-button">
            <button disabled={isLoading} className="flex justify-center items-center text-white bg-primary w-full border-0 py-2 px-6 focus:outline-none hover:bg-[#622525] rounded text-lg transition-all duration-300" >
                {isLoading ? (
                    <>
                      <AiOutlineLoading3Quarters className="text-sm text-white mr-2" />
                      <span>Loading...</span>
                    </>
                  ) : <>Sign Up</>
                }
            </button>
          </div>
        </form>
        <div className="or text-center flex items-center">
          <svg
            width="186"
            height="4"
            viewBox="0 0 186 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L186 0V4L0 1Z" fill="#D9D9D9" />
          </svg>
          <span className="text-[12px] font-semibold text-[#333] inline-block min-w-[40px] text-center">
            OR
          </span>
          <svg
            width="186"
            height="4"
            viewBox="0 0 186 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M186 3L0 4V0L186 3Z" fill="#D9D9D9" />
          </svg>
        </div>
        <p className="text-center text-[#727272]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary transition-all duration-150 hover:text-dark"
          >
            Login
          </Link>
        </p>
      </section>
  );
};

export default Register;
