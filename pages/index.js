import { HomePage } from '@/src/components/home/HomePage';

export default function Home({product_categories}) {
  return (
    <>
      <HomePage product_categories={product_categories}/>

    </>
  )
}

// export async function getStaticProps() {
//   const {products_categories} = await import('product_categories');
//     return {
//         props:{
//             data: products_categories,
//         },
//     };
// }