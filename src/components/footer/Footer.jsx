import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import { FooterLogo } from '../icons/index.js'

export const Footer = () => {
    return (
        <footer className="bg-gray-100 shadow-2xl">
            <div className="px-5 flex flex-wrap justify-center sm:justify-evenly lg:justify-between items-center h-full mx-[80px] ">
            <div>
                <Link  href="/"><FooterLogo /></Link>
            </div>
            <div className="ml-5 md:ml-0">
                <div className="flex">
                <div className="w-8 bg-black h-[2px] px-5 mt-5 mr-2"></div>
                <h3 className="text-center mt-[8px] font-serif">Connect With Us</h3>
                <div className="w-8 bg-black h-[2px] mt-5 px-5 ml-2 float-right"></div>
                </div>
                <ul className="flex gap-3 p-5 pb-5 ml-4  md:pb-0">
                <li>
                    <Link href="https://www.facebook.com/Flair.hijab"  target="_blank">
                    <button aria-label="facebook" id="facebookb" className="bg-white sticky duration-500 border-2 border-blue-600 w-10 transform hover:-translate-y-3 h-10 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 " > 
                    <FaFacebookF className="mx-auto"/>
                    </button>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/flairhijab/?hl=en" target="_blank">
                    <button aria-label="instagram" id="instagramb" className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-10 h-10  transform hover:-translate-y-3 rounded-full duration-500 ">
                    <FaInstagram className="mx-auto" />
                    </button>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.tiktok.com/@flairhijab" target="_blank">
                    <button aria-label="tiktok" id="tiktokb" className="bg-white transform hover:-translate-y-3 border-2 w-10 h-10 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl">
                    <FaTiktok className="mx-auto" />
                    </button>
                    </Link>
                </li>
                </ul>
            </div>
            <div className="w-[300px] font-serif">
                <div className="flex ml-[55px] md:mt-[30px]">
            <div className="w-[60px] bg-black h-[2.5px] mt-5 mr-2"></div>
            <h3 className="text-center mt-[8px]">Contact Us</h3>
                <div className="w-[60px] bg-black h-[2.5px] mt-5 ml-2 float-right"></div>
                </div>
                    <ul className="p-5 text-lg mt-[-10px] ml-4">
                <li>
                    <Link href="mailto:flarefashion5@hotmail.com" className="hover:text-pink-400 ease-in-out duration-300"><div className="flex gap-2 justify-center"><TfiEmail className="mt-1"/> flarefashion5@hotmail.com</div></Link>
                </li>
                <li>
                   <Link href="tel:780-807-6164" className="hover:text-pink-400 ease-in-out duration-300"><div className="flex gap-2 justify-center"><BsTelephone className="mt-1" /> (780) 807-6164</div></Link> 
                </li>
                </ul>
            </div>
            </div>
        </footer>
    )
}