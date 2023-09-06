/* eslint-disable @typescript-eslint/no-empty-function */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '../Button';
import Sidebar from '../Sidebar';
import Image from "next/image";
import {MdArrowDropDown, MdKeyboardArrowDown} from "react-icons/md";
import Dropdown from "../Dropdown";
import ResourceDropdown from "../Dropdown/ResourceDropdown";
import {GiHamburgerMenu} from "react-icons/gi"

type prop = {
  router: any;
  pathname: string;
  child: string;
};

const ActiveLink = ({ router, pathname, child }: prop) => (

  <span className={router.pathname === pathname ? 'fontbold font-dmSans' : ''}>
    {' '}
    <Link href={pathname} className="hover:font-bold transition-all duration-200">
      {child}
    </Link>
  </span>
);

export default function Header({ openPopup }: any) {
  const [open, setOpen] = useState(false);
    const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false)
    const [resourceDropdown, setResourceDropdown] = useState<boolean>(false)

    const router = useRouter();

  return (
    <>
      <nav className="sm:hidden md:hidden xs:hidden text-white text-sm">
          <div className="h-[80px] bg-[#081F2C] px-[72px] py-[22px] flex justify-between items-center lg:px-16">
              <div className="flex items-center space-x-4">
                  <Link href='/'> <Image src="/logo2.svg" alt="logo" height={80} width={140} /></Link>
                  <div className="flex space-x-6 lg:w-full">
                      <div className="relative">
                          <Link href="#" className="hover:bg-[#C2DF9B] py-3 px-2 rounded-48 flex items-center xl:w-[115px] justify-center" onMouseEnter={() => {
                            setResourceDropdown(false);
                            setOpenDropdownMenu(true);
                          }}>Solutions <MdKeyboardArrowDown style={{marginLeft: '16px'}} /></Link>
                           <Dropdown show={openDropdownMenu} onClickOutside={() => {setOpenDropdownMenu(false)}} />
                      </div>
                      <Link href="/about" className={router.pathname === '/about' ? "bg-[#C2DF9B] py-3 px-2 rounded-48 xl:w-[85px] text-center" : "hover:bg-[#C2DF9B] py-3 px-2 rounded-48 xl:w-[85px] text-center" }>About us</Link>
                      <div className="relative">
                          <Link href="#" className="hover:bg-[#C2DF9B] py-3 px-2 rounded-48 flex items-center xl:w-[180px] justify-center" onMouseEnter={() => {
                            setOpenDropdownMenu(false)
                            setResourceDropdown(true)
                          }}>Resources & Support <MdKeyboardArrowDown style={{marginLeft: '16px'}} /></Link>
                           <ResourceDropdown  show={resourceDropdown} onClickOutside={() => {setResourceDropdown(false)}}  />
                      </div>
                  </div>
               </div>
              <div className="flex text-white items-center space-x-6 lg:space-x-3 lg:text-sm">
                    <div className="border-r-1 border-[#E6E9EA33] lg:w-full">
                        <button className="navbar-button rounded-48 px-2 py-3 flex items-center mr-6 lg:mr-3">
                            <Image src='/Vector.svg' alt="icons" height={14} width={20} className="mx-[10.5px]" />
                            ENG
                        </button>
                    </div>
                    <div className="lg:flex lg:w-full">
                        <Button child="LOGIN" className="border-1 border-[#FAFBFC] px-2 py-3 rounded-48 xl:w-[80px] lg:text-xs lg:w-[60px]" onClick={() => router.push("https://dashboard.imalipay.com/")}/>
                        <Button child="CONTACT SALES" className="bg-lemongreen rounded-48 px-2 py-3 xl:w-[145px] ml-6 lg:text-xs lg:w-[110px]" onClick={() => router.push("/contact")} />
                    </div>
              </div>


          </div>

      </nav>

      {/**Mobile Menu */}
      <div className="lg:hidden xl:hidden font-dmSans">
        <nav className="flex items-center justify-between py-[30px] px-5 md:px-10 relative bg-[#081F2C]">
          <Link href="/">
            <img
              src="/logo2.svg"
              alt="Imalipay"
              className="max-w-full w-[120px] md:w-[180px] sm:w-[110px] xs:w-[100px]"
            />
          </Link>
          <div className="text-white bg-[#FAFBFC0D] h-12 w-12 rounded-full flex items-center justify-center" onClick={() => setOpen(true)}>
            <GiHamburgerMenu />
          </div>
        </nav>
      </div>

      <Sidebar setOpen={setOpen} open={open} />
    </>
  );
}
