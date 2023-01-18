import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

function NavBar() {
    return ( 
        <nav className="text-black bg-white shadow fixed z-30 flex justify-between items-center w-full">
            <div>
                <NavBarBranding />
            </div>
            <div>
                <NavBarLinks />
            </div>
            <div>
            <div className="mr-[100px]">
            <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                    <div className="relative">
                    <FaShoppingCart className="w-7 h-7 flex-shrink-0" />
                    </div>
                    <p className="text-lg">
                    $0.00
                    <span className="text-sm text-gray-500"> 0</span>
                    </p>
            </Link>
            </div>
                <MobileMenuButton className="w-[100px]" />
            </div>
          
         
         
        </nav>
     );
}

export default NavBar;