import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import Image from 'next/image';
import Head from 'next/head';
import { formatCurrency } from '@/libs/utils';
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

// const ProductInCatPage = ({data}) => {  

//     return( 
//         <main className='min-h-[550px]'>
//             <div className='flex flex-wrap justify-center px-5'>
//             <div className='flex flex-wrap justify-center pb-6 gap-3 px-4 md:px-0'>
//                 <Image key={data.id} 
//                 className='hover:border-black p-1 hover:border ease-in-out duration-300 object-cover h-[350px] sm:h-[400px] w-[680px] sm:w-[370px]' alt={data.title} width="350" height="350" src={data.image}/> 

//             </div>
//             </div> 
//         </main>
        
//     )
// }
    

// export default ProductInCatPage;

// export async function getStaticPaths() {
//     const {allProducts} = await import('/data/data.json');

// const allPaths = allProducts.map((path) => {
//     return {
//         params: {
//             cat: path.category,
//             id: path.id,
//         },
//     };
// });

//     return {
//         paths: allPaths,
//         fallback: false,
//     };
// }

// export async function getStaticProps(context) {
//     const id = context.params.id;
//     const {allProducts} = await import('/data/data.json');
//     const productData = allProducts.find((pr) => id === pr.id);

//     return {
//         props: {data: productData},
//     }
// }


const Product = ({data}) => {
    const router = useRouter();
    const { cartCount, addItem } = useShoppingCart();
    const [qty, setQty] = useState(1);
    const [adding, setAdding] = useState(false);
  
    const toastId = useRef();
    const firstRun = useRef(true);
  
    const handleOnAddToCart = () => {
      setAdding(true);
      toastId.current = toast.loading(
        `Adding ${qty} item${qty > 1 ? 's' : ''}...`
      );
      addItem(data, qty);
    };
  
    useEffect(() => {
      if (firstRun.current) {
        firstRun.current = false;
        return;
      }
  
      setAdding(false);
      toast.success(`${qty} ${data.name} added`, {
        id: toastId.current,
      });
      setQty(1);
    }, [cartCount]);
  
    return router.isFallback ? (
      <>
        <Head>
          <title>Loading...</title>
        </Head>
        <p className="text-center text-lg py-12">Loading...</p>
      </>
    ) : (
      <main>
        <Head>
          <title>{data.name} | AlterClass</title>
        </Head>
        <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Product's image */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src={data.image}
                alt={data.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
  
            {/* Product's details */}
            <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6">
              <h2 className="text-3xl font-semibold">{data.name}</h2>
              <p>
                <span className="text-gray-500">Availability:</span>{' '}
                <span className="font-semibold">In stock</span>
              </p>
  
              {/* Price */}
              <div className="mt-8 border-t pt-4">
                <p className="text-gray-500">Price:</p>
                <p className="text-xl font-semibold">
                  {formatCurrency(data.price)}
                </p>
              </div>
  
              <div className="mt-4 border-t pt-4">
                {/* Quantity */}
                <p className="text-gray-500">Quantity:</p>
                <div className="mt-1 flex items-center space-x-3">
                  <button
                    onClick={() => setQty(prev => prev - 1)}
                    disabled={qty <= 1}
                    className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1"
                  >
                    <AiOutlineMinus className="w-6 h-6 flex-shrink-0" />
                  </button>
                  <p className="font-semibold text-xl">{qty}</p>
                  <button
                    onClick={() => setQty(prev => prev + 1)}
                    className="hover:bg-green-100 hover:text-green-500 rounded-md p-1"
                  >
                    <BsPlus className="w-6 h-6 flex-shrink-0 " />
                  </button>
                </div>
  
                {/* Add to cart button */}
                <button
                  type="button"
                  onClick={handleOnAddToCart}
                  disabled={adding}
                  className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to cart ({qty})
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };

  export async function getStaticPaths() {
        const {allProducts} = await import('/data/data.json');
    
    const allPaths = allProducts.map((path) => {
        return {
            params: {
                cat: path.category,
                id: path.id,
            },
        };
    });
    
        return {
            paths: allPaths,
            fallback: true,
        };
    }

  export async function getStaticProps(context) {
    try{
    const id = context.params.id;
    const {allProducts} = await import('/data/data.json');
    const productData = allProducts.find((pr) => pr.id === id) ?? {};

    return {
        props: {data: productData},
        revalidate: 1,
    };
    } catch (error) {
        return { notFound: true};
    }
}

  
  export default Product;