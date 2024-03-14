import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: ['400','600']
})

export function PriceDetails({page=''}) {
    

    return (
        <>
            <div className={`border border-border-color rounded-lg`}>
                <div className={`px-5 py-3.5 rounded-tl-lg rounded-tr-lg border-b border-border-color  ${page=='checkout' ? 'bg-white' : 'bg-primary-light'}`}>
                    <h3 className="text-base md:text-lg font-medium text-dark">Price Details</h3>
                </div>
                <div className={`p-5  ${open_sans.className}`}>
                    <ul className="flex flex-col gap-3 text-base md:text-lg font-normal">
                        <li className="flex items-center justify-between">
                            <span>Sub-Total (3 items) :</span>
                            <span className="text-dark font-semibold">₹779.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Shipping & Handling :</span>
                            <span className="text-primary font-semibold">Free</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Tax (18%) :</span>
                            <span className="text-dark">₹140.22</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Discount :</span>
                            <span className="text-dark">-₹140.22</span>
                        </li>
                    </ul>
                    {
                        page != 'checkout' || page != 'payment' && (
                            <div className="mt-8 md:mt-10 mb-10 md:mb-12"> 
                                <div className="border border-dashed border-primary rounded-lg p-2 flex">
                                    <input type="text"
                                        className="h-8 w-full border-0 col pr-3 pl-1 text-dark placeholder:text-gray text-base md:text-lg"
                                        placeholder="Coupon Code"
                                    />
                                    <button className="bg-primary text-white px-3 py-0.5 rounded-lg uppercase font-semibold hover:bg-dark focus:bg-dark">Apply</button>
                                </div>
                            </div> 
                        )
                    }
                </div>
                
                <div className="px-5 py-3.5 border-t border-border-color flex items-center justify-between">
                    <h4 className="text-lg md:text-xl font-medium font-sans text-dark">Total Amount</h4>
                    <p className="text-lg md:text-xl font-medium font-sans text-dark m-0">₹779.00</p>
                </div>
            </div>
            {
                page == 'checkout' && (
                    <>
                        <Link href={"/checkout/payment"} className="btn-primary w-full text-center justify-center font-medium uppercase h-[51px] items-center mt-8">Place Order</Link>
                    </> 
                ) 
            }
            {
                page == 'cart' && (
                    <>
                        <p className="text-primary mt-5 mb-8 text-base md:text-lg">You will save ₹397 on this order</p>
                        <Link href={"/checkout"} className="btn-primary w-full text-center justify-center font-medium uppercase h-[51px] items-center">Checkout</Link>
                    </>

                )
            }
            {
                page == 'payment' && (
                    <button className="btn-primary w-full text-center justify-center font-medium uppercase h-[51px] items-center mt-8">continue</button>
                )
            }
        </>
    )
}
