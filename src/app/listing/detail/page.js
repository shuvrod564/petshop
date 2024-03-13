 
import { ProductGallery } from '@/components/shared/ProductGallery'
import React from 'react'
import { ProductDetailInfo } from './ProductDetailInfo'
import { Description } from './Description'
import { Reviews } from './Reviews'
import ProductsWidgets from '@/components/widgets/productsWidgets'

const Page = () => {
    return(
        <main className="">
            <div className="pt-8 md:pt-10 lg:pt-12 pb-2.5"> 
                <div className="container">
                    <div className="flex flex-wrap flex-row">
                        <div className="w-full lg:w-[40%]">
                            <ProductGallery />
                        </div>
                        <div className="w-full lg:w-[60%] lg:pl-8 mt-6 lg:mt-0">
                            <ProductDetailInfo />
                        </div>
                    </div>
                    {/* flex */}

                    <Description />

                    <Reviews />

                </div>  
                {/* container */}
            </div>


            <ProductsWidgets title="View Similar Product" />
        </main>
    )
}

export default Page