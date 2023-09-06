/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function AboutVision() {
  return (
    // <div className="w-full bg-[#F2F4F7] my-16 lg:my-20 xl:my-28 font-dmSans">
    //   <div className="xl:w-[1300px] mx-auto">
    //     <div className=" pt-14 md:pt-20 lg:pt-20 xl:pt-28 lg:flex xl:flex justify-center items-center lg:space-x-6 xl:space-x-16 lg:px-10 xl:px-10">
    //       <img
    //         data-aos="fade-up"
    //         data-aos-easing="linear"
    //         data-aos-duration="1500"
    //         src="/ourvisionpng.png"
    //         className="px-5 w-[360px] md:w-[500px] xl:w-[400px]  mx-auto"
    //         alt=""
    //       />
    //       <div
    //         data-aos="fade-up"
    //         data-aos-easing="linear"
    //         data-aos-duration="1500"
    //         className="xs:px-5">
    //         <h2 className="text-left sm:pt-4 pt-0  sm:px-10 md:text-center text-2xl md:mt-8 lg:text-3xl xl:text-5xl font-semibold text-[#101010] md:text-3xl xs:pt-6">
    //           <span className="sm:text-[#FEAA00] text-[#80B539]">Our Vision</span> is bright
    //         </h2>
    //         <p className="xs:pt-3 sm:pt-3 pt-6 sm:px-10 md:px-10 px-0 sm:text-sm text-lg  tracking-wide sm:leading-8 leading-8 md:text-center mx-auto text-[#707070] xs:text-sm xs:leading-7">
    //           We are seeking to become the most innovative, the most reliable and most credible
    //           Fintech in Africa, whose hallmark will be providing customizable, seamless & secure local and global outbound and inbound payments leveraged by regulated and compliant 3rd party infrastructure partners
    //         </p>
    //       </div>
    //     </div>
    //
    //     <img
    //       data-aos="fade-up"
    //       data-aos-duration="3000"
    //       src="/ourmission.svg"
    //       className="px-5 w-[360px] md:w-[500px] pt-20 lg:hidden xl:hidden block mx-auto"
    //       alt=""
    //     />
    //
    //     <div className="sm:pt-3 sm:pb-20 md:pt-8 xs:pt-6 xs:pb-20 xs:px-5 py-28 lg:flex xl:flex justify-center items-center lg:space-x-14 lg:px-10  xl:space-x-14 xl:px-14">
    //       <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="">
    //         <h1 className="text-left text-2xl sm:pt-4 sm:px-10 md:text-center md:text-3xl lg:text-3xl xl:text-5xl font-semibold text-[#101010] md:pt-0">
    //           <span className="sm:text-[#FEAA00] text-[#80B539]">Our Mission</span>
    //           <br className="sm:hidden" /> starts with you
    //         </h1>
    //         <p className="sm:pt-3 xs:pt-3 pt-6 text-lg tracking-wide leading-8 md:text-center mx-auto sm:px-10 sm:text-sm sm:leading-8 md:px-10 text-[#707070] xs:text-sm xs:leading-7">
    //           We’re committed to provide a robust Fintech-as-a-Service platform that gives every
    //           business across Africa access to the tools, infrastructure and API ecosystems they
    //           need to provide additional financial services to their users. <br />
    //         </p>
    //         <p className="sm:pt-3 xs:pt-3 pt-3 text-lg tracking-wide leading-8 md:text-center mx-auto sm:px-10 sm:text-sm sm:leading-8 md:px-10 text-[#707070] xs:text-sm xs:leading-7">
    //           And it's not just about payments.
    //         </p>
    //       </div>
    //       <img
    //         data-aos="fade-up"
    //         data-aos-easing="linear"
    //         data-aos-duration="1500"
    //         src="/ourmission.svg"
    //         className="lg:w-[360px] xl:w-[400px] hidden lg:block xl:block"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="bg-darkGreen rounded-48 px-24 py-12 text-[#e5e5e5] font-dmSans xs:w-full sm:w-full xs:px-5 sm:px-5 md:px-8">
          <h2 className="text-center leading-10 text-white text-3xl fond-bold xs:text-2xl sm:text-2xl">Companies using our API</h2>
          <div className="w-[70%] mx-auto grid grid-cols-5 grid-rows-3 gap-6 my-12 xs:w-full sm:w-full xs:grid-cols-3 xs:grid-rows-4 sm:grid-cols-3 sm:grid-rows-4 md:w-full lg:w-full">
            <Image src='/eacl.png' alt='kerapy' width={160} height={90} />
            <Image src='/edn.svg' alt='kerapy' width={160} height={90} />
            <Image src='/ibld.svg' alt='kerapy' width={160} height={90} />
            <Image src='/drivem.svg' alt='kerapy' width={160} height={90} />
            <Image src='/fleets.svg' alt='kerapy' width={160} height={90} />
            < Image src="/Frame 303.svg" alt='kerapy' width={160} height={90} className="col-start-3"/>
            < Image src="/Frame 302.svg" alt='kerapy' width={160} height={90} />
          </div>
          <hr/>
          <div className="flex space-x-12 mt-12 xs:w-full sm:w-full xs:grid sm:grid xs:space-x-0 sm:space-x-0 md:space-x-0 md:grid">
              <aside className="w-[550px] xs:w-full sm:w-full xs:mb-5 sm:mb-5 md:w-full">
                  <h1 className="text-5xl leading-[62.5px] font-bold xs:text-2xl sm:text-2xl md:text-4xl">Why businesses are turning to ImaliPay</h1>
              </aside>
              <div className="w-[500px] flex flex-col gap-7 xs:w-full sm:w-full xs:grid sm:grid xs:gap-5 sm:gap-5 md:w-full md:grid md:gap-6 md:mt-6">
                  <div className="xs:text-base sm:text-base">
                      <h4 className="text-2xl font-medium leading-8 xs:text-base sm:text-base xs:font-bold sm:font-bold">Our Mission</h4>
                      <p className="text-base leading-8 mt-2">Our aim is to be Africa’s top API Fintech offering bespoke and secure embedded banking services ,with a focus on innovation, reliability and credibility.</p>
                  </div>
                  <div className="xs:text-base sm:text-base">
                      <h4 className="text-2xl font-medium leading-8 xs:text-base sm:text-base xs:font-bold sm:font-bold">Our Vision</h4>
                      <p className="text-base leading-8 mt-2">Our aim is to be Africa’s top API Fintech offering bespoke and secure embedded banking services ,with a focus on innovation, reliability and credibility.</p>
                  </div>
                  <div className="xs:text-base sm:text-base">
                      <h4 className="text-2xl font-medium leading-8 xs:text-base sm:text-base xs:font-bold sm:font-bold">Our Values</h4>
                      <ul className="pl-4 mt-2">
                          <li className="list-disc">Innovation</li>
                          <li className="list-disc">Accountability</li>
                          <li className="list-disc">Know, Understand & Deliver</li>
                          <li className="list-disc">Continuous Learning</li>


                      </ul>
                  </div>
              </div>

          </div>

      </section>
  );
}