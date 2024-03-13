'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { CommentGrayIcon, UserGrayIcon } from '../common/icons'

export function BlogItem({data}) {
    

    return (
        <> 
            <div className="blog__item">
                <div className="relative">
                    <Link href={"/blog/detail"} className="block rounded-lg bg-bg-gray mb-4 sm:mb-5" title={data.title} aria-label={data.title}>
                        <Image 
                            src={data.thumbnail}
                            width={813} height={356}
                            alt="Blog thumbnail"
                            className="w-full sm:aspect-[16/7] aspect-video object-cover object-center rounded-lg"
                        />
                    </Link>
                    <span className="px-4 py-1.5 bg-white rounded-lg absolute bottom-5 left-5">{data.posted}</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold mb-3">
                    <Link href={"/blog/detail"} className="text-dark hover:text-primary hover:underline" title={data.title}>{data.title}</Link>
                </h2>
                <p className="text-gray description">{data.description}</p>
                <Link href={"/blog/detail"} className="text-primary hover:text-green underline hover:no-underline" aria-label="Read More">Read More</Link>

                <div className="mt-4 pt-4 md:pt-5 border-t border-border-color flex items-center">
                    <div className="inline-flex text-dark items-center gap-2">
                        <UserGrayIcon className="text-gray" />
                        <span>By : <Link href={"#"} className="text-dark hover:text-primary">Onkar Nath</Link></span>
                    </div>
                    <div className="w-[1px] h-5 bg-border-color mx-5"></div>
                    <div className="inline-flex text-dark items-center gap-2">
                        <CommentGrayIcon className="text-gray" />
                        <span>Comment : 21</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .description {
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                white-space: normal;
            }
            .blog__item:not(:last-child) {
                margin-bottom: 3rem;
            }
        `}</style>
        </>
    )
}
