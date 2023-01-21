import Link from "next/link";

function Cancel() {
    return (
        <main className="min-h-[550px] text-center">
        <h1 className="text-4xl px-12 py-3 font-serif">Sorry to see you cancelled your payment!</h1>
        <div className="px-12 text-2xl font-serif">
        <p>
            Send us a message <Link className="underline hover:text-rose-400 hover:ease-in-out duration 300" href='/contact'> here
            </Link> about any concerns.
        </p>
        <p>
            Or continue to <Link className="underline hover:text-rose-400 hover:ease-in-out duration 300" href='/'>browse our collection.
            </Link>
        </p>
        </div>
        </main>
    )
}

export default Cancel;