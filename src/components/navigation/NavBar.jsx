import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "context/CartContext";
import Link from "next/link";

function NavBar() {
  const { items } = useCart()
    return ( 
        <nav className="text-black bg-white shadow fixed z-30 flex justify-between items-center w-full">
            <div>
                <NavBarBranding />
            </div>
            <div>
                <NavBarLinks />
            </div>
            <div>
              <Link href="/cart" className="flex items-center w-[200px] space-x-1 text-gray-700 hover:text-gray-900">
                <div className="relative">
                  <MdShoppingCart className="w-7 h-7 flex-shrink-0" />
                </div>
                <span className='ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-800'>
                ( {items.length} )
          </span>
              </Link>
                <MobileMenuButton className="w-[100px]" />
            </div>
          
         
         
        </nav>
     );
}

export default NavBar;