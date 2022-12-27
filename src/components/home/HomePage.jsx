import Link from 'next/link'
import Image from 'next/image'

export const HomePage = ({data}) => {
    return (
    <>
     <main>
      <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-center pb-4 text-gray-800 dark:text-white">Shop By Category</h1>
    <div className='flex justify-center gap-5'>
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


{/* <div className="flex justify-center items-center">
<div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
  <div className="flex flex-col jusitfy-center items-center space-y-10">
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
      <div className="relative group flex justify-center items-center h-full w-full">
        <Image className="object-center object-cover h-full w-full" src={womensPic} alt="girl-image" />
        <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link href='products/clothing'>Women</Link></button>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
      </div>

      <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
        <div className="relative group flex justify-center items-center h-full w-full">
          <Image className="object-center object-cover h-full w-full" src={hijabPic} alt="hijab-image" />
          <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link href='products/hijabs'>Hijabs</Link></button>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
        <div className="relative group flex justify-center items-center h-full w-full">
          <Image className="object-center object-cover h-full w-full" src={jewelryPic} alt="jewelry-image" />
          <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link href='products/jewelry'>Jewelry</Link></button>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </div>

      <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
        <Image className="object-center object-cover h-full w-full" src={mensPic} alt="man-image" />
        <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link href='products/clothing'>Men</Link></button>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
      </div>
      <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
        <Image className="object-center object-cover h-full w-full hidden md:block" src={mensPic} alt="man-image" />
        <Image classNameName="object-center object-cover h-full w-full md:hidden"  src={mensPic} alt="man-image" />
        <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link href='products/clothing'>Men</Link></button>
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
      </div>
    </div>
    <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
      <Image className="object-center object-cover h-full w-full hidden md:block" src={mensPic} alt="man-image" />
      <Image className="object-center object-cover h-full w-full sm:hidden"  src={mensPic} alt="man-image" />
      <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link href='products/clothing'>Men</Link></button>
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>

  </div>
</div>
</div>
</div> */}