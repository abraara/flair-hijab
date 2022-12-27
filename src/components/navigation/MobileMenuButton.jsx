import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {BsChevronDown} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

function MobileMenuButton() {
    const [isOpen, setIsOpen] =  useState(false);
    const [submenuOpen, setSubmenuOpen] =  useState(false);
    const Menus = [
      { title: "Home" },
      { 
         title: "Products",
         submenu: true,
         submenuItems: [
            { title: "Womens Clothing" },
            { title: "Mens Clothing" },
            { title: "Jewelry" },
            { title: "Hijabs" },
         ],  
      },
      { title: "About Us", spacing: true  },
      { title: "Contact" },
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
         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flair Hijab</span>
      </a>
      <ul className="space-y-2">
        {Menus.map((menu, index) => (
         <>
         <li key={index} className={`flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
            <span>
               <RiDashboardFill />
            </span>
            <span className="text-base font-medium flex-1" onClick={() => 
                setSubmenuOpen(!submenuOpen)}>{menu.title}
               </span>
               {menu.submenu && ( 
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => 
                     setSubmenuOpen(!submenuOpen)}  />
               )}
         </li>

            {menu.submenu && submenuOpen &&(
               <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                     <li key={index} className="flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-100 rounded-md">
                        {submenuItem.title}
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