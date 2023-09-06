import Link from 'next/link';
import Button from '../Button';

interface CardLayout2Props {
  title: string;
  details: string;
  image1?: string;
  classname: string;
  image2?: string;
  image3?: string
}
export default function ProductCardLayout3({
  title,
  details,
  image1,
  image2,
  classname,
  image3
}: CardLayout2Props) {
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className={classname}>
       <div className="lg:hidden xl:hidden md:hidden flex lg:space-x-5 xl:space-x-6 sm:flex sm:flex-col xs:flex-col  md:flex-col md:max-w-full md:px-5">
         {image3 &&
          <img
            src={image3}
            className="lg:w-full xl:w-full xl:rounded-lg sm:w-full sm:rounded-lg sm:pl-[132px] xs:w-full xs:pl-[92px] xs:pt-2 md:pl-[70px] sm:pt-2 md:rounded-lg md:pt-2 md:w-[400px] md:h-[150px] sm:h-[200px] xs:h-[100px] mx-auto "
            alt="image"
          />
        }
      </div>
      <div className="sm:mt-6 xs:mt-6 md:mt-6 md:w-[450px]">
        <h2 className="text-blackIsh lg:text-2xl xl:text-4xl font-medium sm:text-2xl sm:font-medium  xs:text-xl md:text-2xl  md:font-medium">
          {title}
        </h2>
        <p className="mt-4 text-grayIsh lg:text-sm xl:text-lg sm:text-base md:text-base">
          {details}
        </p>
        <div className="mt-6 flex space-x-5 items-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform" target="_blank">

          <Button
            child="Book demo"
            className="bg-shadeBlack text-white lg:text-sm xl:text-lg rounded-full lg:py-3 xl:py-4 px-5 sm:py-[10px] sm:px-[18px] md:py-4 md:px-6 xs:text-xs xs:py-2 xs:px-3 hover:bg-white hover:text-black hover:border-black hover:border-1 transition-all hover:shadow-xl" />
          </Link>
          <Button
            child="Read Documentation"
            className="text-shadeBlack lg:text-sm xl:text-lg xs:text-xs hover:text-darkGreen transition-all "></Button>
        </div>
      </div>

      <div className="lg:mt-[40px] xl:mt-[66px] flex lg:space-x-5 xl:space-x-6 sm:hidden sm:flex-col xs:hidden md:flex md:flex-col md:max-w-full md:px-5">
         {image3 &&
          <img
            src={image3}
            className="lg:w-full xl:w-full xl:rounded-lg sm:w-full sm:rounded-lg sm:pl-[132px] xs:w-full xs:pl-[92px] xs:pt-2 md:pl-[70px] sm:pt-2 md:rounded-lg md:pt-2 md:w-[400px] md:h-[150px] sm:hiddeb xs:h-[100px] mx-auto "
            alt="image"
          />
        }
      </div>
    </div>
  );
}

{
  /* <div className="w-[600px] mt-[70px] sm:w-full sm:mt-6 md:w-full md:mt-6">
                <h2 className="text-blackIsh lg:text-2xl xl:text-4xl font-medium sm:text-2xl  sm:font-medium md:text-2xl  md:font-medium">{title}</h2>
                <p className="mt-4 text-grayIsh lg:text-base xl:text-lg xl:leading-10 sm:text-base md:text-base">{details}</p>
                <div className="mt-6 flex space-x-5 items-center">
                    <Button child="Book demo" className = "bg-shadeBlack text-white lg:py-3 lg:text-sm xl:text-lg rounded-full xl:py-4 px-5 sm:py-[10px] sm:px-[18px] md:py-4 md:px-6"></Button>
                    <Button child="Read Documentation" className= "text-shadeBlack lg:text-sm xl:text-lg"></Button>
                </div>
            </div>
            <div>
            <img src={image} alt="cover-image" className="xl:w-[700px]" />
            </div> */
}
