'use client'
import { EmailColoredIcon, PhoneFilledColoredIcon } from '@/components/common/icons'
import React, { useState } from 'react'
import { GoPencil } from 'react-icons/go'
import { HiMiniUser } from 'react-icons/hi2'
export function ProfileDetails(props) {
    const [editMode, setEditMode] = useState(false)

    return (
        <>
            <div className="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] p-5 md:px-7 rounded-lg">
                <div className="flex justify-between border-b border-border-color pb-5">
                    <h2 className="text-black md:text-lg font-medium mb-0">Profile Details</h2>
                    {
                        !editMode && (
                            <button type="button" onClick={()=>setEditMode(!editMode)} className="text-black">
                                <GoPencil />
                            </button> 
                        )
                    }
                </div>
                <div className="pt-7 pb-8 md:pb-10">
                    <form action="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-y-7">
                            <div>
                                <div className="flex items-center gap-3.5">
                                    <figure className="w-8 h-8 border border-primary-light rounded-full text-primary flex items-center justify-center">
                                        <HiMiniUser className="text-xl" />
                                    </figure>
                                    <input type="text" 
                                        className="w-full col h-10 text-dark md:text-lg"
                                        defaultValue={"Onkar Nath"}
                                        readOnly={!editMode}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3.5">
                                    <figure className="w-8 h-8 border border-primary-light rounded-full text-primary flex items-center justify-center">
                                        <EmailColoredIcon className="text-xl" />
                                    </figure>
                                    <input type="text" 
                                        className="w-full col h-10 text-dark md:text-lg"
                                        defaultValue={"onkar@idiosystech.com"}
                                        readOnly={!editMode}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3.5">
                                    <figure className="w-8 h-8 border border-primary-light rounded-full text-primary flex items-center justify-center">
                                        <PhoneFilledColoredIcon className="text-xl" />
                                    </figure>
                                    <input type="text" 
                                        className="w-full col h-10 text-dark md:text-lg"
                                        defaultValue={"+91 9874563210"}
                                        readOnly={!editMode}
                                    />
                                </div>
                            </div>
                            {
                                editMode && (
                                    <div>
                                        <button type="button" onClick={()=>setEditMode(!editMode)} className="btn-primary">Update</button>
                                    </div>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
