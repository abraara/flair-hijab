import Image from 'next/image'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductCatCard = props => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    
    return( 
      <div className="flex flex-col md:flex-row md:ml-20 items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Product's image */}
        <div className="relative w-full sm:w-96 h-80 sm:h-96">
          <Image
            className='object-cover rounded-md'
            src={product.image}
            alt={product.title}
            fill="fill"
          />
        </div>

        <div className="flex-1 max-w border border-opacity-50 rounded-md shadow-lg p-6 pt-4 w-full sm:h-fit lg:h-96">
          <h2 className="text-2xl capitalize font-serif">{product.title}</h2>
          <p className='font-serif'>
          <span className="text-gray-500">Availability:</span>{' '}
              <span className="font-semibold">In stock</span>
          </p>

          <div className="mt-4 border-t pb-6 pt-4">
            <p className="text-gray-500 font-serif">
              {product.description}
            </p>
        </div>

        <div className="mt-5 border-t border-b py-4">
            <p className="text-gray-500 font-serif">Price</p>
            <p className="text-xl font-semibold">
              $ {product.price} CAD
            </p>
        </div>

        <div className='mt-12 pb-2'>
          { productQuantity > 0 ?
            <>
              <form className='flex flex-wrap justify-center mr-5 text-2xl '>
                <div className='ml-2 flex '>
                  <button type='button' onClick={() => cart.removeOneFromCart(product.id)}  className='px-2 hover:bg-rose-100 active:bg-rose-300 active:text-rose-700 hover:ease-in-out duration-300 hover:text-rose-500 rounded-md'><AiOutlineMinus/></button>
                  <label column="true" className='mx-1 font-semibold'><span className='font-serif font-normal'>In Cart:</span> {productQuantity}</label>
                  <button type='button' onClick={() => cart.addOneToCart(product.id)} className='px-2 hover:bg-green-100 active:bg-green-300 active:text-green-700 hover:ease-in-out duration-300 hover:text-green-500 rounded-md'><AiOutlinePlus/></button>
                </div>
              </form>
            </>
            :
            <button
            type="button"
            className={`py-2 px-5 block w-full font-medium text-center text-zinc-600 rounded-lg bg-rose-200 border border-rose-200 hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-rose-300 hover:text-white ease-in-out duration-300 font-serif`}
            onClick={() => cart.addOneToCart(product.id)}
          >Add to Cart
          </button>
          }

        </div>
      </div>
      </div>
    )
}

export default ProductCatCard;