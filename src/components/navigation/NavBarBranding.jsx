import Link from 'next/link'
import Image from 'next/image'
import { LogoSvg } from '../icons'

function NavBarBranding({className, ...props}) {
    return (
        <Link href='/'><LogoSvg/></Link>
      );
}

export default NavBarBranding;