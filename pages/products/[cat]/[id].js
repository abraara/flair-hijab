import Image from 'next/image'
import Link from 'next/link';

const ProductInCatPage = ({data}) => {
    return( 
        <main>
            <div className='flex flex-wrap justify-center'>
                <Image className='p-5' src={data.image} width={800} height={500} alt={data.title} />
                <div className='p-5 text-3xl'>
                    <iframe src={data.link} className="w-[400px] h-[650px]" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <h1>{data.title}</h1>
                    <p>{data.price}</p>
                    <p>{data.description}</p>
                </div>
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