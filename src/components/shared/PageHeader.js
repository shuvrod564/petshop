import Image from 'next/image'
import React from 'react'

export function PageHeader({title="", description="", thumbnail, gradient}) {
    

    return (
        <>
            <header className="pt-5 md:pt-7">
                <div className="container">
                    <div className="relative">
                        <Image
                            src={thumbnail}
                            width={1340} height={600}
                            alt="Blog Header Bg Image"
                            className="w-full lg:h-72 md:h-60 sm:h-48 h-36 object-cover object-center md:rounded-3xl rounded-xl"
                        />
                        <div className={`absolute top-0 left-0 w-full h-full md:rounded-3xl rounded-xl  py-10 flex items-center ${gradient}`}>
                            <div className="pl-8 md:pl-24"> 
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2.5">{title}</h1>
                                <p className="text-white max-w-[300px]">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* container */}
            </header>
        </>
    )
}
