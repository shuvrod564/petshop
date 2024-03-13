'use client'
import React, { useEffect, useState } from 'react'
import { Filter } from './Filter'
import { ListingHeaderFilter } from '@/components/shared/ListingHeaderFilter'
import { Listing } from './Listing'

export function Pagelayout(props) { 
    const [res_filtermenu, setResfiltermenu] = useState(false)
    const [openResMenu, setOpenResMenu] = useState(false)
     

    useEffect(()=>{
        const handleResize =()=>{ 
            const window_size = window.innerWidth;
            
            if (window_size < 1040) {
                setResfiltermenu(true)
            } else {
                setResfiltermenu(false)
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return(()=> {
            window.removeEventListener('resize', handleResize);
        })
    },[])
    

    return (
        <>
            <div className="flex flex-wrap flex-row items-start">
                <Filter res_filtermenu={res_filtermenu} setResfiltermenu={setResfiltermenu} openResMenu={openResMenu} setOpenResMenu={setOpenResMenu} />

                <div className="col xl:pl-12 lg:pl-9">
                    <ListingHeaderFilter openResMenu={openResMenu} setOpenResMenu={setOpenResMenu} />

                    <Listing />

                    {/* Pagination will go here */}


                </div>
                {/* col */}
            </div>
        </>
    )
}
