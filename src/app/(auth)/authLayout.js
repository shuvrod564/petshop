import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="container py-10 sm:py-12 md:py-16">
      <div className="flex flex-wrap justify-between gap-4 lg:gap-6">
        <div className="max-w-[500px] w-full lg:order-1">
          <div className="text-center py-6 md:py-8 lg:py-10 lg:px-8 md:px-5 sm:px-4 px-3 rounded-lg" style={{boxShadow: '0px 4px 30px 0px rgba(255, 88, 105, 0.25)' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
