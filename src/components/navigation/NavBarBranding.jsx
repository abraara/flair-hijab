import Link from 'next/link'
import { NavLogo } from '../icons'

function NavBarBranding({className, ...props}) {
    return (
        <Link href='/'><NavLogo/></Link>
      );
}

export default NavBarBranding;