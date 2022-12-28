import Link from 'next/link'
import Image from 'next/image'

function NavBarBranding({className, ...props}) {
    return (
        <Link href='/'><Image src="/public/logo.jpg" width={80} height={80}/></Link>
      );
}

export default NavBarBranding;