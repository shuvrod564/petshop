import { EmailBlueIcon, LocationPinBlueIcon, PhoneBlueIcon } from '@/components/common/icons'
import { ContactForm } from '@/components/shared/ContactForm'
import { PageHeader } from '@/components/shared/PageHeader'
import Link from 'next/link'
import React from 'react' 
import { RxClock } from 'react-icons/rx'

const Page = () => {
    return(
        <main>
            {/* Header Wrapper Start */}
            <PageHeader
                title="Contact us"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                thumbnail="/images/global/contact-bg.webp"
            />
            {/* Header Wrapper End */}

            <div className="py-8 md:py-12">
                <div className="container">
                    <div className="flex flex-row flex-wrap">
                        <div className="w-full md:w-[30%] xl:w-[450px] flex">
                            <div className=" bg-primary-light p-4 sm:p-5 rounded-lg w-full">
                                <ul className="flex flex-col gap-4 sm:gap-5">
                                    <li className="flex gap-3">
                                        <figure className="w-6 pt-1">
                                            <LocationPinBlueIcon />
                                        </figure>
                                        <div className="col">
                                            <address className="text-dark not-italic">BN 4, Webel IT Park, Tower - I,  Module 905, Salt lake city Sector V, Kolkata 700091, WB</address>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <figure className="w-6 pt-1">
                                            <PhoneBlueIcon className="text-xl text-primary" />
                                        </figure>
                                        <div className="col">
                                            <Link href={"tel:+919874563210"} className="text-dark not-italic">+91 9874563210</Link>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <figure className="w-6 pt-1">
                                            <EmailBlueIcon className="text-xl text-primary" />
                                        </figure>
                                        <div className="col">
                                            <Link href={"mailto:info@yoursite.com"} className="text-dark not-italic">info@yoursite.com</Link>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <figure className="w-6 pt-1">
                                            <RxClock className="text-xl text-primary" />
                                        </figure>
                                        <div className="col">
                                            <span className="text-dark not-italic">Monday - Friday  |  9:00 AM - 5:00 PM</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-[70%] xl:w-[calc(100%-450px)] md:pl-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                {/* container */}
            </div>

            <div className="pb-12">
                <div className="container">
                    <div>
                        <iframe className=" aspect-[16/10] w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9678555971823!2d88.43266737524664!3d22.58030553268793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275580826e501%3A0x292290049bcd83f5!2sWEBEL%20TOWER%202%2C%20BN-9!5e0!3m2!1sen!2sbd!4v1710329006112!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Page