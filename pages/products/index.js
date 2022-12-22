import Image from 'next/image'
import Link from 'next/link'

const ProductsPage = ({data}) => {
    return(
        <main>
        <div>
            <h1>Products Page</h1>
        <div>
        {data.map((pr) => ( <Link key={pr.id} href={`/products/${pr.id}`}> <Image alt={pr.title} width={300} height={300} src={pr.image}/> <h2>{pr.title}</h2><p>{pr.description}</p> </Link>))}

        </div>
        </div>
        </main>
    )
}

export default ProductsPage;

export async function getStaticProps() {
    const {products_categories} = await import('/data/data.json');
    return{
        props:{
            data: products_categories,
        },
    };
}