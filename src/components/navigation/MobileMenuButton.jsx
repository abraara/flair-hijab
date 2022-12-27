import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import {BsChevronDown} from "react-icons/bs";
import { HiShoppingBag, HiOutlineMail } from "react-icons/hi";
import { ImHome, ImPriceTags } from "react-icons/im";


function MobileMenuButton() {
    const [isOpen, setIsOpen] =  useState(false);
    const [submenuOpen, setSubmenuOpen] =  useState(false);
    const Menus = [
      { title: "Home", icon: <ImHome/>, link: "/" },
      { 
         title: "Products", icon: <HiShoppingBag/>, link: "/products",
         submenu: true,
         submenuItems: [
            { title: "Womens Clothing",  icon: <ImPriceTags/>, link: "/products/womens-clothing" },
            { title: "Mens Clothing",  icon: <ImPriceTags/>, link: "/products/mens-clothing" },
            { title: "Jewelry",  icon: <ImPriceTags/>, link: "/products/jewelry" },
            { title: "Hijabs",  icon: <ImPriceTags/>, link: "/products/hijabs" },
         ],  
      },
      { title: "About Us", spacing: true, icon: <AiFillInfoCircle/>, link: "/about-us"   },
      { title: "Contact", icon: <HiOutlineMail/>, link: "/contact" },
    ];

    return (
        <>
        {!isOpen ?
          (
            <button className="fixed z-30 flex items-center cursor-pointer right-12 top-7" onClick={() => setIsOpen(!isOpen)}>
              <svg 
                fill="grey"
                viewBox="0 0 100 80"
                width="30"
                height="30"
                >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </button>
          ) :
          (
            <button className="text-xl text-black fixed right-12 top-7 z-30"
            onClick={() => setIsOpen(!isOpen)}>
              <svg 
              stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="grey" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
            </button>
          )
      }
  <div className={`top-[80px] right-0 fixed bg-white border-x-2 w-[100vw] md:w-[20vw] h-full p-1 z-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>         
    <div className="overflow-y-auto py-4 px-3 bg-light rounded dark:bg-gray-800">
    <a href="/" className="flex items-center mb-5">
         <Image src="/../public/logo.jpg" width={50} height={50} className="mr-2 h-[50px]" alt="Flowbite Logo" />
         <span className="self-center text-xl whitespace-nowrap dark:text-white">Flair Hijab</span>
      </a>
      <ul className="space-y-2">
        {Menus.map((menu, index) => (
         <>
         <li key={index} className={`flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 text-gray-600 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
         <a href={menu.link} className="text-base font-medium flex-1">
            <span className="flex items-center">
               {menu.icon}
            <span className="mx-3">{menu.title}</span> </span> </a>
               {menu.submenu && ( 
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => 
                     setSubmenuOpen(!submenuOpen)}  />
               )}
         </li>

            {menu.submenu && submenuOpen &&(
               <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                     <li key={index} className="flex items-center gap-x-4 text-gray-600 cursor-pointer p-2 px-5 hover:bg-gray-100 rounded-md">
                        <a href={submenuItem.link} className="text-base font-medium flex-1">
                        <span className="flex items-center">
                           {submenuItem.icon}
                           <span className="mx-3">
                           {submenuItem.title}
                        </span> </span> 
                        </a>
                     </li>
                  ))}
               </ul>
            )}
         </>
        ))}
      </ul>
   </div>
  </div>
        </>
        
      );
}

export default MobileMenuButton;