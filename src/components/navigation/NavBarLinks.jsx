import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden md:flex gap-10 text-black text-slate-600 font-bold w-[350px]">
          <li><Link className='hover:text-pink-200 focus:text-pink-300' href='/'>Home</Link></li>
          <li><Link className='hover:text-pink-200 focus:text-pink-300' href='/products'>Products</Link></li>
          <li><Link className='hover:text-pink-200 focus:text-pink-300' href='/about-us'>About Us</Link></li>  
      </ul>
     );
}

export default NavBarLinks;