import { useState } from 'react';
import ProductCard from '@/src/components/product-card/ProductCard';


export default function Home({data, pageName}) {
  const [disabled, setDisabled] = useState(false);

  return (
    <main>
        <div className='py-4 lg:pt-8 lg:pb-0 px-8 md:px-2 mx-auto max-w-screen-md'>
    <div className='flex justify-center items-center'>
        <div className="w-8 first-letter:uppercase sm:w-[100px] bg-black h-[2px] px-5 mr-4"></div>
            <h2 className="text-4xl font-serif tracking-tight text-center">{pageName}</h2>
        <div className="w-8 sm:w-[100px] bg-black h-[2px] px-5 ml-4"></div>
        </div>
        </div>
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map(pr => (
          <ProductCard
            key={pr.id}
            disabled={disabled}
            onClickAdd={() => setDisabled(true)}
            onAddEnded={() => setDisabled(false)}
            {...pr}
          />
        ))}
      </div>
    </div>
    </main>
  );
}

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

    const title = context?.params.cat;
    const {allProducts} = await import('/data/data.json');

    const data = allProducts.filter(pr => pr.category === title);

    return{
        props: { data: data, pageName: title }
    };
}