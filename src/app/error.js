"use client";

import Image from "next/image";
import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
   
    <section className="bg-primary-light flex justify-center items-center p-6">
      <div className="max-w-sm p-6 bg-white rounded-lg shadow text-center ">
        <Image src={'/error.svg'} width={50} height={50} alt="error" className="inline-block" />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            We lost this page !!
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          We searched high and low, but couldn’t find what you’re looking
          for.Let’s find a better place for you to go.
        </p>
        <Link
          href="/"
          className="inline-flex items-center  hover:underline
          text-[blue] underline"
        >
         Take me Home
         
        </Link>
      </div>
    </section>
  );
};

export default Error;
