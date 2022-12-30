import { HomePage } from '../src/components/home/HomePage';

export default function Home({data}) {
  return (
    <>
      <HomePage data={data}/>

    </>
  )
}

export async function getStaticProps() {
  const data = await import('/data/categories.json');
    return {
        props:{
            data: data,
        },
    };
}