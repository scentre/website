/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import { classNames } from '../../utils/classnames';
import Button from '../Button';
import AutomatedTab from '../TabContents/AutomatedTab';
import LoanTab from '../TabContents/LoanTab';
import PaymentTab from '../TabContents/PaymentTab';
import WalletTab from '../TabContents/WalletTab';

type Prop = {
  child: string;
  className: string;
  tab: number;
  onClick?: any;
};

type MediumProp = {
  title: string;
  content: string;
  image: string;
  child?: any;
};

const Tab = ({ child, className, onClick }: Prop) => {
  return (
    <div className={className} onClick={onClick}>
      {child}
    </div>
  );
};

const MediumTab = ({ title, content, image, child }: MediumProp) => (
  <div className="text-left mt-10 md:mt-20 md:px-10">
    <h1 className="text-2xl md:text-4xl font-bold pb-4">{title}</h1>
    <p className="text-sm md:text-2xl text-lightAsh leading-8 ">{content}</p>
    <img src={image} alt="" className="w-[700px] mx-auto mt-8" />
    <div>{child}</div>
  </div>
);

export default function ProductSectionThree() {
  const [tab, setTab] = useState(1);

  const showTab = () => {
    if (tab === 1) {
      return <WalletTab />;
    }
    if (tab === 2) {
      return <AutomatedTab />;
    }
    if (tab === 3) {
      return <LoanTab />;
    } else return <PaymentTab />;
  };

  // const incTab = (tab: number) => {
  //   if (tab === 1) {
  //     setTab(2)
  //   }
  //   if (tab === 2) {
  //     setTab(3)
  //   }
  //   if (tab === 3) {
  //     setTab(4)
  //   }
  //   if (tab === 4) {
  //     setTab(1)
  //   }
  //   tab++;
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     incTab(tab)
  //   }, 3000)
  // }, [tab]);

  return (
    <>
      <div className="my-28">
        {/* for lg, xl */}
        <div className="xs:hidden sm:hidden md:hidden bg-[#C6EFBA] font-dmSans py-16 rounded-2xl lg:w-[950px] xl:w-[1300px] mx-auto">
          <div className="flex justify-center pb-16 lg:space-x-6 xl:space-x-16 font-medium rounded-xl tracking-wide xl:text-xl text-[#585858] transition-all translate-x-5">
            <Tab
              child="Wallets"
              className={classNames(
                tab === 1 && 'bg-darkgreen text-white animate-bounce ',
                'px-6 py-3 w-40 rounded-2xl text-center cursor-pointer border-1 '
              )}
              tab={tab}
              onClick={() => {
                setTab(1);
              }}
            />
            <Tab
              child="Automated reconciliation"
              className={classNames(
                tab === 2 && 'bg-darkgreen text-white animate-bounce',
                'px-6 py-3 rounded-2xl border-1 border-borderAsh text-center cursor-pointer'
              )}
              onClick={() => setTab(2)}
              tab={tab}
            />
            <Tab
              child="Loan Management System"
              className={classNames(
                tab === 3 && 'bg-darkgreen text-white animate-bounce',
                'px-6 py-3 rounded-2xl border-1 border-borderAsh text-center cursor-pointer'
              )}
              onClick={() => setTab(3)}
              tab={tab}
            />
            <Tab
              child="Payments"
              className={classNames(
                tab === 4 && 'bg-darkgreen text-white animate-bounce',
                'px-6 py-3 rounded-2xl border-1 border-borderAsh text-center cursor-pointer'
              )}
              onClick={() => setTab(4)}
              tab={tab}
            />
          </div>
          {showTab()}
        </div>

        <div className="px-4 sm:px-10 lg:hidden xl:hidden bg-[#C6EFBA] font-dmSans py-16 rounded-2xl">
          <MediumTab
            title="Wallets as a Service"
            content="Our Wallets give you the freedom to create accounts that act as digital representation of a store of value enabling quick cash-in and cash out transactions"
            image="./walletCard.svg"
            child={
              <div className="w-full flex space-x-6 items-center text-lg mt-10">
                <Button
                  child="Book a demo"
                  className="w-full py-3 text-sm md:text-lg md:py-7 border-1 rounded-full text-white bg-[#18181B]"
                />
                <Button
                  child="Read Documentation"
                  className="w-full text-sm md:text-xl text-[#18181B]"
                />
              </div>
            }
          />

          <MediumTab
            title="Automated reconciliation"
            content="Our Auto-recon engine reconciles and consolidate all transactions originating from your ecosystem to a single platform via our Imali-Dashboard"
            image="/account-2.png"
          />

          <MediumTab
            title="Payments as a service"
            content="Seamless payments and settlement powered by ImaliPay payments infrastructure, leveraging our local and global third party payment rails"
            image="./payment.svg"
          />

          <MediumTab
            title="BNPL Management System "
            content="Our BNPL engine is a comprehensive toolkit and connected ecosystem that enables any business to build a variety of loan offerings tailored to your customer’s needs."
            image="/account-1.png"
          />
        </div>
      </div>
    </>
  );
}
