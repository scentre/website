import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useRouter } from 'next/router';
export default function Dropdown(props: any) {
  const router = useRouter();
  const ref = useRef<any>(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  if (!props.show) return null;
  return (
    <div
      ref={ref}
      className="font-dmSans w-[420px] bg-white rounded-xl text-almostBlack absolute shadow-xl z-10 top-[80px] p-6 flex justify-between">
      <div className="text-xs">
        <Link href="/product" onClick={onClickOutside} className="font-semibold">
          PRODUCTS
        </Link>
        <ul className="flex flex-col gap-4 mt-4">
          <li>
            <Link href="#">BNPL Engine</Link>
          </li>
          <li>
            <Link
              href="#Payments"
              className={
                router.pathname === '#Payments' ? 'text-lemongreen' : 'hover:text-lemongreen'
              }>
              Payments
            </Link>
          </li>
          <li>
            <Link href="#Auto-reconciliation">Auto-Reconciliation</Link>
          </li>
          <li>
            <Link href="#Wallets">Wallets</Link>
          </li>
          <li>
            <Link href="#White-label App">White labelled App</Link>
          </li>
        </ul>
      </div>
      <div className="w-[195px]">
        <div>
          <Image src="/cover2.svg" alt="cover" width={195} height={84} />
        </div>
        <div className="mt-2">
          <h3 className="text-sm text-almostBlack font-medium mb-2">Introducing ImaliPay 2.0</h3>
          <p className="text-[#707070] font-normal text-xs">
            Our mission is to unlock Africa’s economic potential by empowering businesses with our
            Fintech-as-a-service (FaaS)
          </p>
        </div>
      </div>
    </div>
  );
}

export function MobileDropdown({ item, setOpen }: any) {
  const [openDrop, setOpenDrop] = useState(false);
  const router = useRouter();
  const showDropdown = () => setOpenDrop(!openDrop);
  return (
    <div className="text-2xl w-full flex flex-col sm:text-xl xs:text-lg" onClick={showDropdown}>
      {item?.submenus ? (
        <div className="text-white flex items-center w-full justify-between">
          <Link href={item?.url}>{item?.name}</Link>
          {openDrop ? (
            <MdKeyboardArrowUp size={32} />
          ) : item?.submenus ? (
            <MdKeyboardArrowDown size={32} />
          ) : null}
        </div>
      ) : (
        <Link
          href={item?.url}
          className={router.pathname === item?.url ? 'text-[#C2DF9B]' : 'hover:text-[#C2DF9B]'}
          onClick={() => setOpen(false)}>
          {item?.name}
        </Link>
      )}
      <div className="" onClick={item.submenus && showDropdown}></div>
      <ul className="text-white text-base flex flex-col gap-4 mt-4">
        {openDrop &&
          item.submenus?.map((el: any, index: any) => (
            <li key={index}>
              <Link
                href={`${el?.url}`}
                className={router.pathname === el?.url ? 'text-[#C2DF9B]' : 'hover:text-[#C2DF9B]'}
                onClick={() => setOpen(false)}>
                {el?.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
