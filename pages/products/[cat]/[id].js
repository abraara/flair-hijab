
const ProductInCatPage = ({data}) => {   
    return( 
        <main>
            <div className='flex flex-wrap justify-center px-5'>
                <div className="w-[600px] h-[700px]">
                    <iframe src={data.link} className="py-5 h-[100%]" width="100%" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className='p-5 text-3xl'>
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