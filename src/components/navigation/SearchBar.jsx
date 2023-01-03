import React, {useState} from 'react'
import {BsSearch} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

export default function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
       const searchWord = event.target.value
       setWordEntered(searchWord);
       const newFilter = data.allProducts.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
       });

       if (searchWord === "") {
        setFilteredData([]);
       } else {
        setFilteredData(newFilter);
       }
    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

  return (
    <div className='flex grid w-full'>
        <div className='flex w-full mt-2 items-stretch rounded'>
            <input type="text" className="relative flex-auto  block w-full px-3 py-1.5 focus:ring-0 focus:border-gray-300 focus:outline-none font-normal text-gray-600 bg-white border-gray-300 border-r-0 rounded-l m-0 " placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
            <div className="px-4 py-2.5 text-gray-600 border-gray-300 border border-l-0 font-medium text-s leading-tight uppercase rounded-r flex items-center">
                {wordEntered.length === 0 ? <BsSearch/> : <AiOutlineClose className='hover:cursor-pointer active:shadow-lg hover:scale-125 ease-in-out duration-300' onClick={clearInput}/>}
                </div>
        </div>
        {filteredData.length != 0 && (
        <div className='w-full min-h-0 max-h-[175px] overflow-hidden overflow-y-auto'>
            {filteredData.slice(0,15).map((value,key) => { 
                return ( 
                 <Link className='w-full h-[45px] flex items-center hover:bg-gray-100 rounded text-gray-600 focus:text-pink-300' href={`/products/${value.category}/${value.id}`}><p className='ml-3'>{value.title}</p></Link>
                );
            })}
        </div>
        )}
    </div>
  )
}
