import ProductCatCard from '../../../src/components/product-card/ProductCatCard';

const ProductInCatPage = ({data}) => {   
    return( 
        <main className='min-h-[550px]'>
            <div className='container lg:max-w-screen-lg mx-auto py-12 px-6'>
          <ProductCatCard product={data}
          />
            </div> 
        </main>
        
    )
}
    

export default ProductInCatPage;

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
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const {allProducts} = await import('/data/data.json');
    const productData = allProducts.find((pr) => id === pr.id);

    return {
        props: {data: productData},
    }
}