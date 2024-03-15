'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'

const data = [
    {
        title: "Dog",
        icon: "/images/icons/dog.png",
        sublinks: [
            {
                category_name: "Dog Accessories",
                categories: [
                    { title: "collar" },
                    { title: "leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "crate" },
                    { title: "toys (e.g., balls, chew toys, puzzle toys)" },
                    { title: "bowls (food and water)" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" }, 
                ]
            },
            {
                category_name: "Dog Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Taste of the Wild" },
                    { title: "Orijen" },
                    { title: "Wellness Core" },
                    { title: "Canidae" },
                    { title: "Nutro" },
                    { title: "Natural Balance" },
                    { title: "Merrick" },
                    { title: "Fromm" }, 
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Biscuits & Cookies" },
                    { title: "Dental treats" },
                    { title: "Freeze-Dried Treats" },
                    { title: "Functional & Training Treats" },
                    { title: "Jerkies" },
                    { title: "Natural Treats" },
                    { title: "Soft & Chewy Treats" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Cat",
        icon: "/images/icons/cat.png",
        sublinks: [
            {
                category_name: "Cat Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                ]
            },
            {
                category_name: "Cat Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Bird",
        icon: "/images/icons/bird.png",
        sublinks: [
            {
                category_name: "Bird Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                ]
            },
            {
                category_name: "Bird Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Fish",
        icon: "/images/icons/Fish.png",
        sublinks: [
            {
                category_name: "Fish Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                ]
            },
            {
                category_name: "Fish Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Rabbit",
        icon: "/images/icons/Rabbit.png",
        sublinks: [
            {
                category_name: "Dog Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                ]
            },
            {
                category_name: "Dog Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Hen",
        icon: "/images/icons/Hen.png",
        sublinks: [
            {
                category_name: "Hen Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                ]
            },
            {
                category_name: "Hen Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Duck",
        icon: "/images/icons/Duck.png",
        sublinks: [
            {
                category_name: "Duck Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                ]
            },
            {
                category_name: "Duck Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
    {
        title: "Parrot",
        icon: "/images/icons/Parrot.png",
        sublinks: [
            {
                category_name: "Parrot Accessories",
                categories: [
                    { title: "Collar" },
                    { title: "Harness and Leash" },
                    { title: "harness" },
                    { title: "bed" },
                    { title: "Carrier" },
                    { title: "Scratching Post" },
                    { title: "Tree or Condo" },
                    { title: "brush or comb" },
                    { title: "shampoo" },
                    { title: "nail clippers" },
                    { title: "treats" },
                ]
            },
            {
                category_name: "Parrot Foods",
                categories: [
                    { title: "Royal Canin" },
                    { title: "Hill's Science Diet" },
                    { title: "Purina Pro Plan" },
                    { title: "Blue Buffalo" },
                    { title: "Wellness" },
                    { title: "Taste of the Wild" },
                    { title: "Fancy Feast" },
                    { title: "Natural Balance" },
                    { title: "Nutro" },
                    { title: "Meow Mix" },
                    { title: "Friskies" },
                    { title: "Iams" },
                ]
            },
            {
                category_name: "Treats",
                categories: [
                    { title: "Temptations" },
                    { title: "Greenies" },
                    { title: "Blue Buffalo Wilderness" },
                    { title: "Wellness Kittles" },
                    { title: "Friskies Party Mix" },
                    { title: "PureBites" },
                    { title: "Hartz Delectables" },
                    { title: "Pounce" },
                    { title: "Feline Greenies" },
                    { title: "Sheba Meaty Tender Sticks" },
                ]
            },
            {
                category_name: "Supplies",
                categories: [
                    { title: "Toys" },
                    { title: "Bedding" },
                    { title: "Bowls & Feeders" },
                    { title: "Cleaning & Potty" },
                    { title: "Training & Behaviour" },
                    { title: "Carriers & Travel" },
                    { title: "Grooming" },
                    { title: "Gates, Crates & Pens" },
                ]
            },
            {
                category_name: "Health Care",
                categories: [
                    { title: "Health Care Aids" },
                    { title: "Vitamins & Supplements" },
                    { title: "Flea & Tick" }
                ]
            },
 
        ]
    },
]
 

export function CategoryMegaMenu() { 
    const [hovered, setHovered] = useState(true);
    // console.log(hovered);
     
    const menuHovered =()=> {
        if (hovered.prev != true) {
            setHovered(true)
        }
    }
    const menuHoverOut =()=> {
        setHovered(!hovered)
    }

    return (
        <>
            <nav className="py-4 bg-white">
                <div className="container">
                    <ul className="flex flex-row flex-wrap gap-x-7 2xl:gap-x-10 gap-y-2 relative">
                        {
                            data.map((item, index)=> {
                                return(
                                    <li key={index} className=" group" onMouseEnter={()=>setHovered(!hovered)} onMouseLeave={()=>setHovered(!hovered)}>
                                        <Link href={"/listing"} className="block text-center text-dark text-lg">
                                            {/* <Image
                                                src={item.icon} width={60} height={60} alt="thumb"
                                                className="mx-auto"
                                            /> */}
                                            <span className="flex justify-center gap-1 items-center mt-1 group-hover:text-primary">
                                                {item.title} 
                                                <HiOutlineChevronDown className="group-hover:rotate-180 transition-all duration-150" />
                                            </span>
                                        </Link>
                                        {/* */}
                                        <div
                                            onMouseEnter={()=>setHovered(menuHovered)} onMouseLeave={()=>setHovered(menuHoverOut)}
                                            className="absolute top-full left-0 z-50 w-full transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                                        >
                                           {/*   */}
                                           <div className={`absolute top-0 -left-[50vw] w-[200vw] h-[100vh] bg-dark -z-10 pointer-events-none ${hovered ? ' opacity-25' : 'opacity-0'}`}></div>
                                            <div className="h-[500px] z-30 relative  p-5 shadow rounded-bl-lg rounded-br-lg bg-white">
                                                <div className="block lg:columns-5 md:columns-4 sm:columns-4 columns-5 gap-4"> 
                                                    {
                                                        item.sublinks.map((item, index)=>{
                                                            return(
                                                                <div key={index} className="block break-inside-avoid mb-5">
                                                                    <p className="text-primary font-semibold mb-1 text-sm md:mb-3">{item.category_name}</p>
                                                                    <ul className="flex flex-col gap-3 3xl:gap-3.5">
                                                                        {
                                                                            item.categories?.map((facility, index)=>{
                                                                                return(
                                                                                    <li key={index} className="flex items-center"> 
                                                                                        <Link href={"/listing"} className="text-dark text-sm hover:text-primary capitalize">{facility.title}</Link>
                                                                                    </li> 
                                                                                )
                                                                            })
                                                                        }
                                                                        
                                                                    </ul>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* container */}
            </nav>
        </>
    )
}
