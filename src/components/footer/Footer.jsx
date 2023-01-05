import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="text-center flex justify-between items-center h-[150px] bg-gray-200 shadow-2xl">
            <div className="px-5">
                <ul className="flex gap-3">
                <li>
                    <Link href="https://www.facebook.com/Flair.hijab" target="_blank">
                    <button id="facebook" className="bg-white sticky duration-500 border-2 border-blue-600 w-10 transform hover:-translate-y-3 h-10 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 " > 
                    <FaFacebookF className="mx-auto"/>
                    </button>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/flairhijab/?hl=en" target="_blank">
                    <button id="instagram" class=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-10 h-10  transform hover:-translate-y-3 rounded-full duration-500 ">
                    <FaInstagram className="mx-auto" />
                    </button>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.tiktok.com/@flairhijab" target="_blank">
                    <button id="tiktok" class="bg-white transform hover:-translate-y-3 border-2 w-10 h-10 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl">
                    <FaTiktok className="mx-auto" />
                    </button>
                    </Link>
                </li>
                </ul>
                </div>
                <div className="gap-3 px-5">
                    <ul className="flex flex-wrap gap-3">
                <li>
                    <p className="flex gap-2"><TfiEmail className="mt-1"/> flarefashion5@hotmail.com</p>
                </li>
                <li>
                   <Link href="tel:780-807-6164"><p className="flex gap-2"><BsTelephone className="mt-1" /> (780) 807-6164</p></Link> 
                </li>
                </ul>
            </div>
        </footer>
    )
}