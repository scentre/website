import Tippy from '@tippyjs/react';
import Image from 'next/image';
import Link from 'next/link';
import 'tippy.js/dist/tippy.css';

export default function Footer() {
  return (
    <footer className="bg-[#070707] w-full font-inter text-white py-16 lg:px-14 xl:px-36 sm:py-16 sm:px-[20px] xs:py-16 xs:px-5 md:py-16 md:px-10">
      <div className="flex justify-between sm:grid md:grid xs:grid">
        <div>
          <Link href="/">
            <img src="/logo-white.svg" alt="imalipay" className="pb-5 lg:w-40 xl:w-[180px]" />
          </Link>
          {/* <p className="lg:w-[400px] xl:w-[450px] text-sm leading-6 text-almostWhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus dictumst lectus ac nibh. Amet</p> */}

          <div className="md:flex md:items-center md:justify-between pt-10 lg:text-sm xl:text-base sm:grid xs:grid">
            <p className="pr-14 sm:pb-6 md:pb-6 xs:pb-6"> hello@imalipay.com</p>

            <div className="pt-8">
              <p className="pr-14 sm:pb-6 md:pb-6 xs:pb-6 text-colorGrey"> Payment Partners</p>
              <div className="flex space-x-5 pt-4">
                <Tippy
                  content={
                    <span className="bg-white px-2 py-1 rounded-sm text-darkgreen">Mpesa</span>
                  }>
                  <img src="./mpesa.svg" alt="" className="cursor-pointer" />
                </Tippy>
                <Tippy
                  content={
                    <span className="bg-white px-2 py-1 rounded-sm text-darkgreen">Stitch</span>
                  }>
                  <img src="./stitch.svg" alt="" className="cursor-pointer" />
                </Tippy>
                <Tippy
                  content={
                    <span className="bg-white px-2 py-1 rounded-sm text-darkgreen">Providus</span>
                  }>
                  <img src="./providus.svg" alt="" className="cursor-pointer" />
                </Tippy>

                <Tippy
                  content={
                    <span className="bg-white px-2 py-1 rounded-sm text-darkgreen">Paystack</span>
                  }>
                  <img src="./paystack.svg" alt="" className="cursor-pointer" />
                </Tippy>
              </div>
            </div>

            {/* <p>+234 800 0000 000</p> */}

            <div className="flex pt-20 space-x-5 sm:hidden xs:hidden md:hidden">
              <img src="/kenya-footer.svg" alt="kenya" className="xl:w-full " />
              <img src="/nigeria-footer.svg" alt="Nigeria" className="xl:w-full " />
              <img src="/south-footer.svg" alt="south africa" className="xl:w-full  " />
              {/*<img src="/ethopia-footer.svg" alt="ethiopa" className="xl:w-full " />*/}
            </div>
          </div>
        </div>
        <div className="flex lg:space-x-28 xl:space-x-36 lg:text-sm xl:text-base sm:grid xs:grid gap-12 md:flex md:justify-between md:items-center md:my-12 md:space-x-60">
          <div className="space-y-4 sm:mt-12 xs:mt-12">
            <h3 className="text-almostWhite font-medium">Company</h3>
            <p>
              {' '}
              <Link href="/about">About</Link>
            </p>
            <p>
              {' '}
              <Link href="/product">Products</Link>
            </p>
            <p>
              {' '}
              <Link href="/developers">Developers</Link>
            </p>
            {/*<p>*/}
            {/*  {' '}*/}
            {/*  <Link href="/pricing">Resources</Link>*/}
            {/*</p>*/}
            <p>
              {' '}
              <Link href="https://medium.com/@imalipay_blog">Blog</Link>
            </p>
          </div>
          <div className="space-y-4 sm:mb-12 xs:mb-12 md:relative md:bottom-10">
            <h3 className="text-almostWhite font-medium">Support</h3>
            <p>
              {' '}
              <Link href="#">Documentation</Link>
            </p>
            <p>
              {' '}
              <Link href="/dataProtection">Data protection</Link>
            </p>
            <p>
              {' '}
              <Link href="/contact">Contact </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex pt-20 xs:block xs:space-y-4 sm:grid sm:grid-cols-2 gap-y-3 md:space-x-5 lg:hidden xl:hidden pb-10 xs:pt-10">
        <img src="/kenya-footer.svg" alt="kenya" className="xl:w-full lg:w-20" />
        <img src="/nigeria-footer.svg" alt="Nigeria" className="xl:w-full lg:w-20" />
        <img src="/south-footer.svg" alt="south africa" className="xl:w-full lg:w-20 " />
        <img src="/ethopia-footer.svg" alt="ethiopa" className="xl:w-full lg:w-20" />
      </div>

      <hr className="xl:mt-12 xl:mb-12 lg:mt-12 lg:mb-12 border-[#475467] sm:mb-[52px] xs:mb-[52px]" />

      <div className="flex justify-between sm:flex-col-reverse xs:flex-col-reverse">
        <p className="text-[#98A2B3] lg:text-sm xl:text-base sm:text-sm sm:pt-7 xs:text-sm xs:mt-7 md:text-base md:pt-7 xs:text-center">
          © 2023 ImaliPay Technology Corporation. All rights reserved.
        </p>
        <div className="flex space-x-6 sm:space-x-0  xs:space-x-0 xs:justify-between sm:justify-between md:pt-7">
          <Link href="https://twitter.com/imalipay_ke">
            <Image src="/twitter.svg" width={25} height={100} alt="Twitter" />
          </Link>

          <Link href="https://www.linkedin.com/company/37008431/admin/mycompany/">
            <Image src="/linkin.png" width={25} height={100} alt="Facebook" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
