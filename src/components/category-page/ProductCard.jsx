import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { formatCurrency } from '@/libs/utils';
import { toast } from 'react-hot-toast';

const ProductCard = props => {
  const { cartCount, addItem } = useShoppingCart();
  const [adding, setAdding] = useState(false);

  const toastId = useRef();
  const firstRun = useRef(true);

  const handleOnAddToCart = event => {
    event.preventDefault();

    setAdding(true);
    toastId.current = toast.loading('Adding 1 item...');

    if (typeof props.onClickAdd === 'function') {
      props.onClickAdd();
    }

    addItem(props);
  };

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (adding) {
      setAdding(false);
      toast.success(`${props.title} added`, {
        id: toastId.current,
      });
    }

    if (typeof props.onAddEnded === 'function') {
      props.onAddEnded();
    }
  }, [cartCount]);

  return (
    <Link href={`/products/${props.category}/${props.id}`}>
      <div className="border rounded-md p-6 group">
        {/* Product's image */}
        <div className="object-contain relative w-full h-64 group-hover:transform group-hover:scale-[110%] group-hover:ease-in-out group-hover:duration-500">
          <Image
            src={props.image}
            alt={props.title}
            fill
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
              {formatCurrency(props.price, props.currency)}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOnAddToCart}
            disabled={adding || props.disabled}
            className={`border rounded-lg py-1 px-4 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              adding
                ? 'disabled:bg-rose-500 disabled:border-rose-500 disabled:text-white'
                : 'disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-200'
            }`}
          >
            {adding ? 'Adding...' : 'Add to cart'}
          </button>
        </div>
      </div>
    </Link>
  );
};
  
  export default ProductCard;