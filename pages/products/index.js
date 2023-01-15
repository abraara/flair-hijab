import { ProductPage } from '@/src/components/product-page/ProductPage';

export default function Products ({products_categories}) {
    return(
        <>
        <ProductPage products_categories={products_categories}/>
  
      </>
    )
}

// export async function getStaticProps() {
//     const {products_categories} = await import('/data/data.json');
//     return{
//         props:{
//             data: products_categories,
//         },
//     };
// }