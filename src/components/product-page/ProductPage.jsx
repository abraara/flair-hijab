import Link from 'next/link'
import Image from 'next/image'

export const ProductPage = ({data}) => {
    return (
    <>
     <main>
        <div className='flex justify-center items-center pt-4 lg:pt-8 px-8 md:px-2 mx-auto max-w-screen-md'>
        <div className="w-8 sm:w-[100px] bg-black h-[2px] px-5 mr-4"></div>
            <h2 className="text-4xl tracking-tight font-serif text-center">Browse By Category</h2>
        <div className="w-8 sm:w-[100px] bg-black h-[2px] px-5 ml-4"></div>
        </div>
      <div className='pt-6 md:columns-2 lg:columns-4 md:gap-0'>
        <div className='flex flex-wrap justify-center pb-6 gap-3 px-4 md:px-0'>
            {data.map((pr) => ( <Link className='relative hover:scale-[98%] hover:border-black p-1 hover:border ease-in-out duration-300' key={pr.id} href={`/products/${pr.id}`}><Image className="object-top object-cover h-[350px] sm:h-[550px] w-[650px] sm:w-[360px]" alt={pr.title} width={600} height={250} src={pr.image}/><h2 className='text-3xl no-underline hover:underline text-white font-black text-center uppercase w-[300px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] drop-shadow-2xl'>{pr.title}</h2></Link>))}
        </div>
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
