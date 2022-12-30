import React, {useState} from "react";
import Link from "next/link";
import { AiFillInfoCircle } from "react-icons/ai";
import {BsChevronDown} from "react-icons/bs";
import { HiShoppingBag, HiOutlineMail } from "react-icons/hi";
import { ImHome, ImPriceTags } from "react-icons/im";
import SearchBar from "./SearchBar";
import SearchResults from './../../../data/data.json'

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
            <button aria-label="Sidebar Open" className="fixed z-30 flex items-center cursor-pointer right-8 top-5 hover:bg-gray-100 rounded-full p-4" onClick={() => setIsOpen(!isOpen)}>
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
            <button aria-label="Sidebar Close" className="text-xl text-black fixed right-8 top-5 hover:bg-gray-100 rounded-full p-4 z-30"
            onClick={() => setIsOpen(!isOpen)}>
              <svg 
              stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30" width="full" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="grey" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
            </button>
          )
      }
  <div className={`top-[100px] right-0 fixed bg-white border-x-2 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[25vw] h-full p-1 z-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>         
    <div className="overflow-y-auto py-4 px-3 bg-light rounded dark:bg-gray-800">
    <div className="my-[-90px]">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="full" height="300" viewBox="0 0 500.000000 500.000000">
      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M250 2580 l0 -700 255 0 255 0 0 -25 c0 -14 3 -25 8 -25 4 0 6 19 4
      41 -5 47 8 47 28 -1 16 -38 23 -38 43 3 l16 32 0 -37 c1 -21 6 -38 11 -38 6 0
      10 27 10 60 0 68 -12 77 -37 25 -9 -19 -20 -35 -23 -35 -3 0 -14 16 -23 35
      -20 43 -37 45 -37 5 l0 -30 -250 0 -250 0 0 690 0 690 2240 0 2240 0 0 -690 0
      -690 -250 0 -250 0 0 31 c0 17 -4 28 -10 24 -6 -3 -10 -21 -10 -38 l-1 -32
      -30 38 c-17 20 -35 37 -40 37 -5 0 -9 -27 -9 -60 0 -68 17 -82 22 -18 l3 42
      29 -43 c30 -43 53 -50 48 -13 l-3 22 255 0 256 0 0 700 0 700 -2250 0 -2250 0
      0 -700z"/>
      <path d="M1386 2833 c-46 -4 -48 -5 -27 -19 20 -15 21 -22 21 -241 0 -216 -1
      -225 -20 -230 -47 -12 -13 -23 73 -22 87 0 91 1 70 16 -23 15 -23 18 -23 259
      l0 244 -22 -2 c-13 -1 -45 -3 -72 -5z"/>
      <path d="M1902 2824 c-32 -22 -26 -64 11 -82 60 -29 119 44 65 82 -12 9 -29
      16 -38 16 -9 0 -26 -7 -38 -16z"/>
      <path d="M3032 2824 c-54 -38 9 -115 67 -83 35 20 40 62 9 83 -12 9 -29 16
      -38 16 -9 0 -26 -7 -38 -16z"/>
      <path d="M3223 2830 c-44 -18 -37 -82 11 -94 47 -12 76 10 76 57 0 20 -7 30
      -26 37 -29 12 -32 12 -61 0z"/>
      <path d="M3715 2830 c-33 -4 -52 -7 -43 -8 35 -4 39 -36 36 -277 -3 -206 -1
      -234 12 -228 14 7 31 7 154 1 98 -5 148 57 147 182 0 116 -38 170 -117 170
      -31 0 -51 -7 -73 -26 l-31 -26 0 111 c0 83 -3 111 -12 109 -7 -1 -40 -4 -73
      -8z m196 -228 c6 -15 9 -73 7 -128 -4 -121 -18 -147 -77 -142 l-36 3 -3 128
      c-3 135 4 162 41 176 29 11 55 -3 68 -37z"/>
      <path d="M990 2777 l25 -13 3 -206 2 -207 -27 -15 c-26 -14 -21 -15 90 -16 76
      0 116 4 112 10 -3 6 -17 10 -30 10 -30 0 -35 15 -35 121 0 96 2 99 53 80 16
      -6 30 -24 38 -45 7 -20 16 -36 20 -36 4 0 7 43 6 95 -2 94 -9 117 -22 73 -11
      -35 -46 -68 -72 -68 -23 0 -23 2 -23 104 0 118 4 124 80 111 46 -8 74 -38 92
      -96 6 -22 14 -39 17 -39 3 0 7 34 8 75 l2 75 -182 0 c-153 0 -178 -2 -157 -13z"/>
      <path d="M2497 2778 c27 -13 32 -41 33 -205 1 -157 -7 -233 -26 -233 -7 0 -16
      -4 -19 -10 -4 -6 31 -10 97 -10 82 1 99 3 83 12 -32 18 -35 28 -35 126 l0 92
      90 0 90 0 0 -92 c0 -98 -3 -108 -35 -126 -16 -9 1 -11 83 -12 66 0 101 4 97
      10 -3 6 -12 10 -20 10 -7 0 -16 7 -19 16 -8 20 -8 362 0 390 3 12 15 26 27 32
      17 8 -3 11 -83 11 -99 0 -103 -1 -77 -15 l28 -15 -3 -97 -3 -97 -87 -3 -88 -3
      0 100 c0 99 0 101 28 115 25 14 21 15 -78 15 -80 0 -100 -3 -83 -11z"/>
      <path d="M1610 2663 c-29 -11 -60 -47 -60 -70 0 -13 10 -29 25 -39 23 -15 27
      -15 50 0 28 19 32 42 10 72 -17 25 -11 34 25 34 38 0 50 -18 50 -78 l0 -53
      -74 -34 c-104 -47 -130 -92 -85 -149 16 -20 29 -26 60 -26 41 0 78 14 91 34 5
      7 13 3 23 -11 15 -21 20 -22 265 -22 173 -1 250 2 250 9 0 6 -4 9 -8 6 -5 -3
      -18 2 -30 10 -20 14 -22 24 -22 125 0 114 12 160 45 173 25 9 25 8 14 -18 -16
      -34 3 -66 39 -66 36 0 52 17 52 55 0 40 -16 55 -59 55 -24 0 -43 -8 -63 -27
      l-28 -27 0 28 c0 27 -2 28 -31 22 -17 -3 -50 -7 -73 -7 -22 -1 -33 -3 -23 -6
      10 -3 22 -16 28 -29 11 -30 12 -254 1 -271 -13 -21 -58 -26 -76 -8 -13 14 -16
      41 -16 172 l0 156 -37 -7 c-21 -3 -54 -6 -73 -7 -19 -1 -27 -3 -17 -6 29 -7
      37 -46 37 -173 0 -94 -3 -122 -16 -134 -17 -18 -34 -21 -34 -7 0 5 -9 7 -19 4
      -18 -5 -20 3 -23 137 -3 141 -3 142 -31 166 -23 20 -38 24 -90 23 -34 0 -69
      -3 -77 -6z m89 -289 c-7 -8 -24 -14 -38 -12 -23 3 -26 8 -29 44 -3 37 1 45 35
      74 l38 34 3 -63 c2 -39 -2 -68 -9 -77z"/>
      <path d="M3030 2660 c-30 -4 -47 -7 -37 -8 28 -3 37 -45 37 -167 0 -121 -4
      -145 -25 -145 -8 0 -17 -4 -20 -10 -4 -6 29 -10 92 -10 78 1 94 3 78 12 -11 6
      -23 16 -27 22 -4 6 -8 80 -8 164 0 139 -2 152 -17 150 -10 -1 -43 -4 -73 -8z"/>
      <path d="M3216 2663 c-46 -4 -48 -5 -27 -19 20 -15 21 -23 21 -199 0 -101 -3
      -191 -6 -200 -4 -10 -20 -23 -37 -30 -39 -16 -22 -24 30 -13 50 11 89 48 103
      97 5 20 10 111 10 204 l0 167 -22 -2 c-13 -1 -45 -3 -72 -5z"/>
      <path d="M3409 2647 c-44 -29 -51 -69 -16 -92 24 -16 55 -12 69 9 13 18 9 53
      -7 66 -20 17 -10 30 24 30 36 0 51 -18 58 -67 7 -50 -14 -73 -89 -103 -31 -12
      -64 -31 -74 -41 -23 -25 -22 -84 2 -110 24 -26 102 -26 136 0 24 19 24 19 36
      0 12 -19 71 -26 106 -13 21 8 20 22 -1 20 -16 -1 -19 13 -23 134 -3 74 -9 142
      -13 151 -22 45 -151 55 -208 16z m131 -196 c0 -63 -15 -91 -49 -91 -26 0 -41
      20 -41 56 0 25 8 39 37 63 21 17 41 31 45 31 5 0 8 -27 8 -59z"/>
      <path d="M1022 1934 c-45 -31 -17 -104 40 -104 51 0 78 69 40 103 -23 21 -51
      22 -80 1z m66 -13 c8 -5 12 -21 10 -37 -3 -32 -38 -45 -64 -24 -40 34 9 90 54
      61z"/>
      <path d="M1240 1890 l0 -60 33 0 c45 0 77 25 77 60 0 35 -32 60 -77 60 l-33 0
      0 -60z m84 18 c15 -25 -3 -52 -38 -56 -24 -3 -26 -1 -26 38 0 39 2 41 26 38
      15 -2 32 -11 38 -20z"/>
      <path d="M1470 1890 l0 -60 40 0 c22 0 40 5 40 10 0 6 -13 10 -30 10 -20 0
      -30 5 -30 15 0 9 9 15 25 15 14 0 25 5 25 10 0 6 -11 10 -25 10 -16 0 -25 6
      -25 15 0 10 10 15 30 15 17 0 30 5 30 10 0 6 -18 10 -40 10 l-40 0 0 -60z"/>
      <path d="M1683 1944 c-25 -11 -14 -45 17 -57 41 -16 41 -42 -1 -33 -22 4 -29
      2 -27 -7 7 -21 65 -21 77 0 12 24 3 39 -32 52 -37 14 -35 34 3 29 19 -3 29 -1
      27 6 -4 12 -45 18 -64 10z"/>
      <path d="M1860 1940 c0 -5 9 -10 20 -10 17 0 20 -7 20 -50 0 -27 5 -50 10 -50
      6 0 10 23 10 50 0 38 4 50 15 50 8 0 15 5 15 10 0 6 -20 10 -45 10 -25 0 -45
      -4 -45 -10z"/>
      <path d="M2075 1904 c13 -25 21 -52 18 -60 -3 -8 1 -14 11 -14 9 0 13 6 10 15
      -3 8 6 35 20 60 29 49 20 62 -12 18 l-19 -26 -18 26 c-29 44 -36 30 -10 -19z"/>
      <path d="M2410 1890 c0 -33 4 -60 10 -60 6 0 10 27 10 60 0 33 -4 60 -10 60
      -6 0 -10 -27 -10 -60z"/>
      <path d="M2550 1890 c0 -68 17 -82 22 -17 l3 42 30 -42 c42 -60 55 -56 55 17
      0 68 -17 82 -22 18 l-3 -43 -30 42 c-42 60 -55 56 -55 -17z"/>
      <path d="M2920 1890 c0 -33 4 -60 10 -60 6 0 10 11 10 25 0 21 5 25 31 25 17
      0 28 4 24 10 -3 6 -17 10 -31 10 -15 0 -24 6 -24 15 0 10 10 15 30 15 17 0 30
      5 30 10 0 6 -18 10 -40 10 l-40 0 0 -60z"/>
      <path d="M3126 1893 c-26 -55 -27 -85 -2 -50 17 22 62 22 75 0 5 -10 12 -15
      16 -12 8 9 -41 119 -54 119 -5 0 -21 -25 -35 -57z m47 5 c7 -26 3 -32 -17 -25
      -9 4 -12 14 -9 26 7 27 19 27 26 -1z"/>
      <path d="M3341 1936 c-18 -21 -7 -44 24 -52 14 -3 25 -13 25 -21 0 -12 -7 -14
      -31 -9 -22 4 -29 2 -27 -7 7 -21 65 -21 77 0 12 24 3 39 -32 52 -37 14 -35 34
      3 29 19 -3 29 -1 27 6 -6 17 -52 18 -66 2z"/>
      <path d="M3530 1890 c0 -33 4 -60 10 -60 6 0 10 11 10 25 0 22 4 25 35 25 31
      0 35 -3 35 -25 0 -14 5 -25 10 -25 6 0 10 27 10 60 0 33 -4 60 -10 60 -5 0
      -10 -11 -10 -25 0 -22 -4 -25 -35 -25 -31 0 -35 3 -35 25 0 14 -4 25 -10 25
      -6 0 -10 -27 -10 -60z"/>
      <path d="M3760 1890 c0 -33 4 -60 10 -60 6 0 10 27 10 60 0 33 -4 60 -10 60
      -6 0 -10 -27 -10 -60z"/>
      <path d="M3922 1934 c-45 -31 -17 -104 40 -104 51 0 78 69 40 103 -23 21 -51
      22 -80 1z m76 -41 c3 -28 -1 -33 -23 -39 -29 -7 -55 10 -55 35 0 25 22 42 50
      39 20 -2 26 -9 28 -35z"/>
      </g>
</svg>
      </div>
      <div>
        <SearchBar placeholder="Search" data={SearchResults} />
      </div>
     
      <ul className="space-y-2">
        {Menus.map((menu, index) => (
         <>
         <li key={index} className={`flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 text-gray-600 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
         <Link href={menu.link} className="text-base font-medium flex-1 focus:text-pink-300">
            <span className="flex items-center">
               {menu.icon}
            <span className="mx-3">{menu.title}</span> </span> </Link>
               {menu.submenu && ( 
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => 
                     setSubmenuOpen(!submenuOpen)}  />
               )}
         </li>

            {menu.submenu && submenuOpen &&(
               <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                     <li key={index} className="flex items-center gap-x-4 text-gray-600 cursor-pointer p-2 px-5 hover:bg-gray-100 rounded-md">
                        <Link href={submenuItem.link} className="text-base font-medium flex-1 focus:text-pink-300">
                        <span className="flex items-center">
                           {submenuItem.icon}
                           <span className="mx-3">
                           {submenuItem.title}
                        </span> </span> 
                        </Link>
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