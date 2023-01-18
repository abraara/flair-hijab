import Link from 'next/link'
import Image from 'next/image'

export const HomePage = ({data}) => {
    return (
    <>
<header className="w-full sm:h-2/3 md:h-3/12 lg:h-3/12 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/header.jpg)", height:600}} >
    
    <figure className='float-left'>
        <figcaption className="text-black text-center w-11/12 lg:w-full mt-[200px] px-5 sm:w-[400px] md:ml-[80px]">
            <h1 className='text-5xl font-thin md:text-6xl xl:text-7xl border-b-2 border-black pb-5 font-serif'>
                 Flair Hijab<span className="block text-2xl sm:text-3xl"> Modesty in Fashion</span>
            </h1>
            <Link className='font-light font-bold mr-5 md:mr-0' href='/products'>
            <button className='m-5 bg-black text-white p-3 w-[250px] hover:bg-white hover:text-black border-2 border-black hover:ease-in-out duration-300'>
            BROWSE COLLECTION
            </button>
            </Link>
        </figcaption>
    </figure>
</header>
<div className='flex justify-center items-center pt-5'>
        <div className="w-8 sm:w-[100px] bg-black h-[2px] px-5 mr-4"></div>
            <h2 className="text-4xl tracking-tight font-serif text-center">Our Collection</h2>
        <div className="w-8 sm:w-[100px] bg-black h-[2px] px-5 ml-4"></div>
        </div>
<main className='pt-6 md:columns-2 xl:columns-4 md:gap-0'>
    <div className='flex flex-wrap justify-center pb-6 gap-3 px-4 md:px-0'>
        {data.map((pr) => ( <Link className='relative hover:scale-[98%] hover:border-black p-1 hover:border ease-in-out duration-300' key={pr.id} href={`/products/${pr.id}`}><Image className="object-top object-cover h-[300px] sm:h-[250px] w-[600px] sm:w-[365px]" alt={pr.title} width={600} height={250} src={pr.image}/><h2 className='text-3xl no-underline hover:underline text-white text-center font-bold uppercase w-[300px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] drop-shadow-xl'>{pr.title}</h2></Link>))}
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
