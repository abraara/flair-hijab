import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import { FaShoppingCart } from "react-icons/fa";
//import 'tw-elements';


function NavBar() {

    return ( 
        <>
        <nav className="text-black bg-white shadow fixed z-30 flex justify-between items-center w-full">
            <div>
                <NavBarBranding />
            </div>
            <div>
                <NavBarLinks />
            </div>
            <div>
            <div className="mr-[100px]">
            <button type="button" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div className="relative">
                    <FaShoppingCart className="w-7 h-7 flex-shrink-0" />
                    </div>
                    <p className="text-lg">
                    $0.00
                    <span className="text-sm text-gray-500"> 0</span>
                    </p>
            </button>
            </div>
                <MobileMenuButton className="w-[100px]" />
            </div>
        </nav>
        
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
          Modal title
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        ...
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
      </div>
    </div>
  </div>
</div>
        </>
     );
}


export default NavBar;