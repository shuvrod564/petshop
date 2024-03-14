import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DiscountBannersWidgets = () => {
  return (
    <div className="mb-8 lg:mb-12 pt-8">
      <div className="container">
        <div className="grid grid-cols--1 md:grid-cols-2 gap-4 md:gap-5">
          <div>
            <Link href={"/listing"} className="block">
              <Image 
                src={"/images/global/promo-01.png"} 
                width={630} height={337}
                alt="Discount Thumbnail"
                className="w-full rounded-lg"
              />
            </Link>
          </div>
          <div>
            <Link href={"/listing"} className="block">
              <Image 
                src={"/images/global/promo-02.png"} 
                width={630} height={337}
                alt="Discount Thumbnail"
                className="w-full rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountBannersWidgets
