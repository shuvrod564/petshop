"use client";
import { useForm } from 'react-hook-form';
import { formOptions } from './validator';
import { showNotification } from '@/lib/config';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const ResetPassword = ({ls_email}) => {
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const router = useRouter();
    const [lb_showPassword, setShowPassword] = useState(false);
    const [lb_showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const resetPassword = (data) => {
        setIsLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_API_URL}reset_password`, {
            method: "POST",
            body: JSON.stringify({ password: data.password, cpassword: data.cpassword,email: ls_email }),
            headers: {
                'accept': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                router.push("/login");
                showNotification("Password has been changed successfully!", "success");
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
                method="POST"
                className="flex flex-col lg:px-8 md:px-5 sm:px-4 px-3 gap-10"
                onSubmit={handleSubmit(resetPassword)}
            >
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
                            {...register("password")}
                            autoComplete="off"
                            placeholder="Password"
                            className="w-full rounded border border-[#E2E5DE] focus:border-[#622525] focus:ring-1  text-base outline-none text-[#4a5568] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-no-repeat pl-9"
                            style={{
                                backgroundImage: `url("/images/icons/password.svg")`,
                                backgroundPosition: "center left .65rem",
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
                {errors.password && (
                    <p className="text-red-500 text-left" style={{ color: "red" }}>{errors.password.message}</p>
                )}

                <div className="input-group">
                    <label
                        htmlFor="cpassword"
                        className="text-sm lg:text-base text-dark mb-2 text-left block"
                    >
                        Confirm Password*
                    </label>
                    <div className="relative">
                        <input
                            type={lb_showConfirmPassword ? 'text' : 'password'}
                            id="cpassword"
                            name="cpassword"
                            {...register("cpassword")}
                            autoComplete="off"
                            placeholder="Confirm Password"
                            className="w-full rounded border border-[#E2E5DE] focus:border-[#622525] focus:ring-1  text-base outline-none text-[#4a5568] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-no-repeat pl-9"
                            style={{
                                backgroundImage: `url("/images/icons/password.svg")`,
                                backgroundPosition: "center left .65rem",
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
                </div>
                {errors.cpassword && (
                    <p className="text-red-500 text-left" style={{ color: "red" }}>{errors.cpassword.message}</p>
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
                </div>
            </form>
        </section>
    );
};


