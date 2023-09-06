import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';
import { MobileDropdown } from "../Dropdown";

type Props = {
  setOpen: any;
  open: boolean;
};

const Menu = [
  {
    name: "Solutions",
    url: "#",
    submenus: [
      {
        name: 'BNPL Engine',
        url: '#'
      },
      {
        name: 'Payments',
        url: '#'
      },
      {
        name: 'Wallets',
        url: '#'
      },
      {
        name: 'Auto-Reconciliation',
        url: '#'
      },
      {
        name: 'White labelled App',
        url: '#'
      },
    ]
  },
  {
    name: "About us",
    url: '/about'
  },
  {
    name: "Resources & Support",
    url: '#',
    submenus: [
      {
        name: 'Developers',
        url: '/developers',
      },
      {
        name: 'Resources',
        url: '#',
      },
      {
        name: 'API Documentation',
        url: '#',
      },
      {
        name: 'Blog',
        url: '#',
      },{
        name: 'Contact',
        url: '/contact',
      },
    ]
  }

]

export default function Sidebar({ setOpen, open }: Props) {
  return (
    <div
      className={`lg:hidden xl:hidden font-dmSans fixed z-30 bg-[#081F2C] w-full text-white top-0 py-3 px-5 h-full ease-in-out transition-all duration-500 ${
        open ? ' translate-x-0' : 'translate-x-full'
      }`}>
      <div className="flex items-center justify-end px-4 mt-[30px]">
        <img
          src="/close.svg"
          alt="menu"
          className="cursor-pointer z-50 transition"
          onClick={() => setOpen(false)}
        />
      </div>
      <nav className="grid gap-16 grid-rows-2">
          <div className="mt-[50px] grid text-lg lg:text-xl gap-[20px]">
            {Menu && Menu?.map((menu, index) => (
              <div key={index}>
                <MobileDropdown item={menu} setOpen={setOpen} />
              </div>

            ))}
          </div>
          <div className="">
            <div className="flex items-center space-x-8 sm:space-x-4 xs:space-x-3">
              <Button child="LOGIN" className={"w-full rounded-48 border-1 border-[#FAFBFC] py-4 sm:text-sm xs:text-sm"} />
              <Button child="CONTACT SALES" className={"w-full rounded-48 bg-lemongreen py-4 sm:text-sm xs:text-sm"} />
            </div>

            <div className="flex flex-col md:flex md:flex-row-reverse md:justify-center">

              <div>
                <p className="text-[#98A2B3] text-sm pt-7 md:text-base md:pt-7 sm:text-center xs:text-xs sm:text-sm">
                  © 2023 ImaliPay Limited. All rights reserved.
                </p>
              </div>
            </div>
          </div>
      </nav>



    </div>
  );
}