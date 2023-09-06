import React from 'react';
import Image from 'next/image';
import { Button, Testimonials } from '../components';
import DeveloperCard from '../components/Cards/DeveloperCard';
import Link from 'next/link';

const cardDetails = [
  {
    image: '/Frame1.svg',
    title: 'Test Your Integration',
    content:
      'Our testing tools help you to ensure that your integration is working properly, so you can be confident that your customers will have Aa smooth experience.'
  },
  {
    image: '/Frame2.svg',
    title: 'Fast and Easy Integration',
    content: 'Our API is easy to integrate and can be set up in minutes.'
  },
  {
    image: '/Frame3.svg',
    title: 'Local and Global Reach',
    content:
      'Our API supports product deployment in over 50 countries, so you can reach a global audience.'
  },
  {
    image: '/Frame4.svg',
    title: 'Flexibility',
    content:
      'Our API is flexible and can be customized to meet your specific needs, you can create a solution that is perfect for your business.'
  },
  {
    image: '/Frame5.svg',
    title: 'Security',
    content: 'Our API is secure and complies with all PCI DSS standards.'
  },
  {
    image: '/Frame6.svg',
    title: 'Support',
    content:
      'Our support team is available to help you with any questions you have, so you can get started quickly and easily.'
  }
];

const details = [
  {
    icon: '/group1.svg',
    details:
      "Tailor payment schedules that suit your customers' preferences while boosting their purchasing power.",
    title: 'Customizable Payment Plans'
  },
  {
    icon: '/group2.svg',
    title: 'Fintech without borders',
    details:
      'Ensure a seamless and informed shopping experience with instant affordability assessments.'
  },
  {
    icon: '/group3.svg',
    title: "It's not just about Payments",
    details: 'Keep customers on track with automated payment reminders, reducing missed payments.'
  },
  {
    icon: '/group4.svg',
    title: 'Intelligent Analytics via our dashboard',
    details:
      'Gain valuable insights into purchasing behaviors, enabling you to refine your strategies for maximum impact.'
  }
];

