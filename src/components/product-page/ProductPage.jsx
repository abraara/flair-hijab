import Link from 'next/link'
import Image from 'next/image'

import products_categories from 'product_categories';

export const ProductPage = () => {
    return (
    <>
     <main>
      <h2 className = "pt-4 lg:pt-8 mb-4 text-4xl tracking-tight font-extrabold text-center">Browse By Category</h2>
      <div className='pt-6 md:columns-2 lg:columns-4 md:gap-0'>
        <div className='flex flex-wrap justify-center pb-6 gap-3 px-4 md:px-0'>
            {products_categories.map((product) => ( <Link className='relative hover:scale-[98%] hover:border-black p-1 hover:border ease-in-out duration-300' key={product.id} href={`/products/${product.id}`}><Image className="object-top object-cover h-[350px] sm:h-[550px] w-[650px] sm:w-[360px]" alt={product.title} width={600} height={250} src={product.image}/><h2 className='text-3xl no-underline hover:underline text-white font-black text-center uppercase w-[300px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] drop-shadow-2xl'>{product.title}</h2></Link>))}
        </div>
    </div>

</main>
    </>
    );
   
}

// export async function getServerSideProps() {
//     const {products_categories} = await import('/data/data.json');
//       return {
//           props:{
//               data: products_categories,
//           },
//       };
//   }
