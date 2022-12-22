import Link from 'next/link'

export const Header = () => {
    return (
        <header>
        <nav> 
        <ul className='py-3 px-5 shadow relative flex justify-center gap-4 items-center'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/products'>Products</Link></li>
          <li><Link href='/about-us'>About Us</Link></li>  
        </ul> 
        </nav>
      </header>
    )
}