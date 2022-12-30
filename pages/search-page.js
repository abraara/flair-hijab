import { SearchPage } from '../src/components/search/SearchPage';

export default function Search({data}) {
  return (
    <>
      <SearchPage data={data}/>

    </>
  )
}

export async function getStaticProps() {
  const {products_categories} = await import('/data/data.json');
    return {
        props:{
            data: products_categories,
        },
    };
}