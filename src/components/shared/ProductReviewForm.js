import React from 'react' 
import { FileUpload } from './FileUpload'

export function ProductReviewForm(props) {
    

    return (
        <>
            <div className="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] rounded-lg p-5 sm:pt-7 sm:px-8 md:px-10 lg:px-12 sm:pb-7 md:pb-10 mt-6 sm:mt-7">
                <form action="#" className="max-w-[760px]">
                    <h3 className="text-base sm:text-lg text-dark mb-4 sm:mb-5">Give Your Review</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        <div>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Full Name*"
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Email*" 
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Review Title" 
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Rating :" 
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <textarea 
                                cols={55} rows={4} 
                                className="form-control"
                                placeholder="Your Review" 
                            />
                        </div>
                        <div className="sm:col-span-2"> 
                            <FileUpload />
                        </div>

                    </div>
                    {/* grid */}

                    <div className="mt-5 sm:mt-8">
                        <button className="btn-primary !text-lg !font-medium h-12 items-center">Submit Review</button>
                    </div>
                </form>
            </div>
        </>
    )
}
