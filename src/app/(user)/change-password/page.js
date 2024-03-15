'use client'
import React, { useState } from 'react'
import UserLayout from '../UserLayout'
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from 'react-icons/io5';
// export const metadata = {
//     title: "Change Password"
// }

const FeildItem = ({ placeholder }) => {
    const [showPassword, setShowPassword] = useState(false)

    return(
        <div>
            <div className="relative"> 
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    className="form-control shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] !border-0 focus:!border"
                    placeholder={placeholder}
                />
                <button 
                    type="button"
                    onClick={()=>setShowPassword(!showPassword)}
                    className="text-gray h-12 w-10 absolute top-0 right-0 z-10 text-lg"
                >
                    { showPassword ? <IoEye /> : <IoMdEyeOff /> }
                </button>
            </div>
        </div>
    )
}

const Page = () => {
    return (
        <UserLayout>
            <div className="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] p-5 md:px-7 rounded-lg">
                <div className="flex justify-between border-b border-border-color pb-5">
                    <h2 className="text-black md:text-lg font-medium mb-0">Change Password</h2> 
                </div>
                <div className="pt-7 pb-8 md:pb-12 flex flex-col gap-5">
                    <form className="flex flex-col gap-5 max-w-[380px]">
                        <FeildItem 
                            placeholder="Old Password"
                        /> 
                        <FeildItem 
                            placeholder="New Password"
                        /> 
                        <FeildItem 
                            placeholder="Confirm Password"
                        /> 
                        <div className="mt-3">
                            <button className="btn-primary md:text-lg font-medium">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout>
    )
}

export default Page