import Link from 'next/link'
import Image from 'next/image'

export const ProductPage = ({data}) => {
    return (
    <>
     <main>
      <h2 className = "pt-4 lg:pt-8 mb-4 text-4xl tracking-tight font-extrabold text-center">Browse By Category</h2>
      <div className='flex flex-wrap justify-center gap-3 p-5'>
        {data.map((pr) => ( <Link className='relative hover:scale-[98%] hover:border-black p-1 hover:border ease-in-out duration-300' key={pr.id} href={`/products/${pr.id}`}><Image className="object-top object-cover h-[350px] sm:h-[550px] w-[650px] sm:w-[350px]" alt={pr.title} width={600} height={250} src={pr.image}/><h2 className='text-3xl no-underline hover:underline text-white font-black text-center uppercase w-[300px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] drop-shadow-2xl'>{pr.title}</h2></Link>))}
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
