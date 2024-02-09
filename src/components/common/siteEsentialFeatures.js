import Image from 'next/image'
import React from 'react'

const data = [
  {
    title: "Free Shipping",
    description: "On all orders above ₹699",
    icon: "/images/icons/free-delivery.svg"
  },
  {
    title: "Free Returns",
    description: "Within 7 days(T&Cs Apply)",
    icon: "/images/icons/Easy-Returns.svg"
  },
  {
    title: "Best Deals",
    description: "On Pet Products",
    icon: "/images/icons/approve-good-appreciate-deal.svg"
  },
  {
    title: "We Support",
    description: "Monday-Saturday,9am to 9pm",
    icon: "/images/icons/support.svg"
  },
]

const SiteEsentialFeatures = async({}) => {
  return (
    <div className="py-8 lg:py-12">
       <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-5">
          {
            data.map((item, index)=> {
              return(
                <div key={index}>
                  <div className="flex flex-row">
                    <figure className="w-12">
                      <Image src={item.icon} width={48} height={48} alt={item.title} />
                    </figure>
                    <div className="col pl-3 md:pl-4">
                      <p className="text-lg font-bold text-black">{item.title}</p>
                      <p className="text-dark">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
       </div>
       {/* container */}
    </div>
  )
}

export default SiteEsentialFeatures
