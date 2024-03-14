  
import React from 'react' 
import { HiDotsVertical } from 'react-icons/hi' 
import { IoCheckmarkCircle } from 'react-icons/io5'

const addresses = [
    {
        name: "Onkar Nath",
        address: "Ramchandrapur, sankrail, howrah, howrah, India, Andaman and Nicobar Islands, 711313, Mobile No. : +919874563210",
        selected: true
    },
    {
        name: "Onkar Nath",
        address: "Ramchandrapur, sankrail, howrah, howrah, India, Andaman and Nicobar Islands, 711313, Mobile No. : +919874563210",
        selected: false
    },
]

export function AddressDetails() { 

    return (
        <>
            <div className="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] p-5 md:px-7 rounded-lg">
                <div className="flex justify-between border-b border-border-color pb-5">
                    <h2 className="text-black md:text-lg font-medium mb-0">Address</h2>
                    <button type="button" className="btn-primary">
                        Add New Address
                    </button> 
                    
                </div>
                <div className="pt-7 pb-8 md:pb-10 flex flex-col gap-5">
                    {
                        addresses.map((item, index)=> {
                            return (
                                <div key={index} className={`border border-dashed  rounded-lg p-5 ${item.selected == true ? 'border-primary' : 'border-border-color'}`}>
                                    <div className="flex items-start justify-between">
                                        <div className="col sm:pr-5">
                                            <p className="mb-0 text-dark font-medium mb-2.5">{item.name}</p>
                                            <p className="text-dark">
                                                {item.address}
                                            </p>
                                        </div>
                                        <div className="inline-flex justify-end items-center gap-3 min-w-[150px]">
                                            {
                                                item.selected == true && (
                                                    <div className="inline-flex items-center gap-2 text-primary">
                                                        <IoCheckmarkCircle className="text-xl" />
                                                        <span>Default Address</span>
                                                    </div> 
                                                )
                                            }
                                            <button className={`text-lg ${item.selected == true ? 'text-black' : 'text-gray'} hover:text-primary`}>
                                                <HiDotsVertical />
                                            </button>
                                        </div>
                                    </div> 
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
