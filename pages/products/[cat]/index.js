import Image from 'next/image'
import Link from 'next/link'

const ProductsCatPage = ({data, pageName}) => {
    return( 
        <main>
        <div>
        <h1 className='first-letter:uppercase pt-4 lg:pt-8 mb-4 text-4xl tracking-tight font-extrabold text-center'>{pageName}</h1>  
        <div className='pt-6 md:columns-2 lg:columns-4 md:gap-0'>
            <div className='flex flex-wrap justify-center pb-6 gap-3 px-4 md:px-0'>
                {data.map((pr) => (
                <Link className='ease-in-out duration-300 rounded hover:scale-[98%]' key={pr.id} href={`/products/${pr.category}/${pr.id}`}>
                <Image className='hover:border-black p-1 hover:border ease-in-out duration-300 object-cover h-[350px] sm:h-[400px] w-[680px] sm:w-[370px]' alt={pr.title} width="350" height="350" src={pr.image}/> 
                <h2 className='p-4 text-xl text-center uppercase font-bold'>{pr.title}</h2>
                </Link>
                ))}
            </div>
         </div>
         </div>
         </main>
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