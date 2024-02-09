"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { formOptions } from "./validator";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { showNotification } from "@/lib/config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const [isLoading, setIsLoading] = useState(false);
  const { errors } = formState;
  const router = useRouter();
  const [lb_showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      
      if (!result.error) {
        router.push("/");
        reset();
      } else {
        if(result.error == "required_verification")
        {
          showNotification("Your account is not verified yet. Please check your email for verification.", "info");
          router.push("/verifyemail?email="+data.email);
          reset();
        }
        else {
          showNotification(result.error, "error");
        }
      }
    } catch (e) {
      showNotification("An error occurred while attempting to Login.", "error");
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
          <div className="input-group">
            <label
              htmlFor="password"
              className="text-sm lg:text-base text-dark mb-2 text-left block"
            >
              Password*
            </label>
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
          </div>
          {errors && errors.password && (
            <p className="text-red-500 text-left" style={{ color: "red" }}>
              {errors.password.message}
            </p>
          )}

          <div className="flex">
            <input
              type="checkbox"
              name="remeber"
              id="remeber"
              className="form-check-input relative top-2"
            />
            <label
              htmlFor="remeber"
              className="text-left w-[calc(100%-24px)] pl-3"
            >
              <span className="block font-medium text-[#333]">Remember me</span>
              <span className="text-sm block">
                Save my login details for next time.
              </span>
            </label>
          </div>

          <div className="input-button pt-5">
            <button disabled={isLoading} className="flex justify-center items-center text-white bg-primary w-full border-0 py-2 px-6 focus:outline-none hover:bg-[#622525] rounded text-lg transition-all duration-300" >
                {isLoading ? (
                <>
                    <AiOutlineLoading3Quarters className="text-sm text-white mr-2" />
                    <span>Loading...</span>
                </>
                ) : <>Login</>
              }
            </button>
          </div>
          <div className="pt-3 text-center">
            <Link legacyBehavior href="/forgotpassword">
              <a className="text-primary transition-all duration-150 hover:text-dark">Forgot Password?</a>
            </Link>
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
          Don't have an account yet?{" "}
          <Link
            href="/register"
            className="text-primary transition-all duration-150 hover:text-dark"
          >
            Sign Up
          </Link>
        </p>
      </section>
  );
};

export default Login;
