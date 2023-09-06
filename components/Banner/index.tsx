/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Button from '../Button';
import WhyCards from '../Cards/WhyCards';
import Image from "next/image";
import {FiArrowUpRight} from 'react-icons/fi'
import React from "react";

type prop = {
  openPopup: any;
};

export default function Banner({ openPopup }: prop) {
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="w-full text-center font-dmSans bg-[#FFFCEB] px-[124px] py-[110px] lg:px-[72px] md:px-10 sm:px-0 xs:px-0 sm:py-[96px] xs:py-[96px]">
        <div className="w-full flex items-center justify-between lg:space-x-12 lg:items-center md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse xs:flex xs:flex-col-reverse sm:space-x-0 sm:px-5 xs:px-5">
            <div className="w-[465px] text-left lg:w-[465px] md:w-full sm:w-full xs:w-full">
                <h1 className="text-almostBlack font-bold text-5xl leading-62 lg:text-4xl md:text-4xl md:mt-8 sm:text-5xl xs:text-5xl sm:mt-6 xs:mt-6">API built to scale with your business</h1>
                <p className="text-[#2C282FE5] text-2xl font-medium mt-4 lg:text-xl md:text-xl sm:text-lg xs:text-lg">Unlock limitless growth possibilities with ImaliPay's robust APIs tailored to meet your business's evolving needs. Our cutting-edge solutions are designed to empower your business's expansion while ensuring unparalleled performance and reliability.</p>
                <div className="mt-16 text-darkGreen font-semibold text-2xl sm:mt-12">
                    <Image src='/avatar2.webp' alt='avatar' height={55} width={150} />
                    <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform"}><button className="flex items-center mt-4 lg:text-xl md:text-lg sm:text-sm xs:text-sm">
                        Request live video
                        <FiArrowUpRight style={{ marginLeft: '14px'}} />
                    </button>
                    </Link>

                </div>
            </div>
            <div className="md:w-full">
                <Image src="/hero-img-imalipay.webp" alt="hero" width={685} height={736} />
            </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-full px-12 bg-darkGreen rounded-3xl py-16 mt-20 sm:px-5 xs:px-5">
            <div className="text-[#FFFDEB] text-center mb-8">
                <p className="text-2xl font-medium sm:text-lg xs:text-sm">We’ve saved our customers over</p>
                <p className="font-semibold text-[120px] lg:text-8xl lg:py-6 md:text-5xl md:py-6 sm:text-4xl xs:text-3xl sm:py-4 xs:py-4" >$10,605,32.09</p>
                <p className="text-2xl font-medium sm:text-lg xs:text-sm">and we're just getting started.</p>
            </div>
            <div className="bg-white px-12 py-8 rounded-3xl lg:px-8 sm:px-5 xs:px-5">
                <h1 className="font-semibold text-almostBlack text-2xl text-center sm:text-lg xs:text-base">Trusted by over 1000 partners and customers</h1>
                <div className="flex flex-wrap justify-center items-center gap-6 mt-12 sm:grid xs:grid xs:grid-cols-2 sm:grid-cols-2">
                    <Image src="/bosch.svg" alt="bosch" height={64} width={124} />
                    <Image src="/rend.svg" alt="" height={64} width={124} />
                    <Image src="/eac.svg" alt="eac" height={64} width={124} />
                    <Image src="/edn.svg" alt="eden" height={64} width={124} />
                    <Image src="/sasapay.svg" alt="sasa" height={64} width={124} />
                    <Image src="/fleet.svg" alt="fleets" height={64} width={124} />
                    <Image src="/mm.svg" alt="mm" height={64} width={124} />
                    <Image src="/pula.svg" alt="pula" height={64} width={124} />

                </div>
            </div>
        </div>
    </section>
  );
}
