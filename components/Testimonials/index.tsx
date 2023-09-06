import Image from 'next/image';
import React from 'react';

type testimonialProps = {
    image: string,
    comment: string,
    name: string,
    title: string,
    color: string
}


export default function Testimonials({image, comment, name, title, color}: testimonialProps) {


  return (
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={`bg-[${color}] rounded-3xl p-5 mx-auto mt-4 flex flex-row space-x-10 items-center  md:flex md:flex-col md:w-full md:space-x-0 sm:flex sm:flex-col sm:w-full sm:space-x-0 xs:flex xs:flex-col xs:w-full xs:space-x-0`}>
          <div className="md:hidden sm:hidden xs:hidden">
              <Image src={image} alt="driver" width={400} height={300} />
          </div>
        <div className="xl:hidden lg:hidden w-full">
          <img src={image} alt="driver" style={{width: '100%'}} />
        </div>
          <div className="text-darkGreen w-[680px] md:w-full md:mt-6 sm:w-full xs:w-full sm:mt-6 xs:mt-5">
              <p className="text-4xl font-medium lg:text-3xl md:text-3xl sm:text-2xl xs:text-xl">{comment}</p>
              <p className="font-semibold text-2xl mt-12 lg:text-xl md:mt-8 sm:text-lg xs:text-lg xs:mt-5 sm:mt-5">{name} <span className="text-lg font-normal sm:text-base xs:text-lg">{title}</span></p>
          </div>
      </section>
  );
}
