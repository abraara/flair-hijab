import Image from 'next/image'
import Link from 'next/link'

const ProductsCatPage = ({data, pageName}) => {
    return( 
        <main>
        <div className='py-4 lg:py-8'>
        <div className='flex justify-center items-center pb-5'>
        <div className="w-8 first-letter:uppercase sm:w-[100px] bg-black h-[2px] px-5 mr-4"></div>
            <h2 className="text-4xl font-serif tracking-tight text-center">{pageName}</h2>
        <div className="w-8 sm:w-[100px] bg-black h-[2px] px-5 ml-4"></div>
        </div>
        <div className='pt-6 md:columns-2 lg:columns-4 md:gap-0'>
            <div className='flex flex-wrap justify-center pb-6 gap-3 px-4 md:px-0'>
                {data.map((pr) => (
                <Link className='ease-in-out duration-300 rounded hover:scale-[98%]' key={pr.id} href={`/products/${pr.category}/${pr.id}`}>
                <Image className='hover:border-black p-1 hover:border ease-in-out duration-300 object-cover h-[350px] sm:h-[400px] w-[680px] sm:w-[370px]' alt={pr.title} width="350" height="350" src={pr.image}/> 
                <h2 className='p-4 text-xl text-center font-serif'>{pr.title}</h2>
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