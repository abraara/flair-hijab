import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
    return ( 
        <nav className="text-black bg-white dark:bg-black shadow relative flex justify-between items-center">
            <div>
                <NavBarBranding />
            </div>
            <div>
                <NavBarLinks />
            </div>
            <div>
                <MobileMenuButton className="w-[100px]" />
            </div>
          
         
         
        </nav>
     );
}

export default NavBar;