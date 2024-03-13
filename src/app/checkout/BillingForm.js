import { TrashIcon } from '@/components/common/icons';
import { Open_Sans } from 'next/font/google'
import Link from 'next/link';
import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';

const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '500']
})

export function BillingForm(props) {
    

    return (
        <>
            <div className="flex gap-3 mb-5 md:mb-7">
                <input 
                    type="radio" 
                    className="w-5 h-5 relative top-1.5" 
                />
                <div className="col">
                    <div className="mb-2">
                        <span className={`text-base md:text-lg text-dark font-semibold ${open_sans.className}`}>Onkar Nath</span>
                        <span className={` text-gray border-l border-gray pl-2.5 ml-2.5 mr-5 ${open_sans.className}`}>Onkar Nath</span>
                        <button className="text-primary p-1">
                            <AiOutlineEdit />
                        </button>
                        <button className="text-red p-1">
                            <TrashIcon />
                        </button>
                    </div>
                    <p className="text-dark">
                        BN4 , webel tower 1, sector 5, Saltlake city , Kolkata-700091, Nayapotti bus stand, Bidhan Nagar, West Bengal
                    </p>
                </div>
            </div>

            <div className="border border-border-color rounded-lg">
                <div className="border-b border-border-color px-5 py-3.5 flex items-center justify-between">
                    <p className="text-dark font-medium mb-0 md:text-lg">Delivery & Billing Address </p>
                    <Link href={"/listing"} className="inline-flex items-center gap-2.5 text-primary hover:text-black focus:text-black">
                        <LiaLongArrowAltLeftSolid className="text-xl md:text-2xl" />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
                <div className="px-5 pt-7 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="First Name*"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="Last Name*"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="E-Mail*"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="Postal code*"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="House No*"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="Society Name"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="Street Address"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="Mobile No*"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex gap-2.5">
                            <input type="checkbox" id="billingAddress" defaultChecked className="relative top-1.5" />
                            <label htmlFor="billingAddress" className="col text-dark font-medium md:text-lg">My Billing Address is the same</label>
                        </div>
                        <div className="flex gap-2.5 mt-4">
                            <input type="checkbox" id="createAccount" className="relative top-1.5" />
                            <label htmlFor="createAccount" className="col text-dark md:text-lg">If you want create account with same details ?</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-border-color rounded-lg mt-8">
                <div className="border-b border-border-color px-5 py-3.5 flex items-center justify-between">
                    <p className="text-dark font-medium mb-0 md:text-lg">Buying For Your Business ?</p> 
                </div>
                <div className="px-5 pt-7 pb-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="GST Number"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="Company Name"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <textarea  
                                className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                                placeholder="Company Address"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <p className="flex gap-2.5">
                                <span className="text-dark">Note:</span>   
                                <span className="text-gray">After placing an order, GSTIN cannot be changed. Registration state must match either with the billing or the shipping state.</span>
                            </p>
                        </div>
                        
                    </div> 
                </div>
            </div>

        </>
    )
}
