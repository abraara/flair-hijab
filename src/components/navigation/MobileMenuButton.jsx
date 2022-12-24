import React, {useState} from "react";

function MobileMenuButton() {
    const [isOpen, setIsOpen] =  useState(true);
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
            <button className="text-xl text-black fixed right-12 top-7 z-10"
            onClick={() => setIsOpen(!isOpen)}>
              <svg 
              stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="grey" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
            </button>
          )
      }
            <div className={`top-[80px] right-0 fixed bg-white border-x-2 w-[90vw] md:w-[35vw] h-full p-1 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>         
            <h2>THis is the sidebar</h2>
            </div>
       
        </>
      );
}

export default MobileMenuButton;