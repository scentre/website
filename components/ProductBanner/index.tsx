import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

export default function ProductBanner() {
  return (
    <div className="pt-[110px]">
      <div className="flex justify-center font-dmSans xs:px-5 sm:px-6 px-24 xl:max-w-[1400px] 2xl:max-w-[1400px] mx-auto">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="hidden lg:block xl:block">
          <div className="lg:text-4xl xl:text-7xl font-black tracking-wide space-y-5 text-[#18181B]">
            <h1>Phoenix</h1>
            <h1>is on the rise</h1>
          </div>

          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="lg:mt-7 xl:mt-10 text-sm  xl:text-base font-thin text-[#222222]">
            <p className="xl:tracking-wide xl:leading-7 lg:text-[16px] lg:leading-6 lg:w-[490px] xl:w-[680px]">
              Phoenix is more than just a collection of API’s, it’s a platform built, backed and
              supported by experts who help businesses test and launch financial services. The
              people behind it are customer centric and embedded finance experts
            </p>

            <Link href="mailto:hello@imalipay.com?subject=Contact Us">
              <Button
              child="Talk to our sales team "
              className="xl:py-4 lg:py-5 lg:px-12 xl:px-10 border-1 rounded-full text-white lg:mt-5 xl:mt-8 bg-lemongreen text-lg hover:bg-darkGreen transition-all hover:shadow-xl"
            />
            </Link>
            
          </div>
        </div>

        <div className="block md:pt-10 ">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <Image src="/prod-guy.svg" width={1500} height={1500} className="" alt="image" />
          </div>

          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="block lg:hidden xl:hidden font-dmSans mx-auto tracking-wide leading-8">
            <h1 className="text-3xl md:text-5xl font-bold pb-4 pt-10">
              Fintech-as-a-Service for Africa businesses and marketplaces
            </h1>
            <p>
              Phoenix is more than just a collection of API’s, it’s a platform built, backed and
              supported by experts who help businesses test and launch financial services. The
              people behind it are customer centric and embedded finance experts
            </p>

            <Button
              child="Talk to our sales team "
              className="mt-8 py-4 px-6 border-1 border-black rounded-full text-white bg-lemongreen text-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
