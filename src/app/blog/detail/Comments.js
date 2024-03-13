import Image from 'next/image'
import React from 'react'
import { BsFillReplyFill } from "react-icons/bs";

const commentList = [
    {
        name: "Onkar Nath",
        posted: "April 19,2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices. Velit sed ullamcorper morbi tincidunt ornare.",
        thumb: "/images/blog/53444f91e698c0c7caa2dbc3bdbf93fc.png"
    },
    {
        name: "Onkar Nath",
        posted: "April 19,2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices. Velit sed ullamcorper morbi tincidunt ornare.",
        thumb: "/images/blog/53444f91e698c0c7caa2dbc3bdbf93fc.png"
    },
]

export function Comments(props) {
    

    return (
        <>
            <h2 className="mt-8 md:mt-12 text-dark text-xl md:text-2xl font-bold mb-4 md:mb-5">2 Comment</h2>
            <form>
                <input type="text"
                    className="w-full h-12 border-0 border-b border-border-color rounde-0 text-dark"
                    placeholder="Enter your comment..."
                />
            </form>
            <ul className="mt-10">
                {
                    commentList.map((item, index)=>{
                        return(
                            <li key={index} className="flex mb-8 relative">
                                <button className="absolute text-xl md:text-2xl text-green top-0 right-0">
                                    <BsFillReplyFill />
                                </button>
                                <figure>
                                    <Image
                                        src={item.thumb}
                                        width={60} height={60}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover object-center rounded-full"
                                    />
                                </figure>
                                <div className="col pl-5 md:pl-6">
                                    <p className="text-base sm:text-lg text-dark">{item.name}</p>
                                    <p className="text-gray">April 19,2020</p>
                                    <p className="text-gray mt-3">{item.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
