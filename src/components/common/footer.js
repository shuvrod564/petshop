import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { TfiYoutube } from "react-icons/tfi";
import { NewsletterForm } from "./newsletterForm";

const Footer = async({}) => {

  return (
    <footer className='pt-10 bg-black'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <Link href={"/"} className="inline-block mb-5">
              <Image src={"/images/logo.png"} width={69} height={64} alt="logo" />
            </Link>
            <p className="text-white font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Contact Info</p>
            <p className="text-base md:text-lg text-[#C4C4C4]">
              <span className="font-medium">Address:</span>  BN 4, Webel IT Park, Tower - I,  Module 905, Salt lake city Sector V, Kolkata 700091, WB 
              <span className="block mt-3">
              <span className="font-medium">Phone:</span>  +91 8274010916
              </span>
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-white font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Help</p>
                <ul className="flex flex-col gap-2">
                  <li><Link href={"/"} className="text-border-color hover:text-primary focus:text-primary">Home</Link></li>
                  <li><Link href={"#"} className="text-border-color hover:text-primary focus:text-primary">About Us</Link></li>
                  <li><Link href={"/contact"} className="text-border-color hover:text-primary focus:text-primary">Contact Us</Link></li>
                  <li><Link href={"#"} className="text-border-color hover:text-primary focus:text-primary">FAQ</Link></li>
                  <li><Link href={"#"} className="text-border-color hover:text-primary focus:text-primary">Offers</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Important Links</p>
                <ul className="flex flex-col gap-2">
                  <li><Link href={"/"} className="text-border-color hover:text-primary focus:text-primary">Terms & Conditions</Link></li>
                  <li><Link href={"#"} className="text-border-color hover:text-primary focus:text-primary">Become a Merchant</Link></li>
                  <li><Link href={"/blog"} className="text-border-color hover:text-primary focus:text-primary">Blog</Link></li>
                  <li><Link href={"#"} className="text-border-color hover:text-primary focus:text-primary">Policy</Link></li> 
                </ul>
              </div>
            </div>
          </div>
          <div> 
            <p className="text-white font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3 uppercase">Connect with Us</p>
            <ul className="flex flex-row gap-4">
              <li>
                <Link href={"#"} className="text-border-color text-xl lg:text-2xl">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-border-color text-xl lg:text-2xl">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-border-color text-xl lg:text-2xl">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-border-color text-xl lg:text-2xl">
                  <TfiYoutube />
                </Link>
              </li>
            </ul>

            <p className="text-white font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3 uppercase mt-5">Newsletter</p>
            <NewsletterForm />

            <p className="text-white font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3 uppercase mt-5">Download Petly App</p>
            <div className="flex gap-3">
              <Link href={"#"} className="inline-block">
                <Image src={"/images/icons/play_store.png"} width={150} height={50} alt="Google Play" />
              </Link>
              <Link href={"#"} className="inline-block">
                <Image src={"/images/icons/app_store.png"} width={150} height={50} alt="App Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
      <div className="mt-8 md:mt-10">
        <div className="container border-t border-[#747474] py-3 sm:py-4"> 
          <p className="text-[#D4D4D4] text-center text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm">Copyright@petly. Developed by 
            <a className="mx-1 text-[#D4D4D4]" target="_blank" href="https://www.idiosystech.com/">IDIOSYS TECHNOLOGIES.</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
