import Modal from '../components/Modal';
import JoinStartupModal from '../components/Modal/JoinStartupModal';
import ProductBanner from '../components/ProductBanner';
import ProductSectionFour from '../components/ProductSectionFour';
import ProductSectionThree from '../components/ProductSectionThree';
import ProductSectionTwo from '../components/ProductSectionTwo';
import RealLifeResult from '../components/RealLife';
import Image from "next/image";
import React from "react";

const details = [
  {
    icon: '/group1.svg',
    details: 'Test, launch & iterate with speed; our platform keeps your business nimble',
    title: 'Keep your business nimble',
  },
  {
    icon: '/group3.svg',
    title: 'Fintech without borders',
    details: 'Our support teams are always available to support and resolve any issue as quick as possible',
  }, {
    icon: '/group4.svg',
    title: "It's not just about Payments",
    details: 'Our support teams are always available to support and resolve any issue as quick as possible',
  },
  {
    icon: '/group2.svg',
    title: 'Move from 0 - 1 and  1 - 100',
    details: "View every transaction as well as data driven insights from the recon data",
  }


]

const products: {title:string, info: string, image:string , height: number, width: number}[] = [
  {
    title: 'Wallets',
    info: 'Test, launch & iterate with speed; our platform keeps your business nimble',
    image: '/Frame 362.png',
    height: 405,
    width: 450,
  },
  {
    title: 'Payments',
    info: 'Test, launch & iterate with speed; our platform keeps your business nimble',
    image: '/payment-illustration.png',
    height:345,
    width: 510,
  },
  {
    title: 'Auto-reconciliation',
    info: 'Test, launch & iterate with speed; our platform keeps your business nimble',
    image: '/auto-recon illustration.png',
    width: 560,
    height: 405,
  },
  {
    title: 'White-label App',
    info: 'Test, launch & iterate with speed; our platform keeps your business nimble',
    image: '/white-label-app illustration.png',
    width: 460,
    height: 475,
  },
]

export default function product() {
  return (
    <>
      <ProductBanner />
      <ProductSectionTwo />
      <section className="px-[108px] pt-6 lg:px-[72px] md:px-8 sm:px-0 xs:px-o">
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
      </section>
      <section className="px-[108px] pt-6 lg:px-[72px] md:px-8 sm:px-0 xs:px-0">
        <div className="lg:grid xl:grid xl:grid-cols-2 lg:grid-cols-2 xl:gap-10 lg:gap-10 xl:mt-11 lg:mt-11 md:grid md:grid-cols-2 md:gap-8 md:mt-8 xs:mt-6 sm:mt-6 xs:grid xs:gap-6 sm:grid sm:gap-6">
          {
            products && products.map((product, index) => (
              <div key={index} className="bg-[#EAEEE4] rounded-3xl flex flex-col justify-center px-11 pt-14 md:pt-8 sm:px-5 xs:px-5">
                <h2 className="font-semibold text-[40px] text-almostBlack md:text-2xl sm:text-2xl xs:text-2xl">{product.title}</h2>
                <p className="text-[#52525B] text-base mt-4">{product.info}</p>
                <div className="flex place-self-center justify-end mt-6">
                  <Image src={product.image} alt="product" width={product.width} height={product.height} />
                </div>
              </div>
            ))
          }
        </div>
      </section>

    </>
  );
}
