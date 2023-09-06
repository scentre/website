import Image from 'next/image';

type Prop = {
  className: string;
  icon: any;
};
const ImageContainer = ({ className, icon }: Prop) => {
  return <div className={className}>{icon}</div>;
};

export default function ProductSectionFour() {
  return (
    <>
      <div className="my-24 font-dmSans">
        <div className="sm:hidden xs:hidden md:hidden  bg-[#FFF0D1] font-dmSans py-16 rounded-2xl text-center lg:w-[950px] xl:w-[1300px] mx-auto">
          <h1 className="lg:text-2xl xl:text-4xl font-bold text-[#101828]">
            Trusted by customers across Africa
          </h1>

          <div className="mt-12 mx-10">
            <div className="flex justify-center items-center lg:space-x-4 xl:space-x-8">
              <ImageContainer
                icon={<Image src="/kerapay.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
              <ImageContainer
                icon={<Image src="/eden-box.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
              <ImageContainer
                icon={<Image src="/lipalater-box.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
              <ImageContainer
                icon={<Image src="/zuri-box.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
              <ImageContainer
                icon={<Image src="/Oaksure_logo.png" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
               {/* <ImageContainer
                icon={<Image src="/Oaksure-logo.png" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              /> */}

            </div>
            <div className="flex justify-center items-center lg:space-x-4 xl:space-x-8 lg:mt-5 xl:mt-9">
              <ImageContainer
                icon={<Image src="/africity 1.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
              <ImageContainer
                icon={<Image src="/ibuild-box.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
              <ImageContainer
                icon={<Image src="/driveme-f.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
              <ImageContainer
                icon={<img src="/fleet.svg" alt="driveme" className="h-10" />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />

              <ImageContainer
                icon={<Image src="/lion-f.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
            </div>
            <div className="flex justify-center items-center lg:space-x-4 xl:space-x-8 lg:mt-5 xl:mt-9">
               <ImageContainer
                icon={<Image src="/Quantum_logo.png" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
              <ImageContainer
                icon={<Image src="/rendaa-box.svg" alt="driveme" width={100} height={150} />}
                className="bg-white rounded-2xl lg:px-6 xl:px-12 lg:h-28 xl:h-28 flex justify-center items-center"
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden xl:hidden">
          <h1 className="text-center sm:text-3xl md:text-4xl md:w-[450px] mx-auto font-bold text-[#101828] ">
            Trusted by customers across Africa
          </h1>

          <div className="xs:block xs:space-y-3 flex justify-center items-center space-x-6 pt-6">
            <ImageContainer
              icon={
                <img src="/driveme-f.svg" alt="driveme" className="xs:w-[100px] sm:w-[100px]" />
              }
              className="bg-white rounded-2xl flex justify-center items-center"
            />
            <ImageContainer
              icon={<img src="/s.svg" alt="driveme" className="xs:w-[100px] sm:w-[80px]" />}
              className="bg-white rounded-2xl flex justify-center items-center"
            />
            <ImageContainer
              icon={
                <img src="/kerapay-f.svg" alt="driveme" className="xs:w-[100px] sm:w-[100px]" />
              }
              className="bg-white rounded-2xl flex justify-center items-center"
            />
          </div>

          <div className="xs:block xs:pt-4 xs:space-y-4 flex justify-center items-center lg:space-x-4 xl:space-x-8 lg:mt-5 xl:mt-9">
            <ImageContainer
              icon={
                <img src="/africity 1.svg" alt="driveme" className="xs:w-[100px] sm:w-[100px]" />
              }
              className="bg-white rounded-2xl  flex justify-center items-center"
            />
            <ImageContainer
              icon={<img src="/lion-f.svg" alt="driveme" className=" xs:w-[100px] sm:w-[100px]" />}
              className="bg-white rounded-2xl flex justify-center items-center"
            />
            <ImageContainer
              icon={
                <img src="/lipalater.svg" alt="driveme" className="xs:w-[100px] sm:w-[100px]" />
              }
              className="bg-white rounded-2xl  flex justify-center items-center"
            />
          </div>

          <div className="xs:block xs:pt-4 xs:space-y-4 flex justify-center items-center lg:space-x-4 xl:space-x-8 lg:mt-5 xl:mt-9">
            <ImageContainer
              icon={
                <img src="/zuri-box.svg" alt="driveme" className=" xs:w-[100px] sm:w-[100px]" />
              }
              className="bg-white rounded-2xl flex justify-center items-center"
            />
            <ImageContainer
              icon={
                <img src="/ibuild-box.svg" alt="driveme" className=" xs:w-[100px] sm:w-[100px]" />
              }
              className="bg-white rounded-2xl flex justify-center items-center"
            />
            <ImageContainer
              icon={<img src="/fleet.svg" alt="driveme" className=" xs:w-[100px] sm:w-[100px]" />}
              className="bg-white rounded-2xl flex justify-center items-center"
            />
          </div>
          <div className="xs:block xs:pt-4 xs:space-y-4 flex justify-center items-center lg:space-x-4 xl:space-x-8 lg:mt-5 xl:mt-9">
            <ImageContainer
              icon={
                <img src="/eden-box.svg" alt="driveme" className=" xs:w-[100px] sm:w-[100px]" />
              }
              className="bg-white rounded-2xl flex justify-center items-center"
            />
            <ImageContainer
              icon={<img src="/rendaa.svg" alt="driveme" className=" xs:w-[100px] sm:w-[100px]" />}
              className="bg-white rounded-2xl flex justify-center items-center pt-6 pl-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
