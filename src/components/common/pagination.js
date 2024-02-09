import Link from 'next/link'
import React from 'react'
import { HiMiniChevronRight, HiMiniChevronLeft } from 'react-icons/hi2'

const Pagination = (props) => {
    const prev_url = (props.currentPage == 1) ? '' : '/'+ props.pageSlug +'/'+ (Number(props.currentPage)-1);
    const next_url = (props.currentPage == props.pagesCount) ? '' : '/'+ props.pageSlug +'/'+ (Number(props.currentPage)+1);
  return (
    <div className='mt-8 sm:mt-12 lg:mt-16'>
        {props.pagesCount > 1 &&
        <ul className="flex justify-center">
            <li className='mx-1 lg:mx-1.5'>
                <Link 
                href={`${prev_url}`} 
                className={`${(props.currentPage == 1)? 'bg-[#C4C4C4] cursor-none':'bg-dark hover:bg-black'} w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md text-white shadow-md text-sm md:text-base font-medium transition-all duration-150 inline-flex justify-center items-center`}
                >
                    <HiMiniChevronLeft className='text-xl sm:text-2xl' />
                </Link>
            </li>
            { [...Array(props.pagesCount)].map((e, i) => (
                <li key={i} className='mx-1 lg:mx-1.5'>
                    <Link href={`/${props.pageSlug}/${i+1}`} className={`${(i+1 == props.currentPage)? 'bg-primary':'bg-[#C4C4C4]'} w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md text-white shadow-md text-sm md:text-base font-medium hover:bg-primary-light transition-all duration-150 inline-flex justify-center items-center`}>{i+1}</Link>
                </li>
            ))}
            <li className='mx-1 lg:mx-1.5'>
                <Link 
                href={`${next_url}`} 
                className={`${(props.currentPage == props.pagesCount)? 'bg-[#C4C4C4] cursor-none':'bg-dark hover:bg-black'} w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md text-white shadow-md text-sm md:text-base font-medium transition-all duration-150 inline-flex justify-center items-center`}
                >
                    <HiMiniChevronRight className='text-xl sm:text-2xl' />
                </Link>
            </li>
        </ul>
        }
    </div>
  )
}

export default Pagination
