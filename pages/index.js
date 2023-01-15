import { HomePage } from '@/src/components/home/HomePage';

export default function Home({data}) {
  return (
    <>
      <HomePage data={data}/>

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