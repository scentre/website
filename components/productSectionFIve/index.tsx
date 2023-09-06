import Link from 'next/link';
import Button from '../Button';
import Image from "next/image";
import icons from '../../public/Api-App.png'

export default function ProductSectionFive() {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="px-[124px] py-24 lg:px-[72px] md:px-8 sm:px-5 xs:px-5 sm:py-6 xs:py-6">
      <div className='grid-lines font-dmSans  relative border-1 px-8 border-[#DEDEDE] py-16 mx-auto rounded-3xl xs:w-full sm:w-full sm:py-6 xs:py-6 md:w-full md:py-8'>
        <div className='w-[50%] mx-auto text-almostBlack leading-[56px] text-center xs:w-full sm:w-full md:w-[70%]'>
          <h2 className='lg:text-3xl xl:text-5xl font-bold sm:text-[20px] md:text-[32px] xs:text-[20px] sm:font-semibold xs:font-semibold text-center sm:text-2xl xs:text-xl'>It takes less than 5 minutes
            to start using our API</h2>
          <div className='my-8 sm:mt-3 xs:mt-3'>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform" target="_blank"
                  className="lg:py-5 xl:py-7 lg:px-10 xl:px-16 border-1 rounded-full text-white mt-5 bg-darkGreen xs:text-xs sm:text-xs xs:px-5 xs:py-4 md:px-5 md:py-5 xs:rounded-48 sm:px-5 sm:py-4 sm:rounded-48 text-lg hover:bg-darkgreen hover:shadow-xl transition-all"
            >
              Access our Super API
            </Link>
          </div>
        </div>
        <div className="absolute px-10 -z-10 right-0 left-0 bottom-0 xl:pt-0 xl:max-h-[180px] overflow-hidden lg:max-h-[148px] md:max-h-[115px] sm:px-3 xs:px-3 sm:max-h-[60px] xs:max-h-[50px]">
          <Image src={icons} alt="icon" className=""/>
        </div>

      </div>

    </div>
  );
}
