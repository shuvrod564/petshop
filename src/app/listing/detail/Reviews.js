import { StarsIcon } from '@/components/common/icons'
import { RatingViews } from '@/components/shared/RatingViews'
import { ReviewsItem } from '@/components/shared/ReviewItem';
import { WriteReview } from '@/components/shared/WriteReview'
import Link from 'next/link';
import React from 'react' 
import { HiMiniChevronDoubleRight } from "react-icons/hi2";

const reviews = [
    {
        author: "Arnab Bhakta",
        date: "12 Feb 2024",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        author: "Prosenjit Nath",
        date: "03 Feb 2024",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        author: "Ananya Ghosh",
        date: "18 Jan 2024",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
]

export function Reviews(props) {
    

    return (
        <>
            <h2 className="mt-8 md:mt-12 text-xl md:text-2xl font-bold text-dark border-b border-border-color pb-4 mb-5">Reviews</h2>

            <h3 className="text-lg md:text-xl font-medium mb-5 md:mb-6 lg:mb-7">Customer Reviews</h3>
            <div className="flex flex-row flex-wrap border-b border-border-color pb-5">
                <div className="w-full sm:w-[40%] lg:w-[20%] 3xl:w-[15%] sm:pr-6 sm:border-r border-b sm:border-b-0 border-border-color pb-5 sm:pb-0 mb-5 sm:mb-0">
                    <StarsIcon />
                    <p className="text-gray mt-2 mb-4 md:mb-5">Based on 80 reviews</p>
                    <select name="type" id="type" className="border border-border-color h-10 leading-3 w-full max-w-[150px] p-2 rounded-lg text-dark px-4 bg-[url('/images/icons/caret-down.svg')] bg-no-repeat bg-[center_right_8px] bg-[length:15px_15px] appearance-none bg-white">
                        <option value="Most Recent">Most Recent</option>
                        <option value="New">New</option>
                    </select>
                </div>
                <div className="w-full sm:w-[60%] lg:w-[30%] 3xl:w-[30%] lg:pr-6 sm:pl-6 3xl:pl-8 lg:border-r border-border-color">
                    <RatingViews />
                </div>
                <div className="w-full lg:w-[50%] 3xl:w-[55%] lg:pl-6 3xl:pl-8 mt-5 pt-4 border-t border-border-color lg:border-t-0 lg:pt-0 lg:mt-0">
                    <WriteReview />
                </div>
            </div>

            <ul className="mt-5 mb-6 md:mb-7 review__list">
                
                {
                    reviews.map((item, index)=> {
                        return(
                            <ReviewsItem key={index} item={item} /> 
                        )
                    })
                }
            </ul>
            <Link href={"/product-review"} className="text-primary text-base md:text-lg font-medium inline-flex items-center gap-1 group hover:text-green">
                See All Reviews <HiMiniChevronDoubleRight className="text-xl relative top-0.5 transition-all duration-300 group-hover:translate-x-3" />
            </Link>
        </>
    )
}
