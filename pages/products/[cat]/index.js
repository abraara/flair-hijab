import Image from 'next/image'
import Link from 'next/link'

const ProductsCatPage = ({data, pageName}) => {
    return( 
        <div>
        <h1>{pageName} products</h1>  
        
         {data.map((pr) => (
        <Link key={pr.id} href={`/products/${pr.category}/${pr.id}`}>
        <Image alt={pr.title} width={300} height={300} src={pr.image}/> 
         <h2>{pr.title}</h2>
         <p>{pr.description} {pr.price}</p> 
         </Link>
         ))}
         </div>
    )
}

export default ProductsCatPage;

export async function getStaticPaths() {
    const {products_categories} = await import('/data/data.json');
    const allPaths = products_categories.map((pr) => {
        return {
            params: {
                cat: pr.id.toString(),
            },
        };
    });
    console.log(allPaths);

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {

    const id = context?.params.cat;
    const {allProducts} = await import('/data/data.json');

    const data = allProducts.filter(pr => pr.category === id);

    return{
        props: { data: data, pageName: id }
    };
}