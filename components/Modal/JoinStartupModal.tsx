import Button from '../Button';
import Input from '../InputField';


type prop = {
  openPopup: any;
};

export default function JoinStartupModal({ openPopup }: prop) {

  
  
  return (
    <>
    <form className='bg-[#F5F5F5] xl:w-[600px] xs:w-[280px] sm:w-[350px] md:w-[600px] lg:w-[600px] font-dmSans rounded-xl xs:px-2 lg:p-6 xl:p-5 md:p-5'>
    <div className="flex justify-end cursor-pointer" onClick={() => openPopup()}>
        <img src="/close-icon.svg" alt="bg-black" className="text-black" />
    </div>
      <h2 className="text-base sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-center font-extrabold lg:pt-4 xl:pt-2 tracking-wide">
          Join the companies growing <br /> with our API
        </h2>
        <div className="xs:w-[260px] sm:w-full w-[400px] sm:border-none xs:border-none border-1 border-[#DDDDDD] mx-auto mt-3 pt-6  px-12 rounded-lg bg-white">
             <p className="text-center text-sm">Book a demo session to access our (API) </p>
             <div className='border-t-1 border-[#dddddd] my-4'>
             <Input
                label="FULL NAME"
                className="bg-transparent flex-1 xs:w-[250px] sm:w-[250px] md:w-full w-[300px] border-[1px] md:p-2 px-3 rounded-lg border-[#D1D1D1] text-sm xl:py-3 lg:py-1.5 "
                labelClass="flex-1 flex text-xs pb-2 mt-4"
                placeholder="Enter full name"
             
              />
              <Input
                label="EMAIL ADDRESS"
                className="bg-transparent flex-1 xs:w-[250px] sm:w-[250px] md:w-full w-[300px] border-[1px] md:p-2 px-3 rounded-lg border-[#D1D1D1] text-sm xl:py-3 lg:py-1.5 "
                labelClass="flex-1 flex text-xs pb-2 mt-4"
                placeholder="username@company.com"
               
              />
              <Input
                label="COMPANY/BUSINESS NAME"
                className="bg-transparent flex-1 xs:w-[250px] sm:w-[250px] w-[300px] md:w-full border-[1px] md:p-2 px-3 rounded-lg border-[#D1D1D1] text-sm xl:py-3 lg:py-1.5 "
                labelClass="flex-1 flex text-xs pb-2 mt-4"
                placeholder="Enter company or business name"
             
              />
              <Input
                label="MEETING NOTE"
                className="bg-transparent flex-1 xs:w-[250px] sm:w-[250px] w-[300px] md:w-full border-[1px] md:p-2 px-3 rounded-lg border-[#D1D1D1] text-sm xl:py-3 lg:py-1.5 "
                labelClass="flex-1 flex text-xs pb-2 mt-4"
                placeholder="Add a description"
              
              />
                <Button
                  className="bg-[#014342] text-white p-2 rounded-lg mt-4 w-full"
                  child="Book a Demo"
                  type="submit"
                />
             </div>
        </div>
       
    </form>
    </>
  );
}
