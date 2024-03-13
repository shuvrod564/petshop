import React from 'react'
import { VscSettings } from "react-icons/vsc";

export function ListingHeaderFilter(props) {
    

    return (
        <>
            <div className="flex flex-wrap sm:items-center items-start justify-between rounded-lg sm:px-5 px-3 py-3 bg-[#EEEEEE] mb-5 md:mb-6 lg:mb-8 relative">
                <div className="sm:inline-flex gap-x-6 items-center">
                    <button
                        onClick={()=>props.setOpenResMenu(!props.openResMenu)} 
                        className="inline-flex lg:hidden items-center gap-2 text-dark bg-white px-2.5 py-1 rounded-md"
                    >
                        <VscSettings />
                        <span>Filter</span>
                    </button>
                    <span className="text-gray block mt-5 sm:mt-0 text-center sm:text-left">1365762 Products Found</span>
                </div>
                <select name="sort" id="sort" className="w-full max-w-[80px] h-6 border-0 bg-transparent text-dark ff-sans">
                    <option value="Sort By" defaultValue disabled>Sort By</option>
                    <option value="New">New</option>
                </select>
                <span className="absolute w-full h-[1px] bg-border-color bottom-[40px] left-0 sm:hidden"></span>
            </div>
        </>
    )
}
