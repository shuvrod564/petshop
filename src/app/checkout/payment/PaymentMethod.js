'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

export function PaymentMethod(props) {
    const [method_type, setMethodType] = useState('upi')

    const handleMethodType = (event) => {
        setMethodType(event.target.value);
        console.log(event.target.value);
    }

    return (
        <>
            <div className="border border-border-color rounded-lg">
                <div className="border-b border-border-color px-5 py-3.5 flex items-center justify-between">
                    <p className="text-dark font-medium mb-0 md:text-lg">Payment Method</p> 
                </div>
                <div className="px-5 pt-8 pb-10">

                    <ul className="flex flex-col gap-6 md:gap-7">
                        <li className="flex gap-2">
                            <div className="w-6 pt-1">
                                <input 
                                    type="radio" 
                                    id="upi"  
                                    name="method_type"
                                    value={"upi"} 
                                    checked={method_type == 'upi'} 
                                    onChange={handleMethodType}
                                /> 
                            </div>
                            <div className="col">
                                <label htmlFor="upi" className="md:text-lg text-dark uppercase flex items-center gap-5">
                                    <span>UPI</span>
                                    <Image src={"/images/icons/upi-logo.svg"} width={33} height={20} alt="upi" />
                                </label>

                                {
                                    method_type == 'upi' && ( 
                                        <div className="mt-4 flex flex-col gap-4">
                                            <div className="flex gap-2.5 items-center">
                                                <input type="radio" name="phonepe" id="phonepe" />
                                                <label htmlFor="phonepe">PhonePe</label>
                                            </div>
                                            <div className="flex gap-2.5 items-center">
                                                <input type="radio" name="phonepe" id="upiid" />
                                                <label htmlFor="upiid">Your UPI ID</label>
                                            </div>
                                            <div>
                                                <form className="focus:border border-border-color rounded-lg flex flex-row items-center pr-2 overflow-hidden max-w-[380px] shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]">
                                                    <input type="text"
                                                        className="col w-full border-0 h-10 text-dark placeholder:text-border-color px-3 py-1"
                                                        placeholder="Enter UPI id"
                                                        required
                                                    />
                                                    <button className="h-8 rounded-lg px-3 text-center text-primary text-sm hover:bg-bg-gray">VERIFY</button>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-6 pt-1">
                                <input 
                                    type="radio" 
                                    id="card"  
                                    name="method_type"
                                    value={"card"} 
                                    checked={method_type == 'card'} 
                                    onChange={handleMethodType}
                                /> 
                            </div>
                            <div className="col">
                                <label htmlFor="card" className="md:text-lg text-dark block text-left items-center gap-1">
                                    <span className="flex gap-y-2.5 gap-x-6 mb-2"> 
                                        <span className="uppercase">Credit / Debit / ATM Card</span> 
                                        <Image src={"/images/icons/credit-card.svg"} width={29} height={20} alt="upi" />
                                    </span>
                                    <span className="block text-gray md:text-base">Add and secure cards as per RBI guidelines</span>
                                </label>

                                {
                                    method_type == 'card' && ( 
                                        <div className="mt-4 flex flex-col gap-4 max-w-[400px]">
                                            <form >
                                                <div className="mb-4">
                                                    <label htmlFor="card_number" className="text-xs sm:text-sm font-medium text-dark-light mb-2 block">Card Number*</label>
                                                    <input 
                                                        type="text"
                                                        placeholder="0000 0000 0000 0000" 
                                                        class="form-control"
                                                    />
                                                </div>
                                                <div className="flex flex-wrap flex-row gap-4 mb-4">
                                                    <div className="w-[calc(50%-8px)] sm:w-[calc(20%-5px)]">
                                                        <label htmlFor="cvv" className="text-xs sm:text-sm font-medium text-dark-light mb-2 block">CVV*</label>
                                                        <input 
                                                            type="text"
                                                            placeholder="000" 
                                                            class="form-control"
                                                        />
                                                    </div>
                                                    <div className="w-[calc(50%-8px)] sm:w-[calc(24%-5px)]">
                                                        <label htmlFor="expiry_date" className="text-xs sm:text-sm font-medium text-dark-light mb-2 block">Expiry Date*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="MM/YY" 
                                                            class="form-control"
                                                        />
                                                    </div>
                                                    <div className="w-full sm:w-[calc(52%-7px)]">
                                                        <label htmlFor="card_holder" className="text-xs sm:text-sm font-medium text-dark-light mb-2 block">Name of the Card*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Name" 
                                                            class="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="btn-primary uppercase">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                }

                            </div>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-6 pt-1">
                                <input 
                                    type="radio" 
                                    id="net-banking"  
                                    name="method_type"
                                    value={"net-banking"} 
                                    checked={method_type == 'net-banking'} 
                                    onChange={handleMethodType}
                                /> 
                            </div>
                            <div className="col">
                                <label htmlFor="net-banking" className="md:text-lg text-dark ">
                                    <span className="flex items-center gap-5 uppercase mb-2"> 
                                        <span>Net Banking</span>
                                        <Image src={"/images/icons/payment-system.png"} width={20} height={20} alt="upi" />
                                    </span>
                                    <span className="block text-gray md:text-base">This instrument has low success, use UPI or cards for better experience</span>
                                </label>

                                 

                            </div>
                        </li>
                        <li className="flex gap-2">
                            <div className="w-6 pt-1">
                                <input 
                                    type="radio" 
                                    id="cash-on-delivery"  
                                    name="method_type"
                                    value={"cash-on-delivery"} 
                                    checked={method_type == 'cash-on-delivery'} 
                                    onChange={handleMethodType}
                                /> 
                            </div>
                            <div className="col">
                                <label htmlFor="cash-on-delivery" className="md:text-lg text-dark ">
                                    <span className="flex items-center gap-5 uppercase"> 
                                        <span>Cash on Delivery</span> 
                                    </span> 
                                </label>
 
                            </div>
                        </li>
                        <li>
                            <button className="w-full px-4 py-3 rounded-lg bg-bg-gray text-dark flex items-center justify-between lg:text-lg hover:bg-primary-light focus:bg-primary-light active:bg-primary-light">
                                Add Gift Card
                                <FaPlus />
                            </button>
                        </li>
                    </ul>
 

                </div>
            </div>
        </>
    )
}