export default function Developers() {
  return (
    <>
      <section className="developers w-full font-dmSans px-[124px] py-[110px] lg:px-[72px] md:px-8 sm:px-5 xs:px-5">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-full xl:flex xl:justify-between xl:items-center lg:flex lg:space-x-6 md:flex md:flex-col-reverse md:space-x-0 md:justify-center md:w-[90%] md:mx-auto sm:flex sm:flex-col-reverse sm:space-x-0 xs:flex xs:flex-col-reverse xs:space-x-0">
          <div className="w-[35%] grid gap-20 lg:w-[55%] md:w-full sm:w-full xs:w-full">
            <div className="md:text-4xl">
              <h1 className="font-semibold text-5xl leading-[58px] mt-6 lg:text-[42px]">
                Single API Integration
              </h1>
              <p className="text-[#616161] text-[19px] pt-4 lg:text-lg">
                Our single API integration makes it easy to build, test, and maintain your embedded
                finance integration across Africa. Our developer tools help you to get started
                quickly, test your integration thoroughly, and maintain it as your product evolves.
              </p>
              <div className="flex space-x-8 pt-4 lg:space-x-6 sm:space-x-0 xs:space-x-0">
                <Link
                  href={
                    'https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform'
                  }>
                  <Button
                    className="text-lg bg-darkGreen rounded-48 py-3 w-[180px] text-white lg:w-full lg:text-base sm:w-[160px] sm:text-base xs:w-[160px] xs:text-base"
                    child="Request live Demo"
                  />
                </Link>
                <Button
                  className="text-lg text-darkGreen lg:w-full lg:text-base sm:font-semibold sm:text-base sm:w-full xs:text-base xs:w-full"
                  child="Talk to sales team"
                  icon="/arrow-right.svg"
                />
              </div>
            </div>
            <div className="">
              <h4 className="text-base font-bold text-[#616161]">
                TRUSTED BY OVER 1000 PARTNERS & CUSTOMERS
              </h4>
              <div className="flex flex-row space-x-6 mt-8">
                <Image src="/dme.svg" alt="driveme" width={124} height={64} />
                <Image src="/den.svg" alt="eden" width={124} height={64} />
                <Image src="/kpay.svg" alt="kerapay" width={124} height={64} />
              </div>
            </div>
          </div>
          <div className="md:w-full">
            <Image src="/developer-hero-img.webp" alt="woman" width={600} height={660} />
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="bg-almostBlack py-11  px-[124px] lg:px-[72px] md:px-8 font-dmSans w-full sm:px-5 xs:px-5">
        <div className="text-center text-white">
          <h2 className="text-5xl leading-[62px] font-medium lg:text-[42px] md:text-4xl">
            Everything you need to scale fast
          </h2>
          <p className="text-[#B5B5B5] text-base py-8">
            Businesses have saved over $10M and 8.5M hours by using the ImaliPay Super API
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 sm:gap-6 xs:grid-cols-1 xs:gap-6">
          {cardDetails.map((details, index) => (
            <div key={index}>
              <DeveloperCard
                image={details.image}
                title={details.title}
                content={details.content}
                width={387}
                height={300}
              />
            </div>
          ))}
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="px-[124px] lg:px-[72px] font-dmSans md:px-8 sm:px-5 xs:px-5">
        <div className="flex space-x-8 py-24 md:grid md:gap-6 md:space-x-0 sm:grid sm:gap-6 sm:space-x-0 xs:grid xs:gap-6 xs:space-x-0">
          <aside className="w-[35%] md:w-full md:text-center sm:w-full xs:w-full">
            <h2 className="text-[#090914] text-5xl leading-[62px] font-medium lg:text-[42px] sm:text-4xl xs:text-4xl">
              Designed to help you grow
            </h2>
            <Link
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform'
              }>
              <Button
                className="text-lg bg-darkGreen rounded-48 py-3 w-[180px] text-white mt-11 md:mt-6 sm:mt-5 xs:mt-5"
                child="Request Live Demo"
              />
            </Link>
          </aside>
          <div className="w-[60%] grid grid-cols-2 grid-rows-2 md:w-full md:grid-cols-2 sm:w-full sm:grid-cols-1 sm:gap-4 xs:w-full xs:grid-cols-1 xs:gap-4 design">
            {/*change this to a component*/}
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col border-l-1 border-[#E4E4E7] p-6 first:border-b-1 first:border-[#E4E4E7]  last:border-t-1 last:border-[#E4E4E7]
                               sm:first:border-b-0 sm:border-l-0 sm:gap-4 sm:even:border-t-1  xs:first:border-b-0 xs:border-l-0 xs:gap-4 xs:even:border-t-1 xs:even:border-[#E4E4E7]">
                <Image src={detail.icon} alt="icon" width={48} height={48} />
                <h5 className="text-[#18181B] text-lg font-semibold">{detail.title}</h5>
                <p>{detail.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="md:px-8 lg:px-[72px] xl:px-[124px]">
        <div className="bg-[#FADC09] mx-auto rounded-3xl font-dmSans md:mx-0 sm:mx-0 xs:mx-0 ">
          <div className="w-[790px] mx-auto py-12 text-[#014342] text-center md:w-full md:mx-0 sm:w-full sm:mx-0 xs:w-full xs:mx-0">
            <p className="text-2xl font-medium sm:text-xl xs:text-lg">
              We’ve saved our customers over
            </p>
            <p className="font-semibold text-[120px] lg:text-[96px] md:text-[82px] sm:text-5xl sm:py-3 xs:text-4xl xs:py-3">
              $10,605,32.09
            </p>
            <p className="text-2xl font-medium sm:text-xl xs:text-lg">
              and we are just getting started.
            </p>
          </div>
        </div>

        <Testimonials
          color="#DDE4FF"
          image="/driver.svg"
          comment="“ I recommend ImaliPay to any business, they are continually innovating how
                            they offer financial services.”"
          name="Charlotte Imezo"
          title="Co-founder, DriveMe"
        />
      </div>
    </>
  );
}
