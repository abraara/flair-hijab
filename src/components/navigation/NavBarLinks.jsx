import Link from 'next/link'
import { useRouter } from 'next/router';

function NavBarLinks() {
    const router = useRouter();
    return ( 
        <ul className="hidden md:flex gap-10 text-slate-600  w-[450px]">
          <li className='group transition-all duration-300 ease-in-out'><Link className={`hover:text-pink-200 focus:text-pink-300 bg-left-bottom bg-gradient-to-r from-pink-300 to-pink-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${router.pathname == "/" ? "text-pink-300" : "text-gray-600"}`}  href='/'>Home</Link></li>
          <li className='group transition-all duration-300 ease-in-out'><Link className={`hover:text-pink-200 focus:text-pink-300 bg-left-bottom bg-gradient-to-r from-pink-300 to-pink-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${router.pathname == "/products" ? "text-pink-300" : "text-gray-600"}`}  href='/products'>Products</Link></li>
          <li className='group transition-all duration-300 ease-in-out'><Link className={`hover:text-pink-200 focus:text-pink-300 bg-left-bottom bg-gradient-to-r from-pink-300 to-pink-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${router.pathname == "/about-us" ? "text-pink-300" : "text-gray-600"}`} href='/about-us'>About Us</Link></li>
          <li className='group transition-all duration-300 ease-in-out'><Link className={`hover:text-pink-200 focus:text-pink-300 bg-left-bottom bg-gradient-to-r from-pink-300 to-pink-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${router.pathname == "/about-us" ? "text-pink-300" : "text-gray-600"}`} href='/contact'>Contact</Link></li>    
      </ul>
     );
}

export default NavBarLinks;