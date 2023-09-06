import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { testimonials } from '../../utils/testimonials';

type prop = {
  icon: any;
  text: string;
  name: string;
  title: string;
};

const TestimonialCard = ({ icon, text, name, title }: prop) => {
  return (
    <div className="xs:block sm:block md:block xl:w-[900px] mx-auto md:w-full flex xs:space-x-0 sm:space-x-0 space-x-6 p-[30px] bg-FAFAFA rounded-[20px] font-manrope ">
      <img src={icon} alt="testimonial" className='w-[300px] h-[300px] rounded-lg' />
      <figure className="sm:w-[300px] xs:w-full w-[65%] mt-[20px]">
        <blockquote>
          <p className="xs:text-xs sm:text-sm text-base text-[#202020] tracking-wide leading-6">
            {text}
          </p>
        </blockquote>
       
        <figcaption className="block text-[#202020] font-semibold text-base pt-[28px]">
          {name}
          <p className="text-sm text-[#808080] font-normal pt-2">{title}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default function RealLifeResult() {
  const clickRef = useRef<any>(null);

  const clicked = () => {
    clickRef.current.click();
  };

  function SampleNextArrow(props: any): JSX.Element {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick} ref={clickRef}>
        <Image
          src="/left-arrow.svg"
          alt="leftarrow"
          width={20}
          height={10}
          className="cursor-pointer"
          onClick={clicked}
        />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick} ref={clickRef}>
        <Image
          src="/right-arrow.svg"
          alt="leftarrow"
          width={20}
          height={10}
          className="cursor-pointer"
          onClick={clicked}
        />
      </div>
    );
  }

  const settings = {
    dots: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: '-64px'
        }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    )
  };

  return (
    <div className="md:px-10 my-24">
      <div className="pb-16 sm:px-8 xs:px-6 px-108">
        <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-[#191919] font-bold text-center font-dmSans">
          Our Customers love building with us
        </h1>
        {/* <p className="text-[#014342] text-sm lg:pt-1 xl:pt-2">short text description goes here</p> */}

        <div className="testimonials">
          <Slider {...settings}>
            {testimonials.map((element, idx) => (
              <div key={idx} className="pt-16">
                <TestimonialCard
                  icon={element?.icon}
                  text={element.text}
                  // text2={element.subText}
                  name={element.name}
                  title={element.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
