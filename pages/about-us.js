import Image from "next/image";

const AboutUsPage = () => {
    return( 
    <main className="min-h-[575px] font-serif">
        <div className="py-4 lg:py-8 px-8 md:px-2 mx-auto max-w-screen-md">
        <div className='flex justify-center items-center pb-5'>
        <div className="w-8 sm:w-[100px] bg-black h-[2px] px-5 mr-4"></div>
            <h2 className="text-4xl tracking-tight text-center">About Us</h2>
        <div className="w-8 sm:w-[100px] bg-black h-[2px] px-5 ml-4"></div>
        </div>
            <p className="text-xl text-center">Flair Hijab is an online business based in Edmonton, AB, Canada, offering a wide range of ethnic clothing from India and Pakistan, as well as a diverse selection of hijabs and handcrafted jewelry. We strive to provide our customers with stylish and high-quality traditional clothing and accessories. From shalwar kameez to shawls, hijabs to earrings, we have something for everyone. Thank you for choosing Flair Hijab for all your traditional clothing and accessory needs.</p>
        </div>
        <Image className="mx-auto" src="/signature.png" width={600} height={600} alt="signature" />
    </main>
        
    )
}

export default AboutUsPage;