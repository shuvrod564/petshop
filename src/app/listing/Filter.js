import { RangeSlider } from '@/components/shared/RangeSlider';
import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const filterData = [
    {
        title: "Product Type",
        types: [
            { name: "Wet Food", },
            { name: "Jerky Treats", },
            { name: "Dental Treats", },
            { name: "Bones & Chews", },
            { name: "Bones & Chews", }, 
            { name: "Wet Food", },
            { name: "Jerky Treats", },
            { name: "Dental Treats", },
            { name: "Bones & Chews", },
            { name: "Bones & Chews", }, 
        ],
    },
    {
        title: "Brand",
        types: [
            { name: "Royal Canin", },
            { name: "Chip Chops", },
            { name: "Pedigree", },
            { name: "Drools", },
            { name: "JerHigh", }, 
            { name: "Royal Canin", },
            { name: "Chip Chops", },
            { name: "Pedigree", },
            { name: "Drools", },
            { name: "JerHigh", }, 
        ],
    },
    {
        title: "Flavor",
        types: [
            { name: "Potato", },
            { name: "Bacon", },
            { name: "Seafood", },
            { name: "Calcium", },
            { name: "Mackerel", }, 
        ],
    },
    {
        title: "Life Stage",
        types: [
            { name: "Puppy", },
            { name: "Adult", },
            { name: "Senior", },
            { name: "Kitten", }, 
        ],
    },
    {
        title: "Price",
         
    },
    {
        title: "Breed Size",
        types: [
            { name: "Maxi", },
            { name: "Mini", },
            { name: "Medium", }, 
        ]
    },
    {
        title: "Veg/Non-Veg",
        types: [
            { name: "Non-Veg", },
            { name: "Veg", }, 
        ]
    },
    {
        title: "Pet Type",
        types: [
            { name: "Dogs", },
            { name: "Cats", }, 
        ]
    },
]

export function Filter(props) {
    

    return (
        <>
            <div className={`
                w-full xl:max-w-[320px] lg:max-w-[280px] border border-border-color shadow-[0px_4px_20px_0px_rgba(40,130,255,0.15)] scroller-gray transition-all duration-300
                ${props.res_filtermenu ? 'fixed w-full bg-[rgba(0,0,0,0.625)] top-0 left-0 z-[500] -translate-x-full' : 'static rounded-lg'}
                ${props.openResMenu ? 'translate-x-0' : ''}
            `}>
                <div className="bg-dark py-3 px-4 sm:px-5 lg:rounded-tl-lg lg:rounded-tr-lg flex justify-between items-center gap-2 max-w-[300px] lg:max-w-full">
                    <h1 className="text-white text-base sm:text-lg font-medium">FILTERS</h1>
                    <button 
                        type="button"
                        onClick={()=>props.setOpenResMenu(!props.openResMenu)}
                        className="text-white inline-flex items-center gap-2 lg:hidden"
                    >
                        <span>hide</span> <CgClose className="text-lg" />
                    </button>
                </div>
                <div className="max-w-[300px] bg-white max-h-[calc(100vh-3rem)] overflow-y-auto lg:max-h-full">
                    <div className="px-4 sm:px-5 py-4">
                        {
                            filterData.map((item, index)=> {
                                return(
                                    <div key={index} className={index != '0' ? "mt-8" : ''}>
                                        <p className="mb-3 text-dark text-base md:text-base font-medium">{item.title}</p>
                                        
                                        {
                                            item.title.toLocaleLowerCase() == 'price' ? (
                                                <div>
                                                    <RangeSlider />
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="relative mb-5 md:mb-6">
                                                        <input 
                                                            type="text"
                                                            className="form-control h-10 !pl-9 !border-bg-gray shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]"
                                                            placeholder="Search" 
                                                        />
                                                        <HiOutlineSearch className="text-lg text-gray absolute top-1/2 -translate-y-1/2 left-2.5" />
                                                    </div>
                                                    <ul className="flex flex-col gap-4 max-h-[190px] pb-3 overflow-y-auto overflow-x-hidden">
                                                        {
                                                            item.types?.map((type, index)=> {
                                                                return(
                                                                    <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                                                                        <input 
                                                                            type="checkbox" 
                                                                            id={type.name+index}
                                                                            className="form-check-input relative top-0.5"
                                                                        />
                                                                        <label htmlFor={type.name+index}>{type.name}</label>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul> 
                                                </>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>   
        </>
    )
}
