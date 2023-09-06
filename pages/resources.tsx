import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components';

const Resources = () => {
  return (
    <>
      <section className="resources w-full font-dmSans px-[124px] py-[110px] lg:px-[72px] md:px-8 sm:px-5 xs:px-5">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-full xl:flex xl:justify-between xl:items-center lg:flex lg:space-x-6 md:flex md:flex-col-reverse md:space-x-0 md:justify-center md:w-[90%] md:mx-auto sm:flex sm:flex-col-reverse sm:space-x-0 xs:flex xs:flex-col-reverse xs:space-x-0 gap-3">
          <div className="w-[50%] grid gap-24 lg:w-[55%] md:w-full sm:w-full xs:w-full">
            <div className="md:text-4xl flex flex-col gap-10 w-[80%]">
              <h1 className="font-semibold text-4xl lg:leading-[58px] xl:leading-[58px] lg:text-[42px] xl:text-[42px] ">
                Welcome to the ImaliPay Resources Page!
              </h1>
              <p className="text-[#616161] text-[20px] font-normal leading-7 lg:text-lg">
                At ImaliPay, we understand the importance of having access to the right resources to
                help you navigate the world of embedded finance solutions.
                <span className="mt-4">
                  Here, you&quot;ll find a wide range of resources including guides, customer
                  testimonials, our blog and more. Our goal is to empower you to leverage our
                  platform and make the most out of our innovative solutions.
                </span>
              </p>
              <div className="flex space-x-8  lg:space-x-6 sm:space-x-0 xs:space-x-0">
                <Link
                  href={
                    'https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform'
                  }>
                  <Button
                    className="text-lg bg-darkGreen rounded-48 py-3 w-[180px] text-white lg:w-full lg:text-base sm:w-[160px] sm:text-base xs:w-[160px] xs:text-base"
                    child="Request a demo"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full  lg:w-[45%] xl:w-[45%] ">
            <Image src="/developer-hero-img.svg" alt="woman" width={879} height={918} />
          </div>
        </div>
      </section>
      <section className="bg-api-doc">
        <div className="flex flex-col  items-center h-full justify-center ">
          <div className=" lg:w-[50%] xl:w-[50%] h-[50%]">
            <h1 className="text-center text-white text-5xl font-bold mb-6">API Documentation</h1>
            <p className="text-center text-neutral-300 text-lg font-normal leading-normal mb-6">
              Dive into our comprehensive documentation to gain a deep understanding of our APIs,
              SDKs, and integration processes. Whether you&apos;re looking to integrate ImaliPay
              into your app or develop new features, our documentation provides step-by-step
              instructions, code samples, and best practices.
            </p>
            <p className="flex justify-center pb-2">
              <button className="text-white text-2xl font-semibold leading-normal p-7 px-20 bg-lime-500 rounded-[100px] shadow border text-center justify-center">
                Access our API
              </button>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 rounded-bl-[48px] rounded-br-[48px] pt-24">
        <main className="">
          <h1 className=" text-center text-emerald-900 text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-center text-zinc-600 text-base font-normal leading-normal">
            Our blog covers a wide range of topics, including BNPL solutions, embedded finance
            innovation,
            <br />
            and success stories from businesses that have integrated ImaliPay into their operations.
          </p>
        </main>
        <main className="flex flex-col md:items-center gap-6 justify-center mt-12 lg:flex-row xl:flex-row">
          <div className="px-4 py-6 bg-white rounded-xl shadow border border-neutral-200  justify-start items-start flex flex-col gap-5">
            <div className=" flex gap-3 items-center">
              <span className="text-emerald-900 text-sm font-medium leading-none w-11 h-6 px-2 bg-lime-500 bg-opacity-20 rounded-[50px] justify-start items-center gap-1 inline-flex">
                Blog
              </span>
              <span className="text-slate-500 text-sm font-normal leading-none">
                March 16, 2023
              </span>
            </div>
            <div>
              <Image src="/blog_1.svg" alt="" width={413} height={392} />
            </div>

            <p className="text-slate-900  font-bold leading-relaxed   md:w-[400px] lg:w-[400px] xl:w-[400px]">
              How leveraging embedded finance and API technology can catalyse economic growth across
              Africa
            </p>

            <button className="text-emerald-900 text-base font-medium">Read more</button>
          </div>

          <div className="px-4 py-6 bg-white rounded-xl shadow border border-neutral-200  justify-start items-start flex flex-col  gap-5">
            <div className=" flex gap-3 items-center">
              <span className="text-emerald-900 text-sm font-medium leading-none w-11 h-6 px-2  bg-lime-500 bg-opacity-20 rounded-[50px] justify-start items-center gap-1 inline-flex">
                Blog
              </span>
              <span className="text-slate-500 text-sm font-normal leading-none">
                March 16, 2023
              </span>
            </div>
            <div className="">
              <Image src="/blog_1.svg" alt="" width={413} height={392} />
            </div>

            <p className="text-slate-900  font-bold leading-relaxed md:w-[400px] lg:w-[400px] xl:w-[400px]">
              How leveraging embedded finance and API technology can catalyse economic growth across
              Africa
            </p>

            <button className="text-emerald-900 text-base font-medium">Read more</button>
          </div>

          <div className="px-4 py-6 bg-white rounded-xl shadow border border-neutral-200  justify-start items-start flex flex-col gap-5">
            <div className=" flex gap-3 items-center">
              <span className="text-emerald-900 text-sm font-medium leading-none w-11 h-6 px-2 bg-lime-500 bg-opacity-20 rounded-[50px] justify-start items-center gap-1 inline-flex">
                Blog
              </span>
              <span className="text-slate-500 text-sm font-normal leading-none">
                March 16, 2023
              </span>
            </div>
            <div>
              <Image src="/blog_1.svg" alt="" width={413} height={392} />
            </div>

            <p className="text-slate-900  font-bold leading-relaxed md:w-[400px] lg:w-[400px] xl:w-[400px]">
              How leveraging embedded finance and API technology can catalyse economic growth across
              Africa
            </p>

            <button className="text-emerald-900 text-base font-medium">Read more</button>
          </div>
        </main>
        <div className="flex justify-center mt-12 pb-24">
          <button className="text-white text-2xl font-medium leading-normal w-[218px] h-24 px-12 py-2.5 bg-lime-500 rounded-[100px] shadow border justify-center ">
            {' '}
            View more
          </button>
        </div>
      </section>
      <section className="flex  justify-center">
        <div className="  bg-lime-100 rounded-[32px] mt-24 flex flex-col  lg:flex-row xl:flex-row py-10 items-center p-4 gap-8">
          <Image src="/driver.svg" alt="" width={464} height={256} />
          <div>
            <div className="md:w-[686px] text-emerald-900 md:text-4xl font-medium">
              “I recommend ImaliPay to any business, they are continually innovating how <br />
              they offer financial services.”
            </div>
            <div className="flex gap-2 items-center pt-3">
              <div className="text-emerald-900 text-2xl font-semibold">Charlotte Imezo</div>
              <div className="text-emerald-900 text-lg font-normal">Co-founder, DriveMe</div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center pt-20">
        <div className="flex flex-col items-center w-full">
          <h1 className="lg:w-[612px]  xl:w-[612px] text-center text-emerald-900 text-5xl font-bold mb-4">
            Support Center
          </h1>

          <div className="lg:w-[647px]  xl:w-[647px] text-center mb-12">
            <span className="text-zinc-500 text-base font-normal leading-normal">
              Need assistance? We&apos;re here to ensure you have a smooth experience using
              ImaliPay, and our support center is your go-to resource for any questions or issues
              you may encounter pertaining to our APIs. Reach out to{' '}
            </span>
            <span className="text-lime-500 text-base font-medium leading-normal">
              support@imalipay.com
            </span>
          </div>

          <div className="flex flex-col   lg:flex-row xl:flex-row gap-5 lg:w-4/6 xl:w-4/6x justify-around px-7 ">
            <div
              className=" bg-neutral-50 rounded-lg border border-zinc-300 p-4 
           lg:w-1/3 xl:w-1/3">
              <Image src={'/calendar.svg'} width={50} height={50} alt="" className="pb-4" />
              <div className="text-black text-lg font-bold leading-snug pb-2">Book a Demo</div>
              <div className="text-zinc-600 text-base font-normal leading-normal pb-6">
                Contact us for a demo. We are looking
                <br />
                forward to connecting with you.
              </div>
              <button className="text-emerald-900 text-sm font-semibold leading-normal pb-5">
                Schedule a Call →
              </button>
            </div>

            <div className=" bg-neutral-50 rounded-lg border border-zinc-300 p-4 w-full  lg:w-1/3 xl:w-1/3">
              <Image src={'/customer.svg'} width={50} height={50} alt="" className="pb-4" />
              <div className="text-black text-lg font-bold leading-snug pb-2">Support</div>
              <div className="text-zinc-600 text-base font-normal leading-normal pb-6">
                Our support team is always
                <br />
                available to help.
              </div>
              <button className="text-emerald-900 text-sm font-semibold leading-normal pb-5">
                Contact us →
              </button>
            </div>

            <div className=" bg-neutral-50 rounded-lg border border-zinc-300 p-4  lg:w-1/3 xl:w-1/3">
              <Image src={'/calendar.svg'} width={50} height={50} alt="" className="pb-4" />
              <div className="text-black text-lg font-bold leading-snug pb-2">FAQs</div>
              <div className="text-zinc-600 text-base font-normal leading-normal pb-6">
                Browse through our FAQs to find
                <br />
                answers to commonly asked questions.
              </div>
              <button className="text-emerald-900 text-sm font-semibold leading-normal pb-5">
                View FAQs
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-20 gap-4 mb-48">
        <div className="md:w-[530px] text-center text-emerald-900 text-5xl font-bold">
          Our Media Kit
        </div>

        <div className=" w-[80%] md:w-[718px] text-center text-zinc-600 text-base font-normal leading-normal">
          This media kit has been created to provide journalists, bloggers, and other media
          professionals with essential information and resources about our company. Please feel free
          to use the materials provided here for any media coverage related to ImaliPay.
        </div>

        <div className="flex gap-12 mt-10 flex-col md:flex-col lg:flex-row xl:flex-row">
          <div className="px-2 flex flex-col items-center">
            <Image src={'/brand.svg'} alt="" width={'430'} height={'300'} />

            <div className=" text-stone-900 text-2xl font-semibold">Brand Resources</div>
            <div className="md:w-[356px] lg:w-[456px] xl:w-[456px]">
              <span className="text-zinc-600 text-xl font-normal leading-7">
                For our company logo, executive images and bios, usage guidelines and company
                images, please reach out to{' '}
              </span>
              <span className="text-lime-500 text-xl font-normal leading-7">
                hello@imalipay.com
              </span>
            </div>
          </div>
          <div>
            <div className="px-2 flex flex-col items-center">
              <Image src={'/media.svg'} alt="" width={'430'} height={'300'} />

              <div className="w-[365.68px] text-stone-900 text-2xl font-semibold">
                Media Resources
              </div>
              <div className="md:w-[456px] lg:w-[456px] xl:w-[456px]">
                <span className="text-zinc-600 text-xl font-normal leading-7">
                  For media inquiries, interviews, or further information about ImaliPay, please
                  reach out to
                </span>
                <span className="text-lime-500 text-xl font-normal leading-7 px-1">
                  hello@imalipay.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
