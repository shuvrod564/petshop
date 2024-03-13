import React from 'react' 
import { Pagelayout } from './Pagelayout'

export const metadata = {
    title: "Food Listing"
}

const Page = () => {
    

    return (
        <main className="py-10 md:py-12 md:mb-20">
            <div className="container">
                <Pagelayout />

            </div>
            {/* container */}
        </main>
    )
}

export default Page