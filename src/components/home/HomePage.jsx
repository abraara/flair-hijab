import Link from 'next/link'
import Image from 'next/image'

export const HomePage = ({data}) => {
    return (
    <>
    <header className="w-full sm:h-2/3 md:h-3/12 lg:h-3/12 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/header.jpg)", height:600}} >
    
    <figure className='float-left'>
        <figcaption className="text-black text-center w-full lg:w-full mt-[200px] px-7 w-[300px] sm:w-[400px] md:ml-[80px]">
            <h1 className='text-6xl font-semibold md:text-6xl xl:text-7xl border-b-2 border-black pb-5'>
        Flair Hijab<span className="block text-4xl"> Modesty in Fashion.</span>
        </h1>
        <Link className='font-light font-bold' href='/products'>
        <button className='m-5 bg-black text-white p-3 w-[250px] hover:bg-white hover:text-black border-2 border-black hover:ease-in-out duration-300'>
        SHOP NOW
        </button>
        </Link>
 </figcaption>

 </figure>
</header>
     
     <main>
      <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-center pb-4 text-gray-800 dark:text-white">Home</h1>
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
