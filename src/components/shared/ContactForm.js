import React from 'react'

export function ContactForm(props) {
    

    return (
        <>
            <div className=" border border-primary-light rounded-lg p-4 sm:p-5">

                <h2 className="text-lg text-black">Send us a Message</h2>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-5">
                    <div>
                        <input type="text" 
                            className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input type="text" 
                            className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <input type="text" 
                            className="form-control !border-white focus:!border-border-color shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <textarea 
                            className="form-control !border-white focus:!border-border-color !h-auto shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.15)]"
                            placeholder="Massage"
                        />
                    </div>
                    <div className="sm:col-span-2 text-center">
                        <button className="btn-primary font-medium text-base md:text-lg">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
