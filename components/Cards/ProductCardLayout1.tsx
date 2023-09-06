import Image from "next/image";
import Button from "../Button";
import Link from 'next/link'

interface CardLayout1Props {
    title: string,
    details: string,
    image: string,
    classname: string,

}

export default function ProductCardLayout1 ({title, details, image, classname}: CardLayout1Props) {
    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"  className={classname}>
            <div className="w-[600px] mt-[70px] sm:w-full xs:w-full sm:mt-6 md:w-full md:mt-6">
                <h2 className="text-blackIsh lg:text-2xl xl:text-4xl font-medium sm:text-2xl  sm:font-medium xs:text-xl xs:font-medium md:text-2xl  md:font-medium">{title}</h2>
                <p className="mt-4 text-grayIsh lg:text-base xl:text-lg xl:leading-10 sm:text-base xs:text-sm md:text-base">{details}</p>
                <div className="mt-6 flex space-x-5 items-center">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform" target="_blank">
                    <Button child="Book demo" className = "bg-shadeBlack text-white lg:py-3 lg:text-sm xl:text-lg rounded-full xl:py-4 px-5 sm:py-[10px] sm:px-[18px] md:py-4 md:px-6 xs:text-xs xs:py-2 xs:px-4 hover:bg-white hover:text-black hover:border-black hover:border-1 transition-all hover:shadow-xl"/>
                    </Link>
                    <Button child="Read Documentation" className= "text-shadeBlack lg:text-sm xl:text-lg xs:text-xs hover:text-darkGreen transition-all "/>
                </div>
            </div>
            <div>
            <img data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" src={image} alt="cover-image" className="xl:w-[700px]" />
            </div>
        </div>
    )
}