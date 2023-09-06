import Image from 'next/image'
import React from "react";
export default function AboutTeam() {
  return (
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="py-14 xl:px-[124px] lg:px-[72px] xs:px-5 sm:px-5 w-full md:px-8">
        <div className="text-center w-[800px] mx-auto xs:w-full sm:w-full md:w-full">
            <h2 className="text-5xl font-medium pb-8">Our Story</h2>
            {/*<p className="text-lg text-almostBlack mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
        </div>
          {/*Small devices*/}
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden mobile-gallery mt-6">
              <div className="w-full grid gap-3">
                  <Image src="/mg1.svg" alt="image1" width={210} height={150}   />
                  <Image src="/mg3.svg" alt="image1" width={210} height={110}   />

              </div>
              <div className="w-full" style={{gridColumnEnd: 'span 2'}}>
                  <Image src="/mg2.svg" alt="image1" width={125} height={250} />
              </div>
              <div className="w-full" style={{gridColumnEnd: 'span 3'}}>
                  <Image src="/last.svg" alt="image1" width={425} height={185} style={{width: '100%'}} />
              </div>

          </div>

          {/*Large devices*/}
          <div className="xs:hidden sm:hidden">
              <div className="desktop-gallery">
                      <div className="w-full flex flex-col gap-3">
                        <Image src="/Mask group-1.webp" alt="image1" width={285} height={185} style={{ width: '100%'}}   />
                        <Image src="/Mask group-6.webp" alt="image1" width={285} height={185} style={{ width: '100%'}}  />
                      </div>
                      <div className="w-full">
                        <Image src="/p1.webp" alt="image1" width={285} height={185} style={{ width: '100%'}} />
                      </div>
                      <div className="w-full">
                        <Image src="/Mask group-2.webp" alt="image1" width={215} height={0} style={{ width: '100%'}}  />
                      </div>
                     <div className="w-full grid gap-4">
                         <Image src="/Mask group-3.webp" alt="image1" width={285} height={185} style={{ width: '100%',}} />
                         <Image src="/Mask group-5.webp" alt="image1" width={285} height={185}  style={{ width: '100%'}}  />
                     </div>
              </div>
          </div>
      </section>

  );
}