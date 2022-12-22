import Link from 'next/link'

export const Header = () => {
    return (
        <header>
        <nav>  
          <img />
          <Link href='/'>Home</Link>
          <Link href='/products'>Products</Link>
          <Link href='/about-us'>About Us</Link>
        </nav>
      </header>
    )
}