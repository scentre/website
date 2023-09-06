/* eslint-disable react/no-unescaped-entities */
import Button from "../Button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutBanner() {
  return (
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="mt-[82px]  xs:px-5 sm:px-5 md:px-8 lg:px-[72px]">
        <div className="w-[80%] mx-auto text-center xs:w-full sm:w-full md:w-full md:mx-0">
          <h1 className="text-[#00303E] text-5xl font-dmSans font-bold leading-[62.5px] xs:text-3xl sm:text-3xl">We are building financial services infrastructure for Africa’s growing economies</h1>
          <p className="text-xl leading-8 text-center w-1/2 mx-auto mt-4 xs:text-base sm:text-base xs:w-full sm:w-full lg:w-full">Our mission is to unlock Africa’s economic potential by empowering businesses with our Fintech-as-a-service (FaaS) API platform.</p>
            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform"}><Button child="Request API Demo"  className="bg-darkGreen text-white rounded-48 w-[200px] h-16 mt-6"/></Link>
        </div>

        <div className="mt-16 xs:hidden sm:hidden">
          <Image src='/about-us-hero.webp' alt="about banner" width={1224} height={629} className="mx-auto rounded-t-3xl"/>
        </div>
          <div className="mt-16 2xl:hidden xl:hidden md:hidden lg:hidden">
              <Image src='/group.svg' alt="about" width={350} height={440} className="mx-auto rounded-t-3xl" />
          </div>
      </section>

  );
}