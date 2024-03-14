import { PriceDetails } from '@/components/shared/PriceDetails'
import React from 'react' 
import { PaymentMethod } from './PaymentMethod'

export const metadata = {
    title: "Payment"
}

const Page = () => {
    return (
        <main>
            <div className="py-9 md:py-12">
                <div className="container">
                    <div className="flex flex-row flex-wrap">
                        <div className="w-full lg:w-[70%] 2xl:w-[calc(100%-380px)] 2xl:pr-12 lg:pr-7">
                            <PaymentMethod />
                        </div>
                        <div className="w-full lg:w-[30%] 2xl:w-[380px] mt-10 lg:mt-0"> 
                            <PriceDetails page="payment" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page