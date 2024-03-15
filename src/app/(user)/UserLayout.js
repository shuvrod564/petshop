'use client'
import { BoxColoredIcon, KeyColoredIcon, UserColoredIcon, WhishColoredIcon } from '@/components/common/icons';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2';

const  UserLayout = ({children}) => {
    const [profileMenu, setProfileMenu] = useState(false)

    const router = usePathname();


    return (
        <>
            <div className="pt-8 md:pt-12 pb-12 md:pb-16 lg:pb-24">
                <div className="container">
                    <div className="flex flex-row flex-wrap">
                        <div className="2xl:w-[350px] xl:w-[300px] md:w-[240px] w-full">
                            <div className="shadow-[0px_4px_20px_0px_rgba(40,130,255,0.15)] rounded-lg lg:min-h-[700px] md:min-h-[600px]">
                                <div className="bg-dark p-5 rounded-tl-lg rounded-tr-lg flex items-center">
                                    <figure className="2xl:w-[86px] 2xl:h-[86px] w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white">
                                        <Image
                                            src={"/images/icons/user-avater.svg"}
                                            width={70} height={70} alt="User Avater"
                                            className="2xl:w-[83px] 2xl:h-[83px] w-[56px] h-[56px] object-contain pt-1"
                                        />
                                    </figure>
                                    <div className="col pl-4">
                                        <p className="2xl:mb-2 mb-0.5 text-lg font-medium text-white">Mr. Onkar</p>
                                        <p className="text-border-color mb-0">Good to see you again</p>
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-2 px-5 py-7 mb-8">
                                    <li>
                                        <div className="relative">
                                            <Link href={"/dashboard"} className="flex items-center text-dark gap-4 py-3 md:py-4 border-b border-border-color">
                                                <UserColoredIcon />
                                                <span className="lg:text-lg">My Profile</span>
                                            </Link>
                                            <button 
                                                type="button"
                                                onClick={()=>setProfileMenu(!profileMenu)}
                                                className="text-gray text-xl absolute top-0 right-0  h-full pl-3 "
                                            >
                                                {
                                                    profileMenu ? <HiOutlineChevronUp /> : <HiOutlineChevronDown /> 
                                                }
                                                
                                            </button>
                                        </div>
                                        {
                                            profileMenu && (
                                                <ul className="my-4">
                                                    <li>
                                                        <Link href={"#"} className={`px-5 py-3 rounded-lg text-dark hover:text-primary hover:bg-bg-gray block`}>Profile Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"} className={`px-5 py-3 rounded-lg text-dark hover:text-primary hover:bg-bg-gray block`}>Address</Link>
                                                    </li>
                                                </ul> 
                                            )
                                        }
                                    </li>
                                    <li>
                                        <Link href={"/change-password"} className={`flex items-center text-dark gap-4 py-3 md:py-4 border-border-color ${router == '/change-password' ? 'bg-bg-gray rounded-lg border-bg-gray px-4 py-3 mt-3' : ' border-b'}`}>
                                            <KeyColoredIcon />
                                            <span className="lg:text-lg">Change Password</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/orders"} className={`flex items-center text-dark gap-4 py-3 md:py-4 border-border-color ${router == '/orders' ? 'bg-bg-gray rounded-lg border-bg-gray px-4 py-3 mt-3' : ' border-b'}`}>
                                            <BoxColoredIcon />
                                            <span className="lg:text-lg">Orders</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/wishlist"} className={`flex items-center text-dark gap-4 py-3 md:py-4 border-border-color ${router == '/wishlist' ? 'bg-bg-gray rounded-lg border-bg-gray px-4 py-3 mt-3' : ' border-b'}`}>
                                            <WhishColoredIcon />
                                            <span className="lg:text-lg">WishList</span>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                            {/* shadow */}
                        </div>
                        {/* col */}
                        <div className="col md:pl-5 lg:pl-9 2xl:pl-12">
                            {children}
                        </div>
                    </div>
                    {/* flex */}

                </div>
                {/* container */}
            </div>
        </>
    )
}

export default UserLayout