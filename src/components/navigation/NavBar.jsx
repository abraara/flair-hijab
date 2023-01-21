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
    console.log(b.session.url);
    location.replace(b.session.url);
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
                    <span className="text-sm text-gray-500"> ({productsCount})</span>
                    </p>
            </button>
            </div>
                <MobileMenuButton className="w-[100px]" />
            </div>
        </nav>
        
        <div className="modal fade fixed top-0 left-0 hidden shadow-lg w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog relative w-auto pointer-events-none">
    <div
      className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-3xl font-medium leading-normal text-gray-800 font-serif" id="exampleModalLabel">
          Shopping Cart
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body relative p-1">
      {productsCount > 0 ?
                        <>
                            <p className="text-2xl mb-4 px-4 mt-4"><span className="font-serif">Total items:</span> {productsCount}</p>
                            {cart.items.map( (currentProduct, idx) => (
                                  <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            <div className="float-right p-2">
                            <h1 className="p-4"><span className="font-serif">Total:</span> ${cart.getTotalCost().toFixed(2)} CAD</h1>
                            <div className="mb-2">
                                <div className="mr-1">
                                <button className="py-2 mr-1 px-5 block w-full font-medium text-center text-zinc-600 rounded-lg bg-rose-200 border border-rose-200 hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-rose-300 hover:text-white ease-in-out duration-300 font-serif" onClick={checkout} >Purchase items!</button>
                                </div>
                            </div>
                            </div>
                        </>
                    :
                        <>
                        <div className="py-4">
                        <h1 className="text-2xl">There are no items in your cart!</h1>
                        <p className="flex">Click the <span>              
                        <svg className="px-1 mt-[5px]"
                         stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="full" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="grey" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
                         </span> to go back to shopping.</p>
                         </div>
                        </>
                        
                    }
      </div>
    </div>
  </div>
</div>
        </>
     );
}


export default NavBar;