import Link from 'next/link'
import Image from 'next/image'

export const SearchPage = ({data}) => {
    const [filteredData, setFilteredData] = useState([]);

       const newFilter = data.allProducts.filter((value) => {
            return value.title.includes;
       });
 
        setFilteredData(newFilter);
    return (
    <>
     <main>
      <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-center pb-4 text-gray-800 dark:text-white">Shop By Category</h1>
    <div className='flex justify-center gap-4 p-5'>
    {filteredData.slice(0,15).map((value,key) => { 
                return ( 
                 <Link className='w-full h-[50px] flex items-center hover:bg-gray-100 rounded text-gray-600' href={`/products/${value.category}/${value.id}`}><p className='ml-3'>{value.title}</p></Link>
                );
            })}
     </div>

</main>
    </>
    );
   
}

export async function getServerSideProps() {
    const {allProducts} = await import('/data/data.json');
      return {
          props:{
              data: allProducts,
          },
      };
  }
