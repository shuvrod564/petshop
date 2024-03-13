import React from 'react'

export function CheckDeliveryDate(props) {
    

    return (
        <>
            <p className="text-primary text-base md:text-lg mt-6 md:mt-7 mb-2">Check Delivery Date</p>
            <p className="text-gray text-sm mb-3">24 Hours Delivery Available</p>

            <form action="" className="border border-border-color rounded-lg flex flex-row overflow-hidden max-w-[300px]">
                <input type="text"
                    className="col w-full border-0 h-10 text-dark placeholder:text-border-color px-3 py-1"
                    placeholder="Check Delivery Date"
                    required
                />
                <button className="h-10 px-4 text-center text-primary text-sm">Check</button>
            </form>
        </>
    )
}
