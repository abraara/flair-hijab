import React from 'react'
import {BsSearch} from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

export default function SearchBar({placeholder, data}) {
  return (
    <div className='flex grid w-full'>
        <div className='flex w-full mt-2 items-stretch'>
            <input className="relative flex-auto min-w-0 block w-full px-3 py-1.5  font-normal text-gray-600 bg-white  border-gray-300 rounded-l m-0 focus:outline-none" type="text" placeholder={placeholder} />
            <div className="btn inline-block px-4 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-gray-700 hover:cursor-pointer hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out flex items-center"><BsSearch/></div>
        </div>
        <div className=' w-full h-[200px] overflow-hidden overflow-y-auto '>
        {data.allProducts.map((value,key) => { 
            return ( 
                <Link className='w-full h-[50px] flex items-center hover:bg-gray-100 rounded text-gray-600' href={`/products/${value.category}/${value.id}`}><p className='ml-3'>{value.title}</p></Link>
            );
        })}
        </div>
    </div>
  )
}


{/* <div className="flex">
    <div className="w-full my-2">
      <div className="input-group relative flex flex items-stretch w-full">
        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
        <button className="btn inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
         <BsSearch/>
        </button>
      </div>
    </div>
  </div> */}