'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoChevronForwardOutline, IoCloseOutline } from 'react-icons/io5'
import { MdArrowBack } from "react-icons/md";

const data = [
    {
        title: "Dog",
        icon: "/images/icons/dog.png",
        sublinks: [
            { title: "Dog Food & Health" },
            { title: "Dog Dry Food" },
            { title: "Dog Treats" },
            { title: "Dog Health Supplements" },
            { title: "Dog Grooming Supplies & Training" },
            { title: "Dog Collars, harnesses & leashes" },
            { title: "Dog Dress, Clothes & costumes" },
            { title: "Dog Shampoos" },
            { title: "Dog Toys" }, 
        ]
    },
    {
        title: "Cat",
        icon: "/images/icons/cat.png",
        sublinks: [
            { title: "cat Food & Health" },
            { title: "cat Dry Food" },
            { title: "cat Treats" },
            { title: "cat Health Supplements" },
            { title: "cat Grooming Supplies & Training" },
            { title: "cat Collars, harnesses & leashes" },
            { title: "cat Dress, Clothes & costumes" },
            { title: "cat Shampoos" },
            { title: "cat Toys" }, 
        ]
    },
    {
        title: "Bird",
        icon: "/images/icons/bird.png",
        sublinks: [
            { title: "bird Food & Health" },
            { title: "bird Dry Food" },
            { title: "bird Treats" },
            { title: "bird Health Supplements" },
            { title: "bird Grooming Supplies & Training" },
            { title: "bird Collars, harnesses & leashes" },
            { title: "bird Dress, Clothes & costumes" },
            { title: "bird Shampoos" },
            { title: "bird Toys" }, 
        ]
    },
    {
        title: "Fish",
        icon: "/images/icons/Fish.png",
        sublinks: [
            { title: "fish Food & Health" },
            { title: "fish Dry Food" },
            { title: "fish Treats" },
            { title: "fish Health Supplements" },
            { title: "fish Grooming Supplies & Training" },
            { title: "fish Collars, harnesses & leashes" },
            { title: "fish Dress, Clothes & costumes" },
            { title: "fish Shampoos" },
            { title: "fish Toys" }, 
        ]
    },
    {
        title: "Rabbit",
        icon: "/images/icons/Rabbit.png",
        sublinks: [
            { title: "rabit Food & Health" },
            { title: "rabit Dry Food" },
            { title: "rabit Treats" },
            { title: "rabit Health Supplements" },
            { title: "rabit Grooming Supplies & Training" },
            { title: "rabit Collars, harnesses & leashes" },
            { title: "rabit Dress, Clothes & costumes" },
            { title: "rabit Shampoos" },
            { title: "rabit Toys" }, 
        ]
    },
    {
        title: "Hen",
        icon: "/images/icons/Hen.png",
        sublinks: [
            { title: "Hen Food & Health" },
            { title: "Hen Dry Food" },
            { title: "Hen Treats" },
            { title: "Hen Health Supplements" },
            { title: "Hen Grooming Supplies & Training" },
            { title: "Hen Collars, harnesses & leashes" },
            { title: "Hen Dress, Clothes & costumes" },
            { title: "Hen Shampoos" },
            { title: "Hen Toys" }, 
        ]
    },
    {
        title: "Duck",
        icon: "/images/icons/Duck.png",
        sublinks: [
            { title: "Duck Food & Health" },
            { title: "Duck Dry Food" },
            { title: "Duck Treats" },
            { title: "Duck Health Supplements" },
            { title: "Duck Grooming Supplies & Training" },
            { title: "Duck Collars, harnesses & leashes" },
            { title: "Duck Dress, Clothes & costumes" },
            { title: "Duck Shampoos" },
            { title: "Duck Toys" }, 
        ]
    },
    {
        title: "Parrot",
        icon: "/images/icons/Parrot.png",
        sublinks: [
            { title: "Parrot Food & Health" },
            { title: "Parrot Dry Food" },
            { title: "Parrot Treats" },
            { title: "Parrot Health Supplements" },
            { title: "Parrot Grooming Supplies & Training" },
            { title: "Parrot Collars, harnesses & leashes" },
            { title: "Parrot Dress, Clothes & costumes" },
            { title: "Parrot Shampoos" },
            { title: "Parrot Toys" }, 
        ]
    },
]

export function ResponsiveMenu({res_menu, handleCloseResMenu}) {
    const [filteredSubLinks, setFilterSubLinks] = useState([]);
    const [cateName, setCatName] = useState('');
    const [openSubMenu, setSubMenu] = useState(false) 

  
    const handleSubmenu =(event)=> {
        const value = event.currentTarget.value;
        setCatName(value);
        
        const selectedItem = data.find(item => item.title == value);
        if (selectedItem) {
            setFilterSubLinks(selectedItem)
            setSubMenu(true)
        } 
    }

    return (
        <aside className={`
            fixed top-0 left-0 w-full h-full z-[60] bg-[rgba(0,0,0,0.75)] transition-all duration-300 
            ${res_menu ? 'translate-x-0' : '-translate-x-full'}
        `}>
            <div className="w-full max-w-[280px]"> 
                <div className=" bg-primary text-white py-3 px-4 relative">
                    <p>Hello, <Link href={"#"}>Login</Link></p>
                    <button type="button" onClick={handleCloseResMenu} className="btn text-3xl absolute top-2 -right-8 text-white">
                        <IoCloseOutline />
                    </button>
                </div>
                <div className="bg-white py-3 min-h-[calc(100vh-45px)] text-left relative overflow-x-hidden max-h-[calc(100vh-45px)] overflow-y-auto">
                    {
                        data.map((item, index)=>{
                            return(
                                <div key={index} className="flex items-center justify-between border-b border-[#eee] px-3">
                                    <Link href={"#"} className="py-3 capitalize">{item.title}</Link>
                                    <button className="text-lg" type="button" value={item.title} onClick={handleSubmenu}>
                                        <IoChevronForwardOutline />
                                    </button>
                                </div>
                            )
                        })
                    }
                    <div className={`
                        absolute top-0 left-0 w-full bg-white min-h-[calc(100vh-45px)] transition-all duration-300
                        ${openSubMenu ? 'translate-x-0' : 'translate-x-full'}
                    `}
                    >
                        <button type="button" onClick={()=>setSubMenu(false)} className="flex items-center gap-3 p-3 border-b border-border-color bg-bg-gray w-full">
                            <MdArrowBack className="text-lg" /><span>{cateName}</span>
                        </button>
                        <ul className="max-h-[calc(100vh-98px)] overflow-y-auto"> 
                            {filteredSubLinks.sublinks && filteredSubLinks.sublinks.map((sublink, index) => (
                                <li key={index}>
                                    <Link href={"#"} className="block py-2 px-4 text-dark hover:bg-bg-gray focus:bg-bg-gray capitalize">{sublink.title}</Link>
                                </li>
                            ))}
                        </ul> 
                    </div>
                </div>
            </div>
        </aside>
    )
}
