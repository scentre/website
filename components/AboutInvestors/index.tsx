import Image from "next/image";

export default function AboutInvestors () {
    return (
        <>
           <div 
            data-aos="fade-up"
            data-aos-duration="4000"
           className="xl:w-[1300px] mx-auto py-24 xl:px-8 md:px-10 lg:px-14 xs:px-5 sm:px-5 xs:py-12 sm:py-16">
                <h2 className="text-[#00303E] font-bold font-dmSans text-3xl mb-12 pl-6 md:text-2xl xs:text-2xl sm:text-2xl xs:mb-6">Backed by</h2>
                <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 sm:grid-cols-2 gap-14 items-center"  data-aos="fade-up"
            data-aos-duration="4000">
                    <Image src='/inves1.svg' alt="inves1" width={192} height={95} />
                    <Image src='/inves2.svg' alt="inves2" width={192} height={95}/>
                    <Image src='/inves3.svg' alt="inves3"  width={192} height={95}/>
                    <Image src='/inves4.svg' alt="inves4" width={192} height={95}/>
                    <Image src='/inves5.svg' alt="inves5"  width={192} height={95}/>
                    <Image src='/inves6.svg' alt="inves6"  width={192} height={95}/>
                    <Image src='/mercry corps.svg' alt="inves7"  width={192} height={95}/>
                </div>
            </div> 
        </>
    )
}