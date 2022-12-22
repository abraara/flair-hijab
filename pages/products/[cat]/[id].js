import Image from 'next/image'

const ProductInCatPage = ({data}) => {
    return( 
        <div>
            <Image src={data.image} width={800} height={500} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div> 
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