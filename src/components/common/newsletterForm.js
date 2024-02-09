import React from 'react'
import { SendIcon } from './icons'

export function NewsletterForm(props) {
    

    return (
        <>
            <form className="flex rounded-lg overflow-hidden">
                <input type="text" className="form-control !rounded-none !border-0" placeholder="Enter your email address" required />
                <button className="px-4 bg-[#ADDFFF]">
                    <SendIcon />
                </button>
            </form>
        </>
    )
}
