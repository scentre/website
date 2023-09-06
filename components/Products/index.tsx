import Link from 'next/link';
import Button from '../Button';
import ProductCardLayout1 from '../Cards/ProductCardLayout1';
import ProductCardLayout2 from '../Cards/ProductCardLayout2';
import ProductCardLayout3 from '../Cards/ProductCardLayout3';
import DeveloperCard from "../Cards/DeveloperCard";
import Image from "next/image";
import React from "react";
import {Testimonials} from "../index";


const details = [
    {
        icon: '/group1.svg',
        details: 'Tailor payment schedules that suit your customers\' preferences while boosting their purchasing power.',
        title: 'Customizable Payment Plans',
    },
    {
        icon: '/group3.svg',
        title: 'Fintech without borders',
        details: 'Ensure a seamless and informed shopping experience with instant affordability assessments.',
    }, {
        icon: '/group4.svg',
        title: "It's not just about Payments",
        details: 'Keep customers on track with automated payment reminders, reducing missed payments.',
    },
    {
        icon: '/group2.svg',
        title: 'Intelligent Analytics via our dashboard',
        details: "Gain valuable insights into purchasing behaviors, enabling you to refine your strategies for maximum impact.",
    }


]


const products: {title:string, info: string, image:string , height: number, width: number}[] = [
  {
    title: 'Wallets',
    info: 'Simplify transactions and manage funds effortlessly with our intuitive digital wallets. Experience the future of finance, today.',
    image: '/Frame 362.png',
    height: 405,
    width: 450,
  },
  {
    title: 'Payments',
    info: 'Seamless, secure, and lightning-fast payments are our promise. Elevate your financial transactions with ImaliPay\'s payment solutions.',
    image: '/payment-illustration.png',
    height:345,
    width: 510,
  },
  {
    title: 'Auto-reconciliation',
    info: 'Wave goodbye to manual reconciliation headaches. ImaliPay\'s auto-reconciliation feature brings accuracy and automation to your financial processes.',
    image: '/auto-recon illustration.png',
    width: 560,
    height: 405,
  },
  {
    title: 'White-label App',
    info: 'Make your mark in the fintech world with our customizable white-label app. Your brand, your rules – powered by ImaliPay\'s API and expertise.',
    image: '/white-label-app illustration.png',
    width: 460,
    height: 475,
  },
]


