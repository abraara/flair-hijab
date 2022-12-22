const ProductsCatPage = () => {
    return( 
        <div>
        <h1>Product</h1>  
        </div>
    )
}

export default ProductsCatPage;

export async function getStaticPath() {
    const {products_categories} = await import('/data/data.json');
    const allPaths = products_categories.map((pr) => {
        return {
            params: {
                cat: pr.id.toString(),
            },
        };
    });

    return {
        path: [
            {
                params: {
                    cat: '123',
                },
            },
        ],
    };
}