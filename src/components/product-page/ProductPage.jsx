import Link from 'next/link'
import Image from 'next/image'

export const ProductPage = ({data}) => {
    return (
    <>
     <main>
      <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-center pb-4 text-gray-800 dark:text-white">Shop By Category</h1>
    <div className='flex justify-center gap-4 p-5'>
        {data.map((pr) => ( <Link className='relative' key={pr.id} href={`/products/${pr.id}`}> <div className=''> <Image  className="object-top object-cover h-[300px] w-[300px]" alt={pr.title} width={350} height={400} src={pr.image}/> <h2 className='text-3xl text-center font-semibold top-[50%]'>{pr.title}</h2> </div> </Link>))}
     </div>

</main>
    </>
    );
   
}

export async function getServerSideProps() {
    const {products_categories} = await import('/data/data.json');
      return {
          props:{
              data: products_categories,
          },
      };
  }
