import Link from 'next/link';
import Button from '../Button';
import BlogCard from '../Cards/BlogCard';

export default function Blog() {
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="lg:px-16 xl:px-28 pb-16 font-dmSans sm:py-16 sm:px-5 xs:py-16 xs:px-5 md:px-10 md:py-16 ">
      <div className="flex items-center justify-between pb-6">
        <h2 className="text-darkGreen font-medium text-5xl sm:text-2xl sm:font-bold xs:text-2xl xs:font-bold md:text-3xl">
          The Blog
        </h2>
      </div>
      <div className="flex xl:space-x-8 w-full sm:flex-col sm:space-x-0 xs:flex-col xs:space-x-0 md:grid md:grid-cols-2 md:gap-6 md:items-center md:justify-center lg:gap-6">
      <BlogCard
          image="/illustrate.svg"
          date="March 24, 2023"
          title="How leveraging embedded finance and API technology can catalyse economic growth across Africa"
          link="https://financialit.net/blog/embeddedfinance-api/how-leveraging-embedded-finance-and-api-technology-can-catalyse-economic"
        />
       
         <BlogCard
          image="/reda.svg"
          date="March 03, 2023"
          title="African fintech ImaliPay signs deal with Renda to empower e-commerce across the continent"
          link="https://medium.com/@imalipay_blog/african-fintech-imalipay-signs-deal-with-renda-to-empower-e-commerce-across-africa-12e85cbd8118"
        />
         <BlogCard
          image="/furusa.svg"
          date="April 7, 2022"
          title="ImaliPay gets $3M to offer financial services to underserved gig workers across Africa"
          link="https://techcrunch.com/2022/04/07/imalipay-gets-3m-to-offer-financial-services-to-underserved-gig-workers-across-africa/"
        />
      </div>
      <div className='text-center mt-12'>
      <Link href="https://medium.com/@imalipay_blog" target="_blank">
          <Button
            child="View more"
            className="sm:hidden xs:hidden bg-lemongreen rounded-full px-6 py-4 text-white md:px-5 hover:bg-darkgreen hover:shadow-xl transition-all md:py-3"
          />
        </Link>
      </div>
      <Link href="https://medium.com/@imalipay_blog">
      <Button
        child="View more"
        className="lg:hidden xl:hidden md:hidden bg-lemongreen rounded-full px-6 py-4 text-white w-full hover:bg-darkgreen hover:shadow-xl transition-all"
      />
      </Link>
    </section>
  );
}
