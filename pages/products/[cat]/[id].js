
const ProductInCatPage = ({data}) => {   
    return( 
        <main className='min-h-[550px]'>
            <div className='flex flex-wrap justify-center px-5'>
                <div className="w-[600px] p-3">
                    <iframe src={data.link} className="w-full h-[600px] hover:border-black p-1 hover:border ease-in-out duration-300 rounded hover:scale-[98%]" width="100%" frameborder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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