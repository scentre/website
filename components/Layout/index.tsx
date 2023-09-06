import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Modal from '../Modal';
import JoinStartupModal from '../Modal/JoinStartupModal';
import NewsletterSubscribe from '../NewsletterSubscribe';
import ProductSectionFive from '../productSectionFIve';

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  const [popupForm, setPopupForm] = useState(false);

  const openPopup = () => {
    setPopupForm(!popupForm);
  };

  const router = useRouter();
  return (
    <div className="w-full bg-white box-border max-w-full">
      <Header openPopup={openPopup} />
      {children}
      <div className="liner">
        {router.pathname === '/pricing' || router.pathname === '/resources' ? (
          ''
        ) : (
          <ProductSectionFive />
        )}
        {router.pathname === '/pricing' ? '' : <NewsletterSubscribe />}
      </div>
      {router.pathname === '/pricing' ? '' : <Footer />}

      <Modal isOpen={popupForm}>
        <JoinStartupModal openPopup={openPopup} />
      </Modal>
    </div>
  );
}
