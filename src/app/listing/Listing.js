import { ProductCard } from '@/components/shared/ProductCard'
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
      thumbnail: "/images/products/AdultDogsFood_2 1.png",
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
    },
    {
      title: "Tuna & Salmon Dry Food",
      thumbnail: "/images/products/15e7dd34ddbb6563f254c05860fce1e3.png",
      category: "Gourmet Fido",
      price: "Rs. 299.00",
      prevprice: "Rs. 349.00",
      discount: "50%",
      off: "150",
    },
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
      thumbnail: "/images/products/AdultDogsFood_2 1.png",
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
    },
    {
      title: "Tuna & Salmon Dry Food",
      thumbnail: "/images/products/15e7dd34ddbb6563f254c05860fce1e3.png",
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
        thumbnail: "/images/products/AdultDogsFood_2 1.png",
        category: "Gourmet Fido",
        price: "Rs. 299.00",
        prevprice: "Rs. 349.00",
        discount: "50%",
        off: "150",
      },
]

export function Listing(props) {
    

    return (
        <>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:gap-5 sm:gap-3 gap-2">
                {
                    data.map((item, index)=> {
                        return (
                            <ProductCard item={item} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}
