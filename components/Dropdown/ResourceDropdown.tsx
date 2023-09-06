import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function ResourceDropdown(props: any) {
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
      className="font-dmSans w-[530px] bg-white rounded-xl text-almostBlack absolute shadow-xl z-10 top-[80px] p-6 flex justify-between">
      <div className="text-xs">
        <h1 className="font-semibold mb-3">DEVELOPMENT</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="/developers"
              onClick={onClickOutside}
              className={
                router.pathname === '/developers' ? 'text-lemongreen' : 'hover:text-lemongreen'
              }>
              Developers
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              onClick={onClickOutside}
              className={
                router.pathname === '/resources' ? 'text-lemongreen' : 'hover:text-lemongreen'
              }>
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={onClickOutside}
              className={router.pathname === '#' ? 'text-lemongreen' : 'hover:text-lemongreen'}>
              API Documentation
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-xs">
        <h1 className="font-semibold mb-3">COMPANY</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="https://medium.com/@imalipay_blog"
              onClick={onClickOutside}
              target="_blank"
              className={
                router.pathname === 'https://medium.com/@imalipay_blog'
                  ? 'text-lemongreen'
                  : 'hover:text-lemongreen'
              }>
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={onClickOutside}
              className={
                router.pathname === '/contact' ? 'text-lemongreen' : 'hover:text-lemongreen'
              }>
              Contact
            </Link>
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
