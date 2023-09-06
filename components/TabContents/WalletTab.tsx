import Link from 'next/link';
import Button from '../Button';

export default function WalletTab() {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="flex justify-center items-center space-x-24 
    ">
      <div className="lg:pl-10 xl:pl-24">
        <h1 className="lg:text-3xl xl:text-4xl text-[#101828] font-bold lg:pb-7 xl:pb-10">
          Ledger-as-a-Service (Wallets)
        </h1>
        <p className="lg:text-base xl:text-lg text-lightgreen leading-7 lg:w-[400px] xl:w-[590px]">
          Our Wallets give you the freedom to create accounts that act as digital representation of
          a store of value enabling quick cash-in and cash out transactions
        </p>

        <div className="lg:pt-12 xl:pt-20 space-x-6 lg:text-sm xl:text-lg">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesg1-3Keh97gXtQ4e-rhNLjjosupU-fXrprpm6fWLqLIjqIg/viewform" target="_blank">
          <Button
            child="Book a demo"
            className="py-4 px-4 border-1 rounded-full text-white mt-8 bg-[#18181B]"
          /></Link>
         
          <Button child="Read Documentation" className=" text-[#18181B]" />
        </div>
      </div>

      <div>
        <img src="/wallet.svg" className="w-[1224px]" alt="wallet" />
      </div>
    </div>
  );
}
