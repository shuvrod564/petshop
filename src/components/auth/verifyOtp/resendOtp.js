"use client";
import { resent_otp_interval, showNotification } from "@/lib/config";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { request } from "@/lib/service";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const ResendOtp = ({ verifyFor = "", ls_email }) => {

  const { reset } = useForm();
  const [minutes, setMinutes] = useState(resent_otp_interval.minute);
  const [seconds, setSeconds] = useState(resent_otp_interval.second);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
  
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  
  /* Resend Verification Code */
  const resendVerificationCode = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      const data = { verifyFor: verifyFor, email: ls_email };
      const res = await request(
        "post",
        `${process.env.NEXT_PUBLIC_API_URL}resend_otp`,
        JSON.stringify({ data })
      );
      if (res.data.success) {
        showNotification(res.data.message, "success");
        reset();
      } else {
        showNotification(res.data.message, "error");
      }
      setMinutes(resent_otp_interval.minute);
      setSeconds(resent_otp_interval.second);
    } catch({response}) {
      showNotification(response.data.message, "error");
    }   
    setIsLoading(false);
  };

  return (
    <div className="text-center text-[#727272]">
      {seconds > 0 || minutes > 0 ? (
        <p>
          Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      ) : (
        <p>Didn't recieve code?</p>
      )}
      <button
        disabled={seconds > 0 || minutes > 0 || isLoading}
        onClick={(e)=>resendVerificationCode(e)} 
        className={`${seconds > 0 || minutes > 0 ? "text-[#DFE3E8]" : "text-primary"} transition-all duration-150 cursor-pointer`}
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters className="text-sm text-primary" />
        ) : <>Resend Verification</>
        }
      </button>
    </div>
  );
};