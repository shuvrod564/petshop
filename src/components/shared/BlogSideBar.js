'use client'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import { CommentGrayIcon } from '../common/icons';

const posts = [
    {
        title: "5 Unique Homemade Dog Treats’ Recipes",
        thumb: "/images/blog/recent-post.png",
    },
    {
        title: "5 Unique Homemade Dog Treats’ Recipes",
        thumb: "/images/blog/recent-post.png",
    },
    {
        title: "5 Unique Homemade Dog Treats’ Recipes",
        thumb: "/images/blog/recent-post.png",
    },
    {
        title: "5 Unique Homemade Dog Treats’ Recipes",
        thumb: "/images/blog/recent-post.png",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        thumb: "/images/blog/recent-post.png",
    },
]

export function BlogSideBar(props) {
    

    return (
        <>
            <h3 className="text-lg md:text-xl lg:text-2xl text-black font-medium mb-3">Categories</h3>
            <ul>
                <li className="flex items-center border-b border-bg-gray pb-4 mb-4">
                    <Link href={"#"} className="flex items-center w-full text-lg text-dark hover:text-primary">
                        <span className="w-3 h-3 rounded-full block bg-gray mr-2.5"></span>
                        <span>Dog</span>
                        <FiChevronRight className="ms-auto" />
                    </Link>
                </li>
                <li className="flex items-center border-b border-bg-gray pb-4 mb-4">
                    <Link href={"#"} className="flex items-center w-full text-lg text-dark hover:text-primary">
                        <span className="w-3 h-3 rounded-full block bg-gray mr-2.5"></span>
                        <span>Bird</span>
                        <FiChevronRight className="ms-auto" />
                    </Link>
                </li>
                <li className="flex items-center border-b border-bg-gray pb-4 mb-4">
                    <Link href={"#"} className="flex items-center w-full text-lg text-dark hover:text-primary">
                        <span className="w-3 h-3 rounded-full block bg-gray mr-2.5"></span>
                        <span>Cat</span>
                        <FiChevronRight className="ms-auto" />
                    </Link>
                </li>
                <li className="flex items-center border-b border-bg-gray pb-4 mb-4">
                    <Link href={"#"} className="flex items-center w-full text-lg text-dark hover:text-primary">
                        <span className="w-3 h-3 rounded-full block bg-gray mr-2.5"></span>
                        <span>Fish</span>
                        <FiChevronRight className="ms-auto" />
                    </Link>
                </li>
                <li className="flex items-center border-b border-bg-gray pb-4 mb-4">
                    <Link href={"#"} className="flex items-center w-full text-lg text-dark hover:text-primary">
                        <span className="w-3 h-3 rounded-full block bg-gray mr-2.5"></span>
                        <span>Rabbit</span>
                        <FiChevronRight className="ms-auto" />
                    </Link>
                </li>
            </ul>


            <h3 className="text-lg md:text-xl lg:text-2xl text-black font-medium mb-3 mt-8 md:mt-9">Recent Posts</h3>
            <ul className="">
                {
                    posts.map((item, index)=>{
                        return(
                            <li key={index} className="pb-4 mb-5 border-b border-border-color">
                                <div className="flex">
                                    <Link href={"#"} className="block w-24">
                                        <Image
                                            src={item.thumb}
                                            width={96} height={96}
                                            alt={item.title}
                                            className="w-full h-auto aspect-[1/1] object-cover object-center"
                                        />
                                    </Link>
                                    <div className="col pl-4 md:pl-5">
                                        <h4 className="text-base sm:text-lg !leading-[1.3] mb-1 title">
                                            <Link href={"#"} className="text-[#333333] hover:text-primary inline-block">{item.title}</Link>
                                        </h4>
                                        <div className="inline-flex text-gray items-center gap-2">
                                            <CommentGrayIcon className="text-gray" />
                                            <span>Comment : 21</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>


             
        </>
    )
}
