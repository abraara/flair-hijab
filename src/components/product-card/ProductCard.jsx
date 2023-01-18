import Image from 'next/image'
import Link from 'next/link'

const ProductCard = props => {
    return( 
        <Link href={`/products/${props.category}/${props.id}`} className="border p-4 group">
        {/* Product's image */}
        <div className="relative w-full h-64 group-hover:transform group-hover:scale-[105%] group-hover:ease-in-out group-hover:duration-500">
          <Image
            className='object-cover'
            src={props.image}
            alt={props.title}
            fill="fill"
          />
        </div>

        {/* Name + Rating */}
        <div className="mt-4 sm:mt-8">
          <p className="font-semibold text-lg capitalize">{props.title}</p>
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-500">Price</p>
            <p className="text-lg font-semibold">
              {props.price}
            </p>
          </div>

          <button
            type="button"
            className={`border rounded-lg py-1 px-4 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
          >Add to Cart
          </button>
        </div>
    </Link>
    )
}

export default ProductCard;