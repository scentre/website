import { marketData } from '../../utils/marketData';

type prop = {
  icon: any;
  subtitle: string;
  child: string;
};
const MarketBox = ({ icon, subtitle, child }: prop) => {
  return (
    <div className="md:h-[400px] lg:w-[300px] xl:w-[425px] text-white bg-darkgrey p-6 xl:h-[450px] lg:h-[350px] rounded-xl hover:bg-white hover:-mt-10 hover:text-[#191919] transition-all">
      <img src={icon} alt="build" className="mt-9 xl:w-28 lg:w-20" />
      <div className="w-100">
        <h1 className="lg:text-base xl:text-xl font-bold pt-10">{subtitle}</h1>
        <p className="font-thin xl:text-base lg:text-sm lg:w-60 pt-4  w-100">{child}</p>
      </div>
    </div>
  );
};

// text-[#191919]
// text-[#333333]

export default function ProductSectionTwo() {
  return (
    <div data-aos-easing="linear" data-aos-duration="1500" className="bg-[#00303E] mt-16 rounded-3xl font-dmSans py-24 ">
      <div className="px-4 sm:px-10 md:px-10 lg:px-20 ">
        {/* <div  className="lg:pl-14 xl:pl-0 max-w-7xl text-2xl lg:text-3xl xl:text-5xl text-white xl:space-y-3 font-bold tracking-wide text-center"> */}
          <h1 data-aos-easing="linear" data-aos-duration="1500" className='text-center text-lg md:text-2xl lg:text-3xl xl:text-5xl text-white xl:space-y-3 font-bold tracking-wide '>Here is how to outpace the market with ImaliPay? </h1>
        {/* </div> */}
        <div data-aos-easing="linear" data-aos-duration="1500"  className="block lg:flex xl:flex justify-center lg:space-x-2.5 xl:space-x-5 mt-16 space-y-10 lg:space-y-0 xl:space-y-0">
          {marketData.map((data, idx) => (
            <div className='' key={idx}>
              <MarketBox icon={data?.icon} subtitle={data.subtitle} child={data.child}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
