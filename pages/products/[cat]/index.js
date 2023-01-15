import ProductCard from '@/src/components/category-page/ProductCard';
import { useState } from 'react';


export default function Home({data}) {
  const [disabled, setDisabled] = useState(false);

  return (
    <main>
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

    const id = context?.params.cat;
    const {allProducts} = await import('/data/data.json');

    const data = allProducts.filter(pr => pr.category === id);

    return{
        props: { data: data, pageName: id }
    };
}