const vertices: {title: string, image: string}[] = [
  {
    title: "E-commerce",
    image: "/Frame-e-commerce.webp",
  },
  {
    title: "Gig economy",
    image: "/Frame-gig.webp",
  },
  {
    title: "Education",
    image: "/Frame-education.webp",
  },
  {
    title: "Fintech & Financial Institutions",
    image: "/Frame- fintech.webp",
  },
  {
    title: "Telcos",
    image: "/Frame-telcos.webp",
  },
  {
    title: "Logistics",
    image: "/Frame-logistics.webp",
  },

]
export default function Products() {
  return (
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="px-[124px] py-[96px] font-dmSans w-full lg:px-[72px] md:px-10 sm:px-0 xs:px-0 sm:py-8 xs:py-8">
        <div className="text-center sm:px-5 xs:px-5">
            <h2 className="text-5xl text-almostBlack leading-62 font-bold md:text-4xl sm:text-[32px] xs:text-[28px] sm:leading-0 xs:leading-0">Save more with our <br/> all-in-one BNPL Engine</h2>
            <p className="text-[#808080] text-base mt-3 sm:hidden xs:hidden">Our testing tools help you to ensure that your integration is working properly, so you can <br/> be confident that your customers will have Aa smooth experience.</p>
          <p className="text-[#808080] text-base mt-3 xl:hidden lg:hidden md:hidden">Our testing tools help you to ensure that your integration is working properly, so you can be confident that your customers will have Aa smooth experience.</p>

        </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="products">
            <div className="xl:flex xl:justify-between xl:space-x-8 lg:flex">
                <div className="xl:mt-16 sm:py-10">
                    <h2 className="text-[40px] font-semibold text-[#090914] lg:text-[32px] md:text-3xl sm:text-[32px] xs:text-[32px] sm:text-center xs:text-center">It’s more than just an API</h2>
                    <div className="grid xl:grid-cols-2 xl:gap-8 xl:mt-8 lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-6 md:grid-cols-2 md:gap-4 md:mt-6 md:pr-4 sm:mt-6 xs:mt-6 sm:gap-4 xs:gap-4">
                        {details.map((detail, index) => (
                            <div key={index} className="xl:w-full lg:w-full">
                                <Image src={detail.icon} alt="image" width={48} height={48} />
                                <h5 className="text-[#18181B] text-lg font-semibold pt-3">{detail.title}</h5>
                                <p className="text-[#52525B] text-base pt-3">{detail.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:mt-8 xl:w-full lg:w-full lg:mt-6 md:hidden sm:hidden xs:hidden">
                    <Image src="/dash.svg" alt="dashboard" height={539} width={450} style={{ width: "100%"}} />
                </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex items-center space-x-6 w-full h-[465px] md:grid md:h-full md:gap-4 md:space-x-0 sm:grid sm:h-full sm:gap-4 xs:grid sm:space-x-0 xs:h-full xs:gap-4 xs:space-x-0">
              <div className="xl:w-[700px] bg-[#DDE4FF] rounded-3xl pt-10 pb-6 px-12 h-full md:w-full sm:w-full xs:w-full xs:px-5 sm:px-5">
                    <h2 className="text-[#090914] text-[40px] font-semibold md:text-3xl sm:text-2xl xs:text-2xl">Control every function</h2>
                  <p className="text-base text-[#52525B] mt-6">Say goodbye to complexity and hello to simplified single API with modular features built for any business looking to create and manage. </p>
                  <Image src="/function-illustration.png" alt="illus" width={470} height={186} style={{ marginTop: '48px'}} />
               </div>
              <div className="w-[540px] bg-[#C2DF9B] rounded-3xl pt-10 pb-6 px-12 h-full md:w-full sm:w-full xs:w-full xs:px-5 sm:px-5">
                <h2 className="text-[#090914] text-[40px] font-semibold md:text-3xl sm:text-2xl xs:text-2xl">KYC Verification</h2>
                  <p className="text-base text-[#52525B] mt-3">Designed to enhance customer experience, drive retention and drive sales.</p>
                  <Image src="/KYC-illustration.png" alt="illus" width={470} height={233} style={{ marginTop: '16px'}} />
              </div>
          </div>
          <Testimonials color="#FFFCEB" title="Founder, KeraPay" name="Taiwo Ajayi" comment="“
ImaliPay arrived at a critical juncture in our search for the right partner to provide wallet solutions to our clients.”" image="/review-img-01.webp"/>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-full mt-32 sm:mt-16 xs:mt-16">
          <div className="text-center sm:px-5 xs:px-5">
              <h2 className="text-5xl leading-[62px] font-bold text-almostBlack md:text-4xl sm:text-3xl xs:text-3xl">Time is money. <br />Save both with our products offering</h2>
            <p className="text-[#808080] text-base mt-3 sm:hidden xs:hidden">ImaliPay empowers you to save valuable time and money. Explore our suite of products<br/> and unlock a world of convenience.</p>
            <p className="xl:hidden lg:hidden md:hidden text-[#808080] text-base mt-6">ImaliPay empowers you to save valuable time and money. Explore our suite of products and unlock a world of convenience..</p>
          </div>
          <div className="lg:grid xl:grid xl:grid-cols-2 lg:grid-cols-2 xl:gap-10 lg:gap-10 xl:mt-11 lg:mt-11 md:grid md:grid-cols-2 md:gap-8 md:mt-8 xs:mt-6 sm:mt-6 xs:grid xs:gap-6 sm:grid sm:gap-6">
            {
              products && products.map((product, index) => (
                <div key={index} id={product.title} className="bg-[#EAEEE4] rounded-3xl flex flex-col justify-center px-11 pt-14 md:pt-8 sm:px-5 xs:px-5">
                    <h2 className="font-semibold text-[40px] text-almostBlack md:text-2xl sm:text-2xl xs:text-2xl" >{product.title}</h2>
                    <p className="text-[#52525B] text-base mt-4">{product.info}</p>
                  <div className="flex place-self-center justify-end mt-6">
                    <Image src={product.image} alt="product" width={product.width} height={product.height} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mt-32 md:mt-28 sm:mt-20 xs:mt-20 sm:px-5 xs:px-5">
            <h2 className="text-5xl text-almostBlack leading-62 mb-8 font-bold md:text-4xl sm:text-3xl xs:text-3xl">We work with businesses across <br/>these 6 verticals</h2>
          <div className="xl:grid lg:grid xl:grid-cols-3 lg:grid-cols-3 xl:gap-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 sm:grid xs:grid sm:gap-4 xs:gap-4">
            {vertices && vertices.map((vertice, index) => (
              <div key={index} className="border-1 border-[#E2E2E2] rounded-3xl px-6 pt-6 pb-10">
                  <Image src={vertice.image} alt="image" width={360} height={290} />
                  <p className="font-medium text-[#090914] text-2xl mt-3 sm:text-xl xs:text-xl">{vertice.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
