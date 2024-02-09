import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'

const data = [
    {
        title: "Dog",
        icon: "/images/icons/dog.png"
    },
    {
        title: "Cat",
        icon: "/images/icons/cat.png"
    },
    {
        title: "Bird",
        icon: "/images/icons/bird.png"
    },
    {
        title: "Fish",
        icon: "/images/icons/Fish.png"
    },
    {
        title: "Rabbit",
        icon: "/images/icons/Rabbit.png"
    },
    {
        title: "Hen",
        icon: "/images/icons/Hen.png"
    },
    {
        title: "Duck",
        icon: "/images/icons/Duck.png"
    },
    {
        title: "Parrot",
        icon: "/images/icons/Parrot.png"
    },
]

export function SubMenu() {
    

    return (
        <>
            <nav className="py-3">
                <div className="container">
                    <ul className="flex flex-row flex-wrap justify-around">
                        {
                            data.map((item, index)=> {
                                return(
                                    <li key={index}>
                                        <Link href={"#"} className="block text-center text-dark text-lg">
                                            <Image
                                                src={item.icon} width={70} height={70} alt="thumb"
                                                className="mx-auto"
                                            />
                                            <span className="flex justify-center gap-1 items-center mt-1">{item.title} <HiOutlineChevronDown /></span>
                                        </Link>
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
