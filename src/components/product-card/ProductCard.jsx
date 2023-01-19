import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '../CartContext';
import { useContext } from 'react';

const ProductCard = props => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    
    return( 
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
            <p className="text-gray-500">Price</p>
            <p className="text-lg">
              $ {product.price}
            </p>
          </div>
          { productQuantity > 0 ?
            <>
              <form className='flex flex-wrap'>
                <label column="true" className='mr-1'>In Cart: {productQuantity}</label>
                <div className='ml-2'>
                  <button type='button' onClick={() => cart.addOneToCart(product.id)} className='mx-2 border px-3 rounded-md'>+</button>
                  <button type='button' onClick={() => cart.removeOneFromCart(product.id)}  className='mx-2 border px-3 rounded-md'>-</button>
                </div>
              </form>
            </>
            :
            <button
            type="button"
            className={`border rounded-lg py-1 px-4 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={() => cart.addOneToCart(product.id)}
          >Add to Cart
          </button>
          }

        </div>
      </div>
    )
}

export default ProductCard;