import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from "../CartProduct";


function NavBar() {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    const checkout = async () => {
        const lineItems = cart.items?.map( p => {
            return {
                price: p.id,
                quantity: p.quantity
            }
        })
    const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({lineItems: lineItems})
    });

    const b = await res.json();
    window.location.href = b.session.url;
    }
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
                    ${cart.getTotalCost().toFixed(2)}
                    <span className="text-sm text-gray-500"> {productsCount}</span>
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
          Shopping Cart
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
      {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                  <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <button type="button" variant="success" onClick={checkout} >
                                Purchase items!
                            </button>
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
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