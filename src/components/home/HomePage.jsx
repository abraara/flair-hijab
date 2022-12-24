import Link from 'next/link'
import Image from 'next/image'

export const HomePage = ({data}) => {
    return (
        <main className='flex gap-10 p-5 justify-between'>

        {data.map((pr) => ( 
        <Link key={pr.id} href={`/products/${pr.id}`}> 
        <Image alt={pr.title} width={300} height={300} src={pr.image}/> 
        <h2>{pr.title}</h2>
        <p>{pr.description}</p> 
        </Link>))}

    </main>
    )
   
}