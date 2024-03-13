import { BlogItem } from '@/components/shared/BlogItem'
import { BlogSideBar } from '@/components/shared/BlogSideBar'
import Image from 'next/image'
import React from 'react'
import { BlogDetail } from './BlogDetail'
import { Comments } from './Comments'

export const metadata = {
    title: "All Blogs",
    description: "Blogs meta description"
}

const blogs = [
    {
        thumbnail: "/images/blog/close-up-adorable-pet-eating-1.png",
        title: "6 Essential Cat Products Every Cat Owners Must Have",
        description: "Having a cat in a house is both rejuvenating and entertaining for the owners. Cats are incredibly dignified creatures yet have a sense of humour that makes us light-hearted and relaxed. To keep up their spirit and enthusiasm",
        posted: "17, Apr 2024"
    },
    {
        thumbnail: "/images/blog/305f6ed27098c76318d425e654859f9a.jpg",
        title: "Golden Retriever: Top Dog Food & Feeding Patterns To Know",
        description: "Did you know? Golden Retrievers are the most cherished types of breeds you’ll ever see! The breed is known for their sheer intelligence which makes them excel in obedience training sessions. Owing to their quick learning skills and",
        posted: "17, Apr 2024"
    },
    {
        thumbnail: "/images/blog/veterinarian-taking-care-pet-dog-1.png",
        title: "5 Benefits Of Turmeric To Boost Your Dog’s Health",
        description: "The bright yellow-colored spice in your kitchen can prove to be the perfect health supplement for your canine partner. You have guessed it correctly, we are talking about ‘turmeric’ and its innumerable health advantages for",
        posted: "17, Apr 2024"
    },
    {
        thumbnail: "/images/blog/view-adorable-dog-with-bowl-food-1.png",
        title: "What Dog Food is Best For Your Doberman?",
        description: "Having a cat in a house is both rejuvenating and entertaining for the owners. Cats are incredibly dignified creatures yet have a sense of humour that makes us light-hearted and relaxed. To keep up their spirit and enthusiasm",
        posted: "17, Apr 2024"
    },
    {
        thumbnail: "/images/blog/image-15.png",
        title: "9 Signs That Show You Are a Crazy Cat Person",
        description: "Having a cat in a house is both rejuvenating and entertaining for the owners. Cats are incredibly dignified creatures yet have a sense of humour that makes us light-hearted and relaxed. To keep up their spirit and enthusiasm",
        posted: "17, Apr 2024"
    },
]

const Page = () => {
    return(
        <main> 

            {/* Blog Lisiting Wrapper Start */}
            <div className="py-8 md:py-12">
                <div className="container">
                    <div className="relative">
                        <div className="block rounded-lg bg-bg-gray mb-4 sm:mb-5">
                            <Image 
                                src={"/images/blog/305f6ed27098c76318d425e654859f9a.jpg"}
                                width={1190} height={521}
                                alt="Blog thumbnail"
                                className="w-full sm:aspect-[16/7] aspect-video object-cover object-center rounded-lg"
                            />
                        </div>
                        <span className="px-4 py-1.5 bg-white rounded-lg absolute bottom-5 left-5">{"17, Apr 2024"}</span>
                    </div>

                    <div className="flex flex-row flex-wrap">
                        <div className="w-full lg:w-[70%] lg:pr-5">
                            <BlogDetail />

                            <Comments />
                        </div>
                        <div className="w-full lg:w-[30%] lg:pl-7 mt-10 lg:mt-0">
                            <BlogSideBar />
                        </div>
                    </div>
                    {/* flex */}
                </div>
                {/* container */}
            </div>
            {/* Blog Lisiting Wrapper End */}

        </main>
    )
}

export default Page