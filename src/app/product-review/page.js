import { StarsIcon } from '@/components/common/icons'
import { ProductReviewForm } from '@/components/shared/ProductReviewForm'
import { RatingViews } from '@/components/shared/RatingViews'
import { ReviewsItem } from '@/components/shared/ReviewItem'
import { WriteReview } from '@/components/shared/WriteReview'
import React from 'react'


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

const Page = () => {
    return(
        <main>
            <div className="pt-8 md:pt-10 lg:pt-12 pb-16">
                <div className="container">
                    <div className="bg-bg-gray border border-border-color rounded-lg p-4 sm:px-5 flex items-center justify-between mb-6 md:mb-7">
                        <h1 className="mb-0 text-dark text-lg sm:text-xl md:text-2xl font-bold">All Reviews</h1>
                        <button className="border border-[#ADDFFF] text-primary bg-white px-2.5 h-[38px] w-[136px] rounded-md hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                            Write a review
                        </button>
                    </div>

 

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
                        <div className="w-full lg:w-[50%] 3xl:w-[55%] lg:pl-6 3xl:pl-8 mt-5 pt-4 border-t border-border-color lg:pt-0 lg:mt-0 lg:border-t-0">
                            <WriteReview page="product-review" />
                        </div>
                    </div>

                    <ProductReviewForm />


                    <ul className="mt-10 mb-6 md:mb-12 review__list">
                
                        {
                            reviews.map((item, index)=> {
                                return(
                                    <ReviewsItem key={index} item={item} /> 
                                )
                            })
                        }
                    </ul>

                </div>
                {/* container */}
            </div>
        </main>
    )
}

export default Page