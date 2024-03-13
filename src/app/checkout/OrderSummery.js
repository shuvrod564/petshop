import { ProductCartItem } from '@/components/shared/ProductCartItem'
import React from 'react'

const data = [
    {
      title: "Energizing Dog Food",
      thumbnail: "/images/products/15e7dd34ddbb6563f254c05860fce1e3.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    },
    {
      title: "Tuna & Salmon Dry Food",
      thumbnail: "/images/products/energizing-dog-food.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
      wishlist: true
    },
    {
      title: "Energizing Dog Food",
      thumbnail: "/images/products/AdultDogsFood_2 1.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    },
    {
      title: "Tuna & Salmon Dry Food",
      thumbnail: "/images/products/ce0a1d9a62c0b05ab034f73646bb5f3f.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    },
    {
      title: "Energizing Dog Food",
      thumbnail: "/images/products/ce5d902723600ad49adc1cb1cc1bb3c0.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    }, 
]

export function OrderSummery(props) {
    

    return (
        <>
            <div className={`border border-border-color rounded-lg overflow-hidden mb-7`}>
                <div className={`px-5 py-3.5 rounded-tl-lg rounded-tr-lg border-b border-border-color bg-primary-light`}>
                    <h3 className="text-base md:text-lg font-medium text-dark">Order Summary</h3>
                </div>
                <div className="scroller-gray">

                    <div className="max-h-[409px] overflow-y-auto">
                        {
                            data.map((item, index)=> {
                                return <ProductCartItem key={index} data={item} type="summery" index={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
