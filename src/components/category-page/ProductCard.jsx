import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { formatCurrency } from '@/libs/utils';
import { toast } from 'react-hot-toast';

// export const CategoryPage = ({data,pageName}) => {
//     const [disabled, setDisabled] = useState(false);

//     const { cartCount, addItem } = useShoppingCart();
//     const [adding, setAdding] = useState(false);

//     const toastId = useRef();
//     const firstRun = useRef(true);

//   const handleOnAddToCart = event => {
//     event.preventDefault();

//     setAdding(true);
//     toastId.current = toast.loading('Adding 1 item...');

//     if (typeof data.onClickAdd === 'function') {
//       data.onClickAdd();
//     }

//     addItem(data);
//   };

//   useEffect(() => {
//     if (firstRun.current) {
//       firstRun.current = false;
//       return;
//     }

//     if (adding) {
//       setAdding(false);
//       toast.success(`${data.name} added`, {
//         id: toastId.current,
//       });
//     }

//     if (typeof data.onAddEnded === 'function') {
//       data.onAddEnded();
//     }
//   }, [cartCount]);

//     return( 
//         <main>
//         <div>
//         <h1 className='first-letter:uppercase pt-4 lg:pt-8 mb-4 text-4xl tracking-tight font-extrabold text-center'>{pageName}</h1>  
//         <div className='pt-6 md:columns-2 lg:columns-4 md:gap-0'>
//             <div className='flex flex-wrap justify-center pb-6 gap-3 px-4 md:px-0'>
//                 {data.map((pr) => (
//                 <Link 
//                 disabled={disabled}
//                 onClickAdd={() => setDisabled(true)}
//                 onAddEnded={() => setDisabled(false)}
//                 className='ease-in-out duration-300 rounded hover:scale-[98%]' key={pr.id} href={`/products/${pr.category}/${pr.id}`}>
//                 <Image className='hover:border-black p-1 hover:border ease-in-out duration-300 object-cover h-[350px] sm:h-[400px] w-[680px] sm:w-[370px]' alt={pr.title} width="350" height="350" src={pr.image}/> 
                    
//                 <h2 className='p-4 text-xl text-center uppercase font-bold'>{pr.title}</h2>
                
//         {/* Price + CTA */}
//         <div className="mt-4 flex items-center justify-between space-x-2">
//           <div>
//             <p className="text-gray-500">Price</p>
//             <p className="text-lg font-semibold">
//               {formatCurrency(pr.price, pr.currency)}
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={handleOnAddToCart}
//             disabled={adding || data.disabled}
//             className={`border rounded-lg py-1 px-4 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
//               adding
//                 ? 'disabled:bg-rose-500 disabled:border-rose-500 disabled:text-white'
//                 : 'disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-200'
//             }`}
//           >
//             {adding ? 'Adding...' : 'Add to cart'}
//           </button>
//         </div>
//                 </Link>
//                 ))}
//             </div>
//          </div>
//          </div>
//          </main>
//     )
// }


// export async function getStaticPaths() {
//     const {products_categories} = await import('/data/data.json');
//     const allPaths = products_categories.map((pr) => {
//         return {
//             params: {
//                 cat: pr.id.toString(),
//             },
//         };
//     });
//     console.log(allPaths);

//     return {
//         paths: allPaths,
//         fallback: false,
//     };
// }

// export async function getStaticProps(context) {

//     const id = context?.params.cat;
//     const {allProducts} = await import('/data/data.json');

//     const data = allProducts.filter(pr => pr.category === id);

//     return{
//         props: { data: data, pageName: id }
//     };
// }

export const ProductCard = props => {
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
        toast.success(`${props.name} added`, {
          id: toastId.current,
        });
      }
  
      if (typeof props.onAddEnded === 'function') {
        props.onAddEnded();
      }
    }, [cartCount]);
  
    return (
      <Link href={`/products/${props.category}/${props.id}`} className="border rounded-md p-6 group">
          {/* Product's image */}
          <div className="relative w-full h-64 group-hover:transform group-hover:scale-125 group-hover:ease-in-out group-hover:duration-500">
            <Image
              src={props.image}
              alt={props.name}
              layout="fill"
              objectFit="contain"
            />
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
      </Link>
    );
  };
  
  export default ProductCard;