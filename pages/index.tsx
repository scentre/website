import { useState } from 'react';
import { Banner, Blog, Products, Testimonials } from '../components';
import Modal from '../components/Modal';
import JoinStartupModal from '../components/Modal/JoinStartupModal';

export default function Home() {
  const [popupForm, setPopupForm] = useState(false)

  const openPopup = () => {
    setPopupForm(!popupForm)
  }

  return (
    <div>
      <Banner openPopup={openPopup} />
      <Products />
      <Blog />
       <Modal isOpen={popupForm} >
        <JoinStartupModal openPopup={openPopup}/>
      </Modal>
    </div>
  );
}
