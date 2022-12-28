import { ProductPage } from '../../src/components/product-page/ProductPage';

export default function Products ({data}) {
    return(
        <>
        <ProductPage data={data}/>
  
      </>
    )
}

export async function getStaticProps() {
    const {products_categories} = await import('/data/data.json');
    return{
        props:{
            data: products_categories,
        },
    };
}