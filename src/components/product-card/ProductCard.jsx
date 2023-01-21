import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductCard = props => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    
    return( 
      <>
      <div className="border p-4 group">
        <Link href={`/products/${product.category}/${product.id}`} >
        {/* Product's image */}
        <div className="relative w-full h-64 group-hover:transform group-hover:scale-[105%] group-hover:ease-in-out group-hover:duration-500">
          <Image
            className='object-cover'
            src={product.image}
            alt={product.title}
            fill="fill"
          />
        </div>

        {/* Name + Rating */}
        <div className="mt-4 sm:mt-8">
          <p className="text-md capitalize font-serif">{product.title}</p>
        </div>
        </Link>
        {/* Price + CTA */}
        <div className="mt-3 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-500 font-serif">Price</p>
            <p className="text-lg">
              $ {product.price} CAD
            </p>
          </div>
          { productQuantity > 0 ?
            <>
              <form className='flex flex-wrap'>
                <div className='ml-2 flex'>
                <button type='button' onClick={() => cart.removeOneFromCart(product.id)}  className='px-2 hover:bg-rose-100 active:bg-rose-300 active:text-rose-700 hover:ease-in-out duration-300 hover:text-rose-500 rounded-md'><AiOutlineMinus/></button>
                  <label column="true" className='mx-1 font-semibold'><span className='font-serif font-normal'>In Cart:</span> {productQuantity}</label>
                  <button type='button' onClick={() => cart.addOneToCart(product.id)} className='px-2 hover:bg-green-100 active:bg-green-300 active:text-green-700 hover:ease-in-out duration-300 hover:text-green-500 rounded-md'><AiOutlinePlus/></button>
                </div>
              </form>
            </>
            :
            <button
            type="button"
            className={`py-2 px-5 font-medium text-center text-zinc-600 rounded-lg bg-rose-200 border border-rose-200 sm:w-fit hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-rose-300 hover:text-white ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-serif`}
            onClick={() => cart.addOneToCart(product.id)}
          >Add to Cart
          </button>
          }

        </div>
      </div>
      </>
    )
}

export default ProductCard;