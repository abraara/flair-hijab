import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import { MdShoppingCart } from "react-icons/md";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/libs/utils";
import Link from "next/link";

function NavBar() {
    const { totalPrice, cartCount } = useShoppingCart();
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
                <p className="text-lg">
                  {formatCurrency(totalPrice)}{' '}
                  <span className="text-sm text-gray-500">({cartCount})</span>
                </p>
              </Link>
                <MobileMenuButton className="w-[100px]" />
            </div>
          
         
         
        </nav>
     );
}

export default NavBar;