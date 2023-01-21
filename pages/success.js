import Link from 'next/link'
import { FooterLogo } from '../src/components/icons';


function Success() {

    return (
      <main className="min-h-[550px] text-center">
      <h1 className="text-4xl px-12 py-3 font-serif">Your order has been placed!</h1>
      <div className="px-12 text-2xl font-serif text-gray-700">
      <p>
          Please check your inbox for your order number and receipt.
      </p>
      <p className="mt-2">
        Thank you for shopping at Flair Hijab.
      </p>
      </div>
      <Link className="invisible md:visible mx-auto flex justify-center md:ml-20" href='/'><FooterLogo /></Link>
      </main>
    )
}

export default Success;