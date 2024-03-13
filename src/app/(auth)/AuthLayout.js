import Image from "next/image";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className=" py-10 sm:py-12 md:py-16 lg:pt-24 lg:pb-32 relative">
      <Image
        src={"/images/global/auth-bg-layer.svg"}
        width={1903} height={1000}
        alt="Layer Bg Image"
        className="w-full h-full absolute top-0 start-0 object-cover object-center z-0"
      />
      <div className="container"> 
          <div className="max-w-[480px] min-h-[620px] w-full mx-auto bg-white py-6 md:py-8 lg:px-8 md:px-5 sm:px-4 px-3 rounded-lg shadow-[0px_4px_20px_0px_rgba(40,130,255,0.30)] relative overflow-hidden">
            <div className="h-2 5 w-full bg-primary shadow-[0px_4px_50px_0px_rgba(40,130,255,0.20)] absolute top-0 start-0"></div>
            {children}
          </div>
        
      </div> 
    </div>
  );
}
