import { useEffect } from 'react';

const ProductInCatPage = ({data}) => { 

    useEffect(() => {
    FB.XFBML.parse();
    window.fbAsyncInit = function() {
	    window.FB.init({
	      appId      : 'Flair.hijab',
	      cookie     : true,
	      xfbml      : true, 
	      version    : 'v15.0'
	    });
        
    }});
	
    return( 
        <>
        <div id="fb-root"></div>
        <main className='min-h-[550px]'>
            <div className='flex flex-wrap justify-center p-5'>
                <div className="p-3">
                <div 
                    className="fb-post" 
                    data-width="450"
                    data-href={data.link}>
                </div>
            </div>
            </div> 
        </main>
        </>
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