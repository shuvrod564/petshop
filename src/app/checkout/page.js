import { PriceDetails } from '@/components/shared/PriceDetails'
import React from 'react'
import { BillingForm } from './BillingForm'
import { OrderSummery } from './OrderSummery'

export const metadata = {
    title: "Check Out"
}

const Page = () => {
    return (
        <main>
            <div className="py-9 md:py-12">
                <div className="container">
                    <div className="flex flex-row flex-wrap">
                        <div className="w-full lg:w-[70%] 2xl:w-[calc(100%-380px)] 2xl:pr-12 lg:pr-7">
                            <BillingForm />
                        </div>
                        <div className="w-full lg:w-[30%] 2xl:w-[380px] mt-10 lg:mt-0">
                            <OrderSummery />
                            <PriceDetails page="checkout" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